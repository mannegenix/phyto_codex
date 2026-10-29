import {SiteContent} from '../components/site-content';
import {QualityHome} from '../components/quality-home';
import {views} from '../content/site-views';
import {pageMetadata} from '../lib/metadata';
import {seo} from '../config/seo';
export const metadata=pageMetadata('Selected & Tested Botanical Extracts',seo.description,'/');
export default function Home(){const org={'@context':'https://schema.org','@type':'Organization',name:seo.name,url:seo.origin};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(org).replace(/</g,'\\u003c')}}/><QualityHome/></>}
