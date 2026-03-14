import Layout from "@/components/Layout"
import { FadeIn, GlowLine, StaggerChildren, StaggerItem } from "@/components/AnimationWrappers"
import { Landmark } from "lucide-react"
import { motion } from "framer-motion"

const courts = [
  { name: "Supreme Court of India", note: "Central Govt. Standing Counsel for the Union of India" },
  { name: "High Court", note: "Government Pleader for the Union of India" },
  {
    name: "Tribunals & Commissions",
    note: ["Central Government Standing Counsel for the Union of India in Armed Forces Tribunal (AFT).", "Central Government Standing Counsel for the Union of India in Central Administrative Tribunal (CAT)."],
  },
  { name: "District Courts", note: "Civil and criminal matters including NDPS, Enforcement Directorate(ED) matters, Cheque bounce cases, family law matters, consumer related matters and other local jurisdictional matters." },
]

const Courts = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-3">Jurisdiction</p>
              <h1 className="font-heading text-3xl md:text-4xl text-white">Courts of Practice</h1>
              <GlowLine delay={0.3} className="w-16 mx-auto mt-4" />
            </div>
          </FadeIn>

          <StaggerChildren className="space-y-0">
            {courts.map((court, i) => (
              <StaggerItem key={court.name}>
                <motion.div className={`flex items-center gap-6 py-8 group ${i < courts.length - 1 ? "border-b border-border" : ""}`} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                  <motion.div whileHover={{ rotate: 5 }} transition={{ duration: 0.3 }}>
                    <Landmark className="text-primary flex-shrink-0 group-hover:text-gold-light transition-colors duration-300" size={24} strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-white text-sm tracking-wider group-hover:text-primary transition-colors duration-300">{court.name}</h3>
                    <p className="text-muted-foreground text-xs mt-1">
                      {Array.isArray(court.note)
                        ? court.note.map((line, idx) => (
                            <>
                              {line}
                              {idx < court.note.length - 1 && <br />}
                            </>
                          ))
                        : court.note}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </Layout>
  )
}

export default Courts
