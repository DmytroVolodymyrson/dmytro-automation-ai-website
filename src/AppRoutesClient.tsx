import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const InstagramLeadGenerationCaseStudy = lazy(() => import("./pages/case-studies/InstagramLeadGenerationCaseStudy"));
const ParisCafeVoiceAgentCaseStudy = lazy(() => import("./pages/case-studies/ParisCafeVoiceAgentCaseStudy"));
const EcommerceCRMCaseStudy = lazy(() => import("./pages/case-studies/EcommerceCRMCaseStudy"));
const AiAutomationConsultantSmallBusiness = lazy(() => import("./pages/AiAutomationConsultantSmallBusiness"));
const WhatDoesAnAiAutomationConsultantDo = lazy(() => import("./pages/WhatDoesAnAiAutomationConsultantDo"));
const Guides = lazy(() => import("./pages/Guides"));
const N8nVsZapierSmallBusiness = lazy(() => import("./pages/N8nVsZapierSmallBusiness"));
const AiAppointmentSetter = lazy(() => import("./pages/AiAppointmentSetter"));
const AiAppointmentSetterSetup = lazy(() => import("./pages/AiAppointmentSetterSetup"));
const AiAppointmentSetterSetupVsDiySmallBusiness = lazy(() => import("./pages/AiAppointmentSetterSetupVsDiySmallBusiness"));
const AiAppointmentSetterCostSmallBusiness = lazy(() => import("./pages/AiAppointmentSetterCostSmallBusiness"));
const AiAppointmentSetterRoiSmallBusiness = lazy(() => import("./pages/AiAppointmentSetterRoiSmallBusiness"));
const AiLeadFollowUpForServiceBusinesses = lazy(() => import("./pages/AiLeadFollowUpForServiceBusinesses"));
const AiLeadFollowUpCostSmallBusiness = lazy(() => import("./pages/AiLeadFollowUpCostSmallBusiness"));
const AiAutomationConsultantCalgary = lazy(() => import("./pages/AiAutomationConsultantCalgary"));
const HireAiAutomationConsultantVsAgency = lazy(() => import("./pages/HireAiAutomationConsultantVsAgency"));
const HireAiAutomationConsultantVsDiy = lazy(() => import("./pages/HireAiAutomationConsultantVsDiy"));
const HowToHireAiAutomationConsultant = lazy(() => import("./pages/HowToHireAiAutomationConsultant"));
const HvacDatabaseReactivation = lazy(() => import("./pages/HvacDatabaseReactivation"));
const AiAutomationConsultantVsFreelancer = lazy(() => import("./pages/AiAutomationConsultantVsFreelancer"));
const AiChatbotVsAiVoiceAgentForLeadQualification = lazy(() => import("./pages/AiChatbotVsAiVoiceAgentForLeadQualification"));
const GoHighLevelVsCustomCrmSmallBusiness = lazy(() => import("./pages/GoHighLevelVsCustomCrmSmallBusiness"));
const GoHighLevelVsCustomCrmForContractors = lazy(() => import("./pages/GoHighLevelVsCustomCrmForContractors"));
const GoHighLevelAutomationSetup = lazy(() => import("./pages/GoHighLevelAutomationSetup"));
const GoHighLevelSetupCostSmallBusiness = lazy(() => import("./pages/GoHighLevelSetupCostSmallBusiness"));
const GoHighLevelSetupVsDiySmallBusiness = lazy(() => import("./pages/GoHighLevelSetupVsDiySmallBusiness"));
const AiAutomationConsultantPricingSmallBusiness = lazy(() => import("./pages/AiAutomationConsultantPricingSmallBusiness"));
const BestAiAutomationForServiceBusinesses = lazy(() => import("./pages/BestAiAutomationForServiceBusinesses"));
const AiAutomationForHvacCompanies = lazy(() => import("./pages/AiAutomationForHvacCompanies"));
const HvacLeadFollowUpAutomation = lazy(() => import("./pages/HvacLeadFollowUpAutomation"));
const HvacMissedCallTextBack = lazy(() => import("./pages/HvacMissedCallTextBack"));
const AiAppointmentSetterForHvac = lazy(() => import("./pages/AiAppointmentSetterForHvac"));
const HvacSchedulingAndFollowUpAutomation = lazy(() => import("./pages/HvacSchedulingAndFollowUpAutomation"));
const AiAppointmentSetterForHomeServiceBusinesses = lazy(() => import("./pages/AiAppointmentSetterForHomeServiceBusinesses"));
const AiAutomationNoTechTeam = lazy(() => import("./pages/AiAutomationNoTechTeam"));
const AiVoiceAgentForRestaurants = lazy(() => import("./pages/AiVoiceAgentForRestaurants"));
const AiAutomationForRestaurants = lazy(() => import("./pages/AiAutomationForRestaurants"));
const PrivateEventInquiryFollowUpForRestaurants = lazy(() => import("./pages/PrivateEventInquiryFollowUpForRestaurants"));
const ReservationConfirmationAndReminderAutomationForRestaurants = lazy(() => import("./pages/ReservationConfirmationAndReminderAutomationForRestaurants"));
const MissedCallTextBackForRestaurants = lazy(() => import("./pages/MissedCallTextBackForRestaurants"));
const MissedCallTextBackVsAiVoiceAgentForRestaurants = lazy(() => import("./pages/MissedCallTextBackVsAiVoiceAgentForRestaurants"));
const AfterHoursPhoneAnsweringForRestaurants = lazy(() => import("./pages/AfterHoursPhoneAnsweringForRestaurants"));
const AiAutomationConsultantEdmonton = lazy(() => import("./pages/AiAutomationConsultantEdmonton"));
const AiAutomationConsultantAlberta = lazy(() => import("./pages/AiAutomationConsultantAlberta"));
const AiAutomationConsultantCanada = lazy(() => import("./pages/AiAutomationConsultantCanada"));
const AiAutomationForRealEstate = lazy(() => import("./pages/AiAutomationForRealEstate"));
const RealEstateLeadResponseAndFollowUpAutomation = lazy(() => import("./pages/RealEstateLeadResponseAndFollowUpAutomation"));
const ShowingCoordinationAutomationForRealEstateTeams = lazy(() => import("./pages/ShowingCoordinationAutomationForRealEstateTeams"));
const AiAutomationForMortgageBrokers = lazy(() => import("./pages/AiAutomationForMortgageBrokers"));
const AiLeadFollowUpForMortgageBrokers = lazy(() => import("./pages/AiLeadFollowUpForMortgageBrokers"));
const DocumentCollectionAutomationForMortgageBrokers = lazy(() => import("./pages/DocumentCollectionAutomationForMortgageBrokers"));
const IncompleteApplicationFollowUpForMortgageBrokers = lazy(() => import("./pages/IncompleteApplicationFollowUpForMortgageBrokers"));
const AiAutomationForDentalPractices = lazy(() => import("./pages/AiAutomationForDentalPractices"));
const AiAutomationForLawFirms = lazy(() => import("./pages/AiAutomationForLawFirms"));
const AiAutomationForAccountingFirms = lazy(() => import("./pages/AiAutomationForAccountingFirms"));
const AiAutomationForPlumbingCompanies = lazy(() => import("./pages/AiAutomationForPlumbingCompanies"));
const AiAutomationForElectricalContractors = lazy(() => import("./pages/AiAutomationForElectricalContractors"));
const CrmAutomationSetupForContractors = lazy(() => import("./pages/CrmAutomationSetupForContractors"));
const ClientOnboardingAutomation = lazy(() => import("./pages/ClientOnboardingAutomation"));
const AiAutomationRoiGuide = lazy(() => import("./pages/AiAutomationRoiGuide"));
const AiAutomationRoiCalculator = lazy(() => import("./pages/AiAutomationRoiCalculator"));
const N8nAutomationExamplesSmallBusiness = lazy(() => import("./pages/N8nAutomationExamplesSmallBusiness"));
const N8nAutomationConsultant = lazy(() => import("./pages/N8nAutomationConsultant"));
const N8nAutomationConsultantCostSmallBusiness = lazy(() => import("./pages/N8nAutomationConsultantCostSmallBusiness"));
const N8nConsultantVsDiySmallBusiness = lazy(() => import("./pages/N8nConsultantVsDiySmallBusiness"));
const AiEmailSequenceAutomation = lazy(() => import("./pages/AiEmailSequenceAutomation"));
const AiAutomationForInsuranceAgencies = lazy(() => import("./pages/AiAutomationForInsuranceAgencies"));
const AiLeadFollowUpForInsuranceAgencies = lazy(() => import("./pages/AiLeadFollowUpForInsuranceAgencies"));
const RenewalReminderAutomationForInsuranceAgencies = lazy(() => import("./pages/RenewalReminderAutomationForInsuranceAgencies"));
const QuoteFollowUpAutomationForInsuranceAgencies = lazy(() => import("./pages/QuoteFollowUpAutomationForInsuranceAgencies"));
const CrossSellAutomationForInsuranceAgencies = lazy(() => import("./pages/CrossSellAutomationForInsuranceAgencies"));
const AiAutomationForPropertyManagement = lazy(() => import("./pages/AiAutomationForPropertyManagement"));
const LeaseRenewalAutomationForPropertyManagementCompanies = lazy(() => import("./pages/LeaseRenewalAutomationForPropertyManagementCompanies"));
const ShowingCoordinationAutomationForPropertyManagementCompanies = lazy(() => import("./pages/ShowingCoordinationAutomationForPropertyManagementCompanies"));
const MaintenanceRequestAutomationForPropertyManagementCompanies = lazy(() => import("./pages/MaintenanceRequestAutomationForPropertyManagementCompanies"));
const TenantCommunicationAutomationForPropertyManagementCompanies = lazy(() => import("./pages/TenantCommunicationAutomationForPropertyManagementCompanies"));
const AfterHoursTenantCommunicationForPropertyManagementCompanies = lazy(() => import("./pages/AfterHoursTenantCommunicationForPropertyManagementCompanies"));
const AfterHoursMaintenanceTriageForPropertyManagementCompanies = lazy(() => import("./pages/AfterHoursMaintenanceTriageForPropertyManagementCompanies"));
const AiAutomationEcommerce = lazy(() => import("./pages/AiAutomationEcommerce"));
const AiAutomationForAutoPartsEcommerce = lazy(() => import("./pages/AiAutomationForAutoPartsEcommerce"));
const FitmentInquiryAutomationForAutoPartsEcommerce = lazy(() => import("./pages/FitmentInquiryAutomationForAutoPartsEcommerce"));
const CustomerInquiryAutomationForAutoPartsEcommerce = lazy(() => import("./pages/CustomerInquiryAutomationForAutoPartsEcommerce"));
const EcommerceCrmAutomationWithAiFollowUp = lazy(() => import("./pages/EcommerceCrmAutomationWithAiFollowUp"));
const EcommerceCrmAutomationVsManualFollowUp = lazy(() => import("./pages/EcommerceCrmAutomationVsManualFollowUp"));
const RepeatPurchaseReactivationAutomationForEcommerceBrands = lazy(() => import("./pages/RepeatPurchaseReactivationAutomationForEcommerceBrands"));
const CustomerServiceAutomationForEcommerceBrands = lazy(() => import("./pages/CustomerServiceAutomationForEcommerceBrands"));
const CustomerServiceAutomationVsManualSupportForEcommerceBrands = lazy(() => import("./pages/CustomerServiceAutomationVsManualSupportForEcommerceBrands"));
const OrderStatusAndReturnSupportAutomationForEcommerceBrands = lazy(() => import("./pages/OrderStatusAndReturnSupportAutomationForEcommerceBrands"));
const AfterHoursLeadCapture = lazy(() => import("./pages/AfterHoursLeadCapture"));
const MissedCallFollowUp = lazy(() => import("./pages/MissedCallFollowUp"));
const BookingConfirmationAndReminder = lazy(() => import("./pages/BookingConfirmationAndReminder"));
const AiPhoneAnswering = lazy(() => import("./pages/AiPhoneAnswering"));
const AiVoiceAgentForLeadQualification = lazy(() => import("./pages/AiVoiceAgentForLeadQualification"));
const AiVoiceAgentSetupForLeadQualification = lazy(() => import("./pages/AiVoiceAgentSetupForLeadQualification"));
const AiVoiceAgentSetupVsDiySmallBusiness = lazy(() => import("./pages/AiVoiceAgentSetupVsDiySmallBusiness"));
const AiVoiceAgentCostSmallBusiness = lazy(() => import("./pages/AiVoiceAgentCostSmallBusiness"));
const AiVoiceAgentRoiForLeadFollowUp = lazy(() => import("./pages/AiVoiceAgentRoiForLeadFollowUp"));
const InstantLeadResponse = lazy(() => import("./pages/InstantLeadResponse"));
const ContactFormLeadFollowUpAutomation = lazy(() => import("./pages/ContactFormLeadFollowUpAutomation"));
const ContactFormAutoresponderVsFullLeadFollowUp = lazy(() => import("./pages/ContactFormAutoresponderVsFullLeadFollowUp"));
const QuoteFollowUp = lazy(() => import("./pages/QuoteFollowUp"));
const ClientReactivation = lazy(() => import("./pages/ClientReactivation"));
const NoShowReduction = lazy(() => import("./pages/NoShowReduction"));
const AiAppointmentSetterVsReceptionist = lazy(() => import("./pages/AiAppointmentSetterVsReceptionist"));
const AiAppointmentSetterVsVirtualAssistant = lazy(() => import("./pages/AiAppointmentSetterVsVirtualAssistant"));
const AiVoiceAgentVsVoicemail = lazy(() => import("./pages/AiVoiceAgentVsVoicemail"));
const AiVoiceAgentVsCallCenter = lazy(() => import("./pages/AiVoiceAgentVsCallCenter"));
const AiVoiceAgentVsHumanAppointmentSetter = lazy(() => import("./pages/AiVoiceAgentVsHumanAppointmentSetter"));
const AiVoiceAgentVsManualCallbackForServiceBusinesses = lazy(() => import("./pages/AiVoiceAgentVsManualCallbackForServiceBusinesses"));
const N8nVsMakeSmallBusiness = lazy(() => import("./pages/N8nVsMakeSmallBusiness"));
const BuildVsBuyAiAutomation = lazy(() => import("./pages/BuildVsBuyAiAutomation"));
const VapiVsRetellSmallBusiness = lazy(() => import("./pages/VapiVsRetellSmallBusiness"));
const RetellVsBlandSmallBusiness = lazy(() => import("./pages/RetellVsBlandSmallBusiness"));
const AiAutomationForChiropractors = lazy(() => import("./pages/AiAutomationForChiropractors"));
const AiAutomationForCleaningCompanies = lazy(() => import("./pages/AiAutomationForCleaningCompanies"));
const AiAutomationForMedSpas = lazy(() => import("./pages/AiAutomationForMedSpas"));
const AiAutomationForRoofingCompanies = lazy(() => import("./pages/AiAutomationForRoofingCompanies"));
const AiAutomationForPestControlCompanies = lazy(() => import("./pages/AiAutomationForPestControlCompanies"));
const AiAutomationForAutoRepairShops = lazy(() => import("./pages/AiAutomationForAutoRepairShops"));
const MaintenanceReminderAutomationForAutoRepairShops = lazy(() => import("./pages/MaintenanceReminderAutomationForAutoRepairShops"));
const EstimateFollowUpAutomationForAutoRepairShops = lazy(() => import("./pages/EstimateFollowUpAutomationForAutoRepairShops"));
const AppointmentSchedulingAndReminderAutomationForAutoRepairShops = lazy(() => import("./pages/AppointmentSchedulingAndReminderAutomationForAutoRepairShops"));
const MissedCallTextBackForAutoRepairShops = lazy(() => import("./pages/MissedCallTextBackForAutoRepairShops"));
const MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops"));
const AiAutomationForLandscapingCompanies = lazy(() => import("./pages/AiAutomationForLandscapingCompanies"));
const AiAutomationForPaintingContractors = lazy(() => import("./pages/AiAutomationForPaintingContractors"));
const AiAutomationForHomeInspectors = lazy(() => import("./pages/AiAutomationForHomeInspectors"));
const AiAutomationCostSmallBusiness = lazy(() => import("./pages/AiAutomationCostSmallBusiness"));
const AiAutomationTimeSavingsSmallBusiness = lazy(() => import("./pages/AiAutomationTimeSavingsSmallBusiness"));
const AffordableAiAutomationSmallBusiness = lazy(() => import("./pages/AffordableAiAutomationSmallBusiness"));
const AiAutomationAuditChecklist = lazy(() => import("./pages/AiAutomationAuditChecklist"));
const CrmAutomationExamplesSmallBusiness = lazy(() => import("./pages/CrmAutomationExamplesSmallBusiness"));
const CrmAutomationForContractors = lazy(() => import("./pages/CrmAutomationForContractors"));
const EstimateFollowUpAutomationForContractors = lazy(() => import("./pages/EstimateFollowUpAutomationForContractors"));
const EstimateFollowUpAutomationForRoofingCompanies = lazy(() => import("./pages/EstimateFollowUpAutomationForRoofingCompanies"));
const DispatchHandoffAutomationForContractors = lazy(() => import("./pages/DispatchHandoffAutomationForContractors"));
const JobIntakeRoutingAutomationForContractors = lazy(() => import("./pages/JobIntakeRoutingAutomationForContractors"));
const LeadFollowUpAutomationExamples = lazy(() => import("./pages/LeadFollowUpAutomationExamples"));
const AiAutomationImplementationRoadmap = lazy(() => import("./pages/AiAutomationImplementationRoadmap"));
const AiAutomationIntegrationsSmallBusiness = lazy(() => import("./pages/AiAutomationIntegrationsSmallBusiness"));
const WhatProcessesCanAiAutomateInMyBusiness = lazy(() => import("./pages/WhatProcessesCanAiAutomateInMyBusiness"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutesClient = () => (
  <Suspense fallback={<div className="min-h-screen bg-background" />}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/instagram-lead-generation" element={<InstagramLeadGenerationCaseStudy />} />
      <Route path="/case-studies/paris-cafe-voice-agent" element={<ParisCafeVoiceAgentCaseStudy />} />
      <Route path="/case-studies/ecommerce-crm-automation" element={<EcommerceCRMCaseStudy />} />
      <Route path="/ai-automation-consultant-small-business" element={<AiAutomationConsultantSmallBusiness />} />
      <Route path="/what-does-an-ai-automation-consultant-do" element={<WhatDoesAnAiAutomationConsultantDo />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/n8n-vs-zapier-small-business" element={<N8nVsZapierSmallBusiness />} />
      <Route path="/ai-appointment-setter" element={<AiAppointmentSetter />} />
      <Route path="/ai-appointment-setter-setup" element={<AiAppointmentSetterSetup />} />
      <Route path="/ai-appointment-setter-setup-vs-diy-small-business" element={<AiAppointmentSetterSetupVsDiySmallBusiness />} />
      <Route path="/ai-appointment-setter-cost-small-business" element={<AiAppointmentSetterCostSmallBusiness />} />
      <Route path="/ai-appointment-setter-roi-small-business" element={<AiAppointmentSetterRoiSmallBusiness />} />
      <Route path="/ai-lead-follow-up-for-service-businesses" element={<AiLeadFollowUpForServiceBusinesses />} />
      <Route path="/ai-lead-follow-up-cost-small-business" element={<AiLeadFollowUpCostSmallBusiness />} />
      <Route path="/ai-automation-consultant-calgary" element={<AiAutomationConsultantCalgary />} />
      <Route path="/ai-automation-consultant-edmonton" element={<AiAutomationConsultantEdmonton />} />
      <Route path="/ai-automation-hvac" element={<Navigate to="/ai-automation-for-hvac-companies" replace />} />
      <Route path="/hire-ai-automation-consultant-vs-agency" element={<HireAiAutomationConsultantVsAgency />} />
      <Route path="/hire-ai-automation-consultant-vs-diy" element={<HireAiAutomationConsultantVsDiy />} />
      <Route path="/how-to-hire-ai-automation-consultant" element={<HowToHireAiAutomationConsultant />} />
      <Route path="/hvac-database-reactivation" element={<HvacDatabaseReactivation />} />
      <Route path="/ai-automation-consultant-vs-freelancer" element={<AiAutomationConsultantVsFreelancer />} />
      <Route path="/ai-chatbot-vs-ai-voice-agent-for-lead-qualification" element={<AiChatbotVsAiVoiceAgentForLeadQualification />} />
      <Route path="/gohighlevel-vs-custom-crm-small-business" element={<GoHighLevelVsCustomCrmSmallBusiness />} />
      <Route path="/gohighlevel-vs-custom-crm-for-contractors" element={<GoHighLevelVsCustomCrmForContractors />} />
      <Route path="/gohighlevel-automation-setup" element={<GoHighLevelAutomationSetup />} />
      <Route path="/gohighlevel-setup-cost-small-business" element={<GoHighLevelSetupCostSmallBusiness />} />
      <Route path="/gohighlevel-setup-vs-diy-small-business" element={<GoHighLevelSetupVsDiySmallBusiness />} />
      <Route path="/ai-automation-consultant-pricing-small-business" element={<AiAutomationConsultantPricingSmallBusiness />} />
      <Route path="/best-ai-automation-for-service-businesses" element={<BestAiAutomationForServiceBusinesses />} />
      <Route path="/ai-automation-for-hvac-companies" element={<AiAutomationForHvacCompanies />} />
      <Route path="/hvac-lead-follow-up-automation" element={<HvacLeadFollowUpAutomation />} />
      <Route path="/hvac-missed-call-text-back" element={<HvacMissedCallTextBack />} />
      <Route path="/ai-appointment-setter-for-hvac" element={<AiAppointmentSetterForHvac />} />
      <Route path="/hvac-scheduling-and-follow-up-automation" element={<HvacSchedulingAndFollowUpAutomation />} />
      <Route path="/ai-appointment-setter-for-home-service-businesses" element={<AiAppointmentSetterForHomeServiceBusinesses />} />
      <Route path="/ai-automation-for-businesses-without-a-tech-team" element={<AiAutomationNoTechTeam />} />
      <Route path="/ai-voice-agent-for-restaurants" element={<AiVoiceAgentForRestaurants />} />
      <Route path="/ai-automation-for-restaurants" element={<AiAutomationForRestaurants />} />
      <Route path="/private-event-inquiry-follow-up-for-restaurants" element={<PrivateEventInquiryFollowUpForRestaurants />} />
      <Route path="/reservation-confirmation-and-reminder-automation-for-restaurants" element={<ReservationConfirmationAndReminderAutomationForRestaurants />} />
      <Route path="/missed-call-text-back-for-restaurants" element={<MissedCallTextBackForRestaurants />} />
      <Route path="/missed-call-text-back-vs-ai-voice-agent-for-restaurants" element={<MissedCallTextBackVsAiVoiceAgentForRestaurants />} />
      <Route path="/after-hours-phone-answering-for-restaurants" element={<AfterHoursPhoneAnsweringForRestaurants />} />
      <Route path="/ai-automation-consultant-alberta" element={<AiAutomationConsultantAlberta />} />
      <Route path="/ai-automation-consultant-canada" element={<AiAutomationConsultantCanada />} />
      <Route path="/ai-automation-for-real-estate" element={<AiAutomationForRealEstate />} />
      <Route path="/real-estate-lead-response-and-follow-up-automation" element={<RealEstateLeadResponseAndFollowUpAutomation />} />
      <Route path="/showing-coordination-automation-for-real-estate-teams" element={<ShowingCoordinationAutomationForRealEstateTeams />} />
      <Route path="/ai-automation-for-mortgage-brokers" element={<AiAutomationForMortgageBrokers />} />
      <Route path="/ai-lead-follow-up-for-mortgage-brokers" element={<AiLeadFollowUpForMortgageBrokers />} />
      <Route path="/document-collection-automation-for-mortgage-brokers" element={<DocumentCollectionAutomationForMortgageBrokers />} />
      <Route path="/incomplete-application-follow-up-for-mortgage-brokers" element={<IncompleteApplicationFollowUpForMortgageBrokers />} />
      <Route path="/ai-automation-for-dental-practices" element={<AiAutomationForDentalPractices />} />
      <Route path="/ai-automation-for-law-firms" element={<AiAutomationForLawFirms />} />
      <Route path="/ai-automation-for-accounting-firms" element={<AiAutomationForAccountingFirms />} />
      <Route path="/ai-automation-for-plumbing-companies" element={<AiAutomationForPlumbingCompanies />} />
      <Route path="/ai-automation-for-electrical-contractors" element={<AiAutomationForElectricalContractors />} />
      <Route path="/client-onboarding-automation" element={<ClientOnboardingAutomation />} />
      <Route path="/ai-automation-roi-guide" element={<AiAutomationRoiGuide />} />
      <Route path="/ai-automation-roi-calculator" element={<AiAutomationRoiCalculator />} />
      <Route path="/n8n-automation-examples-small-business" element={<N8nAutomationExamplesSmallBusiness />} />
      <Route path="/n8n-automation-consultant" element={<N8nAutomationConsultant />} />
      <Route path="/n8n-automation-consultant-cost-small-business" element={<N8nAutomationConsultantCostSmallBusiness />} />
      <Route path="/n8n-consultant-vs-diy-small-business" element={<N8nConsultantVsDiySmallBusiness />} />
      <Route path="/ai-email-sequence-automation" element={<AiEmailSequenceAutomation />} />
      <Route path="/ai-automation-for-insurance-agencies" element={<AiAutomationForInsuranceAgencies />} />
      <Route path="/ai-lead-follow-up-for-insurance-agencies" element={<AiLeadFollowUpForInsuranceAgencies />} />
      <Route path="/renewal-reminder-automation-for-insurance-agencies" element={<RenewalReminderAutomationForInsuranceAgencies />} />
      <Route path="/quote-follow-up-automation-for-insurance-agencies" element={<QuoteFollowUpAutomationForInsuranceAgencies />} />
      <Route path="/cross-sell-automation-for-insurance-agencies" element={<CrossSellAutomationForInsuranceAgencies />} />
      <Route path="/ai-automation-for-property-management" element={<AiAutomationForPropertyManagement />} />
      <Route path="/lease-renewal-automation-for-property-management-companies" element={<LeaseRenewalAutomationForPropertyManagementCompanies />} />
      <Route path="/showing-coordination-automation-for-property-management-companies" element={<ShowingCoordinationAutomationForPropertyManagementCompanies />} />
      <Route path="/maintenance-request-automation-for-property-management-companies" element={<MaintenanceRequestAutomationForPropertyManagementCompanies />} />
      <Route path="/tenant-communication-automation-for-property-management-companies" element={<TenantCommunicationAutomationForPropertyManagementCompanies />} />
      <Route path="/after-hours-tenant-communication-for-property-management-companies" element={<AfterHoursTenantCommunicationForPropertyManagementCompanies />} />
      <Route path="/after-hours-maintenance-triage-for-property-management-companies" element={<AfterHoursMaintenanceTriageForPropertyManagementCompanies />} />
      <Route path="/ai-automation-ecommerce" element={<AiAutomationEcommerce />} />
      <Route path="/ai-automation-for-auto-parts-ecommerce" element={<AiAutomationForAutoPartsEcommerce />} />
      <Route path="/ecommerce-crm-automation-with-ai-follow-up" element={<EcommerceCrmAutomationWithAiFollowUp />} />
      <Route path="/ecommerce-crm-automation-vs-manual-follow-up" element={<EcommerceCrmAutomationVsManualFollowUp />} />
      <Route path="/fitment-inquiry-automation-for-auto-parts-ecommerce" element={<FitmentInquiryAutomationForAutoPartsEcommerce />} />
      <Route path="/customer-inquiry-automation-for-auto-parts-ecommerce" element={<CustomerInquiryAutomationForAutoPartsEcommerce />} />
      <Route path="/repeat-purchase-reactivation-automation-for-ecommerce-brands" element={<RepeatPurchaseReactivationAutomationForEcommerceBrands />} />
      <Route path="/customer-service-automation-for-ecommerce-brands" element={<CustomerServiceAutomationForEcommerceBrands />} />
      <Route path="/customer-service-automation-vs-manual-support-for-ecommerce-brands" element={<CustomerServiceAutomationVsManualSupportForEcommerceBrands />} />
      <Route path="/order-status-and-return-support-automation-for-ecommerce-brands" element={<OrderStatusAndReturnSupportAutomationForEcommerceBrands />} />
      <Route path="/after-hours-lead-capture-for-service-businesses" element={<AfterHoursLeadCapture />} />
      <Route path="/missed-call-follow-up-automation" element={<MissedCallFollowUp />} />
      <Route path="/booking-confirmation-and-reminder-automation" element={<BookingConfirmationAndReminder />} />
      <Route path="/ai-phone-answering-for-service-businesses" element={<AiPhoneAnswering />} />
      <Route path="/ai-voice-agent-lead-qualification" element={<AiVoiceAgentForLeadQualification />} />
      <Route path="/ai-voice-agent-setup-for-lead-qualification" element={<AiVoiceAgentSetupForLeadQualification />} />
      <Route path="/ai-voice-agent-setup-vs-diy-small-business" element={<AiVoiceAgentSetupVsDiySmallBusiness />} />
      <Route path="/ai-voice-agent-cost-small-business" element={<AiVoiceAgentCostSmallBusiness />} />
      <Route path="/ai-voice-agent-roi-for-lead-follow-up" element={<AiVoiceAgentRoiForLeadFollowUp />} />
      <Route path="/instant-lead-response-automation" element={<InstantLeadResponse />} />
      <Route path="/contact-form-lead-follow-up-automation" element={<ContactFormLeadFollowUpAutomation />} />
      <Route path="/contact-form-autoresponder-vs-full-lead-follow-up" element={<ContactFormAutoresponderVsFullLeadFollowUp />} />
      <Route path="/quote-follow-up-automation" element={<QuoteFollowUp />} />
      <Route path="/client-reactivation-automation" element={<ClientReactivation />} />
      <Route path="/no-show-reduction-automation" element={<NoShowReduction />} />
      <Route path="/ai-appointment-setter-vs-receptionist" element={<AiAppointmentSetterVsReceptionist />} />
      <Route path="/ai-appointment-setter-vs-virtual-assistant" element={<AiAppointmentSetterVsVirtualAssistant />} />
      <Route path="/ai-voice-agent-vs-voicemail" element={<AiVoiceAgentVsVoicemail />} />
      <Route path="/ai-voice-agent-vs-call-center" element={<AiVoiceAgentVsCallCenter />} />
      <Route path="/ai-voice-agent-vs-human-appointment-setter" element={<AiVoiceAgentVsHumanAppointmentSetter />} />
      <Route path="/ai-voice-agent-vs-manual-callback-for-service-businesses" element={<AiVoiceAgentVsManualCallbackForServiceBusinesses />} />
      <Route path="/n8n-vs-make-small-business" element={<N8nVsMakeSmallBusiness />} />
      <Route path="/build-vs-buy-ai-automation" element={<BuildVsBuyAiAutomation />} />
      <Route path="/vapi-vs-retell-small-business" element={<VapiVsRetellSmallBusiness />} />
      <Route path="/retell-vs-bland-small-business" element={<RetellVsBlandSmallBusiness />} />
      <Route path="/ai-automation-for-chiropractors" element={<AiAutomationForChiropractors />} />
      <Route path="/ai-automation-for-cleaning-companies" element={<AiAutomationForCleaningCompanies />} />
      <Route path="/ai-automation-for-med-spas" element={<AiAutomationForMedSpas />} />
      <Route path="/ai-automation-for-roofing-companies" element={<AiAutomationForRoofingCompanies />} />
      <Route path="/ai-automation-for-pest-control-companies" element={<AiAutomationForPestControlCompanies />} />
      <Route path="/ai-automation-for-auto-repair-shops" element={<AiAutomationForAutoRepairShops />} />
      <Route path="/maintenance-reminder-automation-for-auto-repair-shops" element={<MaintenanceReminderAutomationForAutoRepairShops />} />
      <Route path="/estimate-follow-up-automation-for-auto-repair-shops" element={<EstimateFollowUpAutomationForAutoRepairShops />} />
      <Route path="/appointment-scheduling-and-reminder-automation-for-auto-repair-shops" element={<AppointmentSchedulingAndReminderAutomationForAutoRepairShops />} />
      <Route path="/missed-call-text-back-for-auto-repair-shops" element={<MissedCallTextBackForAutoRepairShops />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-auto-repair-shops" element={<MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops />} />
      <Route path="/ai-automation-for-landscaping-companies" element={<AiAutomationForLandscapingCompanies />} />
      <Route path="/ai-automation-for-painting-contractors" element={<AiAutomationForPaintingContractors />} />
      <Route path="/ai-automation-for-home-inspectors" element={<AiAutomationForHomeInspectors />} />
      <Route path="/ai-automation-cost-small-business" element={<AiAutomationCostSmallBusiness />} />
      <Route path="/ai-automation-time-savings-small-business" element={<AiAutomationTimeSavingsSmallBusiness />} />
      <Route path="/affordable-ai-automation-small-business" element={<AffordableAiAutomationSmallBusiness />} />
      <Route path="/ai-automation-audit-checklist" element={<AiAutomationAuditChecklist />} />
      <Route path="/crm-automation-examples-small-business" element={<CrmAutomationExamplesSmallBusiness />} />
      <Route path="/crm-automation-for-contractors" element={<CrmAutomationForContractors />} />
      <Route path="/crm-automation-setup-for-contractors" element={<CrmAutomationSetupForContractors />} />
      <Route path="/estimate-follow-up-automation-for-contractors" element={<EstimateFollowUpAutomationForContractors />} />
      <Route path="/estimate-follow-up-automation-for-roofing-companies" element={<EstimateFollowUpAutomationForRoofingCompanies />} />
      <Route path="/dispatch-handoff-automation-for-contractors" element={<DispatchHandoffAutomationForContractors />} />
      <Route path="/job-intake-routing-automation-for-contractors" element={<JobIntakeRoutingAutomationForContractors />} />
      <Route path="/lead-follow-up-automation-examples" element={<LeadFollowUpAutomationExamples />} />
      <Route path="/ai-automation-implementation-roadmap" element={<AiAutomationImplementationRoadmap />} />
      <Route path="/ai-automation-integrations-small-business" element={<AiAutomationIntegrationsSmallBusiness />} />
      <Route path="/what-processes-can-ai-automate-in-my-business" element={<WhatProcessesCanAiAutomateInMyBusiness />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutesClient;
