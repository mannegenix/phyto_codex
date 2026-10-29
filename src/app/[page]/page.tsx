import {notFound} from 'next/navigation';
import {companyPages} from '../../lib/routes';
import {pageMetadata} from '../../lib/metadata';
import {views} from '../../content/site-views';
import {PageScenes} from '../../components/page-scenes';
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(companyPages).map(page=>({page}))}
function getPage(page:string){if(!(page in companyPages))notFound();return companyPages[page as keyof typeof companyPages]}
export async function generateMetadata({params}:{params:Promise<{page:string}>}){const {page}=await params;const meta=getPage(page);return pageMetadata(meta.title,meta.description,`/${page}`)}
export default async function CompanyPage({params}:{params:Promise<{page:string}>}){const {page}=await params;const meta=getPage(page);return <PageScenes html={views[page]()} title={meta.title} pageKey={page}/>}
