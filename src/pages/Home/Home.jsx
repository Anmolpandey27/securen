import React from "react";
import { motion } from "framer-motion";
import AccentButton from "../../components/AccentButton";
import USPItem from "../../components/USPItem";
import {
  Shield,
  Layers,
  BarChart3,
  Target,
  Cpu,
  GitCommit,
  Zap,
  Lock,
  Eye,
  Code,
  Cloud,
  FileSearch,
  AlertTriangle,
  Workflow,
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

const Home = ({ navigate }) => {
  const trustedTools = [
    { src: "/images/wazuh.png", name: "Wazuh" },
    { src: "/images/elasticsearch.jpg", name: "Elasticsearch" },
    { src: "/images/suricata.jpg", name: "Suricata" },
    { src: "/images/osquery.png", name: "Osquery" },
    { src: "/images/openvas.png", name: "OpenVAS" },
    { src: "/images/zeek.png", name: "Zeek" },
    { src: "/images/graylog.jpg", name: "Graylog" },
    { src: "/images/TheHive.jpeg", name: "TheHive" },
    { src: "/images/Misp.png", name: "MISP" },
    { src: "/images/nxlog.png", name: "nxlog" },
    { src: "/images/shuffle.png", name: "Shuffle" },
    { src: "/images/iris_blackDark.png", name: "DFIR-IRIS" },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-slate-900 text-slate-200">
      {/* HERO */}
      <motion.section
        className="relative flex items-center justify-center pt-10 pb-16 text-center md:text-left bg-slate-900"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="md:w-3/5 lg:w-1/2">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              <span className="text-green-500">Cyber Resilience</span> through
              Open-Source Innovation.
            </h1>
            <p className="mt-4 text-xl text-slate-400">
              We specialize in building and managing customized SOC ecosystems
              using open-source technologies — delivering SIEM, SOAR, and threat
              detection solutions that empower organizations with full visibility
              and control.
            </p>
            <div className="flex flex-col items-center mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
              <AccentButton onClick={() => navigate("contact")}>
                Start Your Consultation
              </AccentButton>
              <AccentButton color="blue" onClick={() => navigate("services")}>
                Explore Services
              </AccentButton>
            </div>
          </div>

          {/* <motion.div className="relative justify-center hidden mt-10 md:w-2/5 lg:w-1/2 md:flex md:mt-0">
            <div className="relative p-10 bg-blue-900/20 rounded-full w-72 h-72 md:w-96 md:h-96 flex items-center justify-center border-4 border-blue-500 animate-pulse-slow">
              <Shield className="w-24 h-24 text-blue-500 opacity-80" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))' }} />
              <div className="absolute top-5 right-5 w-4 h-4 bg-green-500 rounded-full animate-ping-slow"></div>
              <div className="absolute bottom-5 left-5 w-6 h-6 bg-red-500 rounded-full animate-spin-slow"></div>
            </div>
          </motion.div> */}

          <motion.div className="relative justify-center hidden mt-10 md:w-2/5 lg:w-1/2 md:flex md:mt-0">
            <div className="relative p-4 bg-blue-900/20 rounded-full w-72 h-72 md:w-[28rem] md:h-[28rem] flex items-center justify-center border-4 border-blue-500 animate-pulse-slow">
            <video
              src="./videos/gif.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-full"
            />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WHO WE ARE */}
      <motion.section
        className="py-16 bg-slate-950 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-50">
            Who We Are
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            <strong><span className="text-slate-50 w-8 h-10 mr-2">secure<span className="text-blue-500">N</span></span></strong> is a cybersecurity engineering firm
            focused on open-source-driven SOC implementation, tool integration,
            and analyst enablement.  
            We combine practical expertise and community innovation to help
            organizations build, manage, and scale their own Security Operations Centers.
          </p>
        </div>
      </motion.section>

      {/* TRUSTED TOOLS */}
      <motion.section
        className="py-10 bg-slate-900 border-t border-slate-800 text-center relative overflow-hidden"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="mb-8 text-2xl font-bold text-slate-50">
          Trusted Open-Source Technologies We Integrate
        </h3>
        <p className="text-slate-400 mb-10 text-base max-w-4xl mx-auto">
          Our solutions are built on the world’s most trusted open-source
          technologies — integrating SIEM, SOAR, EDR, case management, and
          threat intelligence for unified, cost-efficient SOC operations.
        </p>

        <div className="w-full overflow-x-hidden">
          <div className="flex whitespace-nowrap animate-scroll-slow">
            {[...trustedTools, ...trustedTools].map((tool, index) => (
              <div
                key={index}
                className="mx-8 flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition duration-300"
              >
                <img
                  src={tool.src}
                  alt={tool.name}
                  loading="lazy"
                  className="h-12 mb-3 grayscale-0 hover:grayscale-0 transition"
                />
                <span className="text-sm text-slate-80">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-slow {
            display: inline-flex;
            animation: scroll-slow 30s linear infinite;
          }
          .animate-scroll-slow:hover {
            animation-play-state: paused;
          }
        `}</style>
      </motion.section>

      {/* CORE EXPERTISE & VISION */}
      <motion.section
        className="py-16 bg-slate-900"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-extrabold text-center text-slate-50">
            Our <span className="text-green-500">Core Expertise</span> & Vision
          </h2>
          <p className="max-w-4xl mx-auto text-slate-400 text-center mb-12">
            We help organizations establish and mature their cybersecurity
            infrastructure through open-source SOC engineering, security
            assessments, and operational training.  
            Our vision is to become a leader in <span className="mt-4 text-xl text-slate-50">Open-Source SOC product development</span>, enabling
            enterprises to manage, monitor, and defend with complete transparency.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <USPItem
              icon={Layers}
              title="Open-Source SOC Engineering"
              description="End-to-end design and integration of SOC components — including SIEM, SOAR, case management, and threat intel platforms."
              color="green"
            />
            <USPItem
              icon={BarChart3}
              title="Security Assessment & Solutions"
              description="Delivering advanced vulnerability assessments, secure code reviews, and customized solution implementation for complete security coverage."
              color="blue"
            />
            <USPItem
              icon={Target}
              title="SOC Training & Enablement"
              description="Training SOC analysts on monitoring, correlation, and investigation techniques using open-source platforms like Wazuh, TheHive, and ELK."
              color="red"
            />
          </div>
        </div>
      </motion.section>

      {/* SECURITY STACK EXPERTISE */}
      <motion.section
        className="py-16 bg-slate-950 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-slate-50 mb-8">
          Our Security Stack Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ExpertiseCard icon={Cpu} title="SIEM & Log Management" text="Design and deployment of Wazuh, ELK, and Graylog for centralized event correlation and analytics." />
          <ExpertiseCard icon={GitCommit} title="SOAR & Case Management" text="Automating alert triage and incident workflows using Shuffle, TheHive, and Cortex." />
          <ExpertiseCard icon={Zap} title="Threat Intelligence Integration" text="Building threat feeds, Sigma rules, and IOC pipelines with MISP and custom APIs." />
          <ExpertiseCard icon={Lock} title="Endpoint Detection & Response" text="Agent-based and agentless telemetry using Wazuh agents, Osquery, and Sysmon." />
          <ExpertiseCard icon={FileSearch} title="Vulnerability Assessment" text="Comprehensive infrastructure, application, and network testing via OpenVAS and Nmap." />
          <ExpertiseCard icon={Code} title="Secure Code Review" text="Source code and dependency scanning to identify logic flaws and insecure patterns." />
          <ExpertiseCard icon={Cloud} title="Cloud Security & SIEM Integration" text="Deployment of hybrid cloud monitoring and logging pipelines for AWS, Azure, and GCP." />
          <ExpertiseCard icon={Workflow} title="DevSecOps Integration" text="Incorporating automated SAST/DAST scanning and compliance checks into CI/CD pipelines." />
          <ExpertiseCard icon={AlertTriangle} title="Governance & Compliance" text="Mapping controls to frameworks like ISO 27001, NIST, and GDPR for audit readiness." />
        </div>
      </motion.section>

      {/* PHILOSOPHY */}
      <motion.section
        className="py-16 bg-slate-900 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-slate-50 mb-4">
          Our Philosophy
        </h2>
        <p className="max-w-4xl mx-auto text-xl text-slate-400 leading-relaxed">
          We believe cybersecurity must be <span className="mt-4 text-xl text-slate-50">Transparent, Collaborative, and Open-Source</span>.  
          We bridges innovation and accessibility — delivering scalable, cost-effective SOC solutions that empower teams to defend with independence and confidence.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-16 bg-blue-900/20 text-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-4xl font-extrabold text-blue-400">
          Ready to Build Your Cyber Defense?
        </h2>
        <p className="mb-8 text-xl text-slate-300">
          Schedule a free 30-minute discovery session with our lead architect.
        </p>
        <button
          onClick={() => navigate("contact")}
          className="px-8 py-4 font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-xl transition duration-300 hover:scale-[1.05]"
        >
          Book Your Consultation
        </button>
      </motion.section>

      {/* FLOATING CTA */}
      <button
        onClick={() => navigate("contact")}
        className="fixed bottom-10 right-6 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg z-50 animate-pulse-slow"
      >
        Book Your Consultation
      </button>
    </div>
  );
};

/* SUB-COMPONENTS */
const ExpertiseCard = ({ icon: Icon, title, text }) => (
  <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/50 transition">
    <Icon className="w-10 h-10 mx-auto mb-3 text-green-500" />
    <h3 className="text-xl font-bold text-slate-50 mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{text}</p>
  </div>
);

export default Home;
