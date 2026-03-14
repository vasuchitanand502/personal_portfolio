import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import FloatingActions from "./FloatingActions"
import { motion } from "framer-motion"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main className="flex-1 pt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {children}
      </motion.main>
      <FloatingActions />
      <Footer />
    </div>
  )
}

export default Layout
