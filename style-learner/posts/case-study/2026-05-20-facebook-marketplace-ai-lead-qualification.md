# Post: Facebook Marketplace AI Lead Qualification Case Study — dmytroai.com
**Date:** 2026-05-20
**Platform:** case-study
**Language:** en
**Client:** Manulift / Aaron Gaudun-Ungar — portfolio case study source
**Slug:** /case-studies/facebook-marketplace-ai-lead-qualification

## Final Published Text

Title: Facebook Marketplace AI Lead Qualification Workflow
Subtitle: How a heavy-equipment sales team turned messy Marketplace listings into AI-classified, review-ready leads in Google Sheets

Metrics:
- Cost Per Qualified Lead: 8¢
- Manual Review Saved: 13+ hrs/week
- Review Capacity: 3x

Challenge:
1. Only about 10% of scraped Marketplace listings were useful enough for sales review, which meant the team had to filter through a lot of dealers, rentals, duplicates, and low-fit listings before finding real opportunities.
2. Each listing needed context before someone could decide whether it was worth pursuing: seller type, equipment details, likely fit, and whether the lead looked like a private seller or a commercial dealer.
3. The manual review process could work at low volume, but it made lead cost and review capacity hard to control as more Marketplace listings were scraped.

Solution:
1. Built an n8n workflow that reads listing rows from Google Sheets, enriches the listing context through Apify/Facebook Marketplace scraping, and prepares each record for AI review.
2. Used GPT-4o-mini / AI qualification logic to classify each seller as private seller, dealer, rental, uncertain, or disqualified, with structured reasoning attached to the row.
3. Sent the qualified status and review notes back into Google Sheets so the sales team could focus on the leads most likely to be worth a human follow-up.

How It Works: Marketplace Listings → Data Enrichment → AI Seller Classification → Review-Ready Lead Sheet

Tech Stack: n8n, Apify, Facebook Marketplace scraping, GPT-4o-mini, Google Sheets

Results: 8¢ / qualified lead, 13+ hours per week of manual review saved, 3x review capacity.

Caveat: These are modeled portfolio metrics based on workflow assumptions, not audited client-reported production results. Replace with measured client data when available.

## Style Notes
- Case-study copy stays practical and proof-driven: raw listings enter, n8n enriches, AI classifies, Sheets receives review-ready rows.
- Metrics are visible, but the caveat is also visible because the numbers are modeled rather than client-audited.
- Tone is direct and credible, with no fake certainty around production impact.
