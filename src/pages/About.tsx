import Layout from "@/components/Layout"
import { FadeIn, SlideReveal, GlowLine, ScaleIn } from "@/components/AnimationWrappers"
import { motion } from "framer-motion"

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-3">About</p>
              <h1 className="font-heading text-3xl md:text-4xl text-white">Advocate Vasuchit Anand</h1>
              <GlowLine delay={0.3} className="w-16 mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <ScaleIn>
              <div className="relative">
                <div className="aspect-[3/4] bg-secondary flex items-center justify-center">
                  <div className="text-center w-full h-full flex items-center justify-center">
                    <motion.div className="w-11/12 h-11/12 sm:w-10/12 sm:h-11/12 mx-auto mb-0 rounded-md overflow-hidden border border-primary/10 flex items-center justify-center" animate={{ borderColor: ["hsl(var(--gold) / 0.15)", "hsl(var(--gold) / 0.3)", "hsl(var(--gold) / 0.15)"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                      <img src="/images/contact-photo.jpg" alt="Vasuchit Anand" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                </div>
                <motion.div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-primary/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
                <motion.div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-primary/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
              </div>
            </ScaleIn>

            <div className="space-y-8">
              <SlideReveal delay={0.2}>
                <div>
                  <h3 className="font-heading text-primary text-xs tracking-[0.2em] uppercase mb-3">Enrollment Details</h3>
                  <p className="text-white/80 text-sm">Bar Council of Delhi</p>
                  <p className="text-white/80 text-sm">Bar Council of India</p>
                </div>
              </SlideReveal>

              <SlideReveal delay={0.3}>
                <div>
                  <h3 className="font-heading text-primary text-xs tracking-[0.2em] uppercase mb-3">Education</h3>
                  <p className="text-white/70 text-sm leading-relaxed">B.B.A. LL.B. (Hons.) — Uttranchal University (Law College, Dehradun)</p>
                  <p className="text-white/70 text-sm leading-relaxed">Specialization in Constitutional Law</p>
                </div>
              </SlideReveal>

              <FadeIn delay={0.4}>
                <div>
                  <h3 className="font-heading text-primary text-xs tracking-[0.2em] uppercase mb-3">Professional Background</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">With years of dedicated practice before the Supreme Court of India, various High Courts, and specialized tribunals—including the Armed Forces Tribunal, Central Administrative Tribunal, National Company Law Tribunal (NCLT), and other subordinate courts—Advocate Vasuchit Anand has developed a comprehensive and nuanced understanding of diverse branches of law.</p>

                  <p className="text-muted-foreground text-sm leading-relaxed">He presently serves as Central Government Standing Counsel for the Union of India before the Supreme Court of India. He is also appointed as Central Government Standing Counsel for the Union of India before the Armed Forces Tribunal and the Central Administrative Tribunal, and as Government Pleader for the Union of India before the Delhi High Court.</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">His practice is firmly grounded in the principles of integrity, diligence, professionalism, and an unwavering commitment to the rule of law.</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div>
                  <h3 className="font-heading text-primary text-xs tracking-[0.2em] uppercase mb-3">Professional Philosophy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Every matter is approached with meticulous preparation, ethical conduct, and a steadfast commitment to the client&apos;s lawful interests. The practice upholds the highest standards of the legal profession as envisioned by the Bar Council of India.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
