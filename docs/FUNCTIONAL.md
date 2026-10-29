# Phyto Elements functional specification

## Existing foundation
The app now migrates all 15 prototype views: home, product index, six product detail pages and seven company/contact pages. Content renders on the server with shared section renderers and React components for navigation, forms, theme controls and email copying. The original HTML is preserved as a reference. Copy still requires client verification.

The migrated enquiry form validates required fields in the browser and prepares a mailto draft for explicit user review/send. It does not persist leads, upload files or claim delivery. Sample drafts copy samples@. Specification attachments must be added in the email application. Production enquiry delivery remains a separate tracked phase.

## Enquiries
Server-side Zod validation plus browser feedback. Turnstile server verification, rate limiting, honeypot and request size limits. Persist the lead in D1 before claiming success; store an idempotency key. Queue notification to sales@phytoelements.in, also samples@phytoelements.in for samples. Queue/CRM retries must be idempotent. Handle database-success/queue-failure with an outbox reconciliation path. Never show a false success or send mail from browser code. Production requires verified sender, delivery provider, privacy text, retention and CRM mapping.

## Chatbot
AI SDK and Anthropic server provider; model identifier supplied by environment after evaluation. Retrieve only approved public content and provide source URLs. Product lookup and enquiry creation are separately validated tools. No invented specifications, certifications, prices, stock or delivery dates. User confirms a lead before submission. Refuse unsupported assertions, offer sales handoff. Version knowledge entries and record source IDs. Re-index after approved content publication.

Evaluate product selection, unsupported medical claims, fabricated grades, contradictory sources, prompt injection, PII handling, empty retrieval, rate limits, stream interruption and provider failure. Retrieval is not a guarantee of truth. Add token and rate limits server-side; never log raw secrets or full lead messages by default. Vectorize requires an explicitly chosen embedding model and matching vector dimensions. D1 stores approved metadata, not an unlimited chat archive.

## Delivery architecture
Next.js App Router on Cloudflare Workers via OpenNext. Browser-only GSAP, Lenis, Motion and R3F must not execute during server rendering. Worker code cannot assume writable filesystem or native Node binaries. Separate queue consumer handles outbound deliveries. Credentials use Worker secrets, local .dev.vars and CI secret storage.

## Release gates
A feature flag must remain false until implementation, validation, error handling and acceptance evidence exist. All requested capabilities are in scope; disabled flags mean unfinished, not removed. Live Cloudflare resources, sender and model provider are not provisioned by this scaffold.
