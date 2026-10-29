import Link from 'next/link';
import {views} from '../content/site-views';
import {SiteContent} from './site-content';
import {ProductShowcase} from './home-showcases';
import {media} from '../config/media';
import {HomeCinema} from './home-cinema';
export function QualityHome(){
 const original=views.home();
 let sections=original.slice(original.indexOf('<section class="sunk">'));
 sections=sections.replace(/<section class="band"><div class="wrap flag-grid">[\s\S]*?<\/section>/,'');
 sections=sections.replace(/<section><div class="wrap">\s*<div class="sec-head"><span class="eyebrow">Product portfolio<\/span>[\s\S]*?<\/section>/,'');
 sections=sections.replace(/<section class="sunk"><div class="wrap">\s*<div class="sec-head"><span class="eyebrow">From botanicals to batch<\/span>[\s\S]*?<\/section>/,'<quality-showcase></quality-showcase>');
 const chunks=sections.match(/<section\b[\s\S]*?<\/section>|<quality-showcase>[\s\S]*?<\/quality-showcase>/g)||[];
 const keys=['about','quality','operations','standards','enquiry','contact'];
 return <HomeCinema>
  <div className="home-scene" data-home-scene data-scene-key="hero"><div className="scene-inner"><section className="rich-hero slit-hero"><div className="hero-bloom" aria-hidden="true"/><div className="hero-slit-collage" aria-label="Quality, extracts and nature"><figure className="hero-slit slit-quality"><img src={media.hero.slits.quality} width={1536} height={1024} alt="Conceptual close-up of botanical sample inspection" fetchPriority="high"/><figcaption><span>01</span>Quality</figcaption></figure><figure className="hero-slit slit-extract"><img src={media.hero.slits.extract} width={1536} height={1024} alt="Turmeric and fine botanical extract powder" fetchPriority="high"/><figcaption><span>02</span>Extracts</figcaption></figure><figure className="hero-slit slit-nature"><img src={media.hero.slits.nature} width={1536} height={1024} alt="Fresh green botanical leaves" fetchPriority="high"/><figcaption><span>03</span>Nature</figcaption></figure></div><div className="wrap rich-hero-content"><span className="eyebrow">Botanical Ingredients for Global Markets</span><h1>Bulk Plant<br/>Extracts for<br/><em>Global Markets.</em></h1><p>Phyto Elements supplies bulk plant extracts for Indian and global B2B customers through careful selection, testing against defined standards, batch quality documentation and commercially reliable fulfilment.</p><div className="ctas"><Link className="btn" href="/sample">Request a Sample ↗</Link><Link className="rich-text-link" href="/products">Explore Products →</Link></div><div className="rich-hero-meta"><span>Six focus extracts</span><span>Batch-linked COA</span><span>India & export supply</span></div></div><a className="rich-scroll" href="#collection">Explore the collection ↓</a></section></div></div>
  <div className="home-scene" data-home-scene data-scene-key="products" id="collection"><div className="scene-inner"><ProductShowcase/></div></div>
  {chunks.map((html,i)=><div className="home-scene" data-home-scene data-scene-key={keys[i]} key={keys[i]}><div className="scene-inner" aria-label={`${keys[i]} section content`}><SiteContent html={html}/></div></div>)}
 </HomeCinema>;
}
