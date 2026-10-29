'use client';
import {useState} from 'react';
export function CopyEmail({email}:{email:string}){
 const [status,setStatus]=useState('Copy');
 return <button className="copy" type="button" aria-label={`Copy ${email}`} onClick={async()=>{try{await navigator.clipboard.writeText(email);setStatus('Copied')}catch{setStatus('Copy unavailable — select email')}}}><span role="status">{status}</span></button>;
}
