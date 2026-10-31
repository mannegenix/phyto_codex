import {PageScenes} from '../../components/page-scenes';
import {views} from '../../content/site-views';
import {pageMetadata} from '../../lib/metadata';
export const metadata=pageMetadata('Botanical extract products','Explore our growing botanical extract portfolio, specifications, application categories and sample enquiry options.','/products');
export default function Products(){return <PageScenes html={views.products()} title="Products" pageKey="products"/>}
