import {SiteContent} from './site-content';
import {footerMarkup} from '../content/footer';
import {products} from '../content/products';
export function SiteFooter(){
 const html=footerMarkup.replace("Bulk plant extracts manufactured in India for Indian and export B2B buyers.","Carefully selected and tested botanical extracts for professional buyers.").replaceAll("Manufacturing &amp; Quality","Quality &amp; Testing").replace('<ul id="footProducts"></ul>',`<ul>${products.map(p=>`<li><a href="/products/${p.slug}">${p.name}</a></li>`).join('')}</ul>`);
 return <SiteContent html={html}/>;
}
