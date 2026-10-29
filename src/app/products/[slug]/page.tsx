import { notFound } from "next/navigation";
import { PageScenes } from "../../../components/page-scenes";
import { views } from "../../../content/site-views";
import { products } from "../../../content/products";
import { pageMetadata } from "../../../lib/metadata";
import { seo } from "../../../config/seo";
export const dynamicParams=false;
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);if(!p)notFound();return pageMetadata(p.name,p.description,`/products/${slug}`)}
export default async function Product({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);if(!p)notFound();const data={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{ "@type":"ListItem",position:1,name:"Home",item:seo.origin},{"@type":"ListItem",position:2,name:"Products",item:seo.origin+"/products"},{"@type":"ListItem",position:3,name:p.name,item:seo.origin+`/products/${slug}`}]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\u003c")}}/><PageScenes html={views[p.slug.split("-")[0]]()} title={p.name} pageKey={p.slug}/></>}
