import type { MetadataRoute } from "next";
import { seo } from "../config/seo";
import { products } from "../content/products";
import { companyPages } from "../lib/routes";
export default function sitemap():MetadataRoute.Sitemap{return seo.indexable?["/","/products",...Object.keys(companyPages).map(page=>`/${page}`),...products.map(p=>`/products/${p.slug}`)].map(path=>({url:seo.origin+path})):[]}
