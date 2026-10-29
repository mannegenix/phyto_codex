import { products } from '../content/products';
export const companyPages = {
 about: {title:'About Phyto Elements',description:'Learn about our focused botanical ingredient portfolio and specification-driven approach for professional buyers.'},
 operations: {title:'Operations',description:'Explore how extract selection, testing, quality approval and supply come together.'},
 manufacturing: {title:'Quality & Testing',description:'Our approach to extract selection, testing, evaluation and approval before supply.'},
 resources: {title:'Documents & Resources',description:'Request product specifications, representative Certificates of Analysis, safety data sheets and commercial documentation.'},
 sample: {title:'Request a Sample',description:'Discuss botanical extract samples, required grades and formulation requirements with Phyto Elements.'},
 contact: {title:'Contact',description:'Contact the Phyto Elements sales, samples, quality and orders teams for botanical ingredient enquiries.'},
 privacy: {title:'Privacy notice',description:'Read how enquiry information is handled in this website preview and how to contact Phyto Elements.'},
} as const;
export const productRoutes = Object.fromEntries(products.map(p=>[p.slug.split('-')[0], `/products/${p.slug}`]));
export function routeHref(href:string){
 if(!href.startsWith('#')) return href;
 const id=href.slice(1);
 if(id==='home')return '/';
 if(id==='products')return '/products';
 return productRoutes[id] || (id in companyPages ? `/${id}` : href);
}
