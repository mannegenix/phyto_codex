'use client';
import Link from 'next/link';
import type {ReactNode} from 'react';
export function RequestLink({href,type,className,children}:{href:string;type:string;className?:string;children:ReactNode}){
 return <Link href={href} className={className} onClick={e=>{if(new URL(href,location.origin).pathname===location.pathname){e.preventDefault();window.dispatchEvent(new CustomEvent('phyto-request',{detail:type}));if(window.dispatchEvent(new CustomEvent('phyto-scene-request',{detail:{id:'enquire'},cancelable:true})))document.getElementById('enquire')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}}}>{children}</Link>;
}
