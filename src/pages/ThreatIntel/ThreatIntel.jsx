import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Activity,
  Bug,
  WifiOff,
  GitBranch,
  Radar,
  Server,
  Bell,
  Network,
  FileSearch,
  Lock,
  Globe,
  Cpu,
} from "lucide-react";
import FeatureCard from "../../components/FeatureCard";

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

const ThreatIntel = ({ navigate }) => {
  return (
    <div className="min-h-screen pt-20 bg-slate-900 text-slate-200 relative">
      {/* HERO */}
      <motion.section
        className="py-16 bg-slate-900 text-center "
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-50 mb-4">
            Adaptive <span className="text-red-500">Threat Intelligence Integration</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto">
            <span className="text-slate-50 w-8 h-10">secure<span className="text-blue-500">N</span></span> delivers <strong>tailored threat intelligence</strong> — integrated according to your
            SOC’s environment, technology stack, and operational maturity.
            We curate and contextualize intelligence from trusted open-source feeds like{" "}
            <strong>MISP</strong>, <strong>AbuseIPDB</strong>, <strong>VirusTotal</strong>, and{" "}
            <strong>AlienVault OTX</strong>, ensuring it aligns with your organization’s
            unique threat landscape.
          </p>
        </div>
      </motion.section>

      {/* INTEL CATEGORIES */}
      <motion.section
        className="py-16 bg-slate-900 border-b border-slate-800"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-10">
            Threat Intelligence Streams We Curate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bug}
              title="Vulnerability Advisories"
              description="Customized vulnerability feeds and CVE alerts relevant to your deployed technologies and SOC tools."
              colorClass="text-red-500"
            />
            <FeatureCard
              icon={Activity}
              title="Attack Campaigns & TTPs"
              description="Monitoring of APT campaigns and MITRE ATT&CK-aligned TTPs mapped to your network and application assets."
              colorClass="text-blue-500"
            />
            <FeatureCard
              icon={Network}
              title="IOC & Behavioral Feeds"
              description="Enriched feeds containing IPs, domains, hashes, and behavioral signatures specific to your environment."
              colorClass="text-green-500"
            />
          </div>
        </div>
      </motion.section>

      {/* INTEGRATION EXPERTISE */}
      <motion.section
        className="py-16 bg-slate-950 border-b border-slate-800"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-green-500 text-center mb-10">
            Integration Expertise Across SOC Ecosystems
          </h2>
          <p className="text-slate-400 text-center max-w-4xl mx-auto mb-12">
            We integrate intelligence feeds according to your existing SOC design — whether
            it’s a standalone SIEM, hybrid cloud setup, or automated SOAR workflows.
            Every integration is environment-aware and detection-focused.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IntegrationCard
              icon={Shield}
              title="MISP Integration"
              description="Connected MISP with SIEM and SOAR platforms for automatic IOC sharing, enrichment, and tagging within alerts."
              color="green"
            />
            <IntegrationCard
              icon={FileSearch}
              title="AbuseIPDB, OTX & VirusTotal"
              description="Integrated and normalized multiple threat sources for adaptive enrichment workflows tailored to client environments."
              color="blue"
            />
            <IntegrationCard
              icon={Server}
              title="Wazuh & ELK Intel Mapping"
              description="Configured Wazuh modules and ELK ingest pipelines to correlate events against MISP and AbuseIPDB intelligence."
              color="red"
            />
            <IntegrationCard
              icon={Radar}
              title="Feed Normalization Pipelines"
              description="Created automated processes for parsing STIX/TAXII and JSON feeds into normalized SIEM-ready formats."
              color="green"
            />
            <IntegrationCard
              icon={Cpu}
              title="Contextual Enrichment"
              description="Automated SOAR workflows trigger contextual enrichment based on alert metadata, risk score, and log source."
              color="blue"
            />
            <IntegrationCard
              icon={GitBranch}
              title="MITRE ATT&CK Alignment"
              description="Mapped all threat intel data with ATT&CK tactics, ensuring analysts can relate indicators to real adversary behavior."
              color="red"
            />
          </div>
        </div>
      </motion.section>

      {/* CUSTOM INTEGRATION SECTION */}
      <motion.section
        className="py-20 bg-slate-900 border-t border-slate-800 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-slate-50 mb-8">
            Tailored Intelligence, Mapped to Your SOC
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-12">
            Each organization’s network, business operations, and risk exposure are unique.
            <span className="text-slate-50 w-8 h-10">secure<span className="text-blue-500">N</span></span> aligns threat feeds to your SOC’s visibility layer — ensuring relevant,
            contextual intelligence instead of generic data overload.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueCard
              icon={WifiOff}
              title="Environment-Aware Feeds"
              description="Threat data tailored to your infrastructure, monitored assets, and industry vertical."
              color="green"
            />
            <ValueCard
              icon={Globe}
              title="Adaptive Detection Mapping"
              description="We align feeds and IOCs with your SIEM’s rule logic to improve correlation quality."
              color="blue"
            />
            <ValueCard
              icon={Lock}
              title="Custom Threat Models"
              description="Designing risk-specific threat models that help analysts prioritize incidents effectively."
              color="red"
            />
          </div>
        </div>
      </motion.section>

      {/* FLOATING CTA */}
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
const IntegrationCard = ({ icon: Icon, title, description, color }) => {
  const colorClass =
    color === "blue"
      ? "text-blue-500"
      : color === "red"
      ? "text-red-500"
      : "text-green-500";

  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/40 transition duration-300 shadow-lg hover:shadow-green-500/20">
      <Icon className={`w-10 h-10 mb-4 ${colorClass}`} />
      <h3 className="text-xl font-bold text-slate-50 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description, color }) => {
  const colorClass =
    color === "blue"
      ? "text-blue-500"
      : color === "red"
      ? "text-red-500"
      : "text-green-500";

  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/30 transition duration-300 shadow-lg hover:shadow-green-500/10">
      <Icon className={`w-10 h-10 mb-3 ${colorClass}`} />
      <h3 className="text-lg font-bold text-slate-50 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
};

export default ThreatIntel;
