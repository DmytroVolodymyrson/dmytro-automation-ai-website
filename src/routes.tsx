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
import WhatDoesAnAiAutomationConsultantDo from "./pages/WhatDoesAnAiAutomationConsultantDo";
import Guides from "./pages/Guides";
import N8nVsZapierSmallBusiness from "./pages/N8nVsZapierSmallBusiness";
import AiAppointmentSetter from "./pages/AiAppointmentSetter";
import AiAppointmentSetterSetup from "./pages/AiAppointmentSetterSetup";
import AiAppointmentSetterSetupVsDiySmallBusiness from "./pages/AiAppointmentSetterSetupVsDiySmallBusiness";
import AiAppointmentSetterCostSmallBusiness from "./pages/AiAppointmentSetterCostSmallBusiness";
import AiAppointmentSetterRoiSmallBusiness from "./pages/AiAppointmentSetterRoiSmallBusiness";
import AiLeadFollowUpForServiceBusinesses from "./pages/AiLeadFollowUpForServiceBusinesses";
import AiLeadFollowUpCostSmallBusiness from "./pages/AiLeadFollowUpCostSmallBusiness";
import AiAutomationConsultantCalgary from "./pages/AiAutomationConsultantCalgary";
import HireAiAutomationConsultantVsAgency from "./pages/HireAiAutomationConsultantVsAgency";
import HireAiAutomationConsultantVsDiy from "./pages/HireAiAutomationConsultantVsDiy";
import HowToHireAiAutomationConsultant from "./pages/HowToHireAiAutomationConsultant";
import HvacDatabaseReactivation from "./pages/HvacDatabaseReactivation";
import AiAutomationConsultantVsFreelancer from "./pages/AiAutomationConsultantVsFreelancer";
import AiChatbotVsAiVoiceAgentForLeadQualification from "./pages/AiChatbotVsAiVoiceAgentForLeadQualification";
import GoHighLevelVsCustomCrmSmallBusiness from "./pages/GoHighLevelVsCustomCrmSmallBusiness";
import GoHighLevelVsCustomCrmForContractors from "./pages/GoHighLevelVsCustomCrmForContractors";
import GoHighLevelAutomationSetup from "./pages/GoHighLevelAutomationSetup";
import GoHighLevelSetupCostSmallBusiness from "./pages/GoHighLevelSetupCostSmallBusiness";
import GoHighLevelSetupVsDiySmallBusiness from "./pages/GoHighLevelSetupVsDiySmallBusiness";
import GoHighLevelAccountCleanupService from "./pages/GoHighLevelAccountCleanupService";
import GoHighLevelAccountCleanupVsRebuild from "./pages/GoHighLevelAccountCleanupVsRebuild";
import GoHighLevelAccountAuditChecklist from "./pages/GoHighLevelAccountAuditChecklist";
import GoHighLevelSetupMistakesSmallBusiness from "./pages/GoHighLevelSetupMistakesSmallBusiness";
import AiAutomationConsultantPricingSmallBusiness from "./pages/AiAutomationConsultantPricingSmallBusiness";
import BestAiAutomationForServiceBusinesses from "./pages/BestAiAutomationForServiceBusinesses";
import AiAutomationForHvacCompanies from "./pages/AiAutomationForHvacCompanies";
import HvacLeadFollowUpAutomation from "./pages/HvacLeadFollowUpAutomation";
import HvacMissedCallTextBack from "./pages/HvacMissedCallTextBack";
import AiAppointmentSetterForHvac from "./pages/AiAppointmentSetterForHvac";
import HvacSchedulingAndFollowUpAutomation from "./pages/HvacSchedulingAndFollowUpAutomation";
import AiPhoneAnsweringForHvacCompanies from "./pages/AiPhoneAnsweringForHvacCompanies";
import MissedCallTextBackVsAiPhoneAnsweringForHvacCompanies from "./pages/MissedCallTextBackVsAiPhoneAnsweringForHvacCompanies";
import AiPhoneAnsweringVsVoicemailForHvacCompanies from "./pages/AiPhoneAnsweringVsVoicemailForHvacCompanies";
import AiAppointmentSetterForHomeServiceBusinesses from "./pages/AiAppointmentSetterForHomeServiceBusinesses";
import AiAutomationNoTechTeam from "./pages/AiAutomationNoTechTeam";
import AiVoiceAgentForRestaurants from "./pages/AiVoiceAgentForRestaurants";
import AiAutomationForRestaurants from "./pages/AiAutomationForRestaurants";
import WhatToAutomateFirstForRestaurants from "./pages/WhatToAutomateFirstForRestaurants";
import PrivateEventInquiryFollowUpForRestaurants from "./pages/PrivateEventInquiryFollowUpForRestaurants";
import ReservationConfirmationAndReminderAutomationForRestaurants from "./pages/ReservationConfirmationAndReminderAutomationForRestaurants";
import MissedCallTextBackForRestaurants from "./pages/MissedCallTextBackForRestaurants";
import MissedCallTextBackVsAiVoiceAgentForRestaurants from "./pages/MissedCallTextBackVsAiVoiceAgentForRestaurants";
import MissedCallTextBackVsVoicemailForRestaurants from "./pages/MissedCallTextBackVsVoicemailForRestaurants";
import AfterHoursPhoneAnsweringForRestaurants from "./pages/AfterHoursPhoneAnsweringForRestaurants";
import AfterHoursAiPhoneAnsweringVsVoicemailForRestaurants from "./pages/AfterHoursAiPhoneAnsweringVsVoicemailForRestaurants";
import AiAutomationConsultantEdmonton from "./pages/AiAutomationConsultantEdmonton";
import AiAutomationConsultantAlberta from "./pages/AiAutomationConsultantAlberta";
import AiAutomationConsultantCanada from "./pages/AiAutomationConsultantCanada";
import AiAutomationForRealEstate from "./pages/AiAutomationForRealEstate";
import RealEstateLeadResponseAndFollowUpAutomation from "./pages/RealEstateLeadResponseAndFollowUpAutomation";
import ShowingCoordinationAutomationForRealEstateTeams from "./pages/ShowingCoordinationAutomationForRealEstateTeams";
import AiAutomationForMortgageBrokers from "./pages/AiAutomationForMortgageBrokers";
import AiLeadFollowUpForMortgageBrokers from "./pages/AiLeadFollowUpForMortgageBrokers";
import DocumentCollectionAutomationForMortgageBrokers from "./pages/DocumentCollectionAutomationForMortgageBrokers";
import IncompleteApplicationFollowUpForMortgageBrokers from "./pages/IncompleteApplicationFollowUpForMortgageBrokers";
import AiAutomationForDentalPractices from "./pages/AiAutomationForDentalPractices";
import AiAutomationForLawFirms from "./pages/AiAutomationForLawFirms";
import AiAutomationForAccountingFirms from "./pages/AiAutomationForAccountingFirms";
import AiAutomationForPlumbingCompanies from "./pages/AiAutomationForPlumbingCompanies";
import AiAutomationForElectricalContractors from "./pages/AiAutomationForElectricalContractors";
import CrmAutomationSetupForContractors from "./pages/CrmAutomationSetupForContractors";
import WhatToAutomateFirstForContractors from "./pages/WhatToAutomateFirstForContractors";
import CrmAutomationSetupCostForContractors from "./pages/CrmAutomationSetupCostForContractors";
import CrmAutomationSetupVsDiyForContractors from "./pages/CrmAutomationSetupVsDiyForContractors";
import ClientOnboardingAutomation from "./pages/ClientOnboardingAutomation";
import AiAutomationRoiGuide from "./pages/AiAutomationRoiGuide";
import AiAutomationRoiCalculator from "./pages/AiAutomationRoiCalculator";
import N8nAutomationExamplesSmallBusiness from "./pages/N8nAutomationExamplesSmallBusiness";
import N8nAutomationConsultant from "./pages/N8nAutomationConsultant";
import HowToHireN8nAutomationConsultant from "./pages/HowToHireN8nAutomationConsultant";
import N8nWorkflowCleanupService from "./pages/N8nWorkflowCleanupService";
import N8nWorkflowCleanupVsRebuild from "./pages/N8nWorkflowCleanupVsRebuild";
import N8nWorkflowAuditChecklist from "./pages/N8nWorkflowAuditChecklist";
import N8nAutomationConsultantCostSmallBusiness from "./pages/N8nAutomationConsultantCostSmallBusiness";
import N8nConsultantVsDiySmallBusiness from "./pages/N8nConsultantVsDiySmallBusiness";
import AiEmailSequenceAutomation from "./pages/AiEmailSequenceAutomation";
import AiAutomationForInsuranceAgencies from "./pages/AiAutomationForInsuranceAgencies";
import AiLeadFollowUpForInsuranceAgencies from "./pages/AiLeadFollowUpForInsuranceAgencies";
import RenewalReminderAutomationForInsuranceAgencies from "./pages/RenewalReminderAutomationForInsuranceAgencies";
import QuoteFollowUpAutomationForInsuranceAgencies from "./pages/QuoteFollowUpAutomationForInsuranceAgencies";
import CrossSellAutomationForInsuranceAgencies from "./pages/CrossSellAutomationForInsuranceAgencies";
import AiAutomationForPropertyManagement from "./pages/AiAutomationForPropertyManagement";
import WhatToAutomateFirstForPropertyManagementCompanies from "./pages/WhatToAutomateFirstForPropertyManagementCompanies";
import LeaseRenewalAutomationForPropertyManagementCompanies from "./pages/LeaseRenewalAutomationForPropertyManagementCompanies";
import ShowingCoordinationAutomationForPropertyManagementCompanies from "./pages/ShowingCoordinationAutomationForPropertyManagementCompanies";
import MaintenanceRequestAutomationForPropertyManagementCompanies from "./pages/MaintenanceRequestAutomationForPropertyManagementCompanies";
import TenantCommunicationAutomationForPropertyManagementCompanies from "./pages/TenantCommunicationAutomationForPropertyManagementCompanies";
import AfterHoursTenantCommunicationForPropertyManagementCompanies from "./pages/AfterHoursTenantCommunicationForPropertyManagementCompanies";
import AfterHoursMaintenanceTriageForPropertyManagementCompanies from "./pages/AfterHoursMaintenanceTriageForPropertyManagementCompanies";
import EmergencyVsRoutineMaintenanceIntakeForPropertyManagementCompanies from "./pages/EmergencyVsRoutineMaintenanceIntakeForPropertyManagementCompanies";
import AiAutomationEcommerce from "./pages/AiAutomationEcommerce";
import AiAutomationForAutoPartsEcommerce from "./pages/AiAutomationForAutoPartsEcommerce";
import WhatToAutomateFirstForAutoPartsEcommerce from "./pages/WhatToAutomateFirstForAutoPartsEcommerce";
import CrmAutomationVsManualFollowUpForAutoPartsEcommerce from "./pages/CrmAutomationVsManualFollowUpForAutoPartsEcommerce";
import FitmentInquiryAutomationForAutoPartsEcommerce from "./pages/FitmentInquiryAutomationForAutoPartsEcommerce";
import CustomerInquiryAutomationForAutoPartsEcommerce from "./pages/CustomerInquiryAutomationForAutoPartsEcommerce";
import QuoteFollowUpAutomationForAutoPartsEcommerce from "./pages/QuoteFollowUpAutomationForAutoPartsEcommerce";
import StaleLeadFollowUpForAutoPartsEcommerce from "./pages/StaleLeadFollowUpForAutoPartsEcommerce";
import EcommerceCrmAutomationWithAiFollowUp from "./pages/EcommerceCrmAutomationWithAiFollowUp";
import EcommerceCrmAutomationVsManualFollowUp from "./pages/EcommerceCrmAutomationVsManualFollowUp";
import RepeatPurchaseReactivationAutomationForEcommerceBrands from "./pages/RepeatPurchaseReactivationAutomationForEcommerceBrands";
import CustomerServiceAutomationForEcommerceBrands from "./pages/CustomerServiceAutomationForEcommerceBrands";
import CustomerServiceAutomationVsManualSupportForEcommerceBrands from "./pages/CustomerServiceAutomationVsManualSupportForEcommerceBrands";
import OrderStatusAndReturnSupportAutomationForEcommerceBrands from "./pages/OrderStatusAndReturnSupportAutomationForEcommerceBrands";
import AfterHoursLeadCapture from "./pages/AfterHoursLeadCapture";
import MissedCallFollowUp from "./pages/MissedCallFollowUp";
import BookingConfirmationAndReminder from "./pages/BookingConfirmationAndReminder";
import AiPhoneAnswering from "./pages/AiPhoneAnswering";
import AiVoiceAgentForLeadQualification from "./pages/AiVoiceAgentForLeadQualification";
import AiVoiceAgentSetupForLeadQualification from "./pages/AiVoiceAgentSetupForLeadQualification";
import AiVoiceAgentSetupCostSmallBusiness from "./pages/AiVoiceAgentSetupCostSmallBusiness";
import AiVoiceAgentSetupMistakesSmallBusiness from "./pages/AiVoiceAgentSetupMistakesSmallBusiness";
import AiVoiceAgentLaunchChecklistSmallBusiness from "./pages/AiVoiceAgentLaunchChecklistSmallBusiness";
import AiVoiceAgentSetupVsDiySmallBusiness from "./pages/AiVoiceAgentSetupVsDiySmallBusiness";
import AiVoiceAgentCostSmallBusiness from "./pages/AiVoiceAgentCostSmallBusiness";
import AiVoiceAgentRoiForLeadFollowUp from "./pages/AiVoiceAgentRoiForLeadFollowUp";
import InstantLeadResponse from "./pages/InstantLeadResponse";
import ContactFormLeadFollowUpAutomation from "./pages/ContactFormLeadFollowUpAutomation";
import ContactFormAutoresponderVsFullLeadFollowUp from "./pages/ContactFormAutoresponderVsFullLeadFollowUp";
import QuoteFollowUp from "./pages/QuoteFollowUp";
import ClientReactivation from "./pages/ClientReactivation";
import NoShowReduction from "./pages/NoShowReduction";
import AiAppointmentSetterVsReceptionist from "./pages/AiAppointmentSetterVsReceptionist";
import AiAppointmentSetterVsVirtualAssistant from "./pages/AiAppointmentSetterVsVirtualAssistant";
import AiVoiceAgentVsVoicemail from "./pages/AiVoiceAgentVsVoicemail";
import AiVoiceAgentVsCallCenter from "./pages/AiVoiceAgentVsCallCenter";
import AiVoiceAgentVsHumanAppointmentSetter from "./pages/AiVoiceAgentVsHumanAppointmentSetter";
import AiVoiceAgentVsManualCallbackForServiceBusinesses from "./pages/AiVoiceAgentVsManualCallbackForServiceBusinesses";
import N8nVsMakeSmallBusiness from "./pages/N8nVsMakeSmallBusiness";
import BuildVsBuyAiAutomation from "./pages/BuildVsBuyAiAutomation";
import VapiVsRetellSmallBusiness from "./pages/VapiVsRetellSmallBusiness";
import RetellVsBlandSmallBusiness from "./pages/RetellVsBlandSmallBusiness";
import AiAutomationForChiropractors from "./pages/AiAutomationForChiropractors";
import AiAutomationForCleaningCompanies from "./pages/AiAutomationForCleaningCompanies";
import AiAutomationForMedSpas from "./pages/AiAutomationForMedSpas";
import AiAutomationForRoofingCompanies from "./pages/AiAutomationForRoofingCompanies";
import WhatToAutomateFirstForRoofingCompanies from "./pages/WhatToAutomateFirstForRoofingCompanies";
import MissedCallTextBackForRoofingCompanies from "./pages/MissedCallTextBackForRoofingCompanies";
import MissedCallTextBackVsAiPhoneAnsweringForRoofingCompanies from "./pages/MissedCallTextBackVsAiPhoneAnsweringForRoofingCompanies";
import MissedCallTextBackVsVoicemailForRoofingCompanies from "./pages/MissedCallTextBackVsVoicemailForRoofingCompanies";
import AiPhoneAnsweringForRoofingCompanies from "./pages/AiPhoneAnsweringForRoofingCompanies";
import AiPhoneAnsweringVsVoicemailForRoofingCompanies from "./pages/AiPhoneAnsweringVsVoicemailForRoofingCompanies";
import AiAutomationForPestControlCompanies from "./pages/AiAutomationForPestControlCompanies";
import AiAutomationForAutoRepairShops from "./pages/AiAutomationForAutoRepairShops";
import WhatToAutomateFirstForAutoRepairShops from "./pages/WhatToAutomateFirstForAutoRepairShops";
import MaintenanceReminderAutomationForAutoRepairShops from "./pages/MaintenanceReminderAutomationForAutoRepairShops";
import EstimateFollowUpAutomationForAutoRepairShops from "./pages/EstimateFollowUpAutomationForAutoRepairShops";
import AppointmentSchedulingAndReminderAutomationForAutoRepairShops from "./pages/AppointmentSchedulingAndReminderAutomationForAutoRepairShops";
import MissedCallTextBackForAutoRepairShops from "./pages/MissedCallTextBackForAutoRepairShops";
import MissedCallTextBackVsVoicemailForAutoRepairShops from "./pages/MissedCallTextBackVsVoicemailForAutoRepairShops";
import MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops from "./pages/MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops";
import AiPhoneAnsweringForAutoRepairShops from "./pages/AiPhoneAnsweringForAutoRepairShops";
import AiPhoneAnsweringVsVoicemailForAutoRepairShops from "./pages/AiPhoneAnsweringVsVoicemailForAutoRepairShops";
import AiAutomationForLandscapingCompanies from "./pages/AiAutomationForLandscapingCompanies";
import AiAutomationForPaintingContractors from "./pages/AiAutomationForPaintingContractors";
import AiAutomationForHomeInspectors from "./pages/AiAutomationForHomeInspectors";
import AiAutomationCostSmallBusiness from "./pages/AiAutomationCostSmallBusiness";
import AiAutomationTimeSavingsSmallBusiness from "./pages/AiAutomationTimeSavingsSmallBusiness";
import AffordableAiAutomationSmallBusiness from "./pages/AffordableAiAutomationSmallBusiness";
import AiAutomationAuditChecklist from "./pages/AiAutomationAuditChecklist";
import CrmAutomationExamplesSmallBusiness from "./pages/CrmAutomationExamplesSmallBusiness";
import CrmAutomationForContractors from "./pages/CrmAutomationForContractors";
import CrmPipelineStagesForContractors from "./pages/CrmPipelineStagesForContractors";
import EstimateFollowUpAutomationForContractors from "./pages/EstimateFollowUpAutomationForContractors";
import EstimateFollowUpAutomationForRoofingCompanies from "./pages/EstimateFollowUpAutomationForRoofingCompanies";
import RoofingSchedulingAndFollowUpAutomation from "./pages/RoofingSchedulingAndFollowUpAutomation";
import DispatchHandoffAutomationForContractors from "./pages/DispatchHandoffAutomationForContractors";
import JobIntakeRoutingAutomationForContractors from "./pages/JobIntakeRoutingAutomationForContractors";
import LeadFollowUpAutomationExamples from "./pages/LeadFollowUpAutomationExamples";
import AiAutomationImplementationRoadmap from "./pages/AiAutomationImplementationRoadmap";
import AiAutomationIntegrationsSmallBusiness from "./pages/AiAutomationIntegrationsSmallBusiness";
import WhatProcessesCanAiAutomateInMyBusiness from "./pages/WhatProcessesCanAiAutomateInMyBusiness";
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
  { path: "/what-does-an-ai-automation-consultant-do", element: <WhatDoesAnAiAutomationConsultantDo /> },
  { path: "/guides", element: <Guides /> },
  { path: "/n8n-vs-zapier-small-business", element: <N8nVsZapierSmallBusiness /> },
  { path: "/ai-appointment-setter", element: <AiAppointmentSetter /> },
  { path: "/ai-appointment-setter-setup", element: <AiAppointmentSetterSetup /> },
  { path: "/ai-appointment-setter-setup-vs-diy-small-business", element: <AiAppointmentSetterSetupVsDiySmallBusiness /> },
  { path: "/ai-appointment-setter-cost-small-business", element: <AiAppointmentSetterCostSmallBusiness /> },
  { path: "/ai-appointment-setter-roi-small-business", element: <AiAppointmentSetterRoiSmallBusiness /> },
  { path: "/ai-lead-follow-up-for-service-businesses", element: <AiLeadFollowUpForServiceBusinesses /> },
  { path: "/ai-lead-follow-up-cost-small-business", element: <AiLeadFollowUpCostSmallBusiness /> },
  { path: "/ai-automation-consultant-calgary", element: <AiAutomationConsultantCalgary /> },
  { path: "/ai-automation-consultant-edmonton", element: <AiAutomationConsultantEdmonton /> },
  {
    path: "/ai-automation-hvac",
    element: <Navigate to="/ai-automation-for-hvac-companies" replace />,
    prerender: false,
  },
  { path: "/hire-ai-automation-consultant-vs-agency", element: <HireAiAutomationConsultantVsAgency /> },
  { path: "/hire-ai-automation-consultant-vs-diy", element: <HireAiAutomationConsultantVsDiy /> },
  { path: "/how-to-hire-ai-automation-consultant", element: <HowToHireAiAutomationConsultant /> },
  { path: "/hvac-database-reactivation", element: <HvacDatabaseReactivation /> },
  { path: "/ai-automation-consultant-vs-freelancer", element: <AiAutomationConsultantVsFreelancer /> },
  {
    path: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification",
    element: <AiChatbotVsAiVoiceAgentForLeadQualification />,
  },
  { path: "/gohighlevel-vs-custom-crm-small-business", element: <GoHighLevelVsCustomCrmSmallBusiness /> },
  { path: "/gohighlevel-vs-custom-crm-for-contractors", element: <GoHighLevelVsCustomCrmForContractors /> },
  { path: "/gohighlevel-automation-setup", element: <GoHighLevelAutomationSetup /> },
  { path: "/gohighlevel-setup-cost-small-business", element: <GoHighLevelSetupCostSmallBusiness /> },
  { path: "/gohighlevel-setup-vs-diy-small-business", element: <GoHighLevelSetupVsDiySmallBusiness /> },
  { path: "/gohighlevel-account-cleanup-service", element: <GoHighLevelAccountCleanupService /> },
  { path: "/gohighlevel-account-cleanup-vs-rebuild", element: <GoHighLevelAccountCleanupVsRebuild /> },
  { path: "/gohighlevel-account-audit-checklist", element: <GoHighLevelAccountAuditChecklist /> },
  { path: "/gohighlevel-setup-mistakes-small-business", element: <GoHighLevelSetupMistakesSmallBusiness /> },
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
  { path: "/ai-phone-answering-for-hvac-companies", element: <AiPhoneAnsweringForHvacCompanies /> },
  { path: "/missed-call-text-back-vs-ai-phone-answering-for-hvac-companies", element: <MissedCallTextBackVsAiPhoneAnsweringForHvacCompanies /> },
  { path: "/ai-phone-answering-vs-voicemail-for-hvac-companies", element: <AiPhoneAnsweringVsVoicemailForHvacCompanies /> },
  { path: "/ai-appointment-setter-for-home-service-businesses", element: <AiAppointmentSetterForHomeServiceBusinesses /> },
  { path: "/ai-automation-for-businesses-without-a-tech-team", element: <AiAutomationNoTechTeam /> },
  { path: "/ai-voice-agent-for-restaurants", element: <AiVoiceAgentForRestaurants /> },
  { path: "/ai-automation-for-restaurants", element: <AiAutomationForRestaurants /> },
  { path: "/what-to-automate-first-for-restaurants", element: <WhatToAutomateFirstForRestaurants /> },
  { path: "/private-event-inquiry-follow-up-for-restaurants", element: <PrivateEventInquiryFollowUpForRestaurants /> },
  { path: "/reservation-confirmation-and-reminder-automation-for-restaurants", element: <ReservationConfirmationAndReminderAutomationForRestaurants /> },
  { path: "/missed-call-text-back-for-restaurants", element: <MissedCallTextBackForRestaurants /> },
  {
    path: "/missed-call-text-back-vs-ai-voice-agent-for-restaurants",
    element: <MissedCallTextBackVsAiVoiceAgentForRestaurants />,
  },
  {
    path: "/missed-call-text-back-vs-voicemail-for-restaurants",
    element: <MissedCallTextBackVsVoicemailForRestaurants />,
  },
  { path: "/after-hours-phone-answering-for-restaurants", element: <AfterHoursPhoneAnsweringForRestaurants /> },
  { path: "/after-hours-ai-phone-answering-vs-voicemail-for-restaurants", element: <AfterHoursAiPhoneAnsweringVsVoicemailForRestaurants /> },
  { path: "/ai-automation-consultant-alberta", element: <AiAutomationConsultantAlberta /> },
  { path: "/ai-automation-consultant-canada", element: <AiAutomationConsultantCanada /> },
  { path: "/ai-automation-for-real-estate", element: <AiAutomationForRealEstate /> },
  {
    path: "/real-estate-lead-response-and-follow-up-automation",
    element: <RealEstateLeadResponseAndFollowUpAutomation />,
  },
  {
    path: "/showing-coordination-automation-for-real-estate-teams",
    element: <ShowingCoordinationAutomationForRealEstateTeams />,
  },
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
  { path: "/ai-automation-roi-calculator", element: <AiAutomationRoiCalculator /> },
  { path: "/n8n-automation-examples-small-business", element: <N8nAutomationExamplesSmallBusiness /> },
  { path: "/n8n-automation-consultant", element: <N8nAutomationConsultant /> },
  { path: "/how-to-hire-n8n-automation-consultant", element: <HowToHireN8nAutomationConsultant /> },
  { path: "/n8n-workflow-cleanup-service", element: <N8nWorkflowCleanupService /> },
  { path: "/n8n-workflow-cleanup-vs-rebuild", element: <N8nWorkflowCleanupVsRebuild /> },
  { path: "/n8n-workflow-audit-checklist", element: <N8nWorkflowAuditChecklist /> },
  { path: "/n8n-automation-consultant-cost-small-business", element: <N8nAutomationConsultantCostSmallBusiness /> },
  { path: "/n8n-consultant-vs-diy-small-business", element: <N8nConsultantVsDiySmallBusiness /> },
  { path: "/ai-email-sequence-automation", element: <AiEmailSequenceAutomation /> },
  { path: "/ai-automation-for-insurance-agencies", element: <AiAutomationForInsuranceAgencies /> },
  { path: "/ai-lead-follow-up-for-insurance-agencies", element: <AiLeadFollowUpForInsuranceAgencies /> },
  { path: "/renewal-reminder-automation-for-insurance-agencies", element: <RenewalReminderAutomationForInsuranceAgencies /> },
  { path: "/quote-follow-up-automation-for-insurance-agencies", element: <QuoteFollowUpAutomationForInsuranceAgencies /> },
  { path: "/cross-sell-automation-for-insurance-agencies", element: <CrossSellAutomationForInsuranceAgencies /> },
  { path: "/ai-automation-for-property-management", element: <AiAutomationForPropertyManagement /> },
  { path: "/what-to-automate-first-for-property-management-companies", element: <WhatToAutomateFirstForPropertyManagementCompanies /> },
  { path: "/lease-renewal-automation-for-property-management-companies", element: <LeaseRenewalAutomationForPropertyManagementCompanies /> },
  { path: "/showing-coordination-automation-for-property-management-companies", element: <ShowingCoordinationAutomationForPropertyManagementCompanies /> },
  { path: "/maintenance-request-automation-for-property-management-companies", element: <MaintenanceRequestAutomationForPropertyManagementCompanies /> },
  { path: "/tenant-communication-automation-for-property-management-companies", element: <TenantCommunicationAutomationForPropertyManagementCompanies /> },
  { path: "/after-hours-tenant-communication-for-property-management-companies", element: <AfterHoursTenantCommunicationForPropertyManagementCompanies /> },
  { path: "/after-hours-maintenance-triage-for-property-management-companies", element: <AfterHoursMaintenanceTriageForPropertyManagementCompanies /> },
  { path: "/emergency-vs-routine-maintenance-intake-for-property-management-companies", element: <EmergencyVsRoutineMaintenanceIntakeForPropertyManagementCompanies /> },
  { path: "/ai-automation-ecommerce", element: <AiAutomationEcommerce /> },
  { path: "/ai-automation-for-auto-parts-ecommerce", element: <AiAutomationForAutoPartsEcommerce /> },
  { path: "/what-to-automate-first-for-auto-parts-ecommerce", element: <WhatToAutomateFirstForAutoPartsEcommerce /> },
  {
    path: "/crm-automation-vs-manual-follow-up-for-auto-parts-ecommerce",
    element: <CrmAutomationVsManualFollowUpForAutoPartsEcommerce />,
  },
  { path: "/ecommerce-crm-automation-with-ai-follow-up", element: <EcommerceCrmAutomationWithAiFollowUp /> },
  { path: "/ecommerce-crm-automation-vs-manual-follow-up", element: <EcommerceCrmAutomationVsManualFollowUp /> },
  {
    path: "/fitment-inquiry-automation-for-auto-parts-ecommerce",
    element: <FitmentInquiryAutomationForAutoPartsEcommerce />,
  },
  {
    path: "/customer-inquiry-automation-for-auto-parts-ecommerce",
    element: <CustomerInquiryAutomationForAutoPartsEcommerce />,
  },
  {
    path: "/quote-follow-up-automation-for-auto-parts-ecommerce",
    element: <QuoteFollowUpAutomationForAutoPartsEcommerce />,
  },
  {
    path: "/stale-lead-follow-up-for-auto-parts-ecommerce",
    element: <StaleLeadFollowUpForAutoPartsEcommerce />,
  },
  {
    path: "/repeat-purchase-reactivation-automation-for-ecommerce-brands",
    element: <RepeatPurchaseReactivationAutomationForEcommerceBrands />,
  },
  {
    path: "/customer-service-automation-for-ecommerce-brands",
    element: <CustomerServiceAutomationForEcommerceBrands />,
  },
  {
    path: "/customer-service-automation-vs-manual-support-for-ecommerce-brands",
    element: <CustomerServiceAutomationVsManualSupportForEcommerceBrands />,
  },
  {
    path: "/order-status-and-return-support-automation-for-ecommerce-brands",
    element: <OrderStatusAndReturnSupportAutomationForEcommerceBrands />,
  },
  { path: "/after-hours-lead-capture-for-service-businesses", element: <AfterHoursLeadCapture /> },
  { path: "/missed-call-follow-up-automation", element: <MissedCallFollowUp /> },
  { path: "/booking-confirmation-and-reminder-automation", element: <BookingConfirmationAndReminder /> },
  { path: "/ai-phone-answering-for-service-businesses", element: <AiPhoneAnswering /> },
  { path: "/ai-voice-agent-lead-qualification", element: <AiVoiceAgentForLeadQualification /> },
  { path: "/ai-voice-agent-setup-for-lead-qualification", element: <AiVoiceAgentSetupForLeadQualification /> },
  { path: "/ai-voice-agent-setup-cost-small-business", element: <AiVoiceAgentSetupCostSmallBusiness /> },
  { path: "/ai-voice-agent-setup-mistakes-small-business", element: <AiVoiceAgentSetupMistakesSmallBusiness /> },
  { path: "/ai-voice-agent-launch-checklist-small-business", element: <AiVoiceAgentLaunchChecklistSmallBusiness /> },
  { path: "/ai-voice-agent-setup-vs-diy-small-business", element: <AiVoiceAgentSetupVsDiySmallBusiness /> },
  { path: "/ai-voice-agent-cost-small-business", element: <AiVoiceAgentCostSmallBusiness /> },
  { path: "/ai-voice-agent-roi-for-lead-follow-up", element: <AiVoiceAgentRoiForLeadFollowUp /> },
  { path: "/instant-lead-response-automation", element: <InstantLeadResponse /> },
  { path: "/contact-form-lead-follow-up-automation", element: <ContactFormLeadFollowUpAutomation /> },
  {
    path: "/contact-form-autoresponder-vs-full-lead-follow-up",
    element: <ContactFormAutoresponderVsFullLeadFollowUp />,
  },
  { path: "/quote-follow-up-automation", element: <QuoteFollowUp /> },
  { path: "/client-reactivation-automation", element: <ClientReactivation /> },
  { path: "/no-show-reduction-automation", element: <NoShowReduction /> },
  { path: "/ai-appointment-setter-vs-receptionist", element: <AiAppointmentSetterVsReceptionist /> },
  { path: "/ai-appointment-setter-vs-virtual-assistant", element: <AiAppointmentSetterVsVirtualAssistant /> },
  { path: "/ai-voice-agent-vs-voicemail", element: <AiVoiceAgentVsVoicemail /> },
  { path: "/ai-voice-agent-vs-call-center", element: <AiVoiceAgentVsCallCenter /> },
  { path: "/ai-voice-agent-vs-human-appointment-setter", element: <AiVoiceAgentVsHumanAppointmentSetter /> },
  { path: "/ai-voice-agent-vs-manual-callback-for-service-businesses", element: <AiVoiceAgentVsManualCallbackForServiceBusinesses /> },
  { path: "/n8n-vs-make-small-business", element: <N8nVsMakeSmallBusiness /> },
  { path: "/build-vs-buy-ai-automation", element: <BuildVsBuyAiAutomation /> },
  { path: "/vapi-vs-retell-small-business", element: <VapiVsRetellSmallBusiness /> },
  { path: "/retell-vs-bland-small-business", element: <RetellVsBlandSmallBusiness /> },
  { path: "/ai-automation-for-chiropractors", element: <AiAutomationForChiropractors /> },
  { path: "/ai-automation-for-cleaning-companies", element: <AiAutomationForCleaningCompanies /> },
  { path: "/ai-automation-for-med-spas", element: <AiAutomationForMedSpas /> },
  { path: "/ai-automation-for-roofing-companies", element: <AiAutomationForRoofingCompanies /> },
  { path: "/what-to-automate-first-for-roofing-companies", element: <WhatToAutomateFirstForRoofingCompanies /> },
  { path: "/missed-call-text-back-for-roofing-companies", element: <MissedCallTextBackForRoofingCompanies /> },
  { path: "/missed-call-text-back-vs-ai-phone-answering-for-roofing-companies", element: <MissedCallTextBackVsAiPhoneAnsweringForRoofingCompanies /> },
  { path: "/missed-call-text-back-vs-voicemail-for-roofing-companies", element: <MissedCallTextBackVsVoicemailForRoofingCompanies /> },
  { path: "/ai-phone-answering-for-roofing-companies", element: <AiPhoneAnsweringForRoofingCompanies /> },
  { path: "/ai-phone-answering-vs-voicemail-for-roofing-companies", element: <AiPhoneAnsweringVsVoicemailForRoofingCompanies /> },
  { path: "/ai-automation-for-pest-control-companies", element: <AiAutomationForPestControlCompanies /> },
  { path: "/ai-automation-for-auto-repair-shops", element: <AiAutomationForAutoRepairShops /> },
  { path: "/what-to-automate-first-for-auto-repair-shops", element: <WhatToAutomateFirstForAutoRepairShops /> },
  { path: "/maintenance-reminder-automation-for-auto-repair-shops", element: <MaintenanceReminderAutomationForAutoRepairShops /> },
  { path: "/estimate-follow-up-automation-for-auto-repair-shops", element: <EstimateFollowUpAutomationForAutoRepairShops /> },
  { path: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops", element: <AppointmentSchedulingAndReminderAutomationForAutoRepairShops /> },
  { path: "/missed-call-text-back-for-auto-repair-shops", element: <MissedCallTextBackForAutoRepairShops /> },
  { path: "/missed-call-text-back-vs-voicemail-for-auto-repair-shops", element: <MissedCallTextBackVsVoicemailForAutoRepairShops /> },
  { path: "/missed-call-text-back-vs-ai-phone-answering-for-auto-repair-shops", element: <MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops /> },
  { path: "/ai-phone-answering-for-auto-repair-shops", element: <AiPhoneAnsweringForAutoRepairShops /> },
  { path: "/ai-phone-answering-vs-voicemail-for-auto-repair-shops", element: <AiPhoneAnsweringVsVoicemailForAutoRepairShops /> },
  { path: "/ai-automation-for-landscaping-companies", element: <AiAutomationForLandscapingCompanies /> },
  { path: "/ai-automation-for-painting-contractors", element: <AiAutomationForPaintingContractors /> },
  { path: "/ai-automation-for-home-inspectors", element: <AiAutomationForHomeInspectors /> },
  { path: "/ai-automation-cost-small-business", element: <AiAutomationCostSmallBusiness /> },
  { path: "/ai-automation-time-savings-small-business", element: <AiAutomationTimeSavingsSmallBusiness /> },
  { path: "/affordable-ai-automation-small-business", element: <AffordableAiAutomationSmallBusiness /> },
  { path: "/ai-automation-audit-checklist", element: <AiAutomationAuditChecklist /> },
  { path: "/crm-automation-examples-small-business", element: <CrmAutomationExamplesSmallBusiness /> },
  { path: "/crm-automation-for-contractors", element: <CrmAutomationForContractors /> },
  { path: "/crm-pipeline-stages-for-contractors", element: <CrmPipelineStagesForContractors /> },
  { path: "/crm-automation-setup-for-contractors", element: <CrmAutomationSetupForContractors /> },
  { path: "/what-to-automate-first-for-contractors", element: <WhatToAutomateFirstForContractors /> },
  { path: "/crm-automation-setup-cost-for-contractors", element: <CrmAutomationSetupCostForContractors /> },
  { path: "/crm-automation-setup-vs-diy-for-contractors", element: <CrmAutomationSetupVsDiyForContractors /> },
  { path: "/estimate-follow-up-automation-for-contractors", element: <EstimateFollowUpAutomationForContractors /> },
  { path: "/estimate-follow-up-automation-for-roofing-companies", element: <EstimateFollowUpAutomationForRoofingCompanies /> },
  { path: "/roofing-scheduling-and-follow-up-automation", element: <RoofingSchedulingAndFollowUpAutomation /> },
  { path: "/dispatch-handoff-automation-for-contractors", element: <DispatchHandoffAutomationForContractors /> },
  { path: "/job-intake-routing-automation-for-contractors", element: <JobIntakeRoutingAutomationForContractors /> },
  { path: "/lead-follow-up-automation-examples", element: <LeadFollowUpAutomationExamples /> },
  { path: "/ai-automation-implementation-roadmap", element: <AiAutomationImplementationRoadmap /> },
  { path: "/ai-automation-integrations-small-business", element: <AiAutomationIntegrationsSmallBusiness /> },
  { path: "/what-processes-can-ai-automate-in-my-business", element: <WhatProcessesCanAiAutomateInMyBusiness /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsOfService /> },
  { path: "*", element: <NotFound />, prerender: false },
];

export const prerenderRoutes = appRoutes
  .filter((route) => route.prerender !== false)
  .map((route) => route.path);
