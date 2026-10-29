'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
const links=[['/','Home'],['/about','About'],['/products','Products'],['/operations','Operations'],['/manufacturing','Quality & Testing'],['/resources','Resources'],['/contact','Contact'],['/sample','Request a Sample']];
export function Brand(){return <Link className="brand brand-image" href="/" aria-label="Phyto Elements home"><img className="brand-logo brand-logo-header" src="/brand/phyto-elements-logo-web.png" width={770} height={800} alt=""/></Link>}
export function SiteHeader(){const path=usePathname();const [open,setOpen]=useState(false);return <header className="hdr" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menuBtn')?.focus()}}}><div className="wrap"><Brand/><button className="menu-btn" id="menuBtn" aria-expanded={open} aria-controls="nav" onClick={()=>setOpen(!open)}>Menu</button><nav id="nav" aria-label="Primary" data-lenis-prevent={open?'':undefined} className={`nav ${open?'open':''}`}>{links.map(([href,label])=><Link href={href} key={href} className={href==='/sample'?'btn sm':href.includes('garcinia')?'flag':''} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></div></header>}
