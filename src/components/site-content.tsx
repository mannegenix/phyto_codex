import parse,{domToReact,attributesToProps,type HTMLReactParserOptions,type DOMNode} from 'html-react-parser';
import Link from 'next/link';
import {RequestLink} from './request-link';
import {routeHref} from '../lib/routes';
import {EnquiryForm} from './enquiry-form';
import {CopyEmail} from './copy-email';
import {seo} from '../config/seo';
import {QualityShowcase} from './home-showcases';
// Only trusted repository-authored content passes through this server renderer.
export function SiteContent({html}:{html:string}){
 const options:HTMLReactParserOptions={replace(node){
  if(!('attribs' in node))return;
  const a=node.attribs;
  if(node.name==='quality-showcase')return <QualityShowcase/>;
  if(a.class==='rnote'&&seo.indexable)return <></>;
  if(node.name==='enquiry-form')return <EnquiryForm product={a.product} request={a.request}/>;
  if(node.name==='button'&&a['data-copy'])return <CopyEmail email={a['data-copy']}/>;
  if(node.name==='a'&&a.href){
   let href=routeHref(a.href);
   if(a['data-type'])href=`${href.split('#')[0]}?request=${encodeURIComponent(a['data-type'])}#enquire`;
   if(a['data-type'])return <RequestLink href={href} type={a['data-type']} className={a.class}>{domToReact(node.children as DOMNode[],options)}</RequestLink>;
   return <Link {...attributesToProps(a)} href={href}>{domToReact(node.children as DOMNode[],options)}</Link>;
  }
 }};
 // Explicit tbody avoids browser repair/hydration mismatches in the source spec tables.
 const normalized=html.replace(/(<table[^>]*>)(\s*<tr>[\s\S]*?)(<\/table>)/g,'$1<tbody>$2</tbody>$3');
 return <>{parse(normalized,options)}</>;
}
