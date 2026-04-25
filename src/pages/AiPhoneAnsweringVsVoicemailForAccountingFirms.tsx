import React from "react";
import DecisionPageTemplate from "../components/DecisionPageTemplate";
import data from "../data/decision-pages/ai-phone-answering-vs-voicemail-for-accounting-firms";

const AiPhoneAnsweringVsVoicemailForAccountingFirms: React.FC = () => {
  return <DecisionPageTemplate data={data} />;
};

export default AiPhoneAnsweringVsVoicemailForAccountingFirms;
