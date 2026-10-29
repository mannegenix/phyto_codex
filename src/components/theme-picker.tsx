'use client';
import {useEffect,useState} from 'react';
import {themes,defaultRoute} from '../config/themes';
const storageKey=`phyto-theme-${defaultRoute}`;
export function ThemePicker(){const [theme,setTheme]=useState(defaultRoute);
 useEffect(()=>{try{const saved=localStorage.getItem(storageKey);if(themes.some(t=>t.id===saved)){setTheme(saved!);document.documentElement.dataset.route=saved!}}catch{}},[]);
 return <div className="route-pick" role="group" aria-label="Colour route"><span>Colour route</span>{themes.map(t=><button key={t.id} type="button" aria-pressed={theme===t.id} onClick={()=>{setTheme(t.id);document.documentElement.dataset.route=t.id;try{localStorage.setItem(storageKey,t.id)}catch{}}}><i aria-hidden="true" style={{background:`linear-gradient(90deg,${t.colors.accent} 50%,${t.colors.olive} 50%)`}}/><b>{t.number}. {t.label}</b></button>)}</div>;
}
