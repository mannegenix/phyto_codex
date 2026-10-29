import {test,expect} from '@playwright/test';
import {products} from '../../src/content/products';
import {companyPages} from '../../src/lib/routes';
for(const path of ['/', '/products', ...Object.keys(companyPages).map(page=>`/${page}`), ...products.map(p=>`/products/${p.slug}`)]){
 test(`preview serves crawlable HTML with metadata: ${path}`,async({request})=>{
  const response=await request.get(path);
  expect(response.status()).toBe(200);
  const html=await response.text();
  expect(html).toContain('<h1');
  expect(html).toMatch(/<title>[^<]+<\/title>/);
  expect(html).toMatch(/name="description" content="[^"]+"/);
  expect(html).toContain('noindex');
  expect(html).not.toContain('fonts.googleapis.com');
  expect(html).not.toContain('href="#products"');
  expect(html).not.toContain('Enquiry received');
  expect(html).toContain(`rel="canonical" href="https://phytoelements.in${path==='/'?'':path}`);
 });
}
test('missing product returns 404',async({request})=>expect((await request.get('/products/not-a-product')).status()).toBe(404));
test('robots is readable and preview sitemap has no URLs',async({request})=>{
 expect((await (await request.get('/robots.txt')).text())).toContain('User-Agent: *');
 expect((await (await request.get('/sitemap.xml')).text())).not.toContain('<loc>');
});
