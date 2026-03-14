import { Link } from "react-router-dom"
import Layout from "@/components/Layout"
import { FadeIn, ScaleIn, SlideReveal, GlowLine, StaggerChildren, StaggerItem } from "@/components/AnimationWrappers"
import { motion } from "framer-motion"
import { Scale, Shield, Landmark, BookOpen, Handshake, FileText } from "lucide-react"

const practiceAreas = [
  { icon: Scale, title: "Civil Law", desc: "Comprehensive civil litigation and dispute resolution." },
  { icon: Shield, title: "Criminal Law", desc: "Defence and representation in criminal proceedings." },
  { icon: Landmark, title: "Constitutional Matters", desc: "Writ petitions and fundamental rights advocacy." },
  { icon: BookOpen, title: "Service Law", desc: "Matters relating to government service and employment." },
  { icon: Handshake, title: "Arbitration", desc: "Alternative dispute resolution and arbitration proceedings." },
  { icon: FileText, title: "Tribunals", desc: "Representation before various tribunals and commissions." },
]

const HomePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Subtle background glow */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SlideReveal delay={0.2}>
                <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-4">Advocate</p>
              </SlideReveal>
              <FadeIn delay={0.4}>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-2 break-words">
                  Vasuchit
                  <br />
                  <span className="text-primary">Anand</span>
                </h1>
              </FadeIn>
              <GlowLine delay={0.7} className="w-20 mb-6" />
              <FadeIn delay={0.7}>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md font-body">Engaged in legal practice before the Hon’ble Supreme Court, High Courts, Tribunals, and subordinate courts, with a strong commitment to integrity, diligence, and the highest standards of the legal profession.</p>
              </FadeIn>
              <FadeIn delay={0.9}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
                  <Link to="/about" className="btn-gold inline-block w-full sm:w-auto text-center">
                    Learn More
                  </Link>
                  <Link to="/contact" className="btn-outline-gold inline-block w-full sm:w-auto text-center">
                    Contact
                  </Link>
                </div>
              </FadeIn>
            </div>

            <ScaleIn delay={0.5}>
              <div className="relative">
                <div className="aspect-[3/4] max-w-sm mx-auto bg-secondary flex items-center justify-center">
                  <div className="text-center w-full h-full flex items-center justify-center">
                    <motion.div className="w-11/12 h-11/12 sm:w-10/12 sm:h-11/12 mx-auto mb-0 rounded-md overflow-hidden border border-primary/10 flex items-center justify-center" animate={{ borderColor: ["hsl(var(--gold) / 0.15)", "hsl(var(--gold) / 0.3)", "hsl(var(--gold) / 0.15)"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                      <img src="/images/contact-photo.jpg" alt="Vasuchit Anand" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                </div>
                {/* Decorative corners */}
                <motion.div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-primary/30" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.8 }} />
                <motion.div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-primary/30" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1 }} />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-navy-deep">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-3">Areas of Practice</p>
              <h2 className="font-heading text-2xl md:text-3xl text-white">Legal Expertise</h2>
              <GlowLine delay={0.3} className="w-16 mx-auto mt-4" />
            </div>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <StaggerItem key={area.title}>
                <Link to="/practice-areas" className="card-hover block border border-border p-8 bg-card group">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <area.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-heading text-white text-sm tracking-wider mb-2 group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
