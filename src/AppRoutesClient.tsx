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
const GoHighLevelAccountCleanupService = lazy(() => import("./pages/GoHighLevelAccountCleanupService"));
const GoHighLevelAccountCleanupVsRebuild = lazy(() => import("./pages/GoHighLevelAccountCleanupVsRebuild"));
const GoHighLevelAccountAuditChecklist = lazy(() => import("./pages/GoHighLevelAccountAuditChecklist"));
const GoHighLevelSetupMistakesSmallBusiness = lazy(() => import("./pages/GoHighLevelSetupMistakesSmallBusiness"));
const AiAutomationConsultantPricingSmallBusiness = lazy(() => import("./pages/AiAutomationConsultantPricingSmallBusiness"));
const BestAiAutomationForServiceBusinesses = lazy(() => import("./pages/BestAiAutomationForServiceBusinesses"));
const AiAutomationForHvacCompanies = lazy(() => import("./pages/AiAutomationForHvacCompanies"));
const WhatToAutomateFirstForHvacCompanies = lazy(() => import("./pages/WhatToAutomateFirstForHvacCompanies"));
const HvacLeadFollowUpAutomation = lazy(() => import("./pages/HvacLeadFollowUpAutomation"));
const HvacMissedCallTextBack = lazy(() => import("./pages/HvacMissedCallTextBack"));
const AiAppointmentSetterForHvac = lazy(() => import("./pages/AiAppointmentSetterForHvac"));
const HvacSchedulingAndFollowUpAutomation = lazy(() => import("./pages/HvacSchedulingAndFollowUpAutomation"));
const AiPhoneAnsweringForHvacCompanies = lazy(() => import("./pages/AiPhoneAnsweringForHvacCompanies"));
const MissedCallTextBackVsAiPhoneAnsweringForHvacCompanies = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForHvacCompanies"));
const AiPhoneAnsweringVsVoicemailForHvacCompanies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForHvacCompanies"));
const ReviewRequestAutomationForHvacCompanies = lazy(() => import("./pages/ReviewRequestAutomationForHvacCompanies"));
const MaintenanceReminderAutomationForHvacCompanies = lazy(() => import("./pages/MaintenanceReminderAutomationForHvacCompanies"));
const QuoteFollowUpAutomationForHvacCompanies = lazy(() => import("./pages/QuoteFollowUpAutomationForHvacCompanies"));
const AiAppointmentSetterForHomeServiceBusinesses = lazy(() => import("./pages/AiAppointmentSetterForHomeServiceBusinesses"));
const AiAutomationNoTechTeam = lazy(() => import("./pages/AiAutomationNoTechTeam"));
const AiVoiceAgentForRestaurants = lazy(() => import("./pages/AiVoiceAgentForRestaurants"));
const AiAutomationForRestaurants = lazy(() => import("./pages/AiAutomationForRestaurants"));
const WhatToAutomateFirstForRestaurants = lazy(() => import("./pages/WhatToAutomateFirstForRestaurants"));
const PrivateEventInquiryFollowUpForRestaurants = lazy(() => import("./pages/PrivateEventInquiryFollowUpForRestaurants"));
const ReservationConfirmationAndReminderAutomationForRestaurants = lazy(() => import("./pages/ReservationConfirmationAndReminderAutomationForRestaurants"));
const MissedCallTextBackForRestaurants = lazy(() => import("./pages/MissedCallTextBackForRestaurants"));
const MissedCallTextBackVsAiVoiceAgentForRestaurants = lazy(() => import("./pages/MissedCallTextBackVsAiVoiceAgentForRestaurants"));
const MissedCallTextBackVsVoicemailForRestaurants = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForRestaurants"));
const AfterHoursPhoneAnsweringForRestaurants = lazy(() => import("./pages/AfterHoursPhoneAnsweringForRestaurants"));
const AfterHoursAiPhoneAnsweringVsVoicemailForRestaurants = lazy(() => import("./pages/AfterHoursAiPhoneAnsweringVsVoicemailForRestaurants"));
const AiAutomationConsultantEdmonton = lazy(() => import("./pages/AiAutomationConsultantEdmonton"));
const AiAutomationConsultantAlberta = lazy(() => import("./pages/AiAutomationConsultantAlberta"));
const AiAutomationConsultantCanada = lazy(() => import("./pages/AiAutomationConsultantCanada"));
const AiAutomationForRealEstate = lazy(() => import("./pages/AiAutomationForRealEstate"));
const RealEstateLeadResponseAndFollowUpAutomation = lazy(() => import("./pages/RealEstateLeadResponseAndFollowUpAutomation"));
const ShowingCoordinationAutomationForRealEstateTeams = lazy(() => import("./pages/ShowingCoordinationAutomationForRealEstateTeams"));
const WhatToAutomateFirstForRealEstate = lazy(() => import("./pages/WhatToAutomateFirstForRealEstate"));
const ClientReactivationAutomationForRealEstateTeams = lazy(() => import("./pages/ClientReactivationAutomationForRealEstateTeams"));
const CrmCleanupAndRoutingForRealEstateTeams = lazy(() => import("./pages/CrmCleanupAndRoutingForRealEstateTeams"));
const CrmCleanupVsLeadFollowUpForRealEstateTeams = lazy(() => import("./pages/CrmCleanupVsLeadFollowUpForRealEstateTeams"));
const AiAutomationForMortgageBrokers = lazy(() => import("./pages/AiAutomationForMortgageBrokers"));
const AiLeadFollowUpForMortgageBrokers = lazy(() => import("./pages/AiLeadFollowUpForMortgageBrokers"));
const DocumentCollectionAutomationForMortgageBrokers = lazy(() => import("./pages/DocumentCollectionAutomationForMortgageBrokers"));
const IncompleteApplicationFollowUpForMortgageBrokers = lazy(() => import("./pages/IncompleteApplicationFollowUpForMortgageBrokers"));
const WhatToAutomateFirstForMortgageBrokers = lazy(() => import("./pages/WhatToAutomateFirstForMortgageBrokers"));
const AiAutomationForDentalPractices = lazy(() => import("./pages/AiAutomationForDentalPractices"));
const WhatToAutomateFirstForDentalPractices = lazy(() => import("./pages/WhatToAutomateFirstForDentalPractices"));
const AiLeadFollowUpForDentalPractices = lazy(() => import("./pages/AiLeadFollowUpForDentalPractices"));
const RecallAndReactivationAutomationForDentalPractices = lazy(() => import("./pages/RecallAndReactivationAutomationForDentalPractices"));
const NoShowReductionAutomationForDentalPractices = lazy(() => import("./pages/NoShowReductionAutomationForDentalPractices"));
const AppointmentSchedulingAndReminderAutomationForDentalPractices = lazy(() => import("./pages/AppointmentSchedulingAndReminderAutomationForDentalPractices"));
const ReviewRequestAutomationForDentalPractices = lazy(() => import("./pages/ReviewRequestAutomationForDentalPractices"));
const MissedCallTextBackForDentalPractices = lazy(() => import("./pages/MissedCallTextBackForDentalPractices"));
const AiPhoneAnsweringForDentalPractices = lazy(() => import("./pages/AiPhoneAnsweringForDentalPractices"));
const AiPhoneAnsweringVsVoicemailForDentalPractices = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForDentalPractices"));
const AiAutomationForLawFirms = lazy(() => import("./pages/AiAutomationForLawFirms"));
const WhatToAutomateFirstForLawFirms = lazy(() => import("./pages/WhatToAutomateFirstForLawFirms"));
const AiLeadFollowUpForLawFirms = lazy(() => import("./pages/AiLeadFollowUpForLawFirms"));
const IntakeAndConflictCheckAutomationForLawFirms = lazy(() => import("./pages/IntakeAndConflictCheckAutomationForLawFirms"));
const ConsultationSchedulingAndReminderAutomationForLawFirms = lazy(() => import("./pages/ConsultationSchedulingAndReminderAutomationForLawFirms"));
const UnretainedConsultFollowUpForLawFirms = lazy(() => import("./pages/UnretainedConsultFollowUpForLawFirms"));
const CaseStatusUpdateAutomationForLawFirms = lazy(() => import("./pages/CaseStatusUpdateAutomationForLawFirms"));
const AiPhoneAnsweringForLawFirms = lazy(() => import("./pages/AiPhoneAnsweringForLawFirms"));
const AiPhoneAnsweringVsVoicemailForLawFirms = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForLawFirms"));
const AiAutomationForSolarCompanies = lazy(() => import("./pages/AiAutomationForSolarCompanies"));
const UtilityBillCollectionAutomationForSolarCompanies = lazy(() => import("./pages/UtilityBillCollectionAutomationForSolarCompanies"));
const AiLeadFollowUpForSolarCompanies = lazy(() => import("./pages/AiLeadFollowUpForSolarCompanies"));
const AiAutomationForAccountingFirms = lazy(() => import("./pages/AiAutomationForAccountingFirms"));
const DocumentCollectionAutomationForAccountingFirms = lazy(() => import("./pages/DocumentCollectionAutomationForAccountingFirms"));
const ClientOnboardingAutomationForAccountingFirms = lazy(() => import("./pages/ClientOnboardingAutomationForAccountingFirms"));
const WhatToAutomateFirstForAccountingFirms = lazy(() => import("./pages/WhatToAutomateFirstForAccountingFirms"));
const AppointmentSchedulingAndReminderAutomationForAccountingFirms = lazy(() => import("./pages/AppointmentSchedulingAndReminderAutomationForAccountingFirms"));
const SeasonalClientReactivationForAccountingFirms = lazy(() => import("./pages/SeasonalClientReactivationForAccountingFirms"));
const AiLeadFollowUpForAccountingFirms = lazy(() => import("./pages/AiLeadFollowUpForAccountingFirms"));
const AiPhoneAnsweringForAccountingFirms = lazy(() => import("./pages/AiPhoneAnsweringForAccountingFirms"));
const AiPhoneAnsweringVsVoicemailForAccountingFirms = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForAccountingFirms"));
const AiAutomationForPlumbingCompanies = lazy(() => import("./pages/AiAutomationForPlumbingCompanies"));
const WhatToAutomateFirstForPlumbingCompanies = lazy(() => import("./pages/WhatToAutomateFirstForPlumbingCompanies"));
const AiLeadFollowUpForPlumbingCompanies = lazy(() => import("./pages/AiLeadFollowUpForPlumbingCompanies"));
const EstimateFollowUpAutomationForPlumbingCompanies = lazy(() => import("./pages/EstimateFollowUpAutomationForPlumbingCompanies"));
const MissedCallTextBackForPlumbingCompanies = lazy(() => import("./pages/MissedCallTextBackForPlumbingCompanies"));
const MissedCallTextBackVsVoicemailForPlumbingCompanies = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForPlumbingCompanies"));
const MissedCallTextBackVsAiPhoneAnsweringForPlumbingCompanies = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForPlumbingCompanies"));
const AiPhoneAnsweringForPlumbingCompanies = lazy(() => import("./pages/AiPhoneAnsweringForPlumbingCompanies"));
const AiPhoneAnsweringVsVoicemailForPlumbingCompanies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForPlumbingCompanies"));
const AppointmentSchedulingAndReminderAutomationForPlumbingCompanies = lazy(() => import("./pages/AppointmentSchedulingAndReminderAutomationForPlumbingCompanies"));
const ReviewRequestAutomationForPlumbingCompanies = lazy(() => import("./pages/ReviewRequestAutomationForPlumbingCompanies"));
const AiAutomationForElectricalContractors = lazy(() => import("./pages/AiAutomationForElectricalContractors"));
const WhatToAutomateFirstForElectricalContractors = lazy(() => import("./pages/WhatToAutomateFirstForElectricalContractors"));
const AiLeadFollowUpForElectricalContractors = lazy(() => import("./pages/AiLeadFollowUpForElectricalContractors"));
const MissedCallTextBackForElectricalContractors = lazy(() => import("./pages/MissedCallTextBackForElectricalContractors"));
const MissedCallTextBackVsVoicemailForElectricalContractors = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForElectricalContractors"));
const MissedCallTextBackVsAiPhoneAnsweringForElectricalContractors = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForElectricalContractors"));
const AiPhoneAnsweringForElectricalContractors = lazy(() => import("./pages/AiPhoneAnsweringForElectricalContractors"));
const AiPhoneAnsweringVsVoicemailForElectricalContractors = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForElectricalContractors"));
const EstimateFollowUpAutomationForElectricalContractors = lazy(() => import("./pages/EstimateFollowUpAutomationForElectricalContractors"));
const ReviewRequestAutomationForElectricalContractors = lazy(() => import("./pages/ReviewRequestAutomationForElectricalContractors"));
const AppointmentSchedulingAndReminderAutomationForElectricalContractors = lazy(() => import("./pages/AppointmentSchedulingAndReminderAutomationForElectricalContractors"));
const CrmAutomationSetupForContractors = lazy(() => import("./pages/CrmAutomationSetupForContractors"));
const WhatToAutomateFirstForContractors = lazy(() => import("./pages/WhatToAutomateFirstForContractors"));
const CrmAutomationSetupCostForContractors = lazy(() => import("./pages/CrmAutomationSetupCostForContractors"));
const CrmAutomationSetupVsDiyForContractors = lazy(() => import("./pages/CrmAutomationSetupVsDiyForContractors"));
const ClientOnboardingAutomation = lazy(() => import("./pages/ClientOnboardingAutomation"));
const AiAutomationRoiGuide = lazy(() => import("./pages/AiAutomationRoiGuide"));
const AiAutomationRoiCalculator = lazy(() => import("./pages/AiAutomationRoiCalculator"));
const N8nAutomationExamplesSmallBusiness = lazy(() => import("./pages/N8nAutomationExamplesSmallBusiness"));
const N8nAutomationConsultant = lazy(() => import("./pages/N8nAutomationConsultant"));
const HowToHireN8nAutomationConsultant = lazy(() => import("./pages/HowToHireN8nAutomationConsultant"));
const N8nWorkflowCleanupService = lazy(() => import("./pages/N8nWorkflowCleanupService"));
const N8nWorkflowCleanupVsRebuild = lazy(() => import("./pages/N8nWorkflowCleanupVsRebuild"));
const N8nWorkflowAuditChecklist = lazy(() => import("./pages/N8nWorkflowAuditChecklist"));
const N8nAutomationConsultantCostSmallBusiness = lazy(() => import("./pages/N8nAutomationConsultantCostSmallBusiness"));
const N8nConsultantVsDiySmallBusiness = lazy(() => import("./pages/N8nConsultantVsDiySmallBusiness"));
const AiEmailSequenceAutomation = lazy(() => import("./pages/AiEmailSequenceAutomation"));
const AiAutomationForInsuranceAgencies = lazy(() => import("./pages/AiAutomationForInsuranceAgencies"));
const WhatToAutomateFirstForInsuranceAgencies = lazy(() => import("./pages/WhatToAutomateFirstForInsuranceAgencies"));
const AiLeadFollowUpForInsuranceAgencies = lazy(() => import("./pages/AiLeadFollowUpForInsuranceAgencies"));
const RenewalReminderAutomationForInsuranceAgencies = lazy(() => import("./pages/RenewalReminderAutomationForInsuranceAgencies"));
const QuoteFollowUpAutomationForInsuranceAgencies = lazy(() => import("./pages/QuoteFollowUpAutomationForInsuranceAgencies"));
const CrossSellAutomationForInsuranceAgencies = lazy(() => import("./pages/CrossSellAutomationForInsuranceAgencies"));
const ReviewRequestAutomationForInsuranceAgencies = lazy(() => import("./pages/ReviewRequestAutomationForInsuranceAgencies"));
const ReferralRequestAutomationForInsuranceAgencies = lazy(() => import("./pages/ReferralRequestAutomationForInsuranceAgencies"));
const AfterHoursInquiryHandlingForInsuranceAgencies = lazy(() => import("./pages/AfterHoursInquiryHandlingForInsuranceAgencies"));
const AiPhoneAnsweringForInsuranceAgencies = lazy(() => import("./pages/AiPhoneAnsweringForInsuranceAgencies"));
const AiPhoneAnsweringVsVoicemailForInsuranceAgencies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForInsuranceAgencies"));
const AiAutomationForPropertyManagement = lazy(() => import("./pages/AiAutomationForPropertyManagement"));
const WhatToAutomateFirstForPropertyManagementCompanies = lazy(() => import("./pages/WhatToAutomateFirstForPropertyManagementCompanies"));
const LeaseRenewalAutomationForPropertyManagementCompanies = lazy(() => import("./pages/LeaseRenewalAutomationForPropertyManagementCompanies"));
const ShowingCoordinationAutomationForPropertyManagementCompanies = lazy(() => import("./pages/ShowingCoordinationAutomationForPropertyManagementCompanies"));
const MaintenanceRequestAutomationForPropertyManagementCompanies = lazy(() => import("./pages/MaintenanceRequestAutomationForPropertyManagementCompanies"));
const TenantOnboardingAutomationForPropertyManagementCompanies = lazy(() => import("./pages/TenantOnboardingAutomationForPropertyManagementCompanies"));
const TenantCommunicationAutomationForPropertyManagementCompanies = lazy(() => import("./pages/TenantCommunicationAutomationForPropertyManagementCompanies"));
const AfterHoursTenantCommunicationForPropertyManagementCompanies = lazy(() => import("./pages/AfterHoursTenantCommunicationForPropertyManagementCompanies"));
const AfterHoursMaintenanceTriageForPropertyManagementCompanies = lazy(() => import("./pages/AfterHoursMaintenanceTriageForPropertyManagementCompanies"));
const EmergencyVsRoutineMaintenanceIntakeForPropertyManagementCompanies = lazy(() => import("./pages/EmergencyVsRoutineMaintenanceIntakeForPropertyManagementCompanies"));
const OwnerReportingAutomationForPropertyManagementCompanies = lazy(() => import("./pages/OwnerReportingAutomationForPropertyManagementCompanies"));
const AiAutomationEcommerce = lazy(() => import("./pages/AiAutomationEcommerce"));
const WhatToAutomateFirstForEcommerceBrands = lazy(() => import("./pages/WhatToAutomateFirstForEcommerceBrands"));
const AiAutomationForAutoPartsEcommerce = lazy(() => import("./pages/AiAutomationForAutoPartsEcommerce"));
const WhatToAutomateFirstForAutoPartsEcommerce = lazy(() => import("./pages/WhatToAutomateFirstForAutoPartsEcommerce"));
const CrmAutomationVsManualFollowUpForAutoPartsEcommerce = lazy(() => import("./pages/CrmAutomationVsManualFollowUpForAutoPartsEcommerce"));
const FitmentInquiryAutomationForAutoPartsEcommerce = lazy(() => import("./pages/FitmentInquiryAutomationForAutoPartsEcommerce"));
const CustomerInquiryAutomationForAutoPartsEcommerce = lazy(() => import("./pages/CustomerInquiryAutomationForAutoPartsEcommerce"));
const QuoteFollowUpAutomationForAutoPartsEcommerce = lazy(() => import("./pages/QuoteFollowUpAutomationForAutoPartsEcommerce"));
const StaleLeadFollowUpForAutoPartsEcommerce = lazy(() => import("./pages/StaleLeadFollowUpForAutoPartsEcommerce"));
const RepeatPurchaseReactivationAutomationForAutoPartsEcommerce = lazy(() => import("./pages/RepeatPurchaseReactivationAutomationForAutoPartsEcommerce"));
const EcommerceCrmAutomationWithAiFollowUp = lazy(() => import("./pages/EcommerceCrmAutomationWithAiFollowUp"));
const EcommerceCrmAutomationVsManualFollowUp = lazy(() => import("./pages/EcommerceCrmAutomationVsManualFollowUp"));
const RepeatPurchaseReactivationAutomationForEcommerceBrands = lazy(() => import("./pages/RepeatPurchaseReactivationAutomationForEcommerceBrands"));
const CustomerServiceAutomationForEcommerceBrands = lazy(() => import("./pages/CustomerServiceAutomationForEcommerceBrands"));
const CustomerServiceAutomationVsManualSupportForEcommerceBrands = lazy(() => import("./pages/CustomerServiceAutomationVsManualSupportForEcommerceBrands"));
const OrderStatusAndReturnSupportAutomationForEcommerceBrands = lazy(() => import("./pages/OrderStatusAndReturnSupportAutomationForEcommerceBrands"));
const ReviewRequestAutomationForEcommerceBrands = lazy(() => import("./pages/ReviewRequestAutomationForEcommerceBrands"));
const AfterHoursLeadCapture = lazy(() => import("./pages/AfterHoursLeadCapture"));
const MissedCallFollowUp = lazy(() => import("./pages/MissedCallFollowUp"));
const BookingConfirmationAndReminder = lazy(() => import("./pages/BookingConfirmationAndReminder"));
const AiPhoneAnswering = lazy(() => import("./pages/AiPhoneAnswering"));
const AiVoiceAgentForLeadQualification = lazy(() => import("./pages/AiVoiceAgentForLeadQualification"));
const AiVoiceAgentSetupForLeadQualification = lazy(() => import("./pages/AiVoiceAgentSetupForLeadQualification"));
const AiVoiceAgentSetupCostSmallBusiness = lazy(() => import("./pages/AiVoiceAgentSetupCostSmallBusiness"));
const AiVoiceAgentSetupMistakesSmallBusiness = lazy(() => import("./pages/AiVoiceAgentSetupMistakesSmallBusiness"));
const AiVoiceAgentLaunchChecklistSmallBusiness = lazy(() => import("./pages/AiVoiceAgentLaunchChecklistSmallBusiness"));
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
const WhatToAutomateFirstForChiropractors = lazy(() => import("./pages/WhatToAutomateFirstForChiropractors"));
const CarePlanRecallAutomationForChiropractors = lazy(() => import("./pages/CarePlanRecallAutomationForChiropractors"));
const NewPatientIntakeAndSchedulingAutomationForChiropractors = lazy(() => import("./pages/NewPatientIntakeAndSchedulingAutomationForChiropractors"));
const NoShowReductionAutomationForChiropractors = lazy(() => import("./pages/NoShowReductionAutomationForChiropractors"));
const AiPhoneAnsweringForChiropractors = lazy(() => import("./pages/AiPhoneAnsweringForChiropractors"));
const AiPhoneAnsweringVsVoicemailForChiropractors = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForChiropractors"));
const MissedCallTextBackVsAiPhoneAnsweringForChiropractors = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForChiropractors"));
const MissedCallTextBackVsVoicemailForChiropractors = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForChiropractors"));
const MissedCallTextBackForChiropractors = lazy(() => import("./pages/MissedCallTextBackForChiropractors"));
const ReviewRequestAutomationForChiropractors = lazy(() => import("./pages/ReviewRequestAutomationForChiropractors"));
const AiAutomationForCleaningCompanies = lazy(() => import("./pages/AiAutomationForCleaningCompanies"));
const WhatToAutomateFirstForCleaningCompanies = lazy(() => import("./pages/WhatToAutomateFirstForCleaningCompanies"));
const QuoteFollowUpAutomationForCleaningCompanies = lazy(() => import("./pages/QuoteFollowUpAutomationForCleaningCompanies"));
const MissedCallTextBackForCleaningCompanies = lazy(() => import("./pages/MissedCallTextBackForCleaningCompanies"));
const MissedCallTextBackVsVoicemailForCleaningCompanies = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForCleaningCompanies"));
const MissedCallTextBackVsAiPhoneAnsweringForCleaningCompanies = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForCleaningCompanies"));
const AiPhoneAnsweringForCleaningCompanies = lazy(() => import("./pages/AiPhoneAnsweringForCleaningCompanies"));
const AiPhoneAnsweringVsVoicemailForCleaningCompanies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForCleaningCompanies"));
const ClientReactivationAutomationForCleaningCompanies = lazy(() => import("./pages/ClientReactivationAutomationForCleaningCompanies"));
const ReviewRequestAutomationForCleaningCompanies = lazy(() => import("./pages/ReviewRequestAutomationForCleaningCompanies"));
const AiLeadFollowUpForCleaningCompanies = lazy(() => import("./pages/AiLeadFollowUpForCleaningCompanies"));
const RecurringCleaningSchedulingAndReminderAutomationForCleaningCompanies = lazy(() => import("./pages/RecurringCleaningSchedulingAndReminderAutomationForCleaningCompanies"));
const AiAutomationForMedSpas = lazy(() => import("./pages/AiAutomationForMedSpas"));
const WhatToAutomateFirstForMedSpas = lazy(() => import("./pages/WhatToAutomateFirstForMedSpas"));
const MissedCallTextBackForMedSpas = lazy(() => import("./pages/MissedCallTextBackForMedSpas"));
const MissedCallTextBackVsVoicemailForMedSpas = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForMedSpas"));
const MissedCallTextBackVsAiPhoneAnsweringForMedSpas = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForMedSpas"));
const AiPhoneAnsweringForMedSpas = lazy(() => import("./pages/AiPhoneAnsweringForMedSpas"));
const AiPhoneAnsweringVsVoicemailForMedSpas = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForMedSpas"));
const ConsultationBookingAndReminderAutomationForMedSpas = lazy(() => import("./pages/ConsultationBookingAndReminderAutomationForMedSpas"));
const NoShowReductionAutomationForMedSpas = lazy(() => import("./pages/NoShowReductionAutomationForMedSpas"));
const TreatmentRecallAutomationForMedSpas = lazy(() => import("./pages/TreatmentRecallAutomationForMedSpas"));
const ReviewRequestAutomationForMedSpas = lazy(() => import("./pages/ReviewRequestAutomationForMedSpas"));
const AiLeadFollowUpForMedSpas = lazy(() => import("./pages/AiLeadFollowUpForMedSpas"));
const AiAutomationForRoofingCompanies = lazy(() => import("./pages/AiAutomationForRoofingCompanies"));
const WhatToAutomateFirstForRoofingCompanies = lazy(() => import("./pages/WhatToAutomateFirstForRoofingCompanies"));
const AiLeadFollowUpForRoofingCompanies = lazy(() => import("./pages/AiLeadFollowUpForRoofingCompanies"));
const ClientReactivationAutomationForRoofingCompanies = lazy(() => import("./pages/ClientReactivationAutomationForRoofingCompanies"));
const MissedCallTextBackForRoofingCompanies = lazy(() => import("./pages/MissedCallTextBackForRoofingCompanies"));
const MissedCallTextBackVsAiPhoneAnsweringForRoofingCompanies = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForRoofingCompanies"));
const MissedCallTextBackVsVoicemailForRoofingCompanies = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForRoofingCompanies"));
const AiPhoneAnsweringForRoofingCompanies = lazy(() => import("./pages/AiPhoneAnsweringForRoofingCompanies"));
const AiPhoneAnsweringVsVoicemailForRoofingCompanies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForRoofingCompanies"));
const ReviewRequestAutomationForRoofingCompanies = lazy(() => import("./pages/ReviewRequestAutomationForRoofingCompanies"));
const AiAutomationForPestControlCompanies = lazy(() => import("./pages/AiAutomationForPestControlCompanies"));
const WhatToAutomateFirstForPestControlCompanies = lazy(() => import("./pages/WhatToAutomateFirstForPestControlCompanies"));
const RecurringServiceReminderAutomationForPestControlCompanies = lazy(() => import("./pages/RecurringServiceReminderAutomationForPestControlCompanies"));
const SeasonalCampaignAutomationForPestControlCompanies = lazy(() => import("./pages/SeasonalCampaignAutomationForPestControlCompanies"));
const UrgentLeadFollowUpForPestControlCompanies = lazy(() => import("./pages/UrgentLeadFollowUpForPestControlCompanies"));
const QuoteFollowUpAutomationForPestControlCompanies = lazy(() => import("./pages/QuoteFollowUpAutomationForPestControlCompanies"));
const ReviewRequestAutomationForPestControlCompanies = lazy(() => import("./pages/ReviewRequestAutomationForPestControlCompanies"));
const AiPhoneAnsweringForPestControlCompanies = lazy(() => import("./pages/AiPhoneAnsweringForPestControlCompanies"));
const MissedCallTextBackForPestControlCompanies = lazy(() => import("./pages/MissedCallTextBackForPestControlCompanies"));
const MissedCallTextBackVsVoicemailForPestControlCompanies = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForPestControlCompanies"));
const MissedCallTextBackVsAiPhoneAnsweringForPestControlCompanies = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForPestControlCompanies"));
const AiPhoneAnsweringVsVoicemailForPestControlCompanies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForPestControlCompanies"));
const AiAutomationForAutoRepairShops = lazy(() => import("./pages/AiAutomationForAutoRepairShops"));
const WhatToAutomateFirstForAutoRepairShops = lazy(() => import("./pages/WhatToAutomateFirstForAutoRepairShops"));
const AiLeadFollowUpForAutoRepairShops = lazy(() => import("./pages/AiLeadFollowUpForAutoRepairShops"));
const MaintenanceReminderAutomationForAutoRepairShops = lazy(() => import("./pages/MaintenanceReminderAutomationForAutoRepairShops"));
const ClientReactivationAutomationForAutoRepairShops = lazy(() => import("./pages/ClientReactivationAutomationForAutoRepairShops"));
const EstimateFollowUpAutomationForAutoRepairShops = lazy(() => import("./pages/EstimateFollowUpAutomationForAutoRepairShops"));
const AppointmentSchedulingAndReminderAutomationForAutoRepairShops = lazy(() => import("./pages/AppointmentSchedulingAndReminderAutomationForAutoRepairShops"));
const MissedCallTextBackForAutoRepairShops = lazy(() => import("./pages/MissedCallTextBackForAutoRepairShops"));
const MissedCallTextBackVsVoicemailForAutoRepairShops = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForAutoRepairShops"));
const MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops"));
const AiPhoneAnsweringForAutoRepairShops = lazy(() => import("./pages/AiPhoneAnsweringForAutoRepairShops"));
const AiPhoneAnsweringVsVoicemailForAutoRepairShops = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForAutoRepairShops"));
const ReviewRequestAutomationForAutoRepairShops = lazy(() => import("./pages/ReviewRequestAutomationForAutoRepairShops"));
const ReviewRequestAutomationForLandscapingCompanies = lazy(() => import("./pages/ReviewRequestAutomationForLandscapingCompanies"));
const AiAutomationForLandscapingCompanies = lazy(() => import("./pages/AiAutomationForLandscapingCompanies"));
const WhatToAutomateFirstForLandscapingCompanies = lazy(() => import("./pages/WhatToAutomateFirstForLandscapingCompanies"));
const AiLeadFollowUpForLandscapingCompanies = lazy(() => import("./pages/AiLeadFollowUpForLandscapingCompanies"));
const MissedCallTextBackForLandscapingCompanies = lazy(() => import("./pages/MissedCallTextBackForLandscapingCompanies"));
const MissedCallTextBackVsVoicemailForLandscapingCompanies = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForLandscapingCompanies"));
const MissedCallTextBackVsAiPhoneAnsweringForLandscapingCompanies = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForLandscapingCompanies"));
const AiPhoneAnsweringVsVoicemailForLandscapingCompanies = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForLandscapingCompanies"));
const SeasonalReactivationAutomationForLandscapingCompanies = lazy(() => import("./pages/SeasonalReactivationAutomationForLandscapingCompanies"));
const EstimateFollowUpAutomationForLandscapingCompanies = lazy(() => import("./pages/EstimateFollowUpAutomationForLandscapingCompanies"));
const RecurringServiceSchedulingAndReminderAutomationForLandscapingCompanies = lazy(() => import("./pages/RecurringServiceSchedulingAndReminderAutomationForLandscapingCompanies"));
const AiPhoneAnsweringForLandscapingCompanies = lazy(() => import("./pages/AiPhoneAnsweringForLandscapingCompanies"));
const AiAutomationForPaintingContractors = lazy(() => import("./pages/AiAutomationForPaintingContractors"));
const AiLeadFollowUpForPaintingContractors = lazy(() => import("./pages/AiLeadFollowUpForPaintingContractors"));
const ClientReactivationAutomationForPaintingContractors = lazy(() => import("./pages/ClientReactivationAutomationForPaintingContractors"));
const EstimateFollowUpAutomationForPaintingContractors = lazy(() => import("./pages/EstimateFollowUpAutomationForPaintingContractors"));
const WhatToAutomateFirstForPaintingContractors = lazy(() => import("./pages/WhatToAutomateFirstForPaintingContractors"));
const MissedCallTextBackForPaintingContractors = lazy(() => import("./pages/MissedCallTextBackForPaintingContractors"));
const MissedCallTextBackVsVoicemailForPaintingContractors = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForPaintingContractors"));
const AiPhoneAnsweringForPaintingContractors = lazy(() => import("./pages/AiPhoneAnsweringForPaintingContractors"));
const AiPhoneAnsweringVsVoicemailForPaintingContractors = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForPaintingContractors"));
const MissedCallTextBackVsAiPhoneAnsweringForPaintingContractors = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForPaintingContractors"));
const ReviewRequestAutomationForPaintingContractors = lazy(() => import("./pages/ReviewRequestAutomationForPaintingContractors"));
const ReferralRequestAutomationForPaintingContractors = lazy(() => import("./pages/ReferralRequestAutomationForPaintingContractors"));
const AiAutomationForHomeInspectors = lazy(() => import("./pages/AiAutomationForHomeInspectors"));
const WhatToAutomateFirstForHomeInspectors = lazy(() => import("./pages/WhatToAutomateFirstForHomeInspectors"));
const AiLeadFollowUpForHomeInspectors = lazy(() => import("./pages/AiLeadFollowUpForHomeInspectors"));
const InspectionSchedulingAndReminderAutomationForHomeInspectors = lazy(() => import("./pages/InspectionSchedulingAndReminderAutomationForHomeInspectors"));
const ReportDeliveryAndReviewAutomationForHomeInspectors = lazy(() => import("./pages/ReportDeliveryAndReviewAutomationForHomeInspectors"));
const ReviewRequestAutomationForHomeInspectors = lazy(() => import("./pages/ReviewRequestAutomationForHomeInspectors"));
const AiPhoneAnsweringForHomeInspectors = lazy(() => import("./pages/AiPhoneAnsweringForHomeInspectors"));
const MissedCallTextBackForHomeInspectors = lazy(() => import("./pages/MissedCallTextBackForHomeInspectors"));
const MissedCallTextBackVsVoicemailForHomeInspectors = lazy(() => import("./pages/MissedCallTextBackVsVoicemailForHomeInspectors"));
const MissedCallTextBackVsAiPhoneAnsweringForHomeInspectors = lazy(() => import("./pages/MissedCallTextBackVsAiPhoneAnsweringForHomeInspectors"));
const AiPhoneAnsweringVsVoicemailForHomeInspectors = lazy(() => import("./pages/AiPhoneAnsweringVsVoicemailForHomeInspectors"));
const AiAutomationCostSmallBusiness = lazy(() => import("./pages/AiAutomationCostSmallBusiness"));
const AiAutomationTimeSavingsSmallBusiness = lazy(() => import("./pages/AiAutomationTimeSavingsSmallBusiness"));
const AffordableAiAutomationSmallBusiness = lazy(() => import("./pages/AffordableAiAutomationSmallBusiness"));
const AiAutomationAuditChecklist = lazy(() => import("./pages/AiAutomationAuditChecklist"));
const CrmAutomationExamplesSmallBusiness = lazy(() => import("./pages/CrmAutomationExamplesSmallBusiness"));
const CrmAutomationForContractors = lazy(() => import("./pages/CrmAutomationForContractors"));
const CrmPipelineStagesForContractors = lazy(() => import("./pages/CrmPipelineStagesForContractors"));
const EstimateFollowUpAutomationForContractors = lazy(() => import("./pages/EstimateFollowUpAutomationForContractors"));
const EstimateFollowUpAutomationForRoofingCompanies = lazy(() => import("./pages/EstimateFollowUpAutomationForRoofingCompanies"));
const RoofingSchedulingAndFollowUpAutomation = lazy(() => import("./pages/RoofingSchedulingAndFollowUpAutomation"));
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
      <Route path="/gohighlevel-account-cleanup-service" element={<GoHighLevelAccountCleanupService />} />
      <Route path="/gohighlevel-account-cleanup-vs-rebuild" element={<GoHighLevelAccountCleanupVsRebuild />} />
      <Route path="/gohighlevel-account-audit-checklist" element={<GoHighLevelAccountAuditChecklist />} />
      <Route path="/gohighlevel-setup-mistakes-small-business" element={<GoHighLevelSetupMistakesSmallBusiness />} />
      <Route path="/ai-automation-consultant-pricing-small-business" element={<AiAutomationConsultantPricingSmallBusiness />} />
      <Route path="/best-ai-automation-for-service-businesses" element={<BestAiAutomationForServiceBusinesses />} />
      <Route path="/ai-automation-for-hvac-companies" element={<AiAutomationForHvacCompanies />} />
      <Route path="/what-to-automate-first-for-hvac-companies" element={<WhatToAutomateFirstForHvacCompanies />} />
      <Route path="/hvac-lead-follow-up-automation" element={<HvacLeadFollowUpAutomation />} />
      <Route path="/hvac-missed-call-text-back" element={<HvacMissedCallTextBack />} />
      <Route path="/ai-appointment-setter-for-hvac" element={<AiAppointmentSetterForHvac />} />
      <Route path="/hvac-scheduling-and-follow-up-automation" element={<HvacSchedulingAndFollowUpAutomation />} />
      <Route path="/ai-phone-answering-for-hvac-companies" element={<AiPhoneAnsweringForHvacCompanies />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-hvac-companies" element={<MissedCallTextBackVsAiPhoneAnsweringForHvacCompanies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-hvac-companies" element={<AiPhoneAnsweringVsVoicemailForHvacCompanies />} />
      <Route path="/review-request-automation-for-hvac-companies" element={<ReviewRequestAutomationForHvacCompanies />} />
      <Route path="/maintenance-reminder-automation-for-hvac-companies" element={<MaintenanceReminderAutomationForHvacCompanies />} />
      <Route path="/quote-follow-up-automation-for-hvac-companies" element={<QuoteFollowUpAutomationForHvacCompanies />} />
      <Route path="/ai-appointment-setter-for-home-service-businesses" element={<AiAppointmentSetterForHomeServiceBusinesses />} />
      <Route path="/ai-automation-for-businesses-without-a-tech-team" element={<AiAutomationNoTechTeam />} />
      <Route path="/ai-voice-agent-for-restaurants" element={<AiVoiceAgentForRestaurants />} />
      <Route path="/ai-automation-for-restaurants" element={<AiAutomationForRestaurants />} />
      <Route path="/what-to-automate-first-for-restaurants" element={<WhatToAutomateFirstForRestaurants />} />
      <Route path="/private-event-inquiry-follow-up-for-restaurants" element={<PrivateEventInquiryFollowUpForRestaurants />} />
      <Route path="/reservation-confirmation-and-reminder-automation-for-restaurants" element={<ReservationConfirmationAndReminderAutomationForRestaurants />} />
      <Route path="/missed-call-text-back-for-restaurants" element={<MissedCallTextBackForRestaurants />} />
      <Route path="/missed-call-text-back-vs-ai-voice-agent-for-restaurants" element={<MissedCallTextBackVsAiVoiceAgentForRestaurants />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-restaurants" element={<MissedCallTextBackVsVoicemailForRestaurants />} />
      <Route path="/after-hours-phone-answering-for-restaurants" element={<AfterHoursPhoneAnsweringForRestaurants />} />
      <Route path="/after-hours-ai-phone-answering-vs-voicemail-for-restaurants" element={<AfterHoursAiPhoneAnsweringVsVoicemailForRestaurants />} />
      <Route path="/ai-automation-consultant-alberta" element={<AiAutomationConsultantAlberta />} />
      <Route path="/ai-automation-consultant-canada" element={<AiAutomationConsultantCanada />} />
      <Route path="/ai-automation-for-real-estate" element={<AiAutomationForRealEstate />} />
      <Route path="/real-estate-lead-response-and-follow-up-automation" element={<RealEstateLeadResponseAndFollowUpAutomation />} />
      <Route path="/showing-coordination-automation-for-real-estate-teams" element={<ShowingCoordinationAutomationForRealEstateTeams />} />
      <Route path="/what-to-automate-first-for-real-estate" element={<WhatToAutomateFirstForRealEstate />} />
      <Route path="/client-reactivation-automation-for-real-estate-teams" element={<ClientReactivationAutomationForRealEstateTeams />} />
      <Route path="/crm-cleanup-and-routing-for-real-estate-teams" element={<CrmCleanupAndRoutingForRealEstateTeams />} />
      <Route path="/crm-cleanup-vs-lead-follow-up-for-real-estate-teams" element={<CrmCleanupVsLeadFollowUpForRealEstateTeams />} />
      <Route path="/ai-automation-for-mortgage-brokers" element={<AiAutomationForMortgageBrokers />} />
      <Route path="/ai-lead-follow-up-for-mortgage-brokers" element={<AiLeadFollowUpForMortgageBrokers />} />
      <Route path="/document-collection-automation-for-mortgage-brokers" element={<DocumentCollectionAutomationForMortgageBrokers />} />
      <Route path="/incomplete-application-follow-up-for-mortgage-brokers" element={<IncompleteApplicationFollowUpForMortgageBrokers />} />
      <Route path="/what-to-automate-first-for-mortgage-brokers" element={<WhatToAutomateFirstForMortgageBrokers />} />
      <Route path="/ai-automation-for-dental-practices" element={<AiAutomationForDentalPractices />} />
      <Route path="/what-to-automate-first-for-dental-practices" element={<WhatToAutomateFirstForDentalPractices />} />
      <Route path="/ai-lead-follow-up-for-dental-practices" element={<AiLeadFollowUpForDentalPractices />} />
      <Route path="/appointment-scheduling-and-reminder-automation-for-dental-practices" element={<AppointmentSchedulingAndReminderAutomationForDentalPractices />} />
      <Route path="/recall-and-reactivation-automation-for-dental-practices" element={<RecallAndReactivationAutomationForDentalPractices />} />
      <Route path="/no-show-reduction-automation-for-dental-practices" element={<NoShowReductionAutomationForDentalPractices />} />
      <Route path="/review-request-automation-for-dental-practices" element={<ReviewRequestAutomationForDentalPractices />} />
      <Route path="/missed-call-text-back-for-dental-practices" element={<MissedCallTextBackForDentalPractices />} />
      <Route path="/ai-phone-answering-for-dental-practices" element={<AiPhoneAnsweringForDentalPractices />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-dental-practices" element={<AiPhoneAnsweringVsVoicemailForDentalPractices />} />
      <Route path="/ai-automation-for-law-firms" element={<AiAutomationForLawFirms />} />
      <Route path="/what-to-automate-first-for-law-firms" element={<WhatToAutomateFirstForLawFirms />} />
      <Route path="/ai-lead-follow-up-for-law-firms" element={<AiLeadFollowUpForLawFirms />} />
      <Route path="/intake-and-conflict-check-automation-for-law-firms" element={<IntakeAndConflictCheckAutomationForLawFirms />} />
      <Route path="/consultation-scheduling-and-reminder-automation-for-law-firms" element={<ConsultationSchedulingAndReminderAutomationForLawFirms />} />
      <Route path="/unretained-consult-follow-up-for-law-firms" element={<UnretainedConsultFollowUpForLawFirms />} />
      <Route path="/case-status-update-automation-for-law-firms" element={<CaseStatusUpdateAutomationForLawFirms />} />
      <Route path="/ai-phone-answering-for-law-firms" element={<AiPhoneAnsweringForLawFirms />} />
     <Route path="/ai-phone-answering-vs-voicemail-for-law-firms" element={<AiPhoneAnsweringVsVoicemailForLawFirms />} />
     <Route path="/ai-automation-for-solar-companies" element={<AiAutomationForSolarCompanies />} />
     <Route path="/utility-bill-collection-automation-for-solar-companies" element={<UtilityBillCollectionAutomationForSolarCompanies />} />
      <Route path="/ai-lead-follow-up-for-solar-companies" element={<AiLeadFollowUpForSolarCompanies />} />
     <Route path="/ai-automation-for-accounting-firms" element={<AiAutomationForAccountingFirms />} />
      <Route path="/document-collection-automation-for-accounting-firms" element={<DocumentCollectionAutomationForAccountingFirms />} />
      <Route path="/client-onboarding-automation-for-accounting-firms" element={<ClientOnboardingAutomationForAccountingFirms />} />
      <Route path="/what-to-automate-first-for-accounting-firms" element={<WhatToAutomateFirstForAccountingFirms />} />
      <Route path="/appointment-scheduling-and-reminder-automation-for-accounting-firms" element={<AppointmentSchedulingAndReminderAutomationForAccountingFirms />} />
      <Route path="/seasonal-client-reactivation-for-accounting-firms" element={<SeasonalClientReactivationForAccountingFirms />} />
      <Route path="/ai-lead-follow-up-for-accounting-firms" element={<AiLeadFollowUpForAccountingFirms />} />
      <Route path="/ai-phone-answering-for-accounting-firms" element={<AiPhoneAnsweringForAccountingFirms />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-accounting-firms" element={<AiPhoneAnsweringVsVoicemailForAccountingFirms />} />
      <Route path="/ai-automation-for-plumbing-companies" element={<AiAutomationForPlumbingCompanies />} />
      <Route path="/what-to-automate-first-for-plumbing-companies" element={<WhatToAutomateFirstForPlumbingCompanies />} />

      <Route path="/ai-lead-follow-up-for-plumbing-companies" element={<AiLeadFollowUpForPlumbingCompanies />} />
      <Route path="/estimate-follow-up-automation-for-plumbing-companies" element={<EstimateFollowUpAutomationForPlumbingCompanies />} />
      <Route path="/missed-call-text-back-for-plumbing-companies" element={<MissedCallTextBackForPlumbingCompanies />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-plumbing-companies" element={<MissedCallTextBackVsVoicemailForPlumbingCompanies />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-plumbing-companies" element={<MissedCallTextBackVsAiPhoneAnsweringForPlumbingCompanies />} />
      <Route path="/ai-phone-answering-for-plumbing-companies" element={<AiPhoneAnsweringForPlumbingCompanies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-plumbing-companies" element={<AiPhoneAnsweringVsVoicemailForPlumbingCompanies />} />
      <Route path="/appointment-scheduling-and-reminder-automation-for-plumbing-companies" element={<AppointmentSchedulingAndReminderAutomationForPlumbingCompanies />} />
      <Route path="/review-request-automation-for-plumbing-companies" element={<ReviewRequestAutomationForPlumbingCompanies />} />
      <Route path="/ai-automation-for-electrical-contractors" element={<AiAutomationForElectricalContractors />} />
      <Route path="/what-to-automate-first-for-electrical-contractors" element={<WhatToAutomateFirstForElectricalContractors />} />
      <Route path="/ai-lead-follow-up-for-electrical-contractors" element={<AiLeadFollowUpForElectricalContractors />} />
      <Route path="/missed-call-text-back-for-electrical-contractors" element={<MissedCallTextBackForElectricalContractors />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-electrical-contractors" element={<MissedCallTextBackVsVoicemailForElectricalContractors />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-electrical-contractors" element={<MissedCallTextBackVsAiPhoneAnsweringForElectricalContractors />} />
      <Route path="/ai-phone-answering-for-electrical-contractors" element={<AiPhoneAnsweringForElectricalContractors />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-electrical-contractors" element={<AiPhoneAnsweringVsVoicemailForElectricalContractors />} />
      <Route path="/appointment-scheduling-and-reminder-automation-for-electrical-contractors" element={<AppointmentSchedulingAndReminderAutomationForElectricalContractors />} />
      <Route path="/estimate-follow-up-automation-for-electrical-contractors" element={<EstimateFollowUpAutomationForElectricalContractors />} />
      <Route path="/review-request-automation-for-electrical-contractors" element={<ReviewRequestAutomationForElectricalContractors />} />
      <Route path="/client-onboarding-automation" element={<ClientOnboardingAutomation />} />
      <Route path="/ai-automation-roi-guide" element={<AiAutomationRoiGuide />} />
      <Route path="/ai-automation-roi-calculator" element={<AiAutomationRoiCalculator />} />
      <Route path="/n8n-automation-examples-small-business" element={<N8nAutomationExamplesSmallBusiness />} />
      <Route path="/n8n-automation-consultant" element={<N8nAutomationConsultant />} />
      <Route path="/how-to-hire-n8n-automation-consultant" element={<HowToHireN8nAutomationConsultant />} />
      <Route path="/n8n-workflow-cleanup-service" element={<N8nWorkflowCleanupService />} />
      <Route path="/n8n-workflow-cleanup-vs-rebuild" element={<N8nWorkflowCleanupVsRebuild />} />
      <Route path="/n8n-workflow-audit-checklist" element={<N8nWorkflowAuditChecklist />} />
      <Route path="/n8n-automation-consultant-cost-small-business" element={<N8nAutomationConsultantCostSmallBusiness />} />
      <Route path="/n8n-consultant-vs-diy-small-business" element={<N8nConsultantVsDiySmallBusiness />} />
      <Route path="/ai-email-sequence-automation" element={<AiEmailSequenceAutomation />} />
      <Route path="/ai-automation-for-insurance-agencies" element={<AiAutomationForInsuranceAgencies />} />
      <Route path="/what-to-automate-first-for-insurance-agencies" element={<WhatToAutomateFirstForInsuranceAgencies />} />
      <Route path="/ai-lead-follow-up-for-insurance-agencies" element={<AiLeadFollowUpForInsuranceAgencies />} />
      <Route path="/renewal-reminder-automation-for-insurance-agencies" element={<RenewalReminderAutomationForInsuranceAgencies />} />
      <Route path="/quote-follow-up-automation-for-insurance-agencies" element={<QuoteFollowUpAutomationForInsuranceAgencies />} />
      <Route path="/cross-sell-automation-for-insurance-agencies" element={<CrossSellAutomationForInsuranceAgencies />} />
      <Route path="/review-request-automation-for-insurance-agencies" element={<ReviewRequestAutomationForInsuranceAgencies />} />
      <Route path="/referral-request-automation-for-insurance-agencies" element={<ReferralRequestAutomationForInsuranceAgencies />} />
      <Route path="/after-hours-inquiry-handling-for-insurance-agencies" element={<AfterHoursInquiryHandlingForInsuranceAgencies />} />
      <Route path="/ai-phone-answering-for-insurance-agencies" element={<AiPhoneAnsweringForInsuranceAgencies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-insurance-agencies" element={<AiPhoneAnsweringVsVoicemailForInsuranceAgencies />} />
      <Route path="/ai-automation-for-property-management" element={<AiAutomationForPropertyManagement />} />
      <Route path="/what-to-automate-first-for-property-management-companies" element={<WhatToAutomateFirstForPropertyManagementCompanies />} />
      <Route path="/lease-renewal-automation-for-property-management-companies" element={<LeaseRenewalAutomationForPropertyManagementCompanies />} />
      <Route path="/showing-coordination-automation-for-property-management-companies" element={<ShowingCoordinationAutomationForPropertyManagementCompanies />} />
      <Route path="/maintenance-request-automation-for-property-management-companies" element={<MaintenanceRequestAutomationForPropertyManagementCompanies />} />
      <Route path="/tenant-onboarding-automation-for-property-management-companies" element={<TenantOnboardingAutomationForPropertyManagementCompanies />} />
      <Route path="/tenant-communication-automation-for-property-management-companies" element={<TenantCommunicationAutomationForPropertyManagementCompanies />} />
      <Route path="/after-hours-tenant-communication-for-property-management-companies" element={<AfterHoursTenantCommunicationForPropertyManagementCompanies />} />
      <Route path="/after-hours-maintenance-triage-for-property-management-companies" element={<AfterHoursMaintenanceTriageForPropertyManagementCompanies />} />
      <Route path="/emergency-vs-routine-maintenance-intake-for-property-management-companies" element={<EmergencyVsRoutineMaintenanceIntakeForPropertyManagementCompanies />} />
      <Route path="/owner-reporting-automation-for-property-management-companies" element={<OwnerReportingAutomationForPropertyManagementCompanies />} />
      <Route path="/ai-automation-ecommerce" element={<AiAutomationEcommerce />} />
      <Route path="/what-to-automate-first-for-ecommerce-brands" element={<WhatToAutomateFirstForEcommerceBrands />} />
      <Route path="/ai-automation-for-auto-parts-ecommerce" element={<AiAutomationForAutoPartsEcommerce />} />
      <Route path="/what-to-automate-first-for-auto-parts-ecommerce" element={<WhatToAutomateFirstForAutoPartsEcommerce />} />
      <Route
        path="/crm-automation-vs-manual-follow-up-for-auto-parts-ecommerce"
        element={<CrmAutomationVsManualFollowUpForAutoPartsEcommerce />}
      />
      <Route path="/ecommerce-crm-automation-with-ai-follow-up" element={<EcommerceCrmAutomationWithAiFollowUp />} />
      <Route path="/ecommerce-crm-automation-vs-manual-follow-up" element={<EcommerceCrmAutomationVsManualFollowUp />} />
      <Route path="/fitment-inquiry-automation-for-auto-parts-ecommerce" element={<FitmentInquiryAutomationForAutoPartsEcommerce />} />
      <Route path="/customer-inquiry-automation-for-auto-parts-ecommerce" element={<CustomerInquiryAutomationForAutoPartsEcommerce />} />
      <Route path="/quote-follow-up-automation-for-auto-parts-ecommerce" element={<QuoteFollowUpAutomationForAutoPartsEcommerce />} />
      <Route path="/stale-lead-follow-up-for-auto-parts-ecommerce" element={<StaleLeadFollowUpForAutoPartsEcommerce />} />
      <Route path="/repeat-purchase-reactivation-automation-for-auto-parts-ecommerce" element={<RepeatPurchaseReactivationAutomationForAutoPartsEcommerce />} />
      <Route path="/repeat-purchase-reactivation-automation-for-ecommerce-brands" element={<RepeatPurchaseReactivationAutomationForEcommerceBrands />} />
      <Route path="/customer-service-automation-for-ecommerce-brands" element={<CustomerServiceAutomationForEcommerceBrands />} />
      <Route path="/customer-service-automation-vs-manual-support-for-ecommerce-brands" element={<CustomerServiceAutomationVsManualSupportForEcommerceBrands />} />
      <Route path="/order-status-and-return-support-automation-for-ecommerce-brands" element={<OrderStatusAndReturnSupportAutomationForEcommerceBrands />} />
      <Route path="/review-request-automation-for-ecommerce-brands" element={<ReviewRequestAutomationForEcommerceBrands />} />
      <Route path="/after-hours-lead-capture-for-service-businesses" element={<AfterHoursLeadCapture />} />
      <Route path="/missed-call-follow-up-automation" element={<MissedCallFollowUp />} />
      <Route path="/booking-confirmation-and-reminder-automation" element={<BookingConfirmationAndReminder />} />
      <Route path="/ai-phone-answering-for-service-businesses" element={<AiPhoneAnswering />} />
      <Route path="/ai-voice-agent-lead-qualification" element={<AiVoiceAgentForLeadQualification />} />
      <Route path="/ai-voice-agent-setup-for-lead-qualification" element={<AiVoiceAgentSetupForLeadQualification />} />
      <Route path="/ai-voice-agent-setup-cost-small-business" element={<AiVoiceAgentSetupCostSmallBusiness />} />
      <Route path="/ai-voice-agent-setup-mistakes-small-business" element={<AiVoiceAgentSetupMistakesSmallBusiness />} />
      <Route path="/ai-voice-agent-launch-checklist-small-business" element={<AiVoiceAgentLaunchChecklistSmallBusiness />} />
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
      <Route path="/what-to-automate-first-for-chiropractors" element={<WhatToAutomateFirstForChiropractors />} />
      <Route path="/care-plan-recall-automation-for-chiropractors" element={<CarePlanRecallAutomationForChiropractors />} />
      <Route path="/new-patient-intake-and-scheduling-automation-for-chiropractors" element={<NewPatientIntakeAndSchedulingAutomationForChiropractors />} />
      <Route path="/no-show-reduction-automation-for-chiropractors" element={<NoShowReductionAutomationForChiropractors />} />
      <Route path="/ai-phone-answering-for-chiropractors" element={<AiPhoneAnsweringForChiropractors />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-chiropractors" element={<AiPhoneAnsweringVsVoicemailForChiropractors />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-chiropractors" element={<MissedCallTextBackVsAiPhoneAnsweringForChiropractors />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-chiropractors" element={<MissedCallTextBackVsVoicemailForChiropractors />} />
      <Route path="/missed-call-text-back-for-chiropractors" element={<MissedCallTextBackForChiropractors />} />
      <Route path="/review-request-automation-for-chiropractors" element={<ReviewRequestAutomationForChiropractors />} />
      <Route path="/ai-automation-for-cleaning-companies" element={<AiAutomationForCleaningCompanies />} />
      <Route path="/what-to-automate-first-for-cleaning-companies" element={<WhatToAutomateFirstForCleaningCompanies />} />
      <Route path="/quote-follow-up-automation-for-cleaning-companies" element={<QuoteFollowUpAutomationForCleaningCompanies />} />
      <Route path="/recurring-cleaning-scheduling-and-reminder-automation-for-cleaning-companies" element={<RecurringCleaningSchedulingAndReminderAutomationForCleaningCompanies />} />
      <Route path="/missed-call-text-back-for-cleaning-companies" element={<MissedCallTextBackForCleaningCompanies />} />
      <Route path="/ai-phone-answering-for-cleaning-companies" element={<AiPhoneAnsweringForCleaningCompanies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-cleaning-companies" element={<AiPhoneAnsweringVsVoicemailForCleaningCompanies />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-cleaning-companies" element={<MissedCallTextBackVsAiPhoneAnsweringForCleaningCompanies />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-cleaning-companies" element={<MissedCallTextBackVsVoicemailForCleaningCompanies />} />
      <Route path="/client-reactivation-automation-for-cleaning-companies" element={<ClientReactivationAutomationForCleaningCompanies />} />
      <Route path="/review-request-automation-for-cleaning-companies" element={<ReviewRequestAutomationForCleaningCompanies />} />
      <Route path="/ai-lead-follow-up-for-cleaning-companies" element={<AiLeadFollowUpForCleaningCompanies />} />
      <Route path="/ai-automation-for-med-spas" element={<AiAutomationForMedSpas />} />
      <Route path="/what-to-automate-first-for-med-spas" element={<WhatToAutomateFirstForMedSpas />} />
      <Route path="/missed-call-text-back-for-med-spas" element={<MissedCallTextBackForMedSpas />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-med-spas" element={<MissedCallTextBackVsVoicemailForMedSpas />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-med-spas" element={<MissedCallTextBackVsAiPhoneAnsweringForMedSpas />} />
      <Route path="/ai-phone-answering-for-med-spas" element={<AiPhoneAnsweringForMedSpas />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-med-spas" element={<AiPhoneAnsweringVsVoicemailForMedSpas />} />
      <Route path="/consultation-booking-and-reminder-automation-for-med-spas" element={<ConsultationBookingAndReminderAutomationForMedSpas />} />
      <Route path="/no-show-reduction-automation-for-med-spas" element={<NoShowReductionAutomationForMedSpas />} />
      <Route path="/treatment-recall-automation-for-med-spas" element={<TreatmentRecallAutomationForMedSpas />} />
      <Route path="/review-request-automation-for-med-spas" element={<ReviewRequestAutomationForMedSpas />} />
      <Route path="/ai-lead-follow-up-for-med-spas" element={<AiLeadFollowUpForMedSpas />} />
      <Route path="/ai-automation-for-roofing-companies" element={<AiAutomationForRoofingCompanies />} />
      <Route path="/what-to-automate-first-for-roofing-companies" element={<WhatToAutomateFirstForRoofingCompanies />} />
      <Route path="/ai-lead-follow-up-for-roofing-companies" element={<AiLeadFollowUpForRoofingCompanies />} />
      <Route path="/client-reactivation-automation-for-roofing-companies" element={<ClientReactivationAutomationForRoofingCompanies />} />
      <Route path="/missed-call-text-back-for-roofing-companies" element={<MissedCallTextBackForRoofingCompanies />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-roofing-companies" element={<MissedCallTextBackVsAiPhoneAnsweringForRoofingCompanies />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-roofing-companies" element={<MissedCallTextBackVsVoicemailForRoofingCompanies />} />
      <Route path="/ai-phone-answering-for-roofing-companies" element={<AiPhoneAnsweringForRoofingCompanies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-roofing-companies" element={<AiPhoneAnsweringVsVoicemailForRoofingCompanies />} />
      <Route path="/review-request-automation-for-roofing-companies" element={<ReviewRequestAutomationForRoofingCompanies />} />
      <Route path="/ai-automation-for-pest-control-companies" element={<AiAutomationForPestControlCompanies />} />
      <Route path="/what-to-automate-first-for-pest-control-companies" element={<WhatToAutomateFirstForPestControlCompanies />} />
      <Route path="/recurring-service-reminder-automation-for-pest-control-companies" element={<RecurringServiceReminderAutomationForPestControlCompanies />} />
      <Route path="/seasonal-campaign-automation-for-pest-control-companies" element={<SeasonalCampaignAutomationForPestControlCompanies />} />
      <Route path="/urgent-lead-follow-up-for-pest-control-companies" element={<UrgentLeadFollowUpForPestControlCompanies />} />
      <Route path="/quote-follow-up-automation-for-pest-control-companies" element={<QuoteFollowUpAutomationForPestControlCompanies />} />
      <Route path="/review-request-automation-for-pest-control-companies" element={<ReviewRequestAutomationForPestControlCompanies />} />
      <Route path="/ai-phone-answering-for-pest-control-companies" element={<AiPhoneAnsweringForPestControlCompanies />} />
      <Route path="/missed-call-text-back-for-pest-control-companies" element={<MissedCallTextBackForPestControlCompanies />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-pest-control-companies" element={<MissedCallTextBackVsVoicemailForPestControlCompanies />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-pest-control-companies" element={<MissedCallTextBackVsAiPhoneAnsweringForPestControlCompanies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-pest-control-companies" element={<AiPhoneAnsweringVsVoicemailForPestControlCompanies />} />
      <Route path="/ai-automation-for-auto-repair-shops" element={<AiAutomationForAutoRepairShops />} />
      <Route path="/what-to-automate-first-for-auto-repair-shops" element={<WhatToAutomateFirstForAutoRepairShops />} />
      <Route path="/ai-lead-follow-up-for-auto-repair-shops" element={<AiLeadFollowUpForAutoRepairShops />} />
      <Route path="/maintenance-reminder-automation-for-auto-repair-shops" element={<MaintenanceReminderAutomationForAutoRepairShops />} />
      <Route path="/client-reactivation-automation-for-auto-repair-shops" element={<ClientReactivationAutomationForAutoRepairShops />} />
      <Route path="/estimate-follow-up-automation-for-auto-repair-shops" element={<EstimateFollowUpAutomationForAutoRepairShops />} />
      <Route path="/appointment-scheduling-and-reminder-automation-for-auto-repair-shops" element={<AppointmentSchedulingAndReminderAutomationForAutoRepairShops />} />
      <Route path="/missed-call-text-back-for-auto-repair-shops" element={<MissedCallTextBackForAutoRepairShops />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-auto-repair-shops" element={<MissedCallTextBackVsVoicemailForAutoRepairShops />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-auto-repair-shops" element={<MissedCallTextBackVsAiPhoneAnsweringForAutoRepairShops />} />
      <Route path="/ai-phone-answering-for-auto-repair-shops" element={<AiPhoneAnsweringForAutoRepairShops />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-auto-repair-shops" element={<AiPhoneAnsweringVsVoicemailForAutoRepairShops />} />
      <Route path="/review-request-automation-for-auto-repair-shops" element={<ReviewRequestAutomationForAutoRepairShops />} />
      <Route path="/ai-automation-for-landscaping-companies" element={<AiAutomationForLandscapingCompanies />} />
      <Route path="/what-to-automate-first-for-landscaping-companies" element={<WhatToAutomateFirstForLandscapingCompanies />} />
      <Route path="/ai-lead-follow-up-for-landscaping-companies" element={<AiLeadFollowUpForLandscapingCompanies />} />
      <Route path="/missed-call-text-back-for-landscaping-companies" element={<MissedCallTextBackForLandscapingCompanies />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-landscaping-companies" element={<MissedCallTextBackVsVoicemailForLandscapingCompanies />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-landscaping-companies" element={<MissedCallTextBackVsAiPhoneAnsweringForLandscapingCompanies />} />
      <Route path="/estimate-follow-up-automation-for-landscaping-companies" element={<EstimateFollowUpAutomationForLandscapingCompanies />} />
      <Route path="/review-request-automation-for-landscaping-companies" element={<ReviewRequestAutomationForLandscapingCompanies />} />
      <Route path="/recurring-service-scheduling-and-reminder-automation-for-landscaping-companies" element={<RecurringServiceSchedulingAndReminderAutomationForLandscapingCompanies />} />
      <Route path="/ai-phone-answering-for-landscaping-companies" element={<AiPhoneAnsweringForLandscapingCompanies />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-landscaping-companies" element={<AiPhoneAnsweringVsVoicemailForLandscapingCompanies />} />
      <Route path="/seasonal-reactivation-automation-for-landscaping-companies" element={<SeasonalReactivationAutomationForLandscapingCompanies />} />
      <Route path="/ai-automation-for-painting-contractors" element={<AiAutomationForPaintingContractors />} />
      <Route path="/ai-lead-follow-up-for-painting-contractors" element={<AiLeadFollowUpForPaintingContractors />} />
      <Route path="/client-reactivation-automation-for-painting-contractors" element={<ClientReactivationAutomationForPaintingContractors />} />
      <Route path="/estimate-follow-up-automation-for-painting-contractors" element={<EstimateFollowUpAutomationForPaintingContractors />} />
      <Route path="/what-to-automate-first-for-painting-contractors" element={<WhatToAutomateFirstForPaintingContractors />} />
      <Route path="/missed-call-text-back-for-painting-contractors" element={<MissedCallTextBackForPaintingContractors />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-painting-contractors" element={<MissedCallTextBackVsVoicemailForPaintingContractors />} />
      <Route path="/ai-phone-answering-for-painting-contractors" element={<AiPhoneAnsweringForPaintingContractors />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-painting-contractors" element={<AiPhoneAnsweringVsVoicemailForPaintingContractors />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-painting-contractors" element={<MissedCallTextBackVsAiPhoneAnsweringForPaintingContractors />} />
      <Route path="/review-request-automation-for-painting-contractors" element={<ReviewRequestAutomationForPaintingContractors />} />
      <Route path="/referral-request-automation-for-painting-contractors" element={<ReferralRequestAutomationForPaintingContractors />} />
      <Route path="/ai-automation-for-home-inspectors" element={<AiAutomationForHomeInspectors />} />
      <Route path="/what-to-automate-first-for-home-inspectors" element={<WhatToAutomateFirstForHomeInspectors />} />
      <Route path="/ai-lead-follow-up-for-home-inspectors" element={<AiLeadFollowUpForHomeInspectors />} />
      <Route path="/inspection-scheduling-and-reminder-automation-for-home-inspectors" element={<InspectionSchedulingAndReminderAutomationForHomeInspectors />} />
      <Route path="/report-delivery-and-review-automation-for-home-inspectors" element={<ReportDeliveryAndReviewAutomationForHomeInspectors />} />
      <Route path="/review-request-automation-for-home-inspectors" element={<ReviewRequestAutomationForHomeInspectors />} />
      <Route path="/ai-phone-answering-for-home-inspectors" element={<AiPhoneAnsweringForHomeInspectors />} />
      <Route path="/ai-phone-answering-vs-voicemail-for-home-inspectors" element={<AiPhoneAnsweringVsVoicemailForHomeInspectors />} />
      <Route path="/missed-call-text-back-for-home-inspectors" element={<MissedCallTextBackForHomeInspectors />} />
      <Route path="/missed-call-text-back-vs-voicemail-for-home-inspectors" element={<MissedCallTextBackVsVoicemailForHomeInspectors />} />
      <Route path="/missed-call-text-back-vs-ai-phone-answering-for-home-inspectors" element={<MissedCallTextBackVsAiPhoneAnsweringForHomeInspectors />} />
      <Route path="/ai-automation-cost-small-business" element={<AiAutomationCostSmallBusiness />} />
      <Route path="/ai-automation-time-savings-small-business" element={<AiAutomationTimeSavingsSmallBusiness />} />
      <Route path="/affordable-ai-automation-small-business" element={<AffordableAiAutomationSmallBusiness />} />
      <Route path="/ai-automation-audit-checklist" element={<AiAutomationAuditChecklist />} />
      <Route path="/crm-automation-examples-small-business" element={<CrmAutomationExamplesSmallBusiness />} />
      <Route path="/crm-automation-for-contractors" element={<CrmAutomationForContractors />} />
      <Route path="/crm-pipeline-stages-for-contractors" element={<CrmPipelineStagesForContractors />} />
      <Route path="/crm-automation-setup-for-contractors" element={<CrmAutomationSetupForContractors />} />
      <Route path="/what-to-automate-first-for-contractors" element={<WhatToAutomateFirstForContractors />} />
      <Route path="/crm-automation-setup-cost-for-contractors" element={<CrmAutomationSetupCostForContractors />} />
      <Route path="/crm-automation-setup-vs-diy-for-contractors" element={<CrmAutomationSetupVsDiyForContractors />} />
      <Route path="/estimate-follow-up-automation-for-contractors" element={<EstimateFollowUpAutomationForContractors />} />
      <Route path="/estimate-follow-up-automation-for-roofing-companies" element={<EstimateFollowUpAutomationForRoofingCompanies />} />
      <Route path="/roofing-scheduling-and-follow-up-automation" element={<RoofingSchedulingAndFollowUpAutomation />} />
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
