import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  FileCheck,
  Wallet,
  ChevronRight,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  ClipboardList,
  MessageSquare,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
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

const destinations: string[] = [
  'Australia',
  'United Kingdom',
  'Canada',
  'USA',
  'New Zealand',
  'Japan',
  'South Korea',
  'Other',
]

const degrees: string[] = [
  'Bachelor',
  'Master',
  'PhD',
  'Diploma',
  'Foundation',
]

const testpreps: string[] = [
  'IELTS',
  'PTE',
  'TOEFL',
  'NAT',
  'TOPIK',
  'None',
]

// Custom Input Component with Icon
const FormInput = ({

  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false
}: {

  type?: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  required?: boolean
}) => (
  <div className="relative">

    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full h-12 pl-4 rounded-lg border-gray-200 bg-white focus:border-brand-blue focus:ring-brand-blue shadow-sm"
    />
  </div>
)

// Custom Select Component with Icon
const FormSelect = ({

  options,
  placeholder,
  value,
  onChange,
  name,
  required = false
}: {

  options: string[],
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  name: string,
  required?: boolean
}) => (
  <div className="relative">

    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full h-12 pl-4 pr-4 rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-brand-blue focus:ring-brand-blue outline-none appearance-none shadow-sm cursor-pointer"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
      <ChevronRight className="w-4 h-4 rotate-90" />
    </div>
  </div>
)

export default function Services() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    degree: '',
    destination: '',
    programme: '',
    testprep: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
            <p className="text-white/80 mb-10 leading-relaxed text-lg">
              Unlock a world of global opportunities. The investment you make today pays off tomorrow with job prospects and extended visa options.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors border border-white/10">
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
            className="relative z-10"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-brand-red">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                  <p className="text-gray-600 mb-8">Our counsellors will contact you within 24 hours.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ firstName: '', lastName: '', phone: '', email: '', degree: '', destination: '', programme: '', testprep: '', message: '' })
                    }}
                    className="rounded-full px-8"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                    Book Your <span className="text-brand-blue">FREE Consultation</span>
                  </h3>

                  <p className="text-center text-gray-500 mb-8 text-sm">Fill out the form below and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                        <FormInput

                          name="firstName"
                          placeholder="Enter your First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                        <FormInput

                          name="lastName"
                          placeholder="Enter your Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                        <FormInput

                          type="tel"
                          name="phone"
                          placeholder="Enter your Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                        <FormInput

                          type="email"
                          name="email"
                          placeholder="Enter your Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 3: Degree & Destination */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Desired Degree</label>
                        <FormSelect

                          name="degree"
                          options={degrees}
                          placeholder="Select Desired Degree"
                          value={formData.degree}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Desired Destination</label>
                        <FormSelect

                          name="destination"
                          options={destinations}
                          placeholder="Select Destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 4: Programme & Test Prep */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Desired Programme</label>
                        <FormInput

                          name="programme"
                          placeholder="Enter Programme Name"
                          value={formData.programme}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Test Preparation</label>
                        <FormSelect

                          name="testprep"
                          options={testpreps}
                          placeholder="Select Test Prep"
                          value={formData.testprep}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-blue-900/60">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Enter your message..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full p-3 pl-10 rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-brand-blue focus:ring-brand-blue outline-none resize-none shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-blue hover:bg-brand-red text-white h-14 rounded-lg font-bold text-lg transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed shadow-md mt-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-blue-900" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Submit Inquiry"
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