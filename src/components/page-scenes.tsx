import {htmlToDOM,type Element,type DOMNode} from 'html-react-parser';
import type {ReactNode} from 'react';
import {HomeCinema} from './home-cinema';
import {SiteContent} from './site-content';
import {ProductShowcase} from './home-showcases';

// DOM parser instances can differ across bundles; use a structural guard.
const isElement=(node:DOMNode):node is Element=>'attribs' in node&&'name' in node;
const hasClass=(node:DOMNode,name:string)=>isElement(node)&&node.attribs.class?.split(/\s+/).includes(name);
function find(node:DOMNode,predicate:(node:DOMNode)=>boolean):DOMNode|undefined{if(predicate(node))return node;if(isElement(node))for(const child of node.children as DOMNode[]){const result=find(child,predicate);if(result)return result}}
function text(node:DOMNode):string{if(node.type==='text')return node.data;if(isElement(node))return (node.children as DOMNode[]).map(text).join(' ');return ''}

// Split trusted repository markup at real top-level boundaries. No content is
// fetched or deferred behind the animation: every scene is server-rendered.
export function PageScenes({html,title,pageKey}:{html:string;title:string;pageKey:string}){
 const nodes=htmlToDOM(html,{withStartIndices:true,withEndIndices:true}).filter(isElement);
 const raw=(node:DOMNode)=>html.slice(node.startIndex!,node.endIndex!+1);
 const labels:string[]=[];const scenes:ReactNode[]=[];
 function add(label:string,content:ReactNode,key:string){labels.push(label);scenes.push(<div className="home-scene page-scene" data-home-scene data-scene-key={key} key={key}><div className="scene-inner" aria-label={`${label} content`}>{content}</div></div>)}
 for(let i=0;i<nodes.length;i++){
  const node=nodes[i];
  if(hasClass(node,'ph')){
   const photo=nodes[i+1]&&hasClass(nodes[i+1],'product-specimen')?nodes[++i]:undefined;
   add('Introduction',<section className={`page-intro ${photo?'with-specimen':''}`}><div className="wrap page-intro-composition"><SiteContent html={raw(node)}/>{photo&&<SiteContent html={raw(photo)}/>}</div></section>,'intro');continue;
  }
  const cards=find(node,n=>hasClass(n,'cards'));const table=find(node,n=>hasClass(n,'sheet'));
  if(pageKey==='products'&&cards&&table){
   add('Compare extracts',<section><div className="wrap"><div className="sec-head"><span className="eyebrow">Product overview</span><h2>Compare the portfolio.</h2></div><SiteContent html={raw(table)}/></div></section>,'comparison');
   add('Our extracts',<ProductShowcase/>,'products');continue;
  }
  const specificationGrid=find(node,n=>hasClass(n,'pp-grid'));
  if(specificationGrid&&table){
   const note=find(node,n=>hasClass(n,'rnote'));
   add('Specifications',<section><div className="wrap page-specifications"><SiteContent html={raw(table)}/>{note&&<SiteContent html={raw(note)}/>}</div></section>,'specifications');
   const side=find(node,n=>isElement(n)&&n.name==='aside');
   if(side&&isElement(side)){
    const blocks=(side.children as DOMNode[]).filter(isElement);
    if(blocks[0])add('Applications',<section className="page-application"><div className="wrap page-information"><SiteContent html={raw(blocks[0])}/></div></section>,'applications');
    if(blocks.length>1)add('Documents',<section className="page-documents"><div className="wrap two">{blocks.slice(1).map((block,n)=><div key={n}><SiteContent html={raw(block)}/></div>)}</div></section>,'documents');
   }
   continue;
  }
  const documentList=find(node,n=>hasClass(n,'docs'));
  if(pageKey==='resources'&&documentList&&isElement(documentList)){
   const rows=(documentList.children as DOMNode[]).filter(isElement);
   for(let n=0;n<rows.length;n+=4){const label=n===0?'Product & company documents':'Safety & supply documents';add(label,<section className="page-documents"><div className="wrap"><div className="sec-head"><span className="eyebrow">Documents & resources</span><h2>{label}</h2></div><div className="docs"><SiteContent html={rows.slice(n,n+4).map(raw).join('')}/></div></div></section>,`documents-${n}`)}
   const request=find(node,n=>hasClass(n,'stack'));
   if(request)add('Request a document',<section><div className="wrap page-information"><SiteContent html={raw(request)}/></div></section>,'request-documents');
   continue;
  }
  const form=find(node,n=>isElement(n)&&n.name==='enquiry-form');
  const heading=find(node,n=>isElement(n)&&/^h[23]$/.test(n.name));
  const eyebrow=find(node,n=>hasClass(n,'eyebrow'));
  const label=form?'Enquiries':heading?text(heading).replace(/\s+/g,' ').trim():eyebrow?text(eyebrow).trim():'Details';
  add(label,<SiteContent html={raw(node)}/>,form?'enquiry':`section-${i}`);
 }
 return <HomeCinema key={pageKey} labels={labels} pageLabel={title}>{scenes}</HomeCinema>;
}
