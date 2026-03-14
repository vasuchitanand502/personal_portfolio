import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Disclaimer = ({ onAgree }: { onAgree: () => void }) => {
  const [exiting, setExiting] = useState(false);

  const handleExit = () => {
    setExiting(true);
    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 500);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-xl w-full border border-border p-10 md:p-14 bg-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <motion.h1
                  className="font-heading text-primary text-xl tracking-[0.15em]"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  VA
                </motion.h1>
                <motion.div
                  className="h-[2px] bg-primary mx-auto mt-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ originX: 0.5, width: "4rem" }}
                />
              </div>
            </div>

            <h2 className="font-heading text-lg text-center text-white mb-6 tracking-wide">
              Disclaimer
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed text-center mb-10">
              As per the rules of the Bar Council of India, advocates are not permitted to
              solicit work or advertise. By clicking &lsquo;I Agree&rsquo;, you confirm that you are
              seeking information voluntarily and no solicitation has occurred. The content
              is for informational purposes only and does not constitute legal advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={onAgree}
                className="btn-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                I Agree
              </motion.button>
              <motion.button
                onClick={handleExit}
                className="btn-outline-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Exit
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Disclaimer;
