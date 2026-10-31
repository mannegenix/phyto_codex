'use client';
import {useLayoutEffect,useRef,useState,type ReactNode} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {experience} from '../config/experience';

// Progressive enhancement: without JS, on small screens and with reduced motion,
// every scene remains ordinary, fully readable HTML in document order.
const homeLabels=['Introduction','Our extracts','Who we are','Quality journey','Working together','Our standards','Enquiries','Contact'];
export function HomeCinema({children,labels=homeLabels,pageLabel='Homepage'}:{children:ReactNode;labels?:readonly string[];pageLabel?:string}){
 const root=useRef<HTMLDivElement>(null);
 const [navigation,setNavigation]=useState({scene:0});
 const seek=useRef<(scene:number)=>void>(()=>{});
 useLayoutEffect(()=>{
  if(!root.current||!experience.scenes.enabled)return;
  gsap.registerPlugin(ScrollTrigger);
  const element=root.current;const scenes=Array.from(element.querySelectorAll<HTMLElement>(':scope > [data-home-scene]'));if(scenes.length<2)return;
  const media=gsap.matchMedia();
  media.add(`(min-width: ${experience.scenes.minimumWidthPx}px) and (min-height: ${experience.scenes.minimumHeightPx}px) and (prefers-reduced-motion: no-preference)`,()=>{
   const transition=experience.scenes.transitionUnits;
   const durations=scenes.map(()=>1+transition);
   const starts:number[]=[];let total=0;durations.forEach(d=>{starts.push(total);total+=d});
   const anchors=starts.map(start=>start/total);anchors.push(1);
   const nearestAnchorIndex=(value:number)=>anchors.reduce((nearest,anchor,index)=>Math.abs(anchor-value)<Math.abs(anchors[nearest]-value)?index:nearest,0);
   let settledAnchor=0;
   let activeScene=0;
   const snapToAdjacentAnchor=(value:number)=>{const nearest=nearestAnchorIndex(value);const step=experience.scenes.maximumAnchorStep;const target=gsap.utils.clamp(settledAnchor-step,settledAnchor+step,nearest);return anchors[target]};
   let previous=-1;
   element.dataset.cinematic='true';
   function measure(){scenes.forEach(scene=>{const body=scene.querySelector<HTMLElement>('.scene-inner');if(!body)return;const overflow=body.scrollHeight>body.clientHeight+3;if(overflow){body.setAttribute('data-lenis-prevent','');body.tabIndex=0}else{body.removeAttribute('data-lenis-prevent');body.tabIndex=-1}})}
   const trigger=ScrollTrigger.create({trigger:element,start:'top top',end:()=>`+=${Math.round(innerHeight*experience.scenes.scrollPerUnitVh/100*total)}`,pin:true,pinSpacing:true,anticipatePin:1,invalidateOnRefresh:true,
    snap:experience.scenes.snap?{snapTo:snapToAdjacentAnchor,directional:experience.scenes.snapDirectional,duration:{min:experience.scenes.snapDurationMinSeconds,max:experience.scenes.snapDurationMaxSeconds},delay:experience.scenes.snapDelaySeconds,inertia:false,onComplete:self=>{settledAnchor=nearestAnchorIndex(self.progress)}}:undefined,
    onRefresh:self=>{measure();settledAnchor=nearestAnchorIndex(self.progress)},
    onUpdate:self=>{
     const position=self.progress*total;let index=starts.findIndex((start,i)=>position>=start&&position<start+durations[i]);if(index<0)index=scenes.length-1;
     const local=position-starts[index];const mix=index<scenes.length-1?gsap.utils.clamp(0,1,(local-(durations[index]-transition))/transition):0;
     const visible=mix>=.55?index+1:index;
     scenes.forEach((scene,i)=>{
      if(i===index)gsap.set(scene,{opacity:1,visibility:'visible',clipPath:'none',zIndex:2});
      else if(i===index+1&&mix>0)gsap.set(scene,{opacity:1,visibility:'visible',clipPath:`circle(${mix*150}% at 50% 52%)`,zIndex:3});
      else gsap.set(scene,{opacity:0,visibility:'hidden',zIndex:1});
     });
     if(visible!==previous){activeScene=visible;scenes.forEach((scene,i)=>{scene.inert=i!==visible;scene.setAttribute('aria-hidden',String(i!==visible))});setNavigation({scene:visible});previous=visible}
     if(index===0)element.querySelectorAll<HTMLElement>('.hero-slit').forEach((slit,i)=>gsap.set(slit,{y:[-32,30,-4][i]+(i-1)*local*experience.hero.slitTravelPx,rotationY:(i-1)*(1-local)*experience.hero.slitTiltDegrees}));
    },
   });
   seek.current=index=>{index=Math.max(0,Math.min(scenes.length-1,index));activeScene=index;const progress=starts[index]/total;settledAnchor=nearestAnchorIndex(progress);const top=trigger.start+progress*(trigger.end-trigger.start);if(window.dispatchEvent(new CustomEvent('phyto-scroll-to',{detail:{top},cancelable:true})))window.scrollTo({top,behavior:'smooth'})};
   let wheelTotal=0;let wheelLocked=false;let lastWheelAt=0;let lockUntil=0;let unlockTimer:ReturnType<typeof setTimeout>|undefined;
   const releaseWheel=()=>{const now=performance.now();const wait=Math.max(lockUntil,lastWheelAt+experience.scenes.wheelQuietReleaseMs)-now;if(wait>0){unlockTimer=setTimeout(releaseWheel,wait);return}wheelLocked=false;wheelTotal=0;unlockTimer=undefined};
   const wheel=(event:WheelEvent)=>{
    if(Math.abs(event.deltaX)>Math.abs(event.deltaY))return;
    const y=window.scrollY;if(y<trigger.start-1||y>trigger.end+1)return;
    const mode=event.deltaMode===WheelEvent.DOM_DELTA_LINE?16:event.deltaMode===WheelEvent.DOM_DELTA_PAGE?innerHeight:1;const delta=event.deltaY*mode;if(!delta)return;
    const scrollable=event.target instanceof Element?event.target.closest<HTMLElement>('[data-lenis-prevent]'):null;
    if(scrollable){const canConsume=delta>0?scrollable.scrollTop+scrollable.clientHeight<scrollable.scrollHeight-2:scrollable.scrollTop>2;if(canConsume)return}
    event.preventDefault();event.stopImmediatePropagation();const now=performance.now();if(now-lastWheelAt>experience.scenes.wheelGestureResetMs)wheelTotal=0;lastWheelAt=now;
    if(wheelLocked){if(unlockTimer)clearTimeout(unlockTimer);unlockTimer=setTimeout(releaseWheel,experience.scenes.wheelQuietReleaseMs);return}
    wheelTotal+=delta;if(Math.abs(wheelTotal)<experience.scenes.wheelThresholdPx)return;
    const direction=wheelTotal>0?1:-1;wheelTotal=0;wheelLocked=true;lockUntil=now+experience.scenes.wheelTransitionLockMs;
    if(direction>0&&activeScene===scenes.length-1){const top=trigger.end+1;if(window.dispatchEvent(new CustomEvent('phyto-scroll-to',{detail:{top},cancelable:true})))window.scrollTo({top,behavior:'smooth'})}
    else if(direction<0&&activeScene===0){const top=trigger.start;if(window.dispatchEvent(new CustomEvent('phyto-scroll-to',{detail:{top},cancelable:true})))window.scrollTo({top,behavior:'smooth'})}
    else seek.current(activeScene+direction);
    unlockTimer=setTimeout(releaseWheel,experience.scenes.wheelTransitionLockMs);
   };
   window.addEventListener('wheel',wheel,{passive:false,capture:true});
   const resized=new ResizeObserver(measure);scenes.forEach(scene=>{const section=scene.querySelector('section');if(section)resized.observe(section)});
   measure();
   // Initialize the same scene state before the first scroll event.
   scenes.forEach((scene,i)=>{gsap.set(scene,{opacity:i===0?1:0,visibility:i===0?'visible':'hidden'});scene.inert=i!==0;scene.setAttribute('aria-hidden',String(i!==0))});
   trigger.vars.onUpdate?.(trigger);
   const anchorsClicked=(event:MouseEvent)=>{const link=(event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');const target=link?.getAttribute('href');if(!target||target.length<2)return;const destination=document.getElementById(target.slice(1))?.closest('[data-home-scene]');const index=scenes.findIndex(scene=>scene===destination);if(index>=0){event.preventDefault();seek.current(index);history.replaceState(null,'',target)}};
   element.addEventListener('click',anchorsClicked);
   const seekId=(id:string)=>{const destination=document.getElementById(id)?.closest('[data-home-scene]');const index=scenes.findIndex(scene=>scene===destination);if(index<0)return false;seek.current(index);return true};
   const sceneRequested=(event:Event)=>{const id=(event as CustomEvent<{id:string}>).detail?.id;if(id&&seekId(id))event.preventDefault()};
   const hashChanged=()=>{if(location.hash.length>1)seekId(decodeURIComponent(location.hash.slice(1)))};
   window.addEventListener('phyto-scene-request',sceneRequested);window.addEventListener('hashchange',hashChanged);
   const initialHash=requestAnimationFrame(hashChanged);
   const refresh=()=>ScrollTrigger.refresh();document.fonts.ready.then(refresh);window.addEventListener('load',refresh);
   return()=>{trigger.kill(true);resized.disconnect();cancelAnimationFrame(initialHash);if(unlockTimer)clearTimeout(unlockTimer);element.removeEventListener('click',anchorsClicked);window.removeEventListener('wheel',wheel,true);window.removeEventListener('phyto-scene-request',sceneRequested);window.removeEventListener('hashchange',hashChanged);window.removeEventListener('load',refresh);delete element.dataset.cinematic;scenes.forEach(scene=>{scene.inert=false;scene.removeAttribute('aria-hidden');gsap.set(scene,{clearProps:'all'});scene.querySelector('.scene-inner')?.removeAttribute('data-lenis-prevent')});element.querySelectorAll('.hero-slit').forEach(slit=>gsap.set(slit,{clearProps:'transform'}))};
  });
  return()=>{media.revert()};
 },[]);
 return <div ref={root} className={`home-cinema ${pageLabel==='Homepage'?'':'page-cinema'}`}>{children}<nav className="scene-navigation" aria-label={`${pageLabel} sections`}><span className="scene-location" aria-live="polite">{labels[navigation.scene]}</span><div className="scene-dots">{labels.map((label,i)=><button key={label} type="button" aria-label={`Go to ${label}`} aria-current={i===navigation.scene?'step':undefined} onClick={()=>seek.current(i)}><span/></button>)}</div><button type="button" className="scene-next" onClick={()=>{if(navigation.scene<labels.length-1)seek.current(navigation.scene+1);else document.querySelector('footer')?.scrollIntoView({behavior:'smooth'})}}>Continue <span aria-hidden="true">↓</span></button></nav></div>;
}
