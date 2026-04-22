import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CaseStudies from "./pages/CaseStudies";
import InstagramLeadGenerationCaseStudy from "./pages/case-studies/InstagramLeadGenerationCaseStudy";
import ParisCafeVoiceAgentCaseStudy from "./pages/case-studies/ParisCafeVoiceAgentCaseStudy";
import EcommerceCRMCaseStudy from "./pages/case-studies/EcommerceCRMCaseStudy";
import AiAutomationConsultantSmallBusiness from "./pages/AiAutomationConsultantSmallBusiness";
import Guides from "./pages/Guides";
import N8nVsZapierSmallBusiness from "./pages/N8nVsZapierSmallBusiness";
import AiAppointmentSetter from "./pages/AiAppointmentSetter";
import AiLeadFollowUpForServiceBusinesses from "./pages/AiLeadFollowUpForServiceBusinesses";
import AiAutomationConsultantCalgary from "./pages/AiAutomationConsultantCalgary";
import HireAiAutomationConsultantVsAgency from "./pages/HireAiAutomationConsultantVsAgency";
import HvacDatabaseReactivation from "./pages/HvacDatabaseReactivation";
import AiAutomationConsultantVsFreelancer from "./pages/AiAutomationConsultantVsFreelancer";
import AiChatbotVsAiVoiceAgentForLeadQualification from "./pages/AiChatbotVsAiVoiceAgentForLeadQualification";
import GoHighLevelVsCustomCrmSmallBusiness from "./pages/GoHighLevelVsCustomCrmSmallBusiness";
import GoHighLevelAutomationSetup from "./pages/GoHighLevelAutomationSetup";
import AiAutomationConsultantPricingSmallBusiness from "./pages/AiAutomationConsultantPricingSmallBusiness";
import BestAiAutomationForServiceBusinesses from "./pages/BestAiAutomationForServiceBusinesses";
import AiAutomationForHvacCompanies from "./pages/AiAutomationForHvacCompanies";
import HvacLeadFollowUpAutomation from "./pages/HvacLeadFollowUpAutomation";
import HvacMissedCallTextBack from "./pages/HvacMissedCallTextBack";
import AiAppointmentSetterForHvac from "./pages/AiAppointmentSetterForHvac";
import HvacSchedulingAndFollowUpAutomation from "./pages/HvacSchedulingAndFollowUpAutomation";
import AiAppointmentSetterForHomeServiceBusinesses from "./pages/AiAppointmentSetterForHomeServiceBusinesses";
import AiAutomationNoTechTeam from "./pages/AiAutomationNoTechTeam";
import AiVoiceAgentForRestaurants from "./pages/AiVoiceAgentForRestaurants";
import AiAutomationForRestaurants from "./pages/AiAutomationForRestaurants";
import PrivateEventInquiryFollowUpForRestaurants from "./pages/PrivateEventInquiryFollowUpForRestaurants";
import ReservationConfirmationAndReminderAutomationForRestaurants from "./pages/ReservationConfirmationAndReminderAutomationForRestaurants";
import MissedCallTextBackForRestaurants from "./pages/MissedCallTextBackForRestaurants";
import AiAutomationConsultantEdmonton from "./pages/AiAutomationConsultantEdmonton";
import AiAutomationConsultantAlberta from "./pages/AiAutomationConsultantAlberta";
import AiAutomationConsultantCanada from "./pages/AiAutomationConsultantCanada";
import AiAutomationForRealEstate from "./pages/AiAutomationForRealEstate";
import AiAutomationForMortgageBrokers from "./pages/AiAutomationForMortgageBrokers";
import AiLeadFollowUpForMortgageBrokers from "./pages/AiLeadFollowUpForMortgageBrokers";
import DocumentCollectionAutomationForMortgageBrokers from "./pages/DocumentCollectionAutomationForMortgageBrokers";
import IncompleteApplicationFollowUpForMortgageBrokers from "./pages/IncompleteApplicationFollowUpForMortgageBrokers";
import AiAutomationForDentalPractices from "./pages/AiAutomationForDentalPractices";
import AiAutomationForLawFirms from "./pages/AiAutomationForLawFirms";
import AiAutomationForAccountingFirms from "./pages/AiAutomationForAccountingFirms";
import AiAutomationForPlumbingCompanies from "./pages/AiAutomationForPlumbingCompanies";
import AiAutomationForElectricalContractors from "./pages/AiAutomationForElectricalContractors";
import ClientOnboardingAutomation from "./pages/ClientOnboardingAutomation";
import AiAutomationRoiGuide from "./pages/AiAutomationRoiGuide";
import N8nAutomationExamplesSmallBusiness from "./pages/N8nAutomationExamplesSmallBusiness";
import N8nAutomationConsultant from "./pages/N8nAutomationConsultant";
import AiEmailSequenceAutomation from "./pages/AiEmailSequenceAutomation";
import AiAutomationForInsuranceAgencies from "./pages/AiAutomationForInsuranceAgencies";
import RenewalReminderAutomationForInsuranceAgencies from "./pages/RenewalReminderAutomationForInsuranceAgencies";
import QuoteFollowUpAutomationForInsuranceAgencies from "./pages/QuoteFollowUpAutomationForInsuranceAgencies";
import CrossSellAutomationForInsuranceAgencies from "./pages/CrossSellAutomationForInsuranceAgencies";
import AiAutomationForPropertyManagement from "./pages/AiAutomationForPropertyManagement";
import LeaseRenewalAutomationForPropertyManagementCompanies from "./pages/LeaseRenewalAutomationForPropertyManagementCompanies";
import ShowingCoordinationAutomationForPropertyManagementCompanies from "./pages/ShowingCoordinationAutomationForPropertyManagementCompanies";
import MaintenanceRequestAutomationForPropertyManagementCompanies from "./pages/MaintenanceRequestAutomationForPropertyManagementCompanies";
import AiAutomationEcommerce from "./pages/AiAutomationEcommerce";
import AiAutomationForAutoPartsEcommerce from "./pages/AiAutomationForAutoPartsEcommerce";
import FitmentInquiryAutomationForAutoPartsEcommerce from "./pages/FitmentInquiryAutomationForAutoPartsEcommerce";
import EcommerceCrmAutomationWithAiFollowUp from "./pages/EcommerceCrmAutomationWithAiFollowUp";
import RepeatPurchaseReactivationAutomationForEcommerceBrands from "./pages/RepeatPurchaseReactivationAutomationForEcommerceBrands";
import CustomerServiceAutomationForEcommerceBrands from "./pages/CustomerServiceAutomationForEcommerceBrands";
import AfterHoursLeadCapture from "./pages/AfterHoursLeadCapture";
import MissedCallFollowUp from "./pages/MissedCallFollowUp";
import BookingConfirmationAndReminder from "./pages/BookingConfirmationAndReminder";
import AiPhoneAnswering from "./pages/AiPhoneAnswering";
import AiVoiceAgentForLeadQualification from "./pages/AiVoiceAgentForLeadQualification";
import InstantLeadResponse from "./pages/InstantLeadResponse";
import QuoteFollowUp from "./pages/QuoteFollowUp";
import ClientReactivation from "./pages/ClientReactivation";
import NoShowReduction from "./pages/NoShowReduction";
import AiAppointmentSetterVsReceptionist from "./pages/AiAppointmentSetterVsReceptionist";
import AiAppointmentSetterVsVirtualAssistant from "./pages/AiAppointmentSetterVsVirtualAssistant";
import AiVoiceAgentVsVoicemail from "./pages/AiVoiceAgentVsVoicemail";
import AiVoiceAgentVsCallCenter from "./pages/AiVoiceAgentVsCallCenter";
import AiVoiceAgentVsHumanAppointmentSetter from "./pages/AiVoiceAgentVsHumanAppointmentSetter";
import N8nVsMakeSmallBusiness from "./pages/N8nVsMakeSmallBusiness";
import BuildVsBuyAiAutomation from "./pages/BuildVsBuyAiAutomation";
import VapiVsRetellSmallBusiness from "./pages/VapiVsRetellSmallBusiness";
import RetellVsBlandSmallBusiness from "./pages/RetellVsBlandSmallBusiness";
import AiAutomationForChiropractors from "./pages/AiAutomationForChiropractors";
import AiAutomationForCleaningCompanies from "./pages/AiAutomationForCleaningCompanies";
import AiAutomationForMedSpas from "./pages/AiAutomationForMedSpas";
import AiAutomationForRoofingCompanies from "./pages/AiAutomationForRoofingCompanies";
import AiAutomationForPestControlCompanies from "./pages/AiAutomationForPestControlCompanies";
import AiAutomationForAutoRepairShops from "./pages/AiAutomationForAutoRepairShops";
import AiAutomationForLandscapingCompanies from "./pages/AiAutomationForLandscapingCompanies";
import AiAutomationForPaintingContractors from "./pages/AiAutomationForPaintingContractors";
import AiAutomationForHomeInspectors from "./pages/AiAutomationForHomeInspectors";
import AiAutomationCostSmallBusiness from "./pages/AiAutomationCostSmallBusiness";
import AiAutomationAuditChecklist from "./pages/AiAutomationAuditChecklist";
import CrmAutomationExamplesSmallBusiness from "./pages/CrmAutomationExamplesSmallBusiness";
import CrmAutomationForContractors from "./pages/CrmAutomationForContractors";
import EstimateFollowUpAutomationForContractors from "./pages/EstimateFollowUpAutomationForContractors";
import DispatchHandoffAutomationForContractors from "./pages/DispatchHandoffAutomationForContractors";
import JobIntakeRoutingAutomationForContractors from "./pages/JobIntakeRoutingAutomationForContractors";
import LeadFollowUpAutomationExamples from "./pages/LeadFollowUpAutomationExamples";
import AiAutomationImplementationRoadmap from "./pages/AiAutomationImplementationRoadmap";
import AiAutomationIntegrationsSmallBusiness from "./pages/AiAutomationIntegrationsSmallBusiness";
import NotFound from "./pages/NotFound";

export type AppRouteDefinition = {
  path: string;
  element: ReactElement;
  prerender?: boolean;
};

export const appRoutes: AppRouteDefinition[] = [
  { path: "/", element: <Index /> },
  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/case-studies/instagram-lead-generation", element: <InstagramLeadGenerationCaseStudy /> },
  { path: "/case-studies/paris-cafe-voice-agent", element: <ParisCafeVoiceAgentCaseStudy /> },
  { path: "/case-studies/ecommerce-crm-automation", element: <EcommerceCRMCaseStudy /> },
  { path: "/ai-automation-consultant-small-business", element: <AiAutomationConsultantSmallBusiness /> },
  { path: "/guides", element: <Guides /> },
  { path: "/n8n-vs-zapier-small-business", element: <N8nVsZapierSmallBusiness /> },
  { path: "/ai-appointment-setter", element: <AiAppointmentSetter /> },
  { path: "/ai-lead-follow-up-for-service-businesses", element: <AiLeadFollowUpForServiceBusinesses /> },
  { path: "/ai-automation-consultant-calgary", element: <AiAutomationConsultantCalgary /> },
  { path: "/ai-automation-consultant-edmonton", element: <AiAutomationConsultantEdmonton /> },
  {
    path: "/ai-automation-hvac",
    element: <Navigate to="/ai-automation-for-hvac-companies" replace />,
    prerender: false,
  },
  { path: "/hire-ai-automation-consultant-vs-agency", element: <HireAiAutomationConsultantVsAgency /> },
  { path: "/hvac-database-reactivation", element: <HvacDatabaseReactivation /> },
  { path: "/ai-automation-consultant-vs-freelancer", element: <AiAutomationConsultantVsFreelancer /> },
  {
    path: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification",
    element: <AiChatbotVsAiVoiceAgentForLeadQualification />,
  },
  { path: "/gohighlevel-vs-custom-crm-small-business", element: <GoHighLevelVsCustomCrmSmallBusiness /> },
  { path: "/gohighlevel-automation-setup", element: <GoHighLevelAutomationSetup /> },
  {
    path: "/ai-automation-consultant-pricing-small-business",
    element: <AiAutomationConsultantPricingSmallBusiness />,
  },
  { path: "/best-ai-automation-for-service-businesses", element: <BestAiAutomationForServiceBusinesses /> },
  { path: "/ai-automation-for-hvac-companies", element: <AiAutomationForHvacCompanies /> },
  { path: "/hvac-lead-follow-up-automation", element: <HvacLeadFollowUpAutomation /> },
  { path: "/hvac-missed-call-text-back", element: <HvacMissedCallTextBack /> },
  { path: "/ai-appointment-setter-for-hvac", element: <AiAppointmentSetterForHvac /> },
  { path: "/hvac-scheduling-and-follow-up-automation", element: <HvacSchedulingAndFollowUpAutomation /> },
  { path: "/ai-appointment-setter-for-home-service-businesses", element: <AiAppointmentSetterForHomeServiceBusinesses /> },
  { path: "/ai-automation-for-businesses-without-a-tech-team", element: <AiAutomationNoTechTeam /> },
  { path: "/ai-voice-agent-for-restaurants", element: <AiVoiceAgentForRestaurants /> },
  { path: "/ai-automation-for-restaurants", element: <AiAutomationForRestaurants /> },
  { path: "/private-event-inquiry-follow-up-for-restaurants", element: <PrivateEventInquiryFollowUpForRestaurants /> },
  { path: "/reservation-confirmation-and-reminder-automation-for-restaurants", element: <ReservationConfirmationAndReminderAutomationForRestaurants /> },
  { path: "/missed-call-text-back-for-restaurants", element: <MissedCallTextBackForRestaurants /> },
  { path: "/ai-automation-consultant-alberta", element: <AiAutomationConsultantAlberta /> },
  { path: "/ai-automation-consultant-canada", element: <AiAutomationConsultantCanada /> },
  { path: "/ai-automation-for-real-estate", element: <AiAutomationForRealEstate /> },
  { path: "/ai-automation-for-mortgage-brokers", element: <AiAutomationForMortgageBrokers /> },
  { path: "/ai-lead-follow-up-for-mortgage-brokers", element: <AiLeadFollowUpForMortgageBrokers /> },
  { path: "/document-collection-automation-for-mortgage-brokers", element: <DocumentCollectionAutomationForMortgageBrokers /> },
  { path: "/incomplete-application-follow-up-for-mortgage-brokers", element: <IncompleteApplicationFollowUpForMortgageBrokers /> },
  { path: "/ai-automation-for-dental-practices", element: <AiAutomationForDentalPractices /> },
  { path: "/ai-automation-for-law-firms", element: <AiAutomationForLawFirms /> },
  { path: "/ai-automation-for-accounting-firms", element: <AiAutomationForAccountingFirms /> },
  { path: "/ai-automation-for-plumbing-companies", element: <AiAutomationForPlumbingCompanies /> },
  { path: "/ai-automation-for-electrical-contractors", element: <AiAutomationForElectricalContractors /> },
  { path: "/client-onboarding-automation", element: <ClientOnboardingAutomation /> },
  { path: "/ai-automation-roi-guide", element: <AiAutomationRoiGuide /> },
  { path: "/n8n-automation-examples-small-business", element: <N8nAutomationExamplesSmallBusiness /> },
  { path: "/n8n-automation-consultant", element: <N8nAutomationConsultant /> },
  { path: "/ai-email-sequence-automation", element: <AiEmailSequenceAutomation /> },
  { path: "/ai-automation-for-insurance-agencies", element: <AiAutomationForInsuranceAgencies /> },
  { path: "/renewal-reminder-automation-for-insurance-agencies", element: <RenewalReminderAutomationForInsuranceAgencies /> },
  { path: "/quote-follow-up-automation-for-insurance-agencies", element: <QuoteFollowUpAutomationForInsuranceAgencies /> },
  { path: "/cross-sell-automation-for-insurance-agencies", element: <CrossSellAutomationForInsuranceAgencies /> },
  { path: "/ai-automation-for-property-management", element: <AiAutomationForPropertyManagement /> },
  { path: "/lease-renewal-automation-for-property-management-companies", element: <LeaseRenewalAutomationForPropertyManagementCompanies /> },
  { path: "/showing-coordination-automation-for-property-management-companies", element: <ShowingCoordinationAutomationForPropertyManagementCompanies /> },
  { path: "/maintenance-request-automation-for-property-management-companies", element: <MaintenanceRequestAutomationForPropertyManagementCompanies /> },
  { path: "/ai-automation-ecommerce", element: <AiAutomationEcommerce /> },
  { path: "/ai-automation-for-auto-parts-ecommerce", element: <AiAutomationForAutoPartsEcommerce /> },
  { path: "/ecommerce-crm-automation-with-ai-follow-up", element: <EcommerceCrmAutomationWithAiFollowUp /> },
  {
    path: "/fitment-inquiry-automation-for-auto-parts-ecommerce",
    element: <FitmentInquiryAutomationForAutoPartsEcommerce />,
  },
  {
    path: "/repeat-purchase-reactivation-automation-for-ecommerce-brands",
    element: <RepeatPurchaseReactivationAutomationForEcommerceBrands />,
  },
  {
    path: "/customer-service-automation-for-ecommerce-brands",
    element: <CustomerServiceAutomationForEcommerceBrands />,
  },
  { path: "/after-hours-lead-capture-for-service-businesses", element: <AfterHoursLeadCapture /> },
  { path: "/missed-call-follow-up-automation", element: <MissedCallFollowUp /> },
  { path: "/booking-confirmation-and-reminder-automation", element: <BookingConfirmationAndReminder /> },
  { path: "/ai-phone-answering-for-service-businesses", element: <AiPhoneAnswering /> },
  { path: "/ai-voice-agent-lead-qualification", element: <AiVoiceAgentForLeadQualification /> },
  { path: "/instant-lead-response-automation", element: <InstantLeadResponse /> },
  { path: "/quote-follow-up-automation", element: <QuoteFollowUp /> },
  { path: "/client-reactivation-automation", element: <ClientReactivation /> },
  { path: "/no-show-reduction-automation", element: <NoShowReduction /> },
  { path: "/ai-appointment-setter-vs-receptionist", element: <AiAppointmentSetterVsReceptionist /> },
  { path: "/ai-appointment-setter-vs-virtual-assistant", element: <AiAppointmentSetterVsVirtualAssistant /> },
  { path: "/ai-voice-agent-vs-voicemail", element: <AiVoiceAgentVsVoicemail /> },
  { path: "/ai-voice-agent-vs-call-center", element: <AiVoiceAgentVsCallCenter /> },
  { path: "/ai-voice-agent-vs-human-appointment-setter", element: <AiVoiceAgentVsHumanAppointmentSetter /> },
  { path: "/n8n-vs-make-small-business", element: <N8nVsMakeSmallBusiness /> },
  { path: "/build-vs-buy-ai-automation", element: <BuildVsBuyAiAutomation /> },
  { path: "/vapi-vs-retell-small-business", element: <VapiVsRetellSmallBusiness /> },
  { path: "/retell-vs-bland-small-business", element: <RetellVsBlandSmallBusiness /> },
  { path: "/ai-automation-for-chiropractors", element: <AiAutomationForChiropractors /> },
  { path: "/ai-automation-for-cleaning-companies", element: <AiAutomationForCleaningCompanies /> },
  { path: "/ai-automation-for-med-spas", element: <AiAutomationForMedSpas /> },
  { path: "/ai-automation-for-roofing-companies", element: <AiAutomationForRoofingCompanies /> },
  { path: "/ai-automation-for-pest-control-companies", element: <AiAutomationForPestControlCompanies /> },
  { path: "/ai-automation-for-auto-repair-shops", element: <AiAutomationForAutoRepairShops /> },
  { path: "/ai-automation-for-landscaping-companies", element: <AiAutomationForLandscapingCompanies /> },
  { path: "/ai-automation-for-painting-contractors", element: <AiAutomationForPaintingContractors /> },
  { path: "/ai-automation-for-home-inspectors", element: <AiAutomationForHomeInspectors /> },
  { path: "/ai-automation-cost-small-business", element: <AiAutomationCostSmallBusiness /> },
  { path: "/ai-automation-audit-checklist", element: <AiAutomationAuditChecklist /> },
  { path: "/crm-automation-examples-small-business", element: <CrmAutomationExamplesSmallBusiness /> },
  { path: "/crm-automation-for-contractors", element: <CrmAutomationForContractors /> },
  { path: "/estimate-follow-up-automation-for-contractors", element: <EstimateFollowUpAutomationForContractors /> },
  { path: "/dispatch-handoff-automation-for-contractors", element: <DispatchHandoffAutomationForContractors /> },
  { path: "/job-intake-routing-automation-for-contractors", element: <JobIntakeRoutingAutomationForContractors /> },
  { path: "/lead-follow-up-automation-examples", element: <LeadFollowUpAutomationExamples /> },
  { path: "/ai-automation-implementation-roadmap", element: <AiAutomationImplementationRoadmap /> },
  { path: "/ai-automation-integrations-small-business", element: <AiAutomationIntegrationsSmallBusiness /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsOfService /> },
  { path: "*", element: <NotFound />, prerender: false },
];

export const prerenderRoutes = appRoutes
  .filter((route) => route.prerender !== false)
  .map((route) => route.path);
