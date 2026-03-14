import Layout from "@/components/Layout";
import { FadeIn, GlowLine, StaggerChildren, StaggerItem } from "@/components/AnimationWrappers";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Understanding Writ Jurisdiction Under Article 226",
    excerpt: "An analysis of the scope and limitations of High Court writ jurisdiction in matters of fundamental and legal rights.",
    date: "2025",
  },
  {
    title: "Evolution of Arbitration Law in India",
    excerpt: "Tracing the legislative and judicial developments in arbitration practice following the 2015 and 2019 amendments.",
    date: "2024",
  },
  {
    title: "Service Law: Recent Trends in Judicial Interpretation",
    excerpt: "A survey of landmark judgments affecting government employees and their implications for service jurisprudence.",
    date: "2024",
  },
];

const Publications = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-3">
                Writings
              </p>
              <h1 className="font-heading text-3xl md:text-4xl text-white">
                Publications
              </h1>
              <GlowLine delay={0.3} className="w-16 mx-auto mt-4" />
            </div>
          </FadeIn>

          <StaggerChildren className="space-y-6">
            {publications.map((pub) => (
              <StaggerItem key={pub.title}>
                <motion.article
                  className="card-hover border border-border p-8 bg-card group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-primary text-xs font-heading tracking-wider mb-2">{pub.date}</p>
                  <h3 className="font-heading text-white text-base tracking-wide mb-3 group-hover:text-primary transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {pub.excerpt}
                  </p>
                  <span className="text-primary text-xs font-heading tracking-[0.15em] uppercase group-hover:text-gold-light transition-colors duration-300">
                    Read More →
                  </span>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
