import { motion } from 'framer-motion'
import { Clock, Users, Target, CheckCircle, BookOpen, Award, Calendar, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface Test {
  name: string;
  fullName: string;
  description: string;
  duration: string;
  students: string;
  targetScore: string;
  fee: string;
  modules: string[];
  schedule: string[];
  features: string[];
  color: string;
  bgColor: string;
}

const tests: Test[] = [
  {
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    description: 'The world\'s most popular English language test for higher education and global migration.',
    duration: '6-8 Weeks',
    students: '5000+',
    targetScore: 'Band 7+',
    fee: 'NPR 25,000',
    modules: ['Listening', 'Reading', 'Writing', 'Speaking'],
    schedule: ['Morning: 7:00 AM - 9:00 AM', 'Day: 11:00 AM - 1:00 PM', 'Evening: 4:00 PM - 6:00 PM'],
    features: [
      'Experienced British Council trained instructors',
      'Comprehensive study materials',
      'Weekly mock tests',
      'One-on-one speaking practice',
      'Writing task feedback',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'PTE',
    fullName: 'Pearson Test of English',
    description: 'Computer-based English language test accepted by universities and governments worldwide.',
    duration: '4-6 Weeks',
    students: '3000+',
    targetScore: '65+',
    fee: 'NPR 22,000',
    modules: ['Speaking & Writing', 'Reading', 'Listening'],
    schedule: ['Morning: 8:00 AM - 10:00 AM', 'Evening: 5:00 PM - 7:00 PM'],
    features: [
      'Computer-based training',
      'AI scoring practice',
      'Real exam simulation',
      'Time management strategies',
      'Unlimited lab practice',
    ],
    color: 'from-coral to-coral-dark',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language',
    description: 'Premier English-language test for university admissions in the United States and Canada.',
    duration: '6-8 Weeks',
    students: '2000+',
    targetScore: '100+',
    fee: 'NPR 28,000',
    modules: ['Reading', 'Listening', 'Speaking', 'Writing'],
    schedule: ['Morning: 7:30 AM - 9:30 AM', 'Day: 12:00 PM - 2:00 PM'],
    features: [
      'ETS-certified trainers',
      'Official TOEFL materials',
      'Integrated skills practice',
      'Note-taking strategies',
      'Full-length practice tests',
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'NAT',
    fullName: 'Japanese Language Proficiency Test',
    description: 'Japanese language test for students planning to study or work in Japan.',
    duration: '3-6 Months',
    students: '1000+',
    targetScore: 'N2-N1',
    fee: 'NPR 15,000',
    modules: ['Vocabulary', 'Grammar', 'Reading', 'Listening'],
    schedule: ['Morning: 6:00 AM - 8:00 AM', 'Weekend: 10:00 AM - 1:00 PM'],
    features: [
      'Native Japanese instructors',
      'JLPT-focused curriculum',
      'Kanji practice sessions',
      'Conversation practice',
      'Cultural orientation',
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
  },
  {
    name: 'TOPIK',
    fullName: 'Test of Proficiency in Korean',
    description: 'Korean language proficiency test for scholarships and university admissions in Korea.',
    duration: '3-6 Months',
    students: '800+',
    targetScore: 'Level 5-6',
    fee: 'NPR 15,000',
    modules: ['Listening', 'Reading', 'Writing'],
    schedule: ['Evening: 5:00 PM - 7:00 PM', 'Weekend: 2:00 PM - 5:00 PM'],
    features: [
      'Korean native speakers',
      'GKS scholarship preparation',
      'Hangul mastery program',
      'Grammar intensive course',
      'Mock TOPIK exams',
    ],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
  },
]

interface Result {
  name: string;
  test: string;
  score: string;
  university: string;
}

const results: Result[] = [
  { name: 'Priya Sharma', test: 'IELTS', score: 'Band 8.0', university: 'University of Melbourne' },
  { name: 'Rajan Thapa', test: 'PTE', score: '79', university: 'University of Manchester' },
  { name: 'Sunita Gurung', test: 'TOEFL', score: '110', university: 'University of Toronto' },
  { name: 'Bikash Adhikari', test: 'IELTS', score: 'Band 7.5', university: 'New York University' },
  { name: 'Anjali KC', test: 'NAT', score: 'N2', university: 'Tokyo University' },
  { name: 'Prakash Rai', test: 'TOPIK', score: 'Level 6', university: 'Seoul National University' },
]

export default function TestPrepPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section>
        <div className="min-h-screen bg-white">

          {/* Hero Section */}
          <section>
            <div className="bg-gradient-to-r from-brand-blue to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-sm mb-4 opacity-90">
                  <span>Destinations</span>
                  <span>/</span>
                  <span className="text-brand-red font-semibold">Australia</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Study in Australia
                </h1>
                <p className="text-lg sm:text-xl max-w-3xl mb-8 text-blue-100">
                  Experience world-class education, vibrant cities, and excellent post-study work opportunities.
                </p>
                <button
                  onClick={() => scrollToSection('consultation-form')}
                  className="bg-brand-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
          <div className="bg-gradient-to-r from-brand-blue to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-2 text-sm mb-4 opacity-90">
                <span>Destinations</span>
                <span>/</span>
                <span className="text-brand-red font-semibold">Australia</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Study in Australia
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mb-8 text-blue-100">
                Experience world-class education, vibrant cities, and excellent post-study work opportunities.
              </p>
              <button
                onClick={() => scrollToSection('consultation-form')}
                className="bg-brand-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          <section className="relative py-20 lg:py-28 bg-gradient-to-br from-warm via-white to-white overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coral/5 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
                  Test Preparation
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
                  Achieve Your{' '}
                  <span className="text-coral">Target Scores</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Expert coaching for IELTS, PTE, TOEFL, and language proficiency tests. Our experienced instructors help you achieve your best possible score.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tests Grid */}
          <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {tests.map((test: Test, index: number) => (
                  <motion.div
                    key={test.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-gray-100"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-bold">{test.name}</h2>
                        <BookOpen className="w-8 h-8 opacity-80" />
                      </div>
                      <p className="text-white/80 text-sm">{test.fullName}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{test.description}</p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className={`${test.bgColor} rounded-xl p-3 text-center`}>
                          <Clock className="w-5 h-5 mx-auto mb-1 text-gray-500" />
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold text-dark text-sm">{test.duration}</p>
                        </div>
                        <div className={`${test.bgColor} rounded-xl p-3 text-center`}>
                          <Users className="w-5 h-5 mx-auto mb-1 text-gray-500" />
                          <p className="text-xs text-gray-500">Students</p>
                          <p className="font-semibold text-dark text-sm">{test.students}</p>
                        </div>
                        <div className={`${test.bgColor} rounded-xl p-3 text-center`}>
                          <Target className="w-5 h-5 mx-auto mb-1 text-coral" />
                          <p className="text-xs text-gray-500">Target</p>
                          <p className="font-semibold text-coral text-sm">{test.targetScore}</p>
                        </div>
                      </div>

                      {/* Modules */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Test Modules</h4>
                        {/* <div className="flex flex-wrap gap-2">
                          {test.modules.map((module, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                              {module}
                            </span>
                          ))}
                        </div> */}
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Course Features</h4>
                        <ul className="space-y-2">
                          {test.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule */}
                      <div className="mb-6">

                      </div>

                      {/* Fee & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t">

                        <Link to="/contact">
                          <Button className="bg-brand-blue hover:bg-brand-blue/80 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105">
                            Enroll Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
                  Success Stories
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                  Our Students' Achievements
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result: Result, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-card"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-coral" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark">{result.name}</h4>
                        <p className="text-sm text-gray-500">{result.university}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{result.test}</span>
                      <span className="text-lg font-bold text-coral">{result.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 lg:py-28 bg-coral">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Start Your Test Preparation Today
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who achieved their target scores with our expert coaching.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button className="bg-white text-coral hover:bg-white/90 px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105">
                      <Phone className="mr-2 w-5 h-5" />
                      Book a Free Demo Class
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
