import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-primary text-lg tracking-[0.1em] mb-2">VA</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Advocate Vasuchit Anand
            </p>
            <motion.div
              className="h-[2px] bg-primary mt-3"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ originX: 0, width: "4rem" }}
            />
          </div>

          <div>
            <h4 className="font-heading text-white text-xs tracking-[0.15em] uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-white/50 text-sm hover:text-primary transition-colors duration-300">About</Link>
              <Link to="/practice-areas" className="text-white/50 text-sm hover:text-primary transition-colors duration-300">Practice Areas</Link>
              <Link to="/contact" className="text-white/50 text-sm hover:text-primary transition-colors duration-300">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white text-xs tracking-[0.15em] uppercase mb-4">
              Disclaimer
            </h4>
            <p className="text-white/40 text-xs leading-relaxed">
              This website is for informational purposes only. Nothing on this site constitutes
              legal advice or creates an advocate-client relationship.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Advocate Vasuchit Anand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
