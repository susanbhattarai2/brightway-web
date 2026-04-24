import { motion } from 'framer-motion'
import { Clock, Users, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface Test {
  name: string;
  fullName: string;
  description: string;
  duration: string;
  students: string;
  score: string;
  features: string[];
  color: string;
  bgColor: string;
}

const tests: Test[] = [
  {
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    description: 'Comprehensive coaching for Academic & General modules',
    duration: '6-8 Weeks',
    students: '5000+',
    score: 'Band 7+',
    features: ['Listening', 'Reading', 'Writing', 'Speaking'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'PTE',
    fullName: 'Pearson Test of English',
    description: 'Computer-based test preparation with practice sessions',
    duration: '4-6 Weeks',
    students: '3000+',
    score: '65+',
    features: ['Speaking', 'Writing', 'Reading', 'Listening'],
    color: 'from-brand-blue to-brand-blue-dark',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language',
    description: 'Complete preparation for US university admissions',
    duration: '6-8 Weeks',
    students: '2000+',
    score: '100+',
    features: ['Reading', 'Listening', 'Speaking', 'Writing'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'NAT',
    fullName: 'Japanese Language Proficiency Test',
    description: 'Japanese language proficiency test preparation',
    duration: '3-6 Months',
    students: '1000+',
    score: 'N1-N5',
    features: ['Vocabulary', 'Grammar', 'Reading', 'Listening'],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
  },
  {
    name: 'TOPIK',
    fullName: 'Test of Proficiency in Korean',
    description: 'Korean language test preparation for scholarships',
    duration: '3-6 Months',
    students: '800+',
    score: 'Level 6',
    features: ['Listening', 'Reading', 'Writing', 'Speaking'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function TestPreparation() {
  return (
    <section id="test-prep" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-wider mb-4">
            Test Preparation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Achieve Your <span className="text-brand-blue">Target Scores</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert coaching for IELTS, PTE, TOEFL, and language proficiency tests
          </p>
        </motion.div>

        {/* Tests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tests.map((test: Test) => (
            <motion.div
              key={test.name}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-1">{test.name}</h3>
                <p className="text-white/80 text-sm">{test.fullName}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {test.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{test.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{test.students}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 ">
                    <Target className="w-4 h-4" />
                    <span>{test.score}</span>
                  </div>
                </div>

                {/* Features */}
                {/* <div className="space-y-2">
                  {test.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/test-preparation">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
              View All Test Preparation Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
