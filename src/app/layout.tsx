import type {CSSProperties} from 'react';
import type {Metadata} from 'next';
import {seo} from '../config/seo';
import {design} from '../config/design';
import {features} from '../config/features';
import {defaultRoute,themeCss} from '../config/themes';
import {SiteHeader} from '../components/site-header';
import {ThemePicker} from '../components/theme-picker';
import {ReviewToggle} from '../components/review-toggle';
import {SiteFooter} from '../components/site-footer';
import {media} from '../config/media';
import {experience} from '../config/experience';
import './globals.css';
import './quality-experience.css';
import './rich-experience.css';
import './home-cinema.css';
import './page-scenes.css';
import './navigation.css';
import './readability.css';
import {SiteMotion} from '../components/site-motion';
export const metadata:Metadata={metadataBase:new URL(seo.origin),title:{default:seo.name,template:`%s | ${seo.name}`},description:seo.description,robots:{index:seo.indexable,follow:seo.indexable},verification:{google:seo.verification}};
export default function Layout({children}:{children:React.ReactNode}){
 return <html lang="en" style={{"--header-height":`${experience.header.desktopHeightPx}px`,"--header-mobile-height":`${experience.header.mobileHeightPx}px`,"--header-blur":`${experience.header.blurPx}px`} as CSSProperties} data-route={defaultRoute} suppressHydrationWarning><head><style>{themeCss}</style></head><body style={{'--hero-float-duration':`${experience.hero.floatDurationSeconds}s`,'--botanical-image':`url(${media.hero.desktopPoster})`,'--wrap':`${design.maxContentWidthPx}px`,'--section-min':`${design.spacing.sectionMinPx}px`,'--section-max':`${design.spacing.sectionMaxPx}px`,'--body-size':`${design.typography.bodyPx}px`} as CSSProperties}><a className="skip" href="#main">Skip to content</a><SiteHeader/><SiteMotion/><main id="main">{children}</main><SiteFooter/>{features.themePicker&&<ThemePicker/>}{!seo.indexable&&<ReviewToggle/>}</body></html>;
}
