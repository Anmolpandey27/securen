import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  GitCommit,
  Search,
  Briefcase,
  BarChart3,
  Cpu,
  Target,
  Layers,
  BookOpen,
  Wrench,
  Users,
  Workflow,
  Cloud,
  Server,
  Network,
  Lock,
} from "lucide-react";
import AccentButton from "../../components/AccentButton";
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

const Services = ({ navigate }) => {
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
            Comprehensive <span className="text-blue-500">Security Services</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto">
            <span className="text-slate-50 w-8 h-10 mr-2">secure<span className="text-blue-500">N</span></span>provides end-to-end solutions for building, operating, and
            maturing open-source-based SOC environments — covering{" "}
            <strong>SOC engineering</strong>,{" "}
            <strong>security assessments</strong>,{" "}
            <strong>solution integration</strong>, and{" "}
            <strong>analyst enablement</strong>.
          </p>
        </div>
      </motion.section>

      {/* SOC IMPLEMENTATION */}
      <motion.section
        className="py-16 bg-slate-900 border-b border-slate-800"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-green-500 mb-10 text-center">
            1. SOC Implementation & Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Cpu}
              title="Custom SOC Architecture"
              description="We design and implement SOC environments built on proven open-source technologies, including SIEM, SOAR, and case management tools."
              colorClass="text-green-500"
            />
            <FeatureCard
              icon={Layers}
              title="SIEM & SOAR Integration"
              description="End-to-end integration of Wazuh, ELK, and Shuffle SOAR platforms for seamless event correlation, alert management, and automation."
              colorClass="text-blue-500"
            />
            <FeatureCard
              icon={Target}
              title="SOC Optimization"
              description="We fine-tune detection rules, optimize dashboards, and streamline log pipelines to enhance detection quality and performance."
              colorClass="text-red-500"
            />
          </div>
        </div>
      </motion.section>

      {/* SECURITY ASSESSMENTS */}
      <motion.section
        className="py-16 bg-slate-950 border-b border-slate-800"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
            2. Security Assessments & Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Search}
              title="Vulnerability Assessment"
              description="Comprehensive network, system, and application-level vulnerability assessments using tools like OpenVAS and Nmap."
              colorClass="text-green-500"
            />
            <FeatureCard
              icon={Briefcase}
              title="Penetration Testing"
              description="Vulnerability Assessment and penetration testing to evaluate the real-world exposure and resilience of your infrastructure."
              colorClass="text-red-500"
            />
            <FeatureCard
              icon={BarChart3}
              title="Secure Code Review"
              description="Manual and automated code analysis for security flaws, logical issues, and insecure design patterns in applications."
              colorClass="text-blue-500"
            />
          </div>
        </div>
      </motion.section>

      {/* SOLUTION IMPLEMENTATION */}
      <motion.section
        className="py-16 bg-slate-900 border-b border-slate-800"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
            3. Security Solution Implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wrench}
              title="Tool Deployment & Integration"
              description="We deploy and integrate open-source tools like Wazuh, Zeek, Suricata, Graylog, and TheHive into your SOC ecosystem."
              colorClass="text-green-500"
            />
            <FeatureCard
              icon={Workflow}
              title="Automation & Playbooks"
              description="Developing SOAR playbooks, correlation rules, and workflow automation for faster and smarter response handling."
              colorClass="text-blue-500"
            />
            <FeatureCard
              icon={Cloud}
              title="Cloud Security Integration"
              description="Implementing hybrid and multi-cloud monitoring with native log pipelines for AWS, Azure, and on-prem environments."
              colorClass="text-red-500"
            />
          </div>
        </div>
      </motion.section>

      {/* TRAINING */}
      <motion.section
        className="py-16 bg-slate-950"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-10">
            4. SOC Training & Analyst Enablement
          </h2>
          <p className="max-w-4xl mx-auto text-slate-400 mb-10">
            Our training programs focus on empowering analysts with hands-on
            experience in monitoring, correlation, and threat detection using
            open-source SOC platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="SOC Analyst Training"
              description="Custom L1–L3 analyst training focused on real-world detection, incident triage, and response playbooks."
              colorClass="text-green-500"
            />
            <FeatureCard
              icon={Users}
              title="Incident Response Workshops"
              description="Scenario-based simulations and tabletop exercises to strengthen incident response readiness."
              colorClass="text-blue-500"
            />
            <FeatureCard
              icon={GitCommit}
              title="Correlation & Detection Mastery"
              description="Workshops on SIEM rule creation, tuning, and threat-hunting techniques across different log sources."
              colorClass="text-red-500"
            />
          </div>
        </div>
      </motion.section>

      {/* CAPABILITIES */}
      <motion.section
        className="py-20 bg-slate-900 border-t border-slate-800 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-slate-50 mb-8">
            Implementation Expertise & Real-World Capabilities
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-12">
            <span className="text-slate-50 w-8 h-10">secure<span className="text-blue-500">N</span></span>’s expertise lies in integrating open-source technologies to
            build reliable, high-performing SOC environments tailored for
            organizations of all sizes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CapabilityCard
              icon={Server}
              title="Modular SOC Architecture"
              description="We have extensive experience in building modular SOC environments using Wazuh, Zeek, and ELK Stack for unified monitoring and alerting."
              tag="SOC Engineering"
              color="green"
            />
            <CapabilityCard
              icon={Network}
              title="Hybrid Cloud Integration"
              description="Designing hybrid visibility solutions integrating on-prem devices with cloud-native logs from AWS, Azure, and GCP environments."
              tag="SIEM | Cloud"
              color="blue"
            />
            <CapabilityCard
              icon={Lock}
              title="Vulnerability & Threat Management"
              description="Configuring and automating OpenVAS, TheHive, and Shuffle SOAR for vulnerability tracking and coordinated incident workflows."
              tag="VA | SOAR"
              color="red"
            />
          </div>
        </div>
      </motion.section>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
        onClick={() => navigate("contact")}
        className="fixed bottom-6 right-6 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg z-50 animate-pulse-slow"
      >
        Book Your Consultation
      </button>
      </div>
    </div>
  );
};

/* SUBCOMPONENT */
const CapabilityCard = ({ icon: Icon, title, description, tag, color }) => {
  const colorClass =
    color === "blue"
      ? "text-blue-500"
      : color === "red"
      ? "text-red-500"
      : "text-green-500";

  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/40 transition duration-300 shadow-lg hover:shadow-green-500/20">
      <Icon className={`w-10 h-10 mx-auto mb-4 ${colorClass}`} />
      <h3 className="text-xl font-bold text-slate-50 mb-3">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <span className="text-xs px-3 py-1 bg-slate-700 text-slate-300 rounded-full font-medium">
        {tag}
      </span>
    </div>
  );
};

export default Services;
