import { describe,it,expect } from "vitest";
import {getSeoConfig} from "../src/config/seo";
import {products} from "../src/content/products";
describe("SEO release controls",()=>{
 it("does not index previews even if the flag is set",()=>expect(getSeoConfig({DEPLOYMENT_ENV:"preview",SEO_INDEXABLE:"true"}).indexable).toBe(false));
 it("requires an explicit production indexability flag",()=>{expect(getSeoConfig({DEPLOYMENT_ENV:"production"}).indexable).toBe(false);expect(getSeoConfig({DEPLOYMENT_ENV:"production",SEO_INDEXABLE:"true"}).indexable).toBe(true)});
 it("provides unique crawlable product paths and descriptions",()=>{expect(new Set(products.map(p=>p.slug)).size).toBe(6);for(const p of products){expect(p.slug).toMatch(/^[a-z-]+$/);expect(p.description.length).toBeGreaterThan(50)}});
});
