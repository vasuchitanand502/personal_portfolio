import { useState } from "react"
import Layout from "@/components/Layout"
import { FadeIn, GlowLine, SlideReveal } from "@/components/AnimationWrappers"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contactInfo"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your inquiry. We will respond shortly.")
  }

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-3">Get in Touch</p>
              <h1 className="font-heading text-3xl md:text-4xl text-white">Contact</h1>
              <GlowLine delay={0.3} className="w-16 mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {[
                  {
                    Icon: MapPin,
                    title: "Office Address",
                    content: (
                      <>
                        A6, A7, Ramphal Chowk, Dwarka, Sector 7, near SBI Bank
                        <br />
                        New Delhi — 110075
                      </>
                    ),
                  },
                  { Icon: Mail, title: "Email", content: CONTACT_EMAIL },
                  { Icon: Phone, title: "Phone", content: CONTACT_PHONE },
                  {
                    Icon: Clock,
                    title: "Office Hours",
                    content: (
                      <>
                        Monday – Saturday: 10:00 AM – 6:00 PM
                        <br />
                        Sunday: Closed
                      </>
                    ),
                  },
                ].map(({ Icon, title, content }) => (
                  <motion.div key={title} className="flex items-start gap-4 group" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                    <Icon className="text-primary mt-1 flex-shrink-0 group-hover:text-gold-light transition-colors duration-300" size={18} strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading text-white text-xs tracking-[0.15em] uppercase mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <SlideReveal delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Name", type: "text", placeholder: "Your full name", key: "name" as const, required: true },
                  { label: "Email", type: "email", placeholder: "your@email.com", key: "email" as const, required: true },
                  { label: "Phone", type: "tel", placeholder: "+91", key: "phone" as const, required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-white text-xs font-heading tracking-[0.1em] uppercase block mb-2">{field.label}</label>
                    <input type={field.type} required={field.required} className="input-underline w-full" placeholder={field.placeholder} value={formData[field.key]} onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })} />
                  </div>
                ))}
                <div>
                  <label className="text-white text-xs font-heading tracking-[0.1em] uppercase block mb-2">Message</label>
                  <textarea required rows={4} className="input-underline w-full resize-none" placeholder="Brief description of your matter" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <motion.button type="submit" className="btn-gold w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Submit Inquiry
                </motion.button>

                <p className="text-muted-foreground text-xs leading-relaxed mt-4">Submission of this form does not create an advocate-client relationship.</p>
              </form>
            </SlideReveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
