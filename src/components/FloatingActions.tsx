import { Phone, Mail, MessageCircle } from "lucide-react"
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contactInfo"

const sanitizedNumber = CONTACT_PHONE.replace(/[^\d+]/g, "")

const FloatingActions = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a href={`https://wa.me/${sanitizedNumber}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors" title="Chat on WhatsApp">
        <MessageCircle className="text-white" size={20} />
      </a>
      {/* Phone */}
      <a href={`tel:${sanitizedNumber}`} className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center shadow-lg hover:bg-gold transition-colors" title="Call us">
        <Phone className="text-white" size={20} />
      </a>
      {/* Email */}
      <a href={`mailto:${CONTACT_EMAIL}`} className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors" title="Send an email">
        <Mail className="text-white" size={20} />
      </a>
    </div>
  )
}

export default FloatingActions
