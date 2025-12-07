import React from "react";
import { motion } from "framer-motion";

const flowSteps = [
  {
    id: 1,
    title: "Endpoint Logs",
    text: "🖥️ Endpoints (Windows, Mac, Linux) send system and security logs directly to the SIEM for analysis and correlation.",
    color: "text-green-400",
    lineColor: "#22c55e",
  },
  {
    id: 2,
    title: "Network Devices & Syslog",
    text: "🌐 Firewalls, routers, and switches forward logs to the Syslog Server, which normalizes and relays them to the SIEM.",
    color: "text-blue-400",
    lineColor: "#3b82f6",
  },
  {
    id: 3,
    title: "EDR, XDR & Mail Servers",
    text: "🧠 EDR, XDR, and mail gateways continuously feed telemetry into the SIEM for endpoint and email visibility.",
    color: "text-red-400",
    lineColor: "#ef4444",
  },
  {
    id: 4,
    title: "Threat Intelligence",
    text: "🕵️ The SIEM enriches events using global Threat Intelligence feeds — correlating IOCs, CVEs, and attack TTPs.",
    color: "text-green-400",
    lineColor: "#22c55e",
  },
  {
    id: 5,
    title: "Case Management & Response",
    text: "📂 Alerts are escalated to TheHive or DFIR-IRIS for triage, investigation, and evidence tracking.",
    color: "text-blue-400",
    lineColor: "#3b82f6",
  },
  {
    id: 6,
    title: "SOAR & Continuous Tuning",
    text: "⚙️ SOAR executes automated playbooks while analysts refine rules for ongoing accuracy and efficiency.",
    color: "text-red-400",
    lineColor: "#ef4444",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const SOCVideoSection = () => {
  return (
    <section className="py-28 bg-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-extrabold text-green-500 mb-6">
          SOC Architecture Flow Visualization
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-16">
          Visualize the flow of telemetry and intelligence across your SOC —
          from endpoints and network devices to automation and response.
        </p>

        {/* Layout with fixed connectors */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* SVG Connector Layer */}
          <svg
            // className="absolute inset-0 w-full h-full pointer-events-none"
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <style>
                {`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                `}
              </style>
            </defs>

            {/* LEFT SIDE CURVES */}
            <path
              d="M 160 100 C 360 160, 460 200, 500 220"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 6"
              strokeDashoffset="1000"
              filter="url(#glow)"
              style={{ animation: "dash 8s linear infinite" }}
            />
            <path
              d="M 160 260 C 360 260, 460 280, 500 300"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 6"
              strokeDashoffset="1000"
              filter="url(#glow)"
              style={{ animation: "dash 8s linear infinite 2s" }}
            />
            {/* FIXED red curve: smoother lower connection */}
            <path
              d="M 160 460 C 360 420, 460 420, 500 420"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 6"
              strokeDashoffset="1000"
              filter="url(#glow)"
              style={{ animation: 'dash 8s linear infinite 4s' }}
            />

            {/* RIGHT SIDE CURVES */}
            <path
              d="M 840 100 C 640 160, 540 200, 500 220"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 6"
              strokeDashoffset="1000"
              filter="url(#glow)"
              style={{ animation: "dash 8s linear infinite 1s" }}
            />
            <path
              d="M 840 260 C 640 260, 540 280, 500 300"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 6"
              strokeDashoffset="1000"
              filter="url(#glow)"
              style={{ animation: "dash 8s linear infinite 3s" }}
            />
            {/* FIXED right red curve: cleaner and symmetric */}
            <path
              d="M 840 460 C 640 420, 540 420, 500 420"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 6"
              strokeDashoffset="1000"
              filter="url(#glow)"
              style={{ animation: 'dash 8s linear infinite 5s' }}
            />
          </svg>

          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-6 w-full max-w-[220px] z-10">
            {flowSteps.slice(0, 3).map((step, i) => (
              <DialogueBox key={step.id} step={step} i={i} />
            ))}
          </div>

          {/* CENTER VIDEO */}
          <div className="relative flex justify-center w-full max-w-3xl z-20">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-green-500/10">
              <video
                src="/videos/SOC-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto rounded-2xl"
                style={{
                  aspectRatio: "16 / 9",
                  backgroundColor: "#0f172a",
                }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col space-y-6 w-full max-w-[220px] z-10">
            {flowSteps.slice(3, 6).map((step, i) => (
              <DialogueBox key={step.id} step={step} i={i + 3} />
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        {/* <div className="lg:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {flowSteps.map((step, i) => (
            <DialogueBox key={step.id} step={step} i={i} />
          ))}
        </div> */}

        <p className="text-slate-500 text-sm mt-20">
          Building the Future of Cyber Defense — Powered by Open Source, Automation, and Human Expertise.
        </p>
      </div>
    </section>
  );
};

const DialogueBox = ({ step, i }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={i}
    className="bg-slate-800/80 border border-slate-700 rounded-lg shadow-md shadow-green-500/20 p-3 text-left w-full backdrop-blur-sm hover:border-green-500/40 transition duration-300"
  >
    <h3 className={`text-sm font-semibold mb-1 ${step.color}`}>
      {step.title}
    </h3>
    <p className="text-slate-300 text-xs leading-relaxed">{step.text}</p>
  </motion.div>
);

export default SOCVideoSection;
