# KS TechX — Website content checklist

Every fact on kstechx.com comes from **`app/data.js`**. Go through this list, tick what is correct, and fix what isn't.
The **line numbers** show where to edit: open `app/data.js` in VS Code, press **Ctrl+G** and type the number.

After editing: save → `git add .` → `git commit -m "Update content"` → `git push` → wait for the deploy → **CDN → Flush cache**.

> ⚠️ **Most important: the Fintech section.** These are financial services — every document, requirement and promise must match exactly what your provider (bank / aggregator) offers. Wrong claims can cause customer complaints or problems with your provider.

---

## 1. Contact details

- [ ] Phone: **+91 99494 99177** (line 8)
- [ ] WhatsApp number: **919949499177** — must have WhatsApp / WhatsApp Business installed (line 10)
- [ ] Email: **info@kstechx.com** — mailbox created in Hostinger and checked daily (line 7)
- [ ] Business hours: currently **empty (hidden)** — add e.g. `"Mon – Sat · 9:30 AM – 7:00 PM"` (line 11)
- [ ] GSTIN shown in footer/contact: **37AYPPC2454H2ZB** — confirm it is correct (in `components/Chrome.js` and `contact/page.js`)

---

## 2. Fintech IDs (check every line with your provider)

### 👆 AEPS Retailer ID — starts at line 270

- [ ] **Badge:** "Most requested"
- [ ] **Overview:** AEPS (Aadhaar Enabled Payment System) lets your customers withdraw cash, check their balance and get a mini statement from their Aadhaar-linked bank account — using only their Aadhaar number and fingerprint. With an AEPS Retailer ID, your shop becomes a trusted banking point for your area.
- [ ] **Earning line:** "Earn commission on every eligible AEPS transaction, as per your plan."
- [ ] **Highlights:** Cash withdrawal (From any Aadhaar-linked bank) · Balance enquiry (Instant, on the spot) · Mini statement (Recent transactions) · Biometric secure (Fingerprint authenticated)
- [ ] **Transaction steps:**
    - Customer gives their Aadhaar number and selects their bank
    - Customer places a finger on the registered biometric device
    - Transaction is authenticated and processed instantly
    - You hand over cash — your wallet is credited, and you earn commission
- [ ] **Eligibility:** Indian citizen, 18 years or above · Running shop / retail outlet · Active bank account in your name
- [ ] **Documents needed:** Aadhaar card · PAN card · Bank account details / cancelled cheque · Shop photo (inside & outside) · Passport-size photo
- [ ] **Equipment needed:** Registered biometric (RD) fingerprint device · Android smartphone or PC · Stable internet connection
- [ ] **FAQs:**
    - *Do customers need a debit card?* → No. AEPS works with the customer's Aadhaar number and fingerprint — their bank account must be linked to Aadhaar.
    - *Which fingerprint device do I need?* → A registered (RD service) biometric device. Our team will guide you on compatible models during onboarding.
    - *How long does activation take?* → Once your KYC documents are verified, activation is usually quick. Our team keeps you updated at every step.

### 📲 UPI Cash Withdrawal Merchant ID — starts at line 308

- [ ] **Badge:** "Fast setup"
- [ ] **Overview:** With a UPI Cash Withdrawal Merchant ID, your counter accepts UPI payments from any UPI app and lets customers withdraw cash by paying through UPI. It is quick, paperless and works with the apps your customers already use every day.
- [ ] **Earning line:** "Earn on eligible transactions and grow daily walk-ins, as per your plan."
- [ ] **Highlights:** UPI QR at counter (All UPI apps supported) · UPI cash withdrawal (Pay via UPI, receive cash) · Quick settlement (As per provider terms) · Transaction reports (Track every payment)
- [ ] **Transaction steps:**
    - Customer scans your merchant QR with any UPI app
    - Customer enters the amount and approves with UPI PIN
    - Payment is confirmed instantly on your app
    - You hand over cash — settlement goes to your bank account
- [ ] **Eligibility:** Indian citizen, 18 years or above · Running shop / business · Active bank account in your name
- [ ] **Documents needed:** Aadhaar card · PAN card · Bank account details / cancelled cheque · Shop photo · Business proof (GST / Udyam / shop licence) if available
- [ ] **Equipment needed:** Android smartphone · Stable internet connection · Printed QR displayed at counter
- [ ] **FAQs:**
    - *Which UPI apps can customers use?* → Any UPI app — PhonePe, Google Pay, Paytm, BHIM, bank apps and more.
    - *When do I receive settlement?* → Settlement goes to your registered bank account as per the provider's settlement terms.
    - *Is GST registration mandatory?* → Not always. Basic KYC is enough for many plans — our team will confirm what applies to you.

### 💳 Credit Card Withdrawal Merchant ID — starts at line 346

- [ ] **Badge:** "High value"
- [ ] **Overview:** A Credit Card Withdrawal Merchant ID lets your business accept Visa and Mastercard credit card transactions through a secure payment channel, with settlement to your bank account. All transactions must be genuine and follow RBI and card-network rules — our team onboards you with full KYC.
- [ ] **Earning line:** "Earn on eligible transactions, as per your plan."
- [ ] **Highlights:** Visa & Mastercard (Credit card acceptance) · Secure payments (Encrypted & authorised) · Bank settlement (As per provider terms) · Merchant dashboard (Track all transactions)
- [ ] **Transaction steps:**
    - Customer chooses to pay by credit card
    - Payment is made via the secure payment link / terminal
    - Card is authorised by the issuing bank
    - Transaction settles to your bank account as per provider terms
- [ ] **Eligibility:** Registered / operating business · Active bank account (current or savings) · Completed merchant KYC
- [ ] **Documents needed:** Aadhaar card · PAN card · Business proof (GST / Udyam / shop licence) · Bank account details / cancelled cheque · Shop photos (inside & outside)
- [ ] **Equipment needed:** Android smartphone or PC · Stable internet connection · Genuine business activity
- [ ] **FAQs:**
    - *Which cards are supported?* → Visa and Mastercard credit cards. For RuPay credit cards, see our RuPay Credit Card Withdrawal Merchant ID.
    - *Are there any rules to follow?* → Yes. Transactions must be genuine and comply with RBI and card-network guidelines. Misuse can lead to the ID being blocked.
    - *What are the charges?* → Charges depend on the plan and provider. Contact us and we will share the current plan details.

### 🟠 RuPay Credit Card Withdrawal Merchant ID — starts at line 384

- [ ] **Badge:** "RuPay on UPI"
- [ ] **Overview:** RuPay credit cards can now be linked to UPI. With a RuPay Credit Card Withdrawal Merchant ID, your counter accepts RuPay credit card payments — by UPI QR or card — with settlement to your bank. All transactions must be genuine and follow RBI and NPCI guidelines.
- [ ] **Earning line:** "Earn on eligible transactions, as per your plan."
- [ ] **Highlights:** RuPay credit cards (India's own network) · RuPay on UPI (Accept via UPI QR) · Bank settlement (As per provider terms) · Merchant reports (Every transaction tracked)
- [ ] **Transaction steps:**
    - Customer scans your QR using a UPI app linked to their RuPay credit card
    - Customer selects the RuPay credit card and approves with UPI PIN
    - Payment is confirmed instantly
    - Settlement goes to your bank account as per provider terms
- [ ] **Eligibility:** Registered / operating business · Active bank account (current or savings) · Completed merchant KYC
- [ ] **Documents needed:** Aadhaar card · PAN card · Business proof (GST / Udyam / shop licence) · Bank account details / cancelled cheque · Shop photos (inside & outside)
- [ ] **Equipment needed:** Android smartphone · Stable internet connection · Printed QR displayed at counter
- [ ] **FAQs:**
    - *What is RuPay credit card on UPI?* → Customers can link their RuPay credit card to UPI apps and pay by scanning a merchant QR — just like a normal UPI payment.
    - *Do I need a card machine?* → Not for RuPay on UPI — a merchant QR is enough.
    - *Are there any rules to follow?* → Yes. Transactions must be genuine and follow RBI and NPCI guidelines. Misuse can lead to the ID being blocked.

**Also check `app/fintech/page.js`:** the comparison table ("Customer pays with", "Device needed", "Business proof") and the 3 common FAQs.

> 💡 Settlement time and charges are written as *"as per provider terms"* / *"as per your plan"* on purpose. Only replace them with exact numbers if your provider guarantees them in writing.

---

## 3. Web services — what you promise to deliver

### 🌐 Website Development — line 21

**Single Page Website** (line 34)
- [ ] Included: Custom one-page design in your brand colours · Hero banner with your main offer · About & services sections · Photo gallery strip · Click-to-call & WhatsApp buttons · Google Maps location · Enquiry / contact form · Social media links · Basic SEO (title & description) · Free SSL (https) setup
- [ ] Best for: Local shops · Freelancers · Home businesses · Events & launches · Personal brands
- [ ] FAQ *Can I upgrade to more pages later?* → Yes. You can move up to a Business or Advanced website any time — your design and content carry over.
- [ ] FAQ *Do you write the content?* → We help structure and polish it. Share your details and photos and we shape them into a professional page.
- [ ] FAQ *Do I need a domain and hosting?* → Yes — we guide you to get a domain and hosting, or set the site up on the ones you already have.

**Business Website (3–5 pages)** (line 69)
- [ ] Included: 3 to 5 custom-designed pages · Home, About, Services, Gallery & Contact · Mobile responsive layout · Enquiry forms on key pages · Testimonials section · Google Maps & business hours · WhatsApp & call buttons · Basic on-page SEO · Social media integration · Free SSL (https) setup
- [ ] Best for: Clinics & hospitals · Schools & coaching · Shops & showrooms · Service businesses · Startups
- [ ] FAQ *How many pages do I get?* → Between 3 and 5 pages — we help you choose the right structure for your business.
- [ ] FAQ *Can I update content later?* → Yes. We can make updates for you, or set up an easy way for you to edit key content.
- [ ] FAQ *Will it show on Google?* → We set up on-page SEO so Google can index your site. Ranking depends on competition and ongoing effort.

**Advanced Website (with child pages)** (line 105)
- [ ] Included: Unlimited parent & child pages · Mega menu navigation · Dynamic, data-driven sections · Premium animations & graphics · Blog / news section · Advanced SEO & structured data · Performance optimisation · Analytics integration · Lead forms on every page · Free SSL (https) setup
- [ ] Best for: Multi-service companies · Growing brands · Institutions · Multi-location businesses · Product catalogues
- [ ] FAQ *What are child pages?* → Pages that sit under a main page — like Web Services → Website Development → Single Page Website. They keep big sites organised and help SEO.
- [ ] FAQ *Is there an example?* → Yes — kstechx.com itself is built as an advanced website with child pages, mega menus and animations.
- [ ] FAQ *Can it grow later?* → Absolutely. New pages, sections and features can be added any time.

### 🧩 Custom Software Solutions — line 144

**Custom Web Application** (line 157)
- [ ] Included: Requirement discovery & planning · Custom UI/UX design · Admin & user dashboards · Role-based login & permissions · Reports & exports · Payment gateway integration · Third-party API integration · Cloud deployment · Training & handover · Ongoing support & updates
- [ ] Best for: CRM & lead management · Billing & invoicing · Inventory & stock · Booking & appointments · HR & attendance · Custom portals
- [ ] FAQ *How long does it take?* → It depends on scope. After discovery we share a clear plan with milestones before we start.
- [ ] FAQ *Who owns the software?* → Ownership and licensing terms are agreed in writing before development begins.
- [ ] FAQ *Do you support it after launch?* → Yes — we offer ongoing support, fixes and feature updates.

### 📱 Custom Mobile App Development — line 197

**Custom Android Application** (line 210)
- [ ] Included: App planning & wireframes · Custom UI/UX design · Login & user accounts · Push notifications · Payment integration · Admin panel / backend · API integration · Testing on real devices · Google Play publishing · Support & updates
- [ ] Best for: Ordering & delivery · Booking & services · Loyalty & rewards · Field staff & sales · Customer support
- [ ] FAQ *Do you build iOS apps?* → Our focus is custom Android apps. Talk to us if you also need iOS.
- [ ] FAQ *Will you publish it on Google Play?* → Yes — we handle the Play Store publishing process using your developer account.
- [ ] FAQ *Can the app connect to my website?* → Yes — your app and website can share the same backend and data.

> 💡 **No prices are shown anywhere** — every button says "Get a quote". If you want starting prices (e.g. *"from ₹4,999"*), send me the amounts and I'll add them neatly.

---

## 4. Partner program

- [ ] Joining rule: **Purchase any one KS TechX product or service worth ₹1,000 or more** (minimum **₹1,000**) — line 462
- [ ] "Commission on every sale" — your written commission structure is ready before partners join
- [ ] Partner benefits (line 474):
    - Commission on every sale — Every sale you bring in earns you commission — websites, software, apps or fintech IDs.
    - Many services to sell — One partnership, many products. Offer your customers exactly what they need.
    - Expand your reach — Offer KS TechX services to shops and businesses across your town and district.
    - Transparent tracking — Know what you've sold and what you've earned — clear and on time.
    - Training & support — We help you pitch, close and deliver. You're never on your own.
    - Simple entry — from ₹1,000 — Purchase any one KS TechX product worth ₹1,000 or more, use it in your own business, and start earning.
- [ ] Commission is paid only on genuine customer sales (never for recruiting other partners) — keep your agreement this way for legal safety

---

## 5. Numbers shown on the site

Stats strip (line 522): 3 Web services · 3 Website packages · 4 Fintech IDs · 100% Built in-house
- [ ] All numbers are true today (they describe your services, not customer counts)
- [ ] When you have real results, add them: *"100+ retailers onboarded"*, *"50+ websites delivered"* — only real numbers

---

## 6. Add when you have them (builds trust fast)

- [ ] **Real customer reviews** (name, town, service) → I can add a testimonials section
- [ ] **Office address** (or "Serving all of Andhra Pradesh") → Contact page + Google
- [ ] **Real photos:** you/your team, office, a retailer using your AEPS device — they convert far better than illustrations
- [ ] **Portfolio:** 3–6 websites/apps you've built → an "Our work" page
- [ ] **Provider/partner logos** — only with written permission
- [ ] **Privacy Policy & Terms pages** — needed before running Google/Meta ads, and recommended for fintech
