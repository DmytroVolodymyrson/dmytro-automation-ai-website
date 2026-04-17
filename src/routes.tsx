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
import AiAutomationConsultantPricingSmallBusiness from "./pages/AiAutomationConsultantPricingSmallBusiness";
import BestAiAutomationForServiceBusinesses from "./pages/BestAiAutomationForServiceBusinesses";
import AiAutomationForHvacCompanies from "./pages/AiAutomationForHvacCompanies";
import HvacLeadFollowUpAutomation from "./pages/HvacLeadFollowUpAutomation";
import HvacMissedCallTextBack from "./pages/HvacMissedCallTextBack";
import AiAppointmentSetterForHvac from "./pages/AiAppointmentSetterForHvac";
import AiAutomationNoTechTeam from "./pages/AiAutomationNoTechTeam";
import AiVoiceAgentForRestaurants from "./pages/AiVoiceAgentForRestaurants";
import AiAutomationConsultantEdmonton from "./pages/AiAutomationConsultantEdmonton";
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
  {
    path: "/ai-automation-consultant-pricing-small-business",
    element: <AiAutomationConsultantPricingSmallBusiness />,
  },
  { path: "/best-ai-automation-for-service-businesses", element: <BestAiAutomationForServiceBusinesses /> },
  { path: "/ai-automation-for-hvac-companies", element: <AiAutomationForHvacCompanies /> },
  { path: "/hvac-lead-follow-up-automation", element: <HvacLeadFollowUpAutomation /> },
  { path: "/hvac-missed-call-text-back", element: <HvacMissedCallTextBack /> },
  { path: "/ai-appointment-setter-for-hvac", element: <AiAppointmentSetterForHvac /> },
  { path: "/ai-automation-for-businesses-without-a-tech-team", element: <AiAutomationNoTechTeam /> },
  { path: "/ai-voice-agent-for-restaurants", element: <AiVoiceAgentForRestaurants /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsOfService /> },
  { path: "*", element: <NotFound />, prerender: false },
];

export const prerenderRoutes = appRoutes
  .filter((route) => route.prerender !== false)
  .map((route) => route.path);
