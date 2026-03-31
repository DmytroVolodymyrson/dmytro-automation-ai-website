import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const InstagramLeadGenerationCaseStudy = lazy(() => import("./pages/case-studies/InstagramLeadGenerationCaseStudy"));
const ParisCafeVoiceAgentCaseStudy = lazy(() => import("./pages/case-studies/ParisCafeVoiceAgentCaseStudy"));
const EcommerceCRMCaseStudy = lazy(() => import("./pages/case-studies/EcommerceCRMCaseStudy"));
const AiAutomationConsultantSmallBusiness = lazy(() => import("./pages/AiAutomationConsultantSmallBusiness"));
const Guides = lazy(() => import("./pages/Guides"));
const N8nVsZapierSmallBusiness = lazy(() => import("./pages/N8nVsZapierSmallBusiness"));
const AiAppointmentSetter = lazy(() => import("./pages/AiAppointmentSetter"));
const AiLeadFollowUpForServiceBusinesses = lazy(() => import("./pages/AiLeadFollowUpForServiceBusinesses"));
const AiAutomationConsultantCalgary = lazy(() => import("./pages/AiAutomationConsultantCalgary"));
const HireAiAutomationConsultantVsAgency = lazy(() => import("./pages/HireAiAutomationConsultantVsAgency"));
const HvacDatabaseReactivation = lazy(() => import("./pages/HvacDatabaseReactivation"));
const AiAutomationConsultantVsFreelancer = lazy(() => import("./pages/AiAutomationConsultantVsFreelancer"));
const AiChatbotVsAiVoiceAgentForLeadQualification = lazy(() => import("./pages/AiChatbotVsAiVoiceAgentForLeadQualification"));
const GoHighLevelVsCustomCrmSmallBusiness = lazy(() => import("./pages/GoHighLevelVsCustomCrmSmallBusiness"));
const AiAutomationConsultantPricingSmallBusiness = lazy(() => import("./pages/AiAutomationConsultantPricingSmallBusiness"));
const BestAiAutomationForServiceBusinesses = lazy(() => import("./pages/BestAiAutomationForServiceBusinesses"));
const AiAutomationForHvacCompanies = lazy(() => import("./pages/AiAutomationForHvacCompanies"));
const HvacLeadFollowUpAutomation = lazy(() => import("./pages/HvacLeadFollowUpAutomation"));
const HvacMissedCallTextBack = lazy(() => import("./pages/HvacMissedCallTextBack"));
const AiAppointmentSetterForHvac = lazy(() => import("./pages/AiAppointmentSetterForHvac"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route
              path="/case-studies/instagram-lead-generation"
              element={<InstagramLeadGenerationCaseStudy />}
            />
            <Route
              path="/case-studies/paris-cafe-voice-agent"
              element={<ParisCafeVoiceAgentCaseStudy />}
            />
            <Route
              path="/case-studies/ecommerce-crm-automation"
              element={<EcommerceCRMCaseStudy />}
            />
            <Route
              path="/ai-automation-consultant-small-business"
              element={<AiAutomationConsultantSmallBusiness />}
            />
            <Route path="/guides" element={<Guides />} />
            <Route
              path="/n8n-vs-zapier-small-business"
              element={<N8nVsZapierSmallBusiness />}
            />
            <Route
              path="/ai-appointment-setter"
              element={<AiAppointmentSetter />}
            />
            <Route
              path="/ai-lead-follow-up-for-service-businesses"
              element={<AiLeadFollowUpForServiceBusinesses />}
            />
            <Route
              path="/ai-automation-consultant-calgary"
              element={<AiAutomationConsultantCalgary />}
            />
            <Route
              path="/ai-automation-hvac"
              element={<Navigate to="/ai-automation-for-hvac-companies" replace />}
            />
            <Route
              path="/hire-ai-automation-consultant-vs-agency"
              element={<HireAiAutomationConsultantVsAgency />}
            />
            <Route
              path="/hvac-database-reactivation"
              element={<HvacDatabaseReactivation />}
            />
            <Route
              path="/ai-automation-consultant-vs-freelancer"
              element={<AiAutomationConsultantVsFreelancer />}
            />
            <Route
              path="/ai-chatbot-vs-ai-voice-agent-for-lead-qualification"
              element={<AiChatbotVsAiVoiceAgentForLeadQualification />}
            />
            <Route
              path="/gohighlevel-vs-custom-crm-small-business"
              element={<GoHighLevelVsCustomCrmSmallBusiness />}
            />
            <Route
              path="/ai-automation-consultant-pricing-small-business"
              element={<AiAutomationConsultantPricingSmallBusiness />}
            />
            <Route
              path="/best-ai-automation-for-service-businesses"
              element={<BestAiAutomationForServiceBusinesses />}
            />
            <Route
              path="/ai-automation-for-hvac-companies"
              element={<AiAutomationForHvacCompanies />}
            />
            <Route
              path="/hvac-lead-follow-up-automation"
              element={<HvacLeadFollowUpAutomation />}
            />
            <Route
              path="/hvac-missed-call-text-back"
              element={<HvacMissedCallTextBack />}
            />
            <Route
              path="/ai-appointment-setter-for-hvac"
              element={<AiAppointmentSetterForHvac />}
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
