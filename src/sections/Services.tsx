import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, FileCheck, Wallet, Home, HeartPulse, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const services = [
  {
    icon: BookOpen,
    title: 'Free Consultation & Profile Assessment',
    description: 'Receive expert guidance to match your career goals with the right international study programmes',
  },
  {
    icon: GraduationCap,
    title: 'Prepare for Tests & Applications',
    description: 'Get support to ace your English language test and craft a strong Statement of Purpose.',
  },
  {
    icon: GraduationCap,
    title: 'University & Course Selection',
    description: 'Navigate the enrolment process with ease as we manage your applications to global institutions',
  },
  {
    icon: Wallet,
    title: 'Scholarship & Financial Aid Guidance',
    description: 'Identify and apply for financial aid opportunities to make your international education more affordable',
  },
  {
    icon: FileCheck,
    title: 'Visa & Beyond',
    description: 'Prepare confidently for your visa interview and take the first step towards your international future.',
  },
]

const destinations = [
  'Australia',
  'United Kingdom',
  'Canada',
  'USA',
  'New Zealand',
  'Japan',
  'South Korea',
  'Other',
]

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-blue to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Next Steps to Studying Abroad
            </h2>
            <p className="text-white/80 mb-10 leading-relaxed">
              Unlock a world of global opportunities, personal growth, and career success with a study experience beyond borders. The investment you make today pays off tomorrow with job prospects and extended visa options.
            </p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                    Book Your <span className="text-brand-blue">FREE Consultation</span> Call with Our Certified Counsellors
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full h-12 rounded-lg border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Email ID*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full h-12 rounded-lg border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="w-20 flex-shrink-0">
                        <div className="h-12 px-3 rounded-lg border border-gray-200 flex items-center bg-gray-50 text-gray-600 text-sm">
                          +977
                        </div>
                      </div>
                      <Input
                        type="tel"
                        placeholder="Mobile Number*"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="flex-1 h-12 rounded-lg border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        required
                        className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white text-gray-600 focus:border-brand-blue focus:ring-brand-blue"
                      >
                        <option value="">Destination*</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-cta-teal focus:ring-cta-teal mt-0.5"
                      />
                      <label htmlFor="agree" className="text-sm text-gray-600">
                        I agree to Brightway's <a href="#" className="text-brand-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-brand-blue hover:underline">Terms & Conditions</a> *
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={!agreed || isSubmitting}
                      className="w-full bg-cta-teal hover:bg-cta-teal-dark text-white h-12 rounded-full font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Book a FREE Consultation
                          <ChevronRight className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
