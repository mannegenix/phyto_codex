'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {media} from '../config/media';
import {experience} from '../config/experience';
import {motionConfig as config} from '../config/motion';
export function SiteMotion(){const path=usePathname();const [loading,setLoading]=useState(false);
 useEffect(()=>{
  if(!config.enabled||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const lenis=config.scroll.smooth?new Lenis({lerp:config.scroll.lerp,autoRaf:false}):null;
  const tick=(time:number)=>lenis?.raf(time*1000);gsap.ticker.add(tick);lenis?.on('scroll',ScrollTrigger.update);
  const seek=(event:Event)=>{const top=(event as CustomEvent<{top:number}>).detail?.top;if(!Number.isFinite(top))return;event.preventDefault();if(lenis)lenis.scrollTo(top,{duration:.85,force:true});else window.scrollTo({top,behavior:'smooth'})};
  window.addEventListener('phyto-scroll-to',seek);
  const context=gsap.context(()=>{
   if(document.querySelector('.rich-hero-visual')&&innerWidth>900)gsap.to('.rich-hero-visual',{y:experience.hero.parallaxPx,ease:'none',scrollTrigger:{trigger:'.rich-hero',start:'top top',end:'bottom top',scrub:1}});
   document.querySelectorAll('[data-reveal],main .card,main .process li').forEach(el=>{if(el.closest('.home-cinema[data-cinematic]'))return;ScrollTrigger.create({trigger:el,start:'top 94%',once:true,onEnter:()=>{gsap.from(el,{y:config.reveal.distancePx,duration:config.reveal.duration,ease:config.reveal.ease,clearProps:'transform'})}})});
   if(document.querySelector('[data-hero]')&&innerWidth>900){const timeline=gsap.timeline({scrollTrigger:{trigger:'[data-hero]',start:'top top',end:`+=${innerHeight*config.videoSplit.scrollDistanceVh/100}`,pin:true,scrub:config.videoSplit.scrubSeconds}});timeline.to('.nature-hero-copy',{y:-30,opacity:0,duration:.3},.12).to('.photo-left',{xPercent:-65,duration:.6},.3).to('.photo-right',{xPercent:65,duration:.6},.3).to('.hero-approval',{opacity:1,y:0,duration:.35},.48)}
   document.querySelectorAll('.quality-stages li').forEach((el,i)=>gsap.fromTo(el,{'--stage-fill':'0%'},{'--stage-fill':'100%',ease:'none',scrollTrigger:{trigger:el,start:'top 85%',end:'top 40%',scrub:true},delay:i*.05}));
   if(config.productFilmstrip.enabled&&document.querySelector('.product-backdrop')&&innerWidth>760)gsap.to('.product-backdrop',{yPercent:-config.productFilmstrip.desktopParallaxPercent,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:true},...{}});
  });
  return()=>{context.revert();window.removeEventListener('phyto-scroll-to',seek);gsap.ticker.remove(tick);lenis?.destroy()};
 },[path]);
 useEffect(()=>{if(path!=='/'||!config.preloader.enabled||matchMedia('(prefers-reduced-motion: reduce)').matches)return;try{if(sessionStorage.getItem('phyto-intro'))return}catch{}let disposed=false;let show:ReturnType<typeof setTimeout>;const image=new Image();const stop=()=>{if(disposed)return;clearTimeout(show);setLoading(false);try{sessionStorage.setItem('phyto-intro','1')}catch{}};show=setTimeout(()=>{if(!image.complete&&!disposed)setLoading(true)},config.preloader.showAfterMs);const max=setTimeout(stop,config.preloader.maximumVisibleMs);image.onload=stop;image.onerror=stop;image.src=media.hero.slits.quality;return()=>{disposed=true;clearTimeout(show);clearTimeout(max);image.onload=null;image.onerror=null;setLoading(false)}},[path]);
 return loading?<div className="phyto-preloader" role="status" aria-label="Loading botanical imagery"><img className="preloader-logo" src="/brand/phyto-elements-logo-web.png" width={770} height={800} alt=""/><p>Selected. Tested. Trusted.</p></div>:null;
}
