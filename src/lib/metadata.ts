import type { Metadata } from "next";
import { seo } from "../config/seo";
export function pageMetadata(title: string, description: string, path: string): Metadata {
 return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, siteName: seo.name, type: "website" }, twitter: { card: "summary", title, description } };
}
