# GEO Tracking Watchlist

Repeatable measurement system for checking whether dmytroai.com gets cited, mentioned, or paraphrased by AI answer engines.

## Canonical Prompt Source

Tracked pages and prompts live in `scripts/geo-prompts.json`.
That file is the source of truth for both the automated runner and manual spot checks.

## Current Tracked Pages

This watchlist is intentionally bounded. It covers the highest-value decision, comparison, geo, workflow, and vertical pages without turning the weekly run into noise or runaway API spend.

**Current watchlist size:** 395 tracked pages in `scripts/geo-prompts.json`.

**Maintenance rule:** when pages are added to or removed from `scripts/geo-prompts.json`, update this section in the same change so the human-readable watchlist stays aligned with the runner's source of truth.

### Strategy + comparison pages (38)
- **Affordable AI Automation for Small Business** — `/affordable-ai-automation-small-business`
- **AI Appointment Setter vs Receptionist** — `/ai-appointment-setter-vs-receptionist`
- **AI Appointment Setter vs Virtual Assistant** — `/ai-appointment-setter-vs-virtual-assistant`
- **Appointment Scheduling & Reminder Automation vs. AI Appointment Setter for Service Businesses** — `/appointment-scheduling-and-reminder-automation-vs-ai-appointment-setter-for-service-businesses`
- **AI Automation Consultant for Small Business** — `/ai-automation-consultant-small-business`
- **AI Automation Consultant Pricing for Small Business** — `/ai-automation-consultant-pricing-small-business`
- **AI Automation Consultant vs Freelancer** — `/ai-automation-consultant-vs-freelancer`
- **AI Automation Cost for Small Business** — `/ai-automation-cost-small-business`
- **AI Automation for Businesses Without a Tech Team** — `/ai-automation-for-businesses-without-a-tech-team`
- **AI Automation Implementation Roadmap** — `/ai-automation-implementation-roadmap`
- **AI Automation ROI Calculator** — `/ai-automation-roi-calculator`
- **AI Automation ROI Guide** — `/ai-automation-roi-guide`
- **AI Automation Time Savings for Small Business** — `/ai-automation-time-savings-small-business`
- **AI Automation Maintenance and Support for Small Business** — `/ai-automation-maintenance-and-support-small-business`
- **AI Voice Agent vs Call Center** — `/ai-voice-agent-vs-call-center`
- **AI Voice Agent vs Answering Service for Small Business** — `/ai-voice-agent-vs-answering-service-for-small-business`
- **AI Voice Agent vs Human Appointment Setter** — `/ai-voice-agent-vs-human-appointment-setter`
- **AI Voice Agent vs Voicemail** — `/ai-voice-agent-vs-voicemail`
- **AI Voice Agent vs. Manual Callback for Service Businesses** — `/ai-voice-agent-vs-manual-callback-for-service-businesses`
- **Build vs Buy AI Automation** — `/build-vs-buy-ai-automation`
- **GoHighLevel vs. HubSpot for Small Business** — `/gohighlevel-vs-hubspot-small-business`
- **GoHighLevel vs. Keap for Small Business** — `/gohighlevel-vs-keap-small-business`
- **GoHighLevel vs. Pipedrive for Small Business** — `/gohighlevel-vs-pipedrive-small-business`
- **GoHighLevel vs. ActiveCampaign for Small Business** — `/gohighlevel-vs-activecampaign-small-business`
- **Hire an AI Automation Consultant vs Agency** — `/hire-ai-automation-consultant-vs-agency`
- **Hire an AI Automation Consultant vs. DIY** — `/hire-ai-automation-consultant-vs-diy`
- **AI Automation Consultant vs. In-House Hire** — `/hire-ai-automation-consultant-vs-in-house`
- **How to Hire an AI Automation Consultant** — `/how-to-hire-ai-automation-consultant`
- **How to Hire an n8n Automation Consultant** — `/how-to-hire-n8n-automation-consultant`
- **n8n Automation Consultant Cost for Small Business** — `/n8n-automation-consultant-cost-small-business`
- **n8n Automation Consultant for Small Business** — `/n8n-automation-consultant`
- **n8n Consultant vs. DIY for Small Business** — `/n8n-consultant-vs-diy-small-business`
- **n8n vs Make for Small Business** — `/n8n-vs-make-small-business`
- **Make vs Zapier for Small Business** — `/make-vs-zapier-small-business`
- **n8n vs Zapier for Small Business** — `/n8n-vs-zapier-small-business`
- **Retell vs Bland AI for Small Business** — `/retell-vs-bland-small-business`
- **VAPI vs Retell for Small Business** — `/vapi-vs-retell-small-business`
- **What Does an AI Automation Consultant Actually Do?** — `/what-does-an-ai-automation-consultant-do`
- **What Processes Can AI Automate in My Business?** — `/what-processes-can-ai-automate-in-my-business`
- **What to Automate First for Service Businesses** — `/what-to-automate-first-for-service-businesses`

### Workflow + solution pages (63)
- **After-Hours Lead Capture** — `/after-hours-lead-capture-for-service-businesses`
- **AI Appointment Setter** — `/ai-appointment-setter`
- **AI Appointment Setter Cost for Small Business** — `/ai-appointment-setter-cost-small-business`
- **AI Appointment Setter for Home Service Businesses** — `/ai-appointment-setter-for-home-service-businesses`
- **AI Appointment Setter ROI for Small Business** — `/ai-appointment-setter-roi-small-business`
- **AI Appointment Setter Setup Help** — `/ai-appointment-setter-setup`
- **AI Appointment Setter Setup vs. DIY for Small Business** — `/ai-appointment-setter-setup-vs-diy-small-business`
- **Appointment Scheduling and Reminder Automation for Service Businesses** — `/appointment-scheduling-and-reminder-automation-for-service-businesses`
- **Appointment Scheduling and Reminder Automation for Accounting Firms** — `/appointment-scheduling-and-reminder-automation-for-accounting-firms`
- **Seasonal Client Reactivation for Accounting Firms** — `/seasonal-client-reactivation-for-accounting-firms`
- **AI Lead Follow-Up for Accounting Firms** — `/ai-lead-follow-up-for-accounting-firms`
- **AI Phone Answering for Accounting Firms** — `/ai-phone-answering-for-accounting-firms`
- **AI Phone Answering Cost for Accounting Firms** — `/ai-phone-answering-cost-for-accounting-firms`
- **Missed Call Text-Back vs. AI Phone Answering for Accounting Firms** — `/missed-call-text-back-vs-ai-phone-answering-for-accounting-firms`
- **Consultation Scheduling and Reminder Automation for Law Firms** — `/consultation-scheduling-and-reminder-automation-for-law-firms`
- **No-Show Reduction Automation for Law Firms** — `/no-show-reduction-automation-for-law-firms`
- **AI Lead Follow-Up for Law Firms** — `/ai-lead-follow-up-for-law-firms`
- **Intake and Conflict-Check Automation for Law Firms** — `/intake-and-conflict-check-automation-for-law-firms`
- **Unretained-Consult Follow-Up for Law Firms** — `/unretained-consult-follow-up-for-law-firms`
- **Case Status Update Automation for Law Firms** — `/case-status-update-automation-for-law-firms`
- **AI Phone Answering for Law Firms** — `/ai-phone-answering-for-law-firms`
- **Missed Call Text-Back for Law Firms** — `/missed-call-text-back-for-law-firms`
- **AI Email Sequence Automation** — `/ai-email-sequence-automation`
- **AI Lead Follow-Up Cost for Small Business** — `/ai-lead-follow-up-cost-small-business`
- **AI Lead Follow-Up for Service Businesses** — `/ai-lead-follow-up-for-service-businesses`
- **AI Lead Follow-Up ROI for Small Business** — `/ai-lead-follow-up-roi-small-business`
- **AI Voice Agent Cost for Small Business** — `/ai-voice-agent-cost-small-business`
- **AI Phone Answering Cost for Small Business** — `/ai-phone-answering-cost-small-business`
- **AI Phone Answering Setup for Small Business** — `/ai-phone-answering-setup-small-business`
- **AI Phone Answering ROI for Small Business** — `/ai-phone-answering-roi-small-business`
- **AI Phone Answering Setup vs. DIY for Small Business** — `/ai-phone-answering-setup-vs-diy-small-business`
- **AI Voice Agent for Lead Qualification** — `/ai-voice-agent-lead-qualification`
- **AI Voice Agent Launch Checklist for Small Business** — `/ai-voice-agent-launch-checklist-small-business`
- **AI Voice Agent ROI for Lead Follow-Up** — `/ai-voice-agent-roi-for-lead-follow-up`
- **AI Voice Agent Setup Cost for Small Business** — `/ai-voice-agent-setup-cost-small-business`
- **AI Voice Agent Setup for Lead Qualification** — `/ai-voice-agent-setup-for-lead-qualification`
- **AI Voice Agent Setup Mistakes for Small Business** — `/ai-voice-agent-setup-mistakes-small-business`
- **AI Voice Agent Setup vs. DIY for Small Business** — `/ai-voice-agent-setup-vs-diy-small-business`
- **Client Onboarding Automation** — `/client-onboarding-automation`
- **Client Onboarding Automation for Accounting Firms** — `/client-onboarding-automation-for-accounting-firms`
- **Intake Forms and Document Collection Automation for Service Businesses** — `/intake-forms-and-document-collection-automation-for-service-businesses`
- **Client Reactivation Automation for Service Businesses** — `/client-reactivation-automation-for-service-businesses`
- **Client Reactivation Cost for Small Business** — `/client-reactivation-cost-small-business`
- **Client Reactivation ROI for Small Business** — `/client-reactivation-roi-small-business`
- **Contact Form Autoresponder vs. Full Lead Follow-Up** — `/contact-form-autoresponder-vs-full-lead-follow-up`
- **Contact Form Lead Follow-Up Automation** — `/contact-form-lead-follow-up-automation`
- **Review Request Automation for Service Businesses** — `/review-request-automation-for-service-businesses`
- **Referral Request Automation for Service Businesses** — `/referral-request-automation-for-service-businesses`
- **Review Request vs. Referral Request for Service Businesses** — `/review-request-vs-referral-request-for-service-businesses`
- **E-Commerce CRM Automation vs. Manual Follow-Up** — `/ecommerce-crm-automation-vs-manual-follow-up`
- **E-Commerce CRM Automation with AI Follow-Up** — `/ecommerce-crm-automation-with-ai-follow-up`
- **GoHighLevel Account Audit Checklist** — `/gohighlevel-account-audit-checklist`
- **GoHighLevel Account Cleanup Service** — `/gohighlevel-account-cleanup-service`
- **GoHighLevel Account Cleanup vs. Rebuild** — `/gohighlevel-account-cleanup-vs-rebuild`
- **GoHighLevel Automation Setup & Expert Help** — `/gohighlevel-automation-setup`
- **GoHighLevel Automation Consultant for Small Business** — `/gohighlevel-automation-consultant`
- **GoHighLevel Consultant vs. Setup Help** — `/gohighlevel-consultant-vs-setup-help`
- **GoHighLevel Automation Consultant Cost for Small Business** — `/gohighlevel-automation-consultant-cost-small-business`
- **GoHighLevel Setup Cost for Small Business** — `/gohighlevel-setup-cost-small-business`
- **GoHighLevel Setup Mistakes for Small Business** — `/gohighlevel-setup-mistakes-small-business`
- **GoHighLevel Setup vs. DIY for Small Business** — `/gohighlevel-setup-vs-diy-small-business`
- **Instant Lead Response Automation** — `/instant-lead-response-automation`
- **Missed Call Follow-Up Automation** — `/missed-call-follow-up-automation`
- **Missed Call Text-Back for Service Businesses** — `/missed-call-text-back-for-service-businesses`
- **Missed Call Text-Back Cost for Small Business** — `/missed-call-text-back-cost-small-business`
- **Missed Call Text-Back ROI for Small Business** — `/missed-call-text-back-roi-small-business`
- **Missed Call Text-Back vs. AI Phone Answering for Service Businesses** — `/missed-call-text-back-vs-ai-phone-answering-for-service-businesses`
- **Estimate Follow-Up Automation for Service Businesses** — `/estimate-follow-up-automation-for-service-businesses`
- **Estimate Follow-Up vs. Quote Follow-Up for Service Businesses** — `/estimate-follow-up-vs-quote-follow-up-for-service-businesses`
- **Quote Follow-Up Automation for Service Businesses** — `/quote-follow-up-automation-for-service-businesses`
- **n8n Automation Examples for Small Business** — `/n8n-automation-examples-small-business`
- **n8n Automation Setup for Small Business** — `/n8n-automation-setup-for-small-business`
- **n8n Workflow Audit Checklist** — `/n8n-workflow-audit-checklist`
- **n8n Workflow Cleanup Service** — `/n8n-workflow-cleanup-service`
- **n8n Workflow Cleanup vs. Rebuild** — `/n8n-workflow-cleanup-vs-rebuild`
- **Roofing Scheduling and Follow-Up Automation** — `/roofing-scheduling-and-follow-up-automation`

### Geo + local consultant pages (7)
- **AI Automation Consultant Calgary** — `/ai-automation-consultant-calgary`
- **AI Automation Consultant Edmonton** — `/ai-automation-consultant-edmonton`
- **AI Automation Consultant Vancouver** — `/ai-automation-consultant-vancouver`
- **AI Automation Consultant Toronto** — `/ai-automation-consultant-toronto`
- **AI Automation Consultant Ottawa** — `/ai-automation-consultant-ottawa`
- **AI Automation Consultant Ontario** — `/ai-automation-consultant-ontario`
- **AI Automation Consultant British Columbia** — `/ai-automation-consultant-british-columbia`

### Industry + vertical pages (229)
- **After-Hours AI Phone Answering vs. Voicemail for Restaurants** — `/after-hours-ai-phone-answering-vs-voicemail-for-restaurants`
- **After-Hours Maintenance Triage for Property Management Companies** — `/after-hours-maintenance-triage-for-property-management-companies`
- **After-Hours Phone Answering for Restaurants** — `/after-hours-phone-answering-for-restaurants`
- **After-Hours Tenant Communication for Property Management Companies** — `/after-hours-tenant-communication-for-property-management-companies`
- **AI Automation for Auto Parts E-Commerce** — `/ai-automation-for-auto-parts-ecommerce`
- **AI Automation for Auto Repair Shops** — `/ai-automation-for-auto-repair-shops`
- **AI Automation for E-Commerce Brands** — `/ai-automation-ecommerce`
- **What to Automate First for E-Commerce Brands** — `/what-to-automate-first-for-ecommerce-brands`
- **AI Automation for HVAC Companies** — `/ai-automation-for-hvac-companies`
- **AI Automation for Insurance Agencies** — `/ai-automation-for-insurance-agencies`
- **AI Automation for Pest Control Companies** — `/ai-automation-for-pest-control-companies`
- **AI Automation for Pool Service Companies** — `/ai-automation-for-pool-service-companies`
- **What to Automate First for Pool Service Companies** — `/what-to-automate-first-for-pool-service-companies`
- **AI Lead Follow-Up for Pool Service Companies** — `/ai-lead-follow-up-for-pool-service-companies`
- **Quote Follow-Up Automation for Pool Service Companies** — `/quote-follow-up-automation-for-pool-service-companies`
- **Recurring Service Reminder Automation for Pool Service Companies** — `/recurring-service-reminder-automation-for-pool-service-companies`
- **Seasonal Opening and Closing Outreach for Pool Service Companies** — `/seasonal-opening-and-closing-outreach-for-pool-service-companies`
- **Review Request Automation for Pool Service Companies** — `/review-request-automation-for-pool-service-companies`
- **Missed Call Text-Back for Pool Service Companies** — `/missed-call-text-back-for-pool-service-companies`
- **Missed Call Text-Back vs. Voicemail for Pool Service Companies** — `/missed-call-text-back-vs-voicemail-for-pool-service-companies`
- **AI Phone Answering for Pool Service Companies** — `/ai-phone-answering-for-pool-service-companies`
- **AI Phone Answering vs. Voicemail for Pool Service Companies** — `/ai-phone-answering-vs-voicemail-for-pool-service-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Pool Service Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-pool-service-companies`
- **AI Automation for Property Management** — `/ai-automation-for-property-management`
- **AI Automation for Real Estate** — `/ai-automation-for-real-estate`
- **AI Automation for Restaurants** — `/ai-automation-for-restaurants`
- **AI Automation for Roofing Companies** — `/ai-automation-for-roofing-companies`
- **AI Automation for Solar Companies** — `/ai-automation-for-solar-companies`
- **What to Automate First for Solar Companies** — `/what-to-automate-first-for-solar-companies`
- **Utility Bill Collection Automation for Solar Companies** — `/utility-bill-collection-automation-for-solar-companies`
- **AI Lead Follow-Up for Solar Companies** — `/ai-lead-follow-up-for-solar-companies`
- **Quote Follow-Up Automation for Solar Companies** — `/quote-follow-up-automation-for-solar-companies`
- **Appointment Scheduling and Reminder Automation for Solar Companies** — `/appointment-scheduling-and-reminder-automation-for-solar-companies`
- **AI Phone Answering for Solar Companies** — `/ai-phone-answering-for-solar-companies`
- **AI Phone Answering vs. Voicemail for Solar Companies** — `/ai-phone-answering-vs-voicemail-for-solar-companies`
- **Missed Call Text-Back for Solar Companies** — `/missed-call-text-back-for-solar-companies`
- **Missed Call Text-Back vs. Voicemail for Solar Companies** — `/missed-call-text-back-vs-voicemail-for-solar-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Solar Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-solar-companies`
- **Project Status Update Automation for Solar Companies** — `/project-status-update-automation-for-solar-companies`
- **AI Lead Follow-Up for Insurance Agencies** — `/ai-lead-follow-up-for-insurance-agencies`
- **After-Hours Inquiry Handling for Insurance Agencies** — `/after-hours-inquiry-handling-for-insurance-agencies`
- **Referral Request Automation for Insurance Agencies** — `/referral-request-automation-for-insurance-agencies`
- **Appointment Scheduling and Reminder Automation for Insurance Agencies** — `/appointment-scheduling-and-reminder-automation-for-insurance-agencies`
- **Missed Call Text-Back for Insurance Agencies** — `/missed-call-text-back-for-insurance-agencies`
- **Missed Call Text-Back vs. Voicemail for Insurance Agencies** — `/missed-call-text-back-vs-voicemail-for-insurance-agencies`
- **Missed Call Text-Back vs. AI Phone Answering for Insurance Agencies** — `/missed-call-text-back-vs-ai-phone-answering-for-insurance-agencies`
- **AI Phone Answering for Insurance Agencies** — `/ai-phone-answering-for-insurance-agencies`
- **AI Phone Answering vs. Voicemail for Insurance Agencies** — `/ai-phone-answering-vs-voicemail-for-insurance-agencies`
- **AI Automation for Mortgage Brokers** — `/ai-automation-for-mortgage-brokers`
- **AI Lead Follow-Up for Mortgage Brokers** — `/ai-lead-follow-up-for-mortgage-brokers`
- **AI Phone Answering for Mortgage Brokers** — `/ai-phone-answering-for-mortgage-brokers`
- **AI Phone Answering vs. Voicemail for Mortgage Brokers** — `/ai-phone-answering-vs-voicemail-for-mortgage-brokers`
- **Referral Request Automation for Mortgage Brokers** — `/referral-request-automation-for-mortgage-brokers`
- **AI Lead Follow-Up for Auto Repair Shops** — `/ai-lead-follow-up-for-auto-repair-shops`
- **AI Lead Follow-Up for Med Spas** — `/ai-lead-follow-up-for-med-spas`
- **AI Lead Follow-Up for Pest Control Companies** — `/ai-lead-follow-up-for-pest-control-companies`
- **AI Lead Follow-Up for Plumbing Companies** — `/ai-lead-follow-up-for-plumbing-companies`
- **AI Phone Answering for Auto Repair Shops** — `/ai-phone-answering-for-auto-repair-shops`
- **AI Phone Answering for Chiropractors** — `/ai-phone-answering-for-chiropractors`
- **AI Phone Answering for Cleaning Companies** — `/ai-phone-answering-for-cleaning-companies`
- **AI Phone Answering for Home Inspectors** — `/ai-phone-answering-for-home-inspectors`
- **Real Estate Agent Nurture for Home Inspectors** — `/real-estate-agent-nurture-for-home-inspectors`
- **AI Phone Answering for HVAC Companies** — `/ai-phone-answering-for-hvac-companies`
- **AI Phone Answering for Landscaping Companies** — `/ai-phone-answering-for-landscaping-companies`
- **AI Phone Answering for Med Spas** — `/ai-phone-answering-for-med-spas`
- **AI Phone Answering for Painting Contractors** — `/ai-phone-answering-for-painting-contractors`
- **AI Phone Answering for Pest Control Companies** — `/ai-phone-answering-for-pest-control-companies`
- **AI Phone Answering for Plumbing Companies** — `/ai-phone-answering-for-plumbing-companies`
- **AI Phone Answering for Roofing Companies** — `/ai-phone-answering-for-roofing-companies`
- **AI Phone Answering vs. Voicemail for Auto Repair Shops** — `/ai-phone-answering-vs-voicemail-for-auto-repair-shops`
- **AI Phone Answering vs. Voicemail for Chiropractors** — `/ai-phone-answering-vs-voicemail-for-chiropractors`
- **AI Phone Answering vs. Voicemail for Cleaning Companies** — `/ai-phone-answering-vs-voicemail-for-cleaning-companies`
- **AI Phone Answering vs. Voicemail for Home Inspectors** — `/ai-phone-answering-vs-voicemail-for-home-inspectors`
- **AI Phone Answering vs. Voicemail for HVAC Companies** — `/ai-phone-answering-vs-voicemail-for-hvac-companies`
- **AI Phone Answering vs. Voicemail for Law Firms** — `/ai-phone-answering-vs-voicemail-for-law-firms`
- **AI Phone Answering vs. Voicemail for Landscaping Companies** — `/ai-phone-answering-vs-voicemail-for-landscaping-companies`
- **AI Phone Answering vs. Voicemail for Med Spas** — `/ai-phone-answering-vs-voicemail-for-med-spas`
- **AI Phone Answering vs. Voicemail for Painting Contractors** — `/ai-phone-answering-vs-voicemail-for-painting-contractors`
- **AI Phone Answering vs. Voicemail for Pest Control Companies** — `/ai-phone-answering-vs-voicemail-for-pest-control-companies`
- **AI Phone Answering vs. Voicemail for Plumbing Companies** — `/ai-phone-answering-vs-voicemail-for-plumbing-companies`
- **AI Phone Answering vs. Voicemail for Roofing Companies** — `/ai-phone-answering-vs-voicemail-for-roofing-companies`
- **AI Voice Agent for Restaurants** — `/ai-voice-agent-for-restaurants`
- **Appointment Scheduling and Reminder Automation for Auto Repair Shops** — `/appointment-scheduling-and-reminder-automation-for-auto-repair-shops`
- **Appointment Scheduling and Reminder Automation for Electrical Contractors** — `/appointment-scheduling-and-reminder-automation-for-electrical-contractors`
- **Appointment Scheduling and Reminder Automation for Plumbing Companies** — `/appointment-scheduling-and-reminder-automation-for-plumbing-companies`
- **Care Plan Recall Automation for Chiropractors** — `/care-plan-recall-automation-for-chiropractors`
- **Client Reactivation Automation for Cleaning Companies** — `/client-reactivation-automation-for-cleaning-companies`
- **Client Reactivation Automation for Plumbing Companies** — `/client-reactivation-automation-for-plumbing-companies`
- **Client Reactivation Automation for Auto Repair Shops** — `/client-reactivation-automation-for-auto-repair-shops`
- **Client Reactivation Automation for Real Estate Teams** — `/client-reactivation-automation-for-real-estate-teams`
- **Client Reactivation Automation for Roofing Companies** — `/client-reactivation-automation-for-roofing-companies`
- **Consultation Booking and Reminder Automation for Med Spas** — `/consultation-booking-and-reminder-automation-for-med-spas`
- **Referral Request Automation for Roofing Companies** — `/referral-request-automation-for-roofing-companies`
- **CRM Automation for Contractors** — `/crm-automation-for-contractors`
- **CRM Automation Setup Cost for Contractors** — `/crm-automation-setup-cost-for-contractors`
- **CRM Automation Setup for Contractors** — `/crm-automation-setup-for-contractors`
- **CRM Automation Setup vs. DIY for Contractors** — `/crm-automation-setup-vs-diy-for-contractors`
- **CRM Automation vs. Manual Follow-Up for Auto Parts E-Commerce** — `/crm-automation-vs-manual-follow-up-for-auto-parts-ecommerce`
- **CRM Pipeline Stages for Contractors** — `/crm-pipeline-stages-for-contractors`
- **CRM Cleanup and Routing for Real Estate Teams** — `/crm-cleanup-and-routing-for-real-estate-teams`
- **CRM Cleanup vs Lead Follow-Up for Real Estate Teams** — `/crm-cleanup-vs-lead-follow-up-for-real-estate-teams`
- **Missed Call Text-Back for Real Estate Agents** — `/missed-call-text-back-for-real-estate-agents`
- **AI Phone Answering for Real Estate Agents** — `/ai-phone-answering-for-real-estate-agents`
- **AI Phone Answering vs. Voicemail for Real Estate Agents** — `/ai-phone-answering-vs-voicemail-for-real-estate-agents`
- **Review Request Automation for Real Estate Agents** — `/review-request-automation-for-real-estate-agents`
- **Referral Request Automation for Real Estate Agents** — `/referral-request-automation-for-real-estate-agents`
- **Missed Call Text-Back vs. AI Phone Answering for Real Estate Agents** — `/missed-call-text-back-vs-ai-phone-answering-for-real-estate-agents`

- **Cross-Sell Automation for Insurance Agencies** — `/cross-sell-automation-for-insurance-agencies`
- **Customer Inquiry Automation for Auto Parts E-Commerce** — `/customer-inquiry-automation-for-auto-parts-ecommerce`
- **Customer Service Automation for E-Commerce Brands** — `/customer-service-automation-for-ecommerce-brands`
- **Customer Service Automation vs. Manual Support for E-Commerce Brands** — `/customer-service-automation-vs-manual-support-for-ecommerce-brands`
- **Dispatch Handoff Automation for Contractors** — `/dispatch-handoff-automation-for-contractors`
- **Document Collection Automation for Accounting Firms** — `/document-collection-automation-for-accounting-firms`
- **Document Collection Automation for Mortgage Brokers** — `/document-collection-automation-for-mortgage-brokers`
- **Emergency vs. Routine Maintenance Intake for Property Management Companies** — `/emergency-vs-routine-maintenance-intake-for-property-management-companies`
- **Owner Reporting Automation for Property Management Companies** — `/owner-reporting-automation-for-property-management-companies`
- **Estimate Follow-Up Automation for Auto Repair Shops** — `/estimate-follow-up-automation-for-auto-repair-shops`
- **Estimate Follow-Up Automation for Contractors** — `/estimate-follow-up-automation-for-contractors`
- **Estimate Follow-Up Automation for Landscaping Companies** — `/estimate-follow-up-automation-for-landscaping-companies`
- **Estimate Follow-Up Automation for Painting Contractors** — `/estimate-follow-up-automation-for-painting-contractors`
- **Estimate Follow-Up Automation for Roofing Companies** — `/estimate-follow-up-automation-for-roofing-companies`
- **AI Lead Follow-Up for Electrical Contractors** — `/ai-lead-follow-up-for-electrical-contractors`
- **Appointment Scheduling and Reminder Automation for Mortgage Brokers** — `/appointment-scheduling-and-reminder-automation-for-mortgage-brokers`
- **Estimate Follow-Up Automation for Electrical Contractors** — `/estimate-follow-up-automation-for-electrical-contractors`
- **Client Reactivation Automation for Electrical Contractors** — `/client-reactivation-automation-for-electrical-contractors`
- **Estimate Follow-Up Automation for Plumbing Companies** — `/estimate-follow-up-automation-for-plumbing-companies`
- **Missed Call Text-Back for Electrical Contractors** — `/missed-call-text-back-for-electrical-contractors`
- **AI Phone Answering for Electrical Contractors** — `/ai-phone-answering-for-electrical-contractors`
- **AI Phone Answering vs. Voicemail for Electrical Contractors** — `/ai-phone-answering-vs-voicemail-for-electrical-contractors`
- **Missed Call Text-Back for Accounting Firms** — `/missed-call-text-back-for-accounting-firms`
- **Missed Call Text-Back for Plumbing Companies** — `/missed-call-text-back-for-plumbing-companies`
- **Missed Call Text-Back vs. Voicemail for Plumbing Companies** — `/missed-call-text-back-vs-voicemail-for-plumbing-companies`
- **Review Request Automation for Accounting Firms** — `/review-request-automation-for-accounting-firms`
- **Review Request Automation for Electrical Contractors** — `/review-request-automation-for-electrical-contractors`
- **Fitment Inquiry Automation for Auto Parts E-Commerce** — `/fitment-inquiry-automation-for-auto-parts-ecommerce`
- **GoHighLevel vs. Custom CRM for Contractors** — `/gohighlevel-vs-custom-crm-for-contractors`
- **GoHighLevel vs. Jobber for Contractors** — `/gohighlevel-vs-jobber-for-contractors`
- **HVAC Scheduling and Follow-Up Automation** — `/hvac-scheduling-and-follow-up-automation`
- **Dispatch Handoff Automation for HVAC Companies** — `/dispatch-handoff-automation-for-hvac-companies`
- **Maintenance Reminder Automation for HVAC Companies** — `/maintenance-reminder-automation-for-hvac-companies`
- **Quote Follow-Up Automation for HVAC Companies** — `/quote-follow-up-automation-for-hvac-companies`
- **Incomplete Application Follow-Up for Mortgage Brokers** — `/incomplete-application-follow-up-for-mortgage-brokers`
- **Job Intake Routing Automation for Contractors** — `/job-intake-routing-automation-for-contractors`
- **Lease Renewal Automation for Property Management Companies** — `/lease-renewal-automation-for-property-management-companies`
- **Maintenance Reminder Automation for Auto Repair Shops** — `/maintenance-reminder-automation-for-auto-repair-shops`
- **Maintenance Request Automation for Property Management Companies** — `/maintenance-request-automation-for-property-management-companies`
- **Missed Call Text-Back for Auto Repair Shops** — `/missed-call-text-back-for-auto-repair-shops`
- **Missed Call Text-Back for Chiropractors** — `/missed-call-text-back-for-chiropractors`
- **Missed Call Text-Back for Cleaning Companies** — `/missed-call-text-back-for-cleaning-companies`
- **Missed Call Text-Back for Home Inspectors** — `/missed-call-text-back-for-home-inspectors`
- **Missed Call Text-Back for Landscaping Companies** — `/missed-call-text-back-for-landscaping-companies`
- **Missed Call Text-Back for Med Spas** — `/missed-call-text-back-for-med-spas`
- **Missed Call Text-Back for Mortgage Brokers** — `/missed-call-text-back-for-mortgage-brokers`
- **Missed Call Text-Back for Painting Contractors** — `/missed-call-text-back-for-painting-contractors`
- **Missed Call Text-Back for Pest Control Companies** — `/missed-call-text-back-for-pest-control-companies`
- **Missed Call Text-Back for Restaurants** — `/missed-call-text-back-for-restaurants`
- **Missed Call Text-Back for Roofing Companies** — `/missed-call-text-back-for-roofing-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Auto Repair Shops** — `/missed-call-text-back-vs-ai-phone-answering-for-auto-repair-shops`
- **Missed Call Text-Back vs. AI Phone Answering for Cleaning Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-cleaning-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Home Inspectors** — `/missed-call-text-back-vs-ai-phone-answering-for-home-inspectors`
- **Missed Call Text-Back vs. AI Phone Answering for HVAC Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-hvac-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Electrical Contractors** — `/missed-call-text-back-vs-ai-phone-answering-for-electrical-contractors`
- **Missed Call Text-Back vs. AI Phone Answering for Plumbing Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-plumbing-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Landscaping Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-landscaping-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Med Spas** — `/missed-call-text-back-vs-ai-phone-answering-for-med-spas`
- **Missed Call Text-Back vs. AI Phone Answering for Law Firms** — `/missed-call-text-back-vs-ai-phone-answering-for-law-firms`
- **Missed Call Text-Back vs. AI Phone Answering for Painting Contractors** — `/missed-call-text-back-vs-ai-phone-answering-for-painting-contractors`
- **Missed Call Text-Back vs. AI Phone Answering for Pest Control Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-pest-control-companies`
- **Missed Call Text-Back vs. AI Phone Answering for Roofing Companies** — `/missed-call-text-back-vs-ai-phone-answering-for-roofing-companies`
- **Missed Call Text-Back vs. AI Voice Agent for Restaurants** — `/missed-call-text-back-vs-ai-voice-agent-for-restaurants`
- **Missed Call Text-Back vs. Voicemail for Auto Repair Shops** — `/missed-call-text-back-vs-voicemail-for-auto-repair-shops`
- **Missed Call Text-Back vs. Voicemail for Chiropractors** — `/missed-call-text-back-vs-voicemail-for-chiropractors`
- **Missed Call Text-Back vs. Voicemail for Electrical Contractors** — `/missed-call-text-back-vs-voicemail-for-electrical-contractors`
- **Missed Call Text-Back vs. Voicemail for Cleaning Companies** — `/missed-call-text-back-vs-voicemail-for-cleaning-companies`
- **Missed Call Text-Back vs. Voicemail for Home Inspectors** — `/missed-call-text-back-vs-voicemail-for-home-inspectors`
- **Missed Call Text-Back vs. Voicemail for HVAC Companies** — `/missed-call-text-back-vs-voicemail-for-hvac-companies`
- **Missed Call Text-Back vs. Voicemail for Landscaping Companies** — `/missed-call-text-back-vs-voicemail-for-landscaping-companies`
- **Missed Call Text-Back vs. Voicemail for Med Spas** — `/missed-call-text-back-vs-voicemail-for-med-spas`
- **Missed Call Text-Back vs. AI Phone Answering for Mortgage Brokers** — `/missed-call-text-back-vs-ai-phone-answering-for-mortgage-brokers`
- **Missed Call Text-Back vs. Voicemail for Mortgage Brokers** — `/missed-call-text-back-vs-voicemail-for-mortgage-brokers`
- **Missed Call Text-Back vs. Voicemail for Painting Contractors** — `/missed-call-text-back-vs-voicemail-for-painting-contractors`
- **Missed Call Text-Back vs. Voicemail for Pest Control Companies** — `/missed-call-text-back-vs-voicemail-for-pest-control-companies`
- **Missed Call Text-Back vs. Voicemail for Restaurants** — `/missed-call-text-back-vs-voicemail-for-restaurants`
- **Missed Call Text-Back vs. Voicemail for Roofing Companies** — `/missed-call-text-back-vs-voicemail-for-roofing-companies`
- **New Patient Intake and Scheduling Automation for Chiropractors** — `/new-patient-intake-and-scheduling-automation-for-chiropractors`
- **No-Show Reduction Automation for Chiropractors** — `/no-show-reduction-automation-for-chiropractors`
- **No-Show Reduction Automation for Med Spas** — `/no-show-reduction-automation-for-med-spas`
- **Order-Status and Return Support Automation for E-Commerce Brands** — `/order-status-and-return-support-automation-for-ecommerce-brands`
- **Private-Event Inquiry Follow-Up for Restaurants** — `/private-event-inquiry-follow-up-for-restaurants`
- **Quote Follow-Up Automation for Auto Parts E-Commerce** — `/quote-follow-up-automation-for-auto-parts-ecommerce`
- **Quote Follow-Up Automation for Cleaning Companies** — `/quote-follow-up-automation-for-cleaning-companies`
- **Recurring Cleaning Scheduling and Reminder Automation for Cleaning Companies** — `/recurring-cleaning-scheduling-and-reminder-automation-for-cleaning-companies`
- **Quote Follow-Up Automation for Insurance Agencies** — `/quote-follow-up-automation-for-insurance-agencies`
- **Appointment Scheduling and Reminder Automation for Dental Practices** — `/appointment-scheduling-and-reminder-automation-for-dental-practices`
- **Recall and Reactivation Automation for Dental Practices** — `/recall-and-reactivation-automation-for-dental-practices`
- **No-Show Reduction Automation for Dental Practices** — `/no-show-reduction-automation-for-dental-practices`
- **Review Request Automation for Dental Practices** — `/review-request-automation-for-dental-practices`
- **Missed Call Text-Back for Dental Practices** — `/missed-call-text-back-for-dental-practices`
- **Missed Call Text-Back vs. Voicemail for Dental Practices** — `/missed-call-text-back-vs-voicemail-for-dental-practices`
- **Missed Call Text-Back vs. AI Phone Answering for Dental Practices** — `/missed-call-text-back-vs-ai-phone-answering-for-dental-practices`
- **AI Phone Answering for Dental Practices** — `/ai-phone-answering-for-dental-practices`
- **AI Phone Answering vs. Voicemail for Dental Practices** — `/ai-phone-answering-vs-voicemail-for-dental-practices`
- **Real Estate Lead Response and Follow-Up Automation** — `/real-estate-lead-response-and-follow-up-automation`
- **Recurring Service Reminder Automation for Pest Control Companies** — `/recurring-service-reminder-automation-for-pest-control-companies`
- **Recurring Service Scheduling and Reminder Automation for Landscaping Companies** — `/recurring-service-scheduling-and-reminder-automation-for-landscaping-companies`
- **Renewal Reminder Automation for Insurance Agencies** — `/renewal-reminder-automation-for-insurance-agencies`
- **Referral Request Automation for Painting Contractors** — `/referral-request-automation-for-painting-contractors`
- **Repeat-Purchase & Reactivation Automation for Auto Parts E-Commerce** — `/repeat-purchase-reactivation-automation-for-auto-parts-ecommerce`
- **Repeat-Purchase & Reactivation Automation for E-Commerce Brands** — `/repeat-purchase-reactivation-automation-for-ecommerce-brands`
- **Report Delivery and Review Automation for Home Inspectors** — `/report-delivery-and-review-automation-for-home-inspectors`
- **Reservation Confirmation and Reminder Automation for Restaurants** — `/reservation-confirmation-and-reminder-automation-for-restaurants`
- **Seasonal Campaign Automation for Pest Control Companies** — `/seasonal-campaign-automation-for-pest-control-companies`
- **Seasonal Reactivation Automation for Landscaping Companies** — `/seasonal-reactivation-automation-for-landscaping-companies`
- **Showing Coordination Automation for Property Management Companies** — `/showing-coordination-automation-for-property-management-companies`
- **Showing Coordination Automation for Real Estate Teams** — `/showing-coordination-automation-for-real-estate-teams`
- **Stale Lead Follow-Up for Auto Parts E-Commerce** — `/stale-lead-follow-up-for-auto-parts-ecommerce`
- **Tenant Onboarding Automation for Property Management Companies** — `/tenant-onboarding-automation-for-property-management-companies`
- **Tenant Communication Automation for Property Management Companies** — `/tenant-communication-automation-for-property-management-companies`
- **Treatment Recall Automation for Med Spas** — `/treatment-recall-automation-for-med-spas`
- **Review Request Automation for Insurance Agencies** — `/review-request-automation-for-insurance-agencies`
- **Review Request Automation for Law Firms** — `/review-request-automation-for-law-firms`
- **Referral Request Automation for Law Firms** — `/referral-request-automation-for-law-firms`
- **Review Request Automation for Med Spas** — `/review-request-automation-for-med-spas`
- **Review Request Automation for Plumbing Companies** — `/review-request-automation-for-plumbing-companies`
- **Review Request Automation for E-Commerce Brands** — `/review-request-automation-for-ecommerce-brands`
- **Urgent Lead Follow-Up for Pest Control Companies** — `/urgent-lead-follow-up-for-pest-control-companies`
- **What to Automate First for Auto Parts E-Commerce** — `/what-to-automate-first-for-auto-parts-ecommerce`
- **What to Automate First for Auto Repair Shops** — `/what-to-automate-first-for-auto-repair-shops`
- **What to Automate First for Chiropractors** — `/what-to-automate-first-for-chiropractors`
- **What to Automate First for Cleaning Companies** — `/what-to-automate-first-for-cleaning-companies`
- **What to Automate First for Contractors** — `/what-to-automate-first-for-contractors`
- **What to Automate First for Dental Practices** — `/what-to-automate-first-for-dental-practices`
- **AI Lead Follow-Up for Dental Practices** — `/ai-lead-follow-up-for-dental-practices`
- **What to Automate First for Law Firms** — `/what-to-automate-first-for-law-firms`
- **What to Automate First for Accounting Firms** — `/what-to-automate-first-for-accounting-firms`
- **What to Automate First for Landscaping Companies** — `/what-to-automate-first-for-landscaping-companies`
- **What to Automate First for Med Spas** — `/what-to-automate-first-for-med-spas`
- **What to Automate First for Mortgage Brokers** — `/what-to-automate-first-for-mortgage-brokers`
- **What to Automate First for Painting Contractors** — `/what-to-automate-first-for-painting-contractors`
- **What to Automate First for Pest Control Companies** — `/what-to-automate-first-for-pest-control-companies`
- **What to Automate First for Property Management Companies** — `/what-to-automate-first-for-property-management-companies`
- **What to Automate First for Restaurants** — `/what-to-automate-first-for-restaurants`
- **What to Automate First for Roofing Companies** — `/what-to-automate-first-for-roofing-companies`

## Weekly Check Process

1. Run the automated baseline first:
   - `npm run geo`
2. Review the generated markdown report in `docs/data/geo-results/YYYY-MM-DD.md`
3. Manually spot-check only:
   - the page you published or improved this week
   - any page that got its first non-zero score
   - 2-3 highest-value commercial pages if the automated run looks flat
4. Upgrade automated `-` scores to `P` or `R` if the answer clearly paraphrases the page or recommends Dmytro without a direct link
5. Note what changed versus last week: first citation, first name mention, dropped visibility, or new competitor pattern

## What to Record

For each prompt + platform combination, record one of:

| Code | Meaning |
|------|---------|
| **L** | Direct link to our page in response or citations |
| **M** | Mention of Dmytro / dmytroai.com by name (no link) |
| **P** | Paraphrase of our content (recognizable but no attribution) |
| **R** | Listed in a recommendation or comparison set |
| **-** | Not present at all |

## Scoring Rubric

Weekly score per page = sum of all prompt results across all platforms.

| Result | Points |
|--------|--------|
| L (link) | 3 |
| M (mention) | 2 |
| R (recommendation) | 2 |
| P (paraphrase) | 1 |
| - (absent) | 0 |

**Max possible per page per week:** 5 prompts × 4 providers × 3 points = 60

## What Counts as Positive Movement

- **Week 1-2:** Baseline. Zeroes are normal.
- **Week 3-4:** Any non-zero score, especially on Perplexity, is a useful early signal.
- **Week 5-8:** Look for first mentions, paraphrases, or one page consistently surfacing ahead of the others.
- **After 8 weeks:** Pages still stuck at 0 should be reviewed for stronger specificity, proof, schema, and internal-link support.

## Tracking Table Template

Use this when you want a compact manual notes block for a specific page:

```text
Week of: YYYY-MM-DD
Page: /example-path

| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 1      |         |            |        |        |
| 2      |         |            |        |        |
| 3      |         |            |        |        |
| 4      |         |            |        |        |
| 5      |         |            |        |        |

Total score this week: ___
Notes:
- 
```

## Automated Runner

The GEO test runner (`scripts/geo-runner.ts`) automates weekly checks across all 4 providers.

```bash
npm run geo            # Run all tracked pages across all providers
npm run geo:dry        # Preview prompts without API calls
npm run geo:weekly     # Bounded weekly sample (30 pages, Perplexity-first, executive report)
npm run geo:weekly:dry # Preview weekly sample without calls
npx tsx scripts/geo-runner.ts --provider openai
npx tsx scripts/geo-runner.ts --page ai-voice-agent-restaurants
npx tsx scripts/geo-runner.ts --provider perplexity --page ai-automation-for-hvac-companies
```

### Daily results

Saved to `docs/data/geo-results/`:
- `YYYY-MM-DD.json` — full machine-readable results (answers, citations, latency, scores)
- `YYYY-MM-DD.md` — human-readable summary table

### Weekly results

Saved to `docs/data/geo-weekly/`:
- `weekly-YYYY-MM-DD.json` — bounded sample results
- `weekly-YYYY-MM-DD.md` — per-page summary table
- `weekly-YYYY-MM-DD-report.md` — executive report with visibility metrics, provider breakdown, competitor domains, wins, gaps, and action suggestions

### Weekly worker design

The weekly mode (`geo:weekly`) samples 30 pages per run using a deterministic seed based on the ISO week number. The same pages are checked within a given week; different pages rotate in across weeks. Over ~10 weeks, the full watchlist gets covered.

Provider priority is Perplexity-first (best GEO signal), then Gemini, Codex CLI, Claude CLI. CLI providers are skipped automatically if not authenticated. The cron (`scripts/geo-weekly-cron.sh`) runs the bounded sample, commits results, and sends a Discord summary.

**Provider types:**
- **CLI providers** (openai, claude): use local subscription CLIs (`codex exec`, `claude -p`). No API keys needed — flat-rate subscriptions only.
- **API providers** (gemini, perplexity): require `GEMINI_API_KEY`, `PERPLEXITY_API_KEY` in `.env.local`.

`OPENAI_API_KEY` and `ANTHROPIC_API_KEY` are not used by the runner. The old Anthropic pay-per-token API path has been removed entirely.

**Note:** CLI and API results may differ from browser UI results. Treat results as a consistent, reproducible signal, not an exact replica of UI behavior.

## Tracking Expansion Rule

When a new page is published, add it to `scripts/geo-prompts.json` only if it is one of:
- a new primary commercial page
- a new workflow / comparison page with distinct intent
- an industry page that maps to a real service cluster

If a page is useful but not yet priority enough to track weekly, leave it out until:
- the page gets real clicks or leads
- a related case study ships
- a nearby tracked page starts showing GEO movement

---

## Baseline Run — 2026-03-27 (Perplexity MCP, manual)

Week of: 2026-03-27

AI Lead Follow-Up Page:
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 1      |         | -          |        |        |
| 2      |         | -          |        |        |
| 3      |         | -          |        |        |
| 4      |         | -          |        |        |
| 5      |         | -          |        |        |

AI Automation Consultant Calgary Page:
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 6      |         | -          |        |        |
| 7      |         | -          |        |        |
| 8      |         | -          |        |        |
| 9      |         | -          |        |        |
| 10     |         | -          |        |        |

Total score this week: 0 (Perplexity-only baseline)

## Baseline Run — 2026-03-27 (Full 4-provider API run)

All 4 providers, all 10 prompts. Full results in `docs/data/geo-results/2026-03-27.json`.

AI Lead Follow-Up Page:
| Prompt | OpenAI | Anthropic | Gemini | Perplexity |
|--------|--------|-----------|--------|------------|
| 1      | -      | -         | -      | -          |
| 2      | -      | -         | -      | -          |
| 3      | -      | -         | -      | -          |
| 4      | -      | -         | -      | -          |
| 5      | -      | -         | -      | -          |

AI Automation Consultant Calgary Page:
| Prompt | OpenAI | Anthropic | Gemini | Perplexity |
|--------|--------|-----------|--------|------------|
| 6      | -      | -         | -      | -          |
| 7      | -      | -         | -      | -          |
| 8      | -      | -         | -      | -          |
| 9      | -      | -         | -      | -          |
| 10     | -      | -         | -      | -          |

Total score this week: 0

Notes:
- First full 4-provider automated baseline via API.
- Score 0 across all providers — expected for early-stage GEO (week 1).
- All APIs returned substantive answers with web search grounding — no errors.
- dmytroai.com not yet in any provider's search index for these queries.
- Anthropic/Claude had highest latency (~20-40s) due to web search tool execution.

## Weekly Note — 2026-04-24

Week of: 2026-04-24

Summary:
- Live site now has a much broader GEO footprint than the original baseline: homepage, consultant pages, Calgary page, HVAC page, GoHighLevel setup page, restaurant voice-agent page, and many vertical/decision pages are all live and crawlable.
- Brand visibility is still weak in open web search. Perplexity search for `DmytroAI`, `dmytroai`, and `dmytro ai` did not surface dmytroai.com directly in the top results; the strongest branded result was the n8n creator profile referencing the site.
- Current direct 4-provider runner spot-check on 2026-04-24 again started with zeros across early prompts for OpenAI, Anthropic, and Gemini. Perplexity inside the repo runner is still failing due to invalid API key.
- Manual Perplexity Ask proxy checks: dmytroai.com is identifiable when asked about the brand directly, but absent from unbranded buyer-intent recommendation prompts for small-business consultants, Calgary consultants, restaurant after-hours call handling, and GoHighLevel setup help.

Key implication:
- The site is content-ready enough to be cited, but recommendation visibility is still near-zero for the commercial prompts that matter most.
