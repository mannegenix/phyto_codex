// Migrated from the approved HTML. Trusted local markup only; never render user input here.
import {qualityPage,aboutPage,operationsPage} from './quality-views';
import {productImages} from '../config/media';
export const PRODUCTS = [
  {id:"garcinia",code:"PE-01",name:"Garcinia Cambogia Extract",short:"Garcinia Cambogia",role:"Flagship product",flag:true,
   source:"Garcinia gummi-gutta (syn. Garcinia cambogia)",part:"Fruit rind",marker:"Hydroxycitric Acid (HCA)",
   area:"Nutraceutical and wellness formulations",sw:"#b58b4f",
   apps:["Dietary-supplement formulations","Wellness formulations","Powder and capsule blends","Private-label products"],
   intro:"Our flagship extract, supported by product knowledge, careful evaluation and testing against our standards. Supplied to an agreed specification for professional formulators and ingredient buyers.",
   note:"Confirm botanical nomenclature (G. gummi-gutta vs G. cambogia) and the HCA grades Phyto Elements will commit to."},
  {id:"curcumin",code:"PE-02",name:"Curcumin Extract",short:"Curcumin",role:"Core product",
   source:"Curcuma longa",part:"Rhizome",marker:"Curcuminoids",area:"Nutraceuticals, functional foods and colour applications",sw:"#e0a11b",
   apps:["Nutraceutical formulations","Functional foods","Food colour applications","Traditional-product manufacturing"],
   intro:"Standardized turmeric extract for nutraceutical, functional-food and colour applications, supplied against a defined curcuminoid specification.",
   note:"Confirm curcuminoid grade range and whether colour-application grades will be offered at launch."},
  {id:"ashwagandha",code:"PE-03",name:"Ashwagandha Extract",short:"Ashwagandha",role:"Core product",
   source:"Withania somnifera",part:"Root",marker:"Withanolides",area:"Nutraceutical and wellness formulations",sw:"#b39a73",
   apps:["Nutraceutical formulations","Wellness formulations","Ayurvedic products","Private-label products"],
   intro:"Root extract standardized to withanolides for nutraceutical, wellness and Ayurvedic-product manufacturers.",
   note:"Confirm plant part (root only vs root + leaf) and withanolide test method."},
  {id:"boswellia",code:"PE-04",name:"Boswellia Extract",short:"Boswellia",role:"Core product",
   source:"Boswellia serrata",part:"Oleo-gum resin",marker:"Boswellic acids / AKBA, depending on grade",area:"Nutraceutical formulations",sw:"#d8c79c",
   apps:["Nutraceutical formulations","Joint-support category blends","Ayurvedic products","Private-label products"],
   intro:"Resin extract offered by boswellic-acid or AKBA grade, matched to the formulator's specification.",
   note:"Confirm which grades (total boswellic acids vs AKBA-enriched) are manufactured. Review 'joint-support category' wording for claims compliance."},
  {id:"bakuchiol",code:"PE-05",name:"Bakuchiol Extract",short:"Bakuchiol",role:"Specialty product",
   source:"Psoralea corylifolia (Babchi)",part:"Seed",marker:"Bakuchiol assay, depending on grade",area:"Cosmetic and personal-care formulations",sw:"#c9a54e",
   apps:["Skin-care formulations","Cosmetic actives","Personal-care products","Contract cosmetic manufacturing"],
   intro:"A specialty ingredient for cosmetic and personal-care formulators, supplied by bakuchiol assay grade.",
   note:"Brief flags Bakuchiol specifically: source terminology may differ by raw-material vendor (Psoralea corylifolia / Cullen corylifolium). QA to confirm before publishing."},
  {id:"bacopa",code:"PE-06",name:"Bacopa Extract",short:"Bacopa",role:"Core product",
   source:"Bacopa monnieri",part:"Whole herb / aerial parts",marker:"Bacosides",area:"Nutraceutical and wellness formulations",sw:"#8d7f55",
   apps:["Nutraceutical formulations","Wellness formulations","Ayurvedic products","Private-label products"],
   intro:"Herb extract standardized to bacosides for nutraceutical, wellness and Ayurvedic-product manufacturers.",
   note:"Confirm plant part and bacoside test method (HPLC vs UV) used for the grade claim."}
];
const byId = Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));

const STAGES = [
 ["Extract sourcing","Botanical extracts are acquired against product identity, specification and quality requirements."],
 ["Sample evaluation","Material is reviewed against the agreed product and grade requirements."],
 ["Quality testing","Extracts are tested against the applicable acceptance criteria."],
 ["Approval for supply","Only material meeting our standards is approved under the Phyto Elements name."],
 ["Packaging and dispatch","Approved material is supplied with the relevant quality and commercial documentation."]
];
const FUNCS = [
 ["Requirement review","Define the required product, grade and specification."],
 ["Extract sourcing","Acquire material against defined product and quality requirements."],
 ["Incoming evaluation","Review incoming extracts and their relevant supporting information."],
 ["Sample assessment","Assess the material against the product requirements."],
 ["Quality testing","Test against the applicable criteria before approval."],
 ["Results review","Evaluate the findings against our acceptance standards."],
 ["Approval for supply","Approve only material that meets the required standards."],
 ["Packing and documentation","Coordinate approved packing and relevant batch documentation."],
 ["Domestic and export fulfilment","Coordinate quotations, orders, dispatch and customer support."]
];
const VALUES = [
  ["Focused portfolio","Six carefully selected extracts, with the same commitment to quality across the portfolio."],
  ["Specification-driven batches","Material is evaluated against an agreed product specification and your requirements."],
  ["One point of contact","Discuss specification, quantity, sample, price, packing, lead time and documents with one team."],
  ["Batch documentation","Specifications, Certificates of Analysis, quotations, POs and shipment documents exchanged by email."],
  ["Indian and global reach","Supplying buyers in India and export markets, subject to product and destination requirements."]
];
export const CUSTOMERS = ["Nutraceutical and dietary-supplement manufacturers","Ingredient distributors and importers","Contract manufacturers and private-label formulators","Functional food and beverage companies","Cosmetic and personal-care manufacturers","Ayurvedic and traditional-product manufacturers"];
const MAILS = [
  ["info@phytoelements.in","General","Company enquiries and non-product questions."],
  ["sales@phytoelements.in","Sales","New buyers, quotations, pricing, MOQ, lead time and follow-up."],
  ["samples@phytoelements.in","Samples","Sample requests, dispatch details and sample follow-up."],
  ["quality@phytoelements.in","Quality & documents","Specifications, representative or batch COAs, SDS and technical questions."],
  ["orders@phytoelements.in","Orders & commercial","Purchase orders, proforma invoices, acknowledgements, dispatch and shipment."]
];
const DOCS = [
  ["Company profile","PDF","Overview of Phyto Elements, portfolio and operating model.","Email on request · info@"],
  ["Product specification sheet","SPEC","Grade, marker compound, physical parameters and limits per product.","Email on request · quality@"],
  ["Representative COA","COA","Clearly labelled as representative. Indicates the test panel and typical results.","Email on request · quality@"],
  ["Batch-specific COA","COA","Issued after batch identification and matched to the batch reference.","With quotation or order · quality@"],
  ["Safety Data Sheet","SDS","Provided where applicable to the product and transaction.","Email on request · quality@"],
  ["Packing and storage information","INFO","Packing configuration, storage conditions and shelf-life guidance.","Email on request · sales@"],
  ["Quotation and proforma invoice","QUO","Commercial terms for the confirmed specification and quantity.","On enquiry · sales@"],
  ["PO acknowledgement and shipment documents","SHIP","Order confirmation, dispatch and export documentation.","On order · orders@"]
];

const esc = (s: string) => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]!));
const note = (html: string) => `<div class="rnote"><b>Review before launch</b>${html}</div>`;

function batchTag(p: typeof PRODUCTS[number]){
  return `<div class="tag">
    <div class="tag-top"><span class="hole"></span><span>${p.code} · BULK EXTRACT</span><span class="chip ${p.flag?'flag':''}">${esc(p.role)}</span></div>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding-right:18px">
      <div style="min-width:0"><div class="tag-name">${esc(p.name)}</div><div class="tag-src rv">${esc(p.source)}</div></div>
    </div>
    <dl>
      <dt>Plant part</dt><dd class="rv">${esc(p.part)}</dd>
      <dt>Marker</dt><dd>${esc(p.marker.split(",")[0])}</dd>
      <dt>Grade / assay</dt><dd class="req">Per approved specification</dd>
      <dt>Documents</dt><dd>Spec · COA · SDS</dd>
    </dl>
    <div class="tag-foot"><span>Batch No. ________</span><span>Specification-led supply</span></div>
  </div>`;
}

function card(p: typeof PRODUCTS[number]){
  return `<a class="card" href="#${p.id}">
    <div class="card-top"><span class="code">${p.code}</span>${p.flag?'<span class="chip flag">Flagship</span>':`<span class="chip">${esc(p.role.replace(" product",""))}</span>`}</div>
    <div style="display:flex;gap:14px;align-items:center"><div style="min-width:0"><h3>${esc(p.name)}</h3><div class="bot rv">${esc(p.source.split(" (")[0])}</div></div></div>
    <dl><div><dt>Marker</dt><dd>${esc(p.marker.split(",")[0])}</dd></div><div><dt>Use</dt><dd>${esc(p.area.split(",")[0].replace(" formulations",""))}</dd></div></dl>
    <span class="go">View product &amp; enquire →</span>
  </a>`;
}

function processBlock(){
  return `<ol class="process">${STAGES.map(s=>`<li><div class="rail"></div><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("")}</ol>`;
}

function enquiryForm(pre="", type="Quote"){
  return `<enquiry-form product="${pre}" request="${type}"></enquiry-form>`;
}

function formSection({pre="",type="Quote",eyebrow="Enquiry",title="Tell us what you need",band=false,idAttr="enquire"}={}){
  return `<section id="${idAttr}" class="${band?'band':'sunk'}"><div class="wrap form-shell">
    <div class="form-aside">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      <p class="${band?'':'muted'}">State the product, grade and quantity you need. We reply with the specification, sample availability and a quotation from one point of contact.</p>
      <ol class="steps">
        <li><span>We confirm the specification and grade against your requirement.</span></li>
        <li><span>Where requested, a sample is dispatched with its supporting documents.</span></li>
        <li><span>You receive a quotation with packing, MOQ and lead time.</span></li>
      </ol>
      ${note("Online delivery is pending. The form prepares an email draft only; it does not submit or store enquiries. Connect verified delivery and spam protection before launch.")}
    </div>
    ${enquiryForm(pre,type)}
  </div></section>`;
}

function mailsBlock(){
  return `<div class="mails">${MAILS.map(m=>`<div class="mail"><span class="addr">${m[0]}</span><div><div class="fn">${m[1]}</div><p>${m[2]}</p></div><button class="copy" type="button" data-copy="${m[0]}">Copy</button></div>`).join("")}</div>`;
}

/* ---------- views ---------- */
export const views: Record<string, () => string> = {};
const V = views;
V.home = () => `
<section class="hero"><div class="wrap hero-grid">
  <div>
    <span class="eyebrow">Bulk plant extracts · Manufactured in India</span>
    <h1>Bulk Plant Extracts for <em>Global Markets</em></h1>
    <p class="lede">Phyto Elements manufactures bulk plant extracts for Indian and global B2B customers through controlled processing, defined specifications, batch quality documentation and commercially reliable fulfilment.</p>
    <div class="ctas"><a class="btn" href="#sample">Request a Sample</a><a class="btn ghost" href="#products">Explore Products</a></div>
    <div class="hero-meta"><span>Six focus extracts</span><span>Batch-linked COA</span><span>India &amp; export supply</span></div>
  </div>
  ${batchTag(byId.garcinia)}
</div></section>

<section class="sunk"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Who we are</span><h2>A focused partner for specification-driven botanical ingredients</h2>
  <p class="lede">We select, test and supply standardized extracts for ingredient distributors, nutraceutical companies, formulators and contract manufacturers, supported by product specifications, samples, quality documentation and commercial fulfilment.</p></div>
  <div class="values">${VALUES.map(v=>`<div><h3>${v[0]}</h3><p>${v[1]}</p></div>`).join("")}</div>
</div></section>

${flagshipBand()}

<section><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Product portfolio</span><h2>Six extracts, each supplied to an agreed specification</h2>
  <p class="lede">Every product has its own page, specification summary and enquiry form. Additional extracts are added only after quality validation and commercial evaluation.</p></div>
  <div class="cards">${PRODUCTS.map(card).join("")}</div>
</div></section>

<section class="sunk"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">From botanicals to batch</span><h2>Five stages between sourcing and your dock</h2></div>
  ${processBlock()}
</div></section>

<section><div class="wrap two">
  <div class="stack">
    <span class="eyebrow">Why work with Phyto Elements</span>
    <h2 style="font-size:clamp(1.9rem,3.6vw,2.75rem)">Every document traces back to the batch you receive</h2>
    <p class="lede">Our operating role covers extract sourcing, evaluation, quality testing, approval, packing and fulfilment. Customer communication and documentation link directly to the supplied batch and its agreed specification.</p>
    <div><a class="btn ghost" href="#operations">See all nine operating functions</a></div>
  </div>
  <ul class="list">
    ${FUNCS.slice(0,9).map(f=>`<li>${f[0]}</li>`).join("")}
  </ul>
</div></section>

<section class="band"><div class="wrap two">
  <div class="stack">
    <span class="eyebrow">Quality &amp; testing</span>
    <h2 style="font-size:clamp(1.9rem,3.6vw,2.75rem)">Careful selection. Defined quality standards.</h2>
  </div>
  <div class="stack">
    <p class="lede">Phyto Elements acquires botanical extracts and tests them against defined standards and customer requirements. Only material meeting the acceptance criteria is approved for supply under our name, supported by relevant quality and batch documentation.</p>
    <div><a class="btn ghost" href="#manufacturing">Quality &amp; Testing</a></div>
    ${note("Certifications (GMP, ISO, FSSAI, Halal, Kosher, organic), capacity, equipment and in-house testing are intentionally absent. Add only once verified with records.")}
  </div>
</div></section>

${formSection({})}

<section><div class="wrap two">
  <div class="stack"><span class="eyebrow">Contact</span><h2 style="font-size:clamp(1.9rem,3.6vw,2.75rem)">Write to the right desk</h2><p class="muted">Five role-based inboxes keep quotations, samples, documents and orders organised.</p></div>
  ${mailsBlock()}
</div>
<div class="wrap" style="margin-top:28px">${note("Brief item 10: referral or trust content (customers, countries, years in operation) only when supported by evidence. No section is shown until then.")}</div>
</section>`;

function flagshipBand(){
  const p = byId.garcinia;
  return `<section class="band"><div class="wrap flag-grid">
    <div>
      <span class="eyebrow">Flagship · ${p.code}</span>
      <h2>Garcinia Cambogia Extract</h2>
      <p class="lede">${p.intro}</p>
      <div class="flag-specs">
        <div><small>Botanical source</small><span class="rv"><i>Garcinia gummi-gutta</i></span></div>
        <div><small>Plant part</small><span class="rv">${p.part}</span></div>
        <div><small>Quality marker</small><span>Hydroxycitric Acid (HCA)</span></div>
        <div><small>Grade</small><span>Per approved specification</span></div>
      </div>
      <div class="ctas" style="display:flex;flex-wrap:wrap;gap:12px;margin-top:28px"><a class="btn" href="#garcinia">View Garcinia Cambogia</a><a class="btn ghost" href="#sample">Request a sample</a></div>
    </div>
    ${batchTag(p)}
  </div></section>`;
}

V.about = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>About</span></div>
  <h1>About Phyto Elements</h1>
  <p class="lede">An India-based B2B manufacturer of bulk plant extracts and specialty botanical ingredients for Indian and global markets.</p></div></div>
<section><div class="wrap two">
  <div class="prose">
    <p>Phyto Elements develops and manufactures standardized extracts for ingredient distributors, nutraceutical companies, formulators, contract manufacturers and other professional buyers, supported by product specifications, samples, quality documentation and commercial fulfilment.</p>
    <p>Our initial manufacturing portfolio is built around six extracts with applications across nutraceutical, wellness, food, cosmetic and personal-care markets. Garcinia Cambogia Extract is the flagship product. Curcumin, Ashwagandha, Boswellia, Bakuchiol and Bacopa form the remaining focus portfolio.</p>
    <p>Additional extracts are considered only after process development, quality validation and commercial evaluation.</p>
  </div>
  <div class="stack">
    <div class="tag" style="padding:24px"><span class="eyebrow">Positioning</span><p style="font-family:var(--f-display);font-size:1.4rem;line-height:1.3;margin-top:10px;letter-spacing:-.01em">Bulk plant extracts for Indian and global B2B customers, through controlled processing, defined specifications, batch quality documentation and commercially reliable fulfilment.</p></div>
    <p class="callout">Tagline: <b style="color:var(--ink)">Botanical Ingredients for Global Markets</b></p>
  </div>
</div></section>
<section class="sunk"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Who we serve</span><h2>Core customer groups</h2></div>
  <div class="cards">${CUSTOMERS.map((c,i)=>`<div class="card" style="grid-template-rows:auto;cursor:default"><span class="code">${String(i+1).padStart(2,"0")}</span><h3 style="font-size:1.15rem">${c}</h3></div>`).join("")}</div>
</div></section>
<section><div class="wrap">
  <div class="sec-head"><span class="eyebrow">How we create value</span><h2>What buyers get from working with us</h2></div>
  <div class="values">${VALUES.map(v=>`<div><h3>${v[0]}</h3><p>${v[1]}</p></div>`).join("")}</div>
</div></section>`;

V.products = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Products</span></div>
  <h1>Products</h1>
  <p class="lede">Six botanical extracts, selected and evaluated against our quality standards. Explore specifications, supporting documents and sample enquiries.</p></div></div>
<section><div class="wrap">
  <div style="overflow-x:auto;margin-bottom:48px" class="sheet">
    <table style="min-width:720px">
      <thead><tr><th style="width:auto">#</th><th style="width:auto">Product</th><th style="width:auto">Portfolio role</th><th style="width:auto">Quality marker / grade basis</th><th style="width:auto">Primary B2B application</th></tr></thead>
      <tbody>${PRODUCTS.map(p=>`<tr><td class="mono">${p.code.slice(3)}</td><td><a href="#${p.id}" style="font-weight:600">${p.name}</a></td><td>${p.role.replace(" product","")}</td><td>${p.marker}</td><td>${p.area}</td></tr>`).join("")}</tbody>
    </table>
  </div>
  <div class="cards">${PRODUCTS.map(card).join("")}</div>
</div></section>
${formSection({title:"Enquire about any product"})}`;

function productView(p: typeof PRODUCTS[number]){
  const others = PRODUCTS.filter(o=>o.id!==p.id);
  const R = `<span class="req">Shared on request</span>`;
  return `
<div class="ph"><div class="wrap">
  <div class="crumbs"><a href="#home">Home</a>/<a href="#products">Products</a>/<span>${p.short}</span></div>
  <div class="pp-head" style="margin-top:14px">
    <div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span class="chip">${p.code}</span><span class="chip ${p.flag?'flag':''}">${p.role}</span></div>
      <h1>${p.name}</h1>
      <p class="lede">${p.intro}</p>
    </div>
    <div class="actions">
      <a class="btn" href="#${p.id}" data-type="Specifications">Request Specifications</a>
      <a class="btn ghost" href="#${p.id}" data-type="Sample">Request a Sample</a>
      <a class="btn ghost" href="#${p.id}" data-type="Quote">Request a Quote</a>
    </div>
  </div>
</div></div>
<div class="wrap product-specimen"><img src="${productImages[p.id]}" width="1536" height="1024" alt="Botanical composition representing ${esc(p.short)}" /></div>
<section><div class="wrap pp-grid">
  <div class="stack">
    <div class="sheet">
      <div class="sheet-h"><span>PRODUCT SPECIFICATION SUMMARY · ${p.code}</span><span>Representative · not a batch COA</span></div>
      <div style="overflow-x:auto"><table>
        <tr><th>Product</th><td>${p.name}</td></tr>
        <tr><th>Botanical source</th><td class="rv"><i>${p.source}</i></td></tr>
        <tr><th>Plant part</th><td class="rv">${p.part}</td></tr>
        <tr><th>Extract type</th><td>${R}</td></tr>
        <tr><th>Quality marker</th><td>${p.marker}</td></tr>
        <tr><th>Grade / assay range</th><td>${R}</td></tr>
        <tr><th>Appearance</th><td>${R}</td></tr>
        <tr><th>Packing</th><td>${R}</td></tr>
        <tr><th>MOQ</th><td>${R}</td></tr>
        <tr><th>Indicative lead time</th><td>${R}</td></tr>
      </table></div>
      <div class="sheet-f">Grade, assay and physical parameters are confirmed in the product specification sheet. Batch-specific results appear only in the batch Certificate of Analysis.</div>
    </div>
    ${note(`${esc(p.note)}<ul><li>Publish only grades Phyto Elements can manufacture and supply consistently.</li><li>Replace "Shared on request" with verified values (assay range, appearance, packing, MOQ, lead time) once approved.</li></ul>`)}
  </div>
  <aside class="side">
    <div><h3>Application categories</h3><div class="apps">${p.apps.map(a=>`<span>${a}</span>`).join("")}</div><p class="muted" style="font-size:.84rem;margin-top:10px">Supplied as an ingredient for professional formulation. No disease-treatment claims are made for this product.</p></div>
    <div><h3>Documents</h3><div class="docs">
      ${[["Specification sheet","SPEC","Email on request"],["Representative COA","COA","Labelled representative"],["Batch COA","COA","After batch identification"],["Safety Data Sheet","SDS","Where applicable"]].map(d=>`<div class="doc"><span class="ico">${d[1]}</span><div><h4>${d[0]}</h4><p>${d[2]}</p></div></div>`).join("")}
    </div><p class="muted" style="font-size:.84rem;margin-top:10px">Documents are sent from <span class="mono">quality@phytoelements.in</span>.</p></div>
    ${batchTag(p)}
  </aside>
</div></section>
${formSection({pre:p.id,eyebrow:`Enquire · ${p.short}`,title:`Request ${p.short} specifications, samples or a quote`})}
<section><div class="wrap"><div class="stack"><span class="eyebrow">Other extracts</span><div class="others">${others.map(o=>`<a href="#${o.id}">${o.name}</a>`).join("")}</div></div></div></section>`;
}
PRODUCTS.forEach(p=>V[p.id]=()=>productView(p));

V.operations = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Operations</span></div>
  <h1>Operations</h1>
  <p class="lede">Our operating role as an extract manufacturer runs from product and process development through to domestic and export fulfilment. Documentation is linked to the manufactured batch and its approved specification.</p></div></div>
<section><div class="wrap"><ol class="funcs">${FUNCS.map(f=>`<li><h3>${f[0]}</h3><p>${f[1]}</p></li>`).join("")}</ol></div></section>
<section class="band"><div class="wrap two">
  <div class="stack"><span class="eyebrow">One interface</span><h2 style="font-size:clamp(1.9rem,3.6vw,2.6rem)">Specification, sample, price, packing and documents through one point of contact</h2></div>
  <div class="stack"><p class="lede">Technical and commercial records are exchanged by email: specifications, Certificates of Analysis, quotations, purchase orders and shipment documents. No batch COA is sent without confirming the correct product and batch reference.</p><div><a class="btn" href="#contact">Contact our team</a></div></div>
</div></section>`;

V.manufacturing = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Manufacturing &amp; Quality</span></div>
  <h1>Manufacturing &amp; Quality</h1>
  <p class="lede">Controlled, product-specific processing designed around approved specifications and customer requirements.</p></div></div>
<section><div class="wrap two">
  <div class="prose">
    <h2 style="font-size:1.8rem">Controlled extract manufacturing</h2>
    <p>Phyto Elements manufactures bulk botanical extracts using controlled, product-specific processing designed around approved specifications and customer requirements.</p>
    <p>Each commercial batch is supported by defined manufacturing records, applicable quality tests, approved packing and a batch-linked Certificate of Analysis.</p>
  </div>
  <div class="stack">
    ${note(`Verify before going live:<ul><li>Manufacturing-site legal identity and operating authority</li><li>Location and legal name of the manufacturing entity</li><li>Production capacity and equipment claims</li><li>GMP, ISO, FSSAI, organic, Halal, Kosher or other certifications</li><li>In-house vs third-party testing capability</li><li>Extraction solvents and process technologies</li><li>Batch traceability, test panels and release procedures</li><li>Historical volumes, customers, countries, years in operation</li></ul>`)}
    <p class="callout">Certifications, capacity and testing infrastructure will be listed here as they are verified and documented.</p>
  </div>
</div></section>
<section class="sunk"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">From botanicals to batch</span><h2>The five-stage process</h2></div>
  ${processBlock()}
</div></section>
<section><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Quality documentation</span><h2>Representative information and batch-certified information are kept separate</h2></div>
  <div class="kv">
    <div><h3>Specification sheet</h3><p>Defines the grade, marker compound, physical parameters and limits we manufacture to.</p></div>
    <div><h3>Representative COA</h3><p>Clearly labelled as representative. Shows the test panel and typical results for evaluation.</p></div>
    <div><h3>Batch-specific COA</h3><p>Issued against the identified batch, matched to its batch reference, and sent with the shipment documents.</p></div>
  </div>
</div></section>`;

V.resources = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Documents / Resources</span></div>
  <h1>Documents &amp; Resources</h1>
  <p class="lede">Technical and commercial documents are shared by email so each one matches the product, grade and batch you are evaluating.</p></div></div>
<section><div class="wrap two">
  <div class="docs">${DOCS.map(d=>`<div class="doc"><span class="ico">${d[1]}</span><div><h4>${d[0]}</h4><p>${d[2]}</p></div><span class="how">${d[3]}</span></div>`).join("")}</div>
  <div class="stack">
    <h2 style="font-size:1.6rem">Request a document</h2>
    <p class="muted">Use the enquiry form and choose "Request specifications", or write directly to the quality desk.</p>
    <div class="mails">${MAILS.filter(m=>/quality|info/.test(m[0])).map(m=>`<div class="mail"><span class="addr">${m[0]}</span><div><div class="fn">${m[1]}</div></div><button class="copy" type="button" data-copy="${m[0]}">Copy</button></div>`).join("")}</div>
    <div><a class="btn" href="#sample" data-type="Specifications">Request specifications</a></div>
    ${note("Company profile PDF and per-product spec sheets can move to direct downloads once approved. Batch COAs stay email-only.")}
  </div>
</div></section>`;

V.sample = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Request a Sample</span></div>
  <h1>Request a Sample</h1>
  <p class="lede">Tell us the product, grade and application. We confirm the specification, then dispatch a sample with its supporting documents.</p></div></div>
${formSection({type:"Sample",eyebrow:"Sample request",title:"Sample request form",idAttr:"enquire"})}`;

V.contact = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Contact</span></div>
  <h1>Contact</h1>
  <p class="lede">Write to the desk that fits your enquiry, or use the form below.</p></div></div>
<section><div class="wrap two">
  ${mailsBlock()}
  <div class="stack">
    <div class="tag" style="padding:24px;display:grid;gap:14px">
      <span class="eyebrow">Company</span>
      <div style="display:grid;justify-items:start;gap:8px"><img src="/brand/phyto-elements-logo-web.png" width="140" height="145" alt="Phyto Elements" style="width:140px;height:auto;object-fit:contain"/><div class="muted" style="font-family:var(--f-body)">India</div></div>
      <div class="muted rv" style="font-family:var(--f-body);font-size:.92rem">Registered address and legal entity name published after verification.</div>
      <div class="mono" style="font-size:.86rem">phytoelements.in</div>
    </div>
    ${note("Confirm the city and registered address before publication.")}
  </div>
</div></section>
${formSection({title:"Send an enquiry"})}`;

V.privacy = () => `
<div class="ph"><div class="wrap"><div class="crumbs"><a href="#home">Home</a>/<span>Privacy notice</span></div><h1>Privacy notice</h1></div></div>
<section><div class="wrap prose">
  <p>Phyto Elements collects the details you submit through enquiry and sample-request forms (name, company, business email, phone, country, product and order requirements, and any file you attach) to respond to your enquiry, prepare samples, quotations and documents, and manage any resulting order.</p>
  <p>This preview prepares an email draft in your email application. It does not submit your details to a website database or CRM. The production privacy notice will be updated before online enquiry delivery is enabled.</p>
  <p>To access, correct or delete your information, write to <span class="mono">info@phytoelements.in</span>.</p>
  ${note("Draft text. Have this reviewed for DPDP Act 2023 (India) and GDPR where EU buyers are targeted; add cookie controls when analytics are enabled.")}
</div></section>`;

// Current positioning: quality-led selection and supply across the portfolio.
V.about=aboutPage;
V.operations=operationsPage;
V.manufacturing=qualityPage;
