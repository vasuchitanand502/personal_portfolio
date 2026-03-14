import { useState } from "react";
import Layout from "@/components/Layout";
import { FadeIn, GlowLine, StaggerChildren, StaggerItem } from "@/components/AnimationWrappers";
import { Scale, Shield, Landmark, BookOpen, Handshake, FileText, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const areas = [
  {
    icon: Scale,
    title: "Civil Law",
    desc: "Comprehensive civil litigation and dispute resolution.",
    detail: "Handling matters related to property disputes, contractual obligations, recovery suits, injunctions, declaratory suits, and partition matters before civil courts at all levels.",
  },
  {
    icon: Shield,
    title: "Criminal Law",
    desc: "Defence and representation in criminal proceedings.",
    detail: "Representation in matters ranging from bail applications, quashing petitions, and trial proceedings to appeals before the High Court in criminal matters.",
  },
  {
    icon: BookOpen,
    title: "Service Law",
    desc: "Matters relating to government service and employment.",
    detail: "Handling service disputes including promotions, seniority, disciplinary proceedings, pension matters, and compassionate appointments before courts and tribunals.",
  },
  {
    icon: Landmark,
    title: "Constitutional Matters",
    desc: "Writ petitions and fundamental rights advocacy.",
    detail: "Filing and arguing writ petitions under Articles 226 and 32 of the Constitution of India for enforcement of fundamental and legal rights.",
  },
  {
    icon: Handshake,
    title: "Arbitration",
    desc: "Alternative dispute resolution and arbitration proceedings.",
    detail: "Representation in domestic arbitration proceedings, applications under Sections 9, 11, 34, and 36 of the Arbitration and Conciliation Act, 1996.",
  },
  {
    icon: FileText,
    title: "Tribunals",
    desc: "Representation before various tribunals and commissions.",
    detail: "Appearances before the Central Administrative Tribunal, National Green Tribunal, Consumer Forums, and other quasi-judicial bodies.",
  },
];

const PracticeAreas = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-3">
                Expertise
              </p>
              <h1 className="font-heading text-3xl md:text-4xl text-white">
                Practice Areas
              </h1>
              <GlowLine delay={0.3} className="w-16 mx-auto mt-4" />
            </div>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {areas.map((area) => (
              <StaggerItem key={area.title}>
                <motion.button
                  onClick={() => setExpanded(expanded === area.title ? null : area.title)}
                  className="card-hover w-full text-left border border-border p-8 bg-card group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <area.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-heading text-white text-sm tracking-wider mb-2 group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {area.desc}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-xs">
                    <span>Details</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${expanded === area.title ? "rotate-180" : ""}`}
                    />
                  </div>
                  <AnimatePresence>
                    {expanded === area.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground text-xs leading-relaxed mt-4 pt-4 border-t border-border">
                          {area.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
