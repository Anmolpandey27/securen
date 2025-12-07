import React from "react";
import SOCVideoSection from "../../components/SOCVideoSection";
import { motion } from "framer-motion";
import {
  Zap,
  Cpu,
  GitCommit,
  Search,
  Mail,
  Rocket,
  Shield,
  Network,
  Workflow,
  BarChart3,
} from "lucide-react";

const fadeIn = (direction = "up", delay = 0) => {
  const y = direction === "up" ? 40 : -40;
  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };
};

const VirtualTour = ({ navigate }) => {
  return (
    <div className="min-h-screen pt-20 bg-slate-900 text-slate-200 relative">
      {/* HERO */}
      <motion.section
        // className="py-16 bg-slate-900 text-center border-b border-slate-800"
        className="py-16 bg-slate-900 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-50 mb-4">
            The <span className="text-green-500">Virtual Tour</span>: Your SOC Ecosystem
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto">
            Explore how each component of your <strong>custom SOC</strong> interacts —
            from data collection to analysis and automated response.  
            This tour represents the <strong>open-source security stack</strong> that <span className="text-slate-50 w-8 h-10 mr-2">secure<span className="text-blue-500">N</span></span> implements and integrates
            to build enterprise-grade visibility and control.
          </p>
        </div>
      </motion.section>

      {/* VISUAL SOC ECOSYSTEM */}
      <SOCVideoSection />

      {/* EXPLANATION SECTION */}
      <motion.section
        className="py-20 bg-slate-900  text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-green-500 mb-8">
            End-to-End SOC Visualization
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-12">
            Every SOC component plays a unique role — from data ingestion to incident
            response. <span className="text-slate-50 w-8 h-10">secure<span className="text-blue-500">N</span></span>’s open-source architecture ensures that logs, alerts,
            and workflows are tightly coupled for <strong>efficiency, transparency, and
            scalability.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <ExplanationCard
              icon={Cpu}
              title="Collection & Telemetry"
              text="Endpoints, firewalls, and cloud services continuously send logs and metrics to your centralized data lake for analysis."
            />
            <ExplanationCard
              icon={BarChart3}
              title="Analysis & Correlation"
              text="SIEM engine (Wazuh, ELK) correlates raw data using rule-based and behavioral logic, highlighting genuine threats."
            />
            <ExplanationCard
              icon={Workflow}
              title="Response & Automation"
              text="SOAR platforms like Shuffle or Cortex XSOAR automate containment, alert enrichment, and notification workflows."
            />
          </div>
        </div>
      </motion.section>

      {/* FLOATING CTA BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => navigate("contact")}
          className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 animate-pulse-slow"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

/* SUBCOMPONENTS */
const TourItem = ({ icon: Icon, label, color }) => {
  let bgColorClass;
  switch (color) {
    case "red":
      bgColorClass = "bg-red-900/40 border-red-500 shadow-red-500/20";
      break;
    case "blue":
      bgColorClass = "bg-blue-900/40 border-blue-500 shadow-blue-500/20";
      break;
    case "green":
    default:
      bgColorClass = "bg-green-900/40 border-green-500 shadow-green-500/20";
      break;
  }

  return (
    <div
      className={`p-4 m-3 text-center rounded-lg border-2 shadow-lg w-48 ${bgColorClass}`}
    >
      <Icon
        className={`w-8 h-8 mx-auto mb-2 ${
          color === "red"
            ? "text-red-500"
            : color === "blue"
            ? "text-blue-500"
            : "text-green-500"
        }`}
      />
      <span className="text-sm font-medium text-slate-300">{label}</span>
    </div>
  );
};

const ExplanationCard = ({ icon: Icon, title, text }) => (
  <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg hover:shadow-green-500/20 hover:border-green-500/30 transition duration-300">
    <Icon className="w-8 h-8 mb-3 text-green-500" />
    <h3 className="text-lg font-bold text-slate-100 mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{text}</p>
  </div>
);

export default VirtualTour;
