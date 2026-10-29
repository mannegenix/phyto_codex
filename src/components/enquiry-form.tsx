'use client';
import {useEffect,useId,useState,type FormEvent} from 'react';
import {products} from '../content/products';
export function EnquiryForm({product='',request='Quote'}:{product?:string;request?:string}){
 const id=useId();const [type,setType]=useState(request);const [sample,setSample]=useState(request==='Sample');const [draft,setDraft]=useState('');
 useEffect(()=>{
 const apply=(value:string|null)=>{if(value&&['Quote','Sample','Specifications'].includes(value)){setType(value);setSample(value==='Sample');setDraft('')}};
 apply(new URLSearchParams(window.location.search).get('request'));
 const listener=(event:Event)=>apply((event as CustomEvent<string>).detail);
 window.addEventListener('phyto-request',listener);return()=>window.removeEventListener('phyto-request',listener);
 },[]);
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const fd=new FormData(e.currentTarget);const lines=Array.from(fd.entries()).filter(([key])=>!['consent','request','sample'].includes(key)).map(([key,value])=>`${key}: ${value}`);setDraft(`mailto:sales@phytoelements.in?${sample?'cc=samples%40phytoelements.in&':''}subject=${encodeURIComponent(`${type} enquiry — ${fd.get('product')}`)}&body=${encodeURIComponent(`Request: ${type}\nSample required: ${sample?'Yes':'No'}\n${lines.join('\n')}`)}`);}
 const fields=[['name','Full name','text','name'],['company','Company name','text','organization'],['email','Business email','email','email'],['phone','Phone / WhatsApp (with country code)','tel','tel'],['country','Country','text','country-name']] as const;
 return <form className="enq" onSubmit={submit} onChange={()=>setDraft('')}>
 <fieldset className="fld full"><legend>I’d like to</legend><div className="seg">{['Specifications','Sample','Quote'].map(t=><label key={t}><input type="radio" name="request" value={t} checked={type===t} onChange={()=>{setType(t);setSample(t==='Sample')}}/> Request {t.toLowerCase()}</label>)}</div></fieldset>
 {fields.map(([key,label,inputType,auto])=><div className="fld" key={key}><label htmlFor={`${id}-${key}`}>{label}</label><input id={`${id}-${key}`} name={key} type={inputType} autoComplete={auto} required maxLength={200}/></div>)}
 <div className="fld"><label htmlFor={`${id}-product`}>Product of interest</label><select id={`${id}-product`} name="product" defaultValue={products.find(p=>p.slug.startsWith(product+'-'))?.name||''} required><option value="">Select a product</option>{products.map(p=><option key={p.slug}>{p.name}</option>)}<option>Other / multiple products</option></select></div>
 <div className="fld"><label htmlFor={`${id}-grade`}>Required grade / specification</label><input id={`${id}-grade`} name="grade" placeholder="Marker %, mesh size, solvent limits" maxLength={300}/></div>
 <div className="fld"><label htmlFor={`${id}-qty`}>Required quantity</label><div className="row"><input id={`${id}-qty`} name="quantity" type="number" min="0.001" step="any" required/><select name="unit" aria-label="Quantity unit"><option>kg</option><option>MT</option><option>g (sample)</option></select></div></div>
 <div className="fld"><label htmlFor={`${id}-application`}>Application / industry</label><select id={`${id}-application`} name="application"><option value="">Select</option>{['Nutraceuticals and supplements','Ingredient distribution','Contract manufacturing','Functional food and beverage','Cosmetic and personal care','Ayurvedic and traditional products','Other'].map(s=><option key={s}>{s}</option>)}</select></div>
 <div className="fld"><label htmlFor={`${id}-timeline`}>Target purchase timeline</label><select id={`${id}-timeline`} name="timeline"><option>Evaluating / no fixed date</option><option>Immediate (within 30 days)</option><option>1–3 months</option><option>3–6 months</option></select></div>
 <fieldset className="fld full"><legend>Sample required?</legend><div className="seg">{[true,false].map(v=><label key={String(v)}><input type="radio" name="sample" checked={sample===v} onChange={()=>setSample(v)}/>{v?'Yes':'No'}</label>)}</div></fieldset>
 <div className="fld full"><label htmlFor={`${id}-message`}>Message / additional requirements</label><textarea id={`${id}-message`} name="message" maxLength={3000}/></div>
 <p className="fld full muted">To include a specification file, attach it in your email application after opening the draft.</p>
 <div className="fld full"><label className="consent"><input type="checkbox" name="consent" required/><span>I agree to be contacted about this enquiry and acknowledge the <a href="/privacy">privacy notice</a>.</span></label></div>
 <div className="submit-row"><small>Preview: online delivery is not connected. Prepare a draft, then review and send it in your email application.</small><button className="btn" type="submit">Prepare email enquiry</button></div>
 {draft&&<div className="email-draft" role="status"><h3>Email draft ready</h3><p>Nothing has been sent or stored by this website.</p><a className="btn" href={draft}>Open email draft</a></div>}
 </form>;
}
