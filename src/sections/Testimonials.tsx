import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ReactGoogleReviews } from 'react-google-reviews'

const testimonials = [
  {
    name: 'Priya Sharma',
    image: '/images/testimonials/student-1.jpg',
    destination: 'Australia',
    university: 'University of Melbourne',
    quote: 'Brightway made my dream of studying in Australia come true. Their counselors guided me through every step, from university selection to visa approval. I am forever grateful!',
    rating: 5,
  },
  {
    name: 'Rajan Thapa',
    image: '/images/testimonials/student-2.jpg',
    destination: 'United Kingdom',
    university: 'University of Manchester',
    quote: 'Got my UK student visa on the first attempt! The team\'s expertise is unmatched. Their interview preparation was particularly helpful.',
    rating: 5,
  },
  {
    name: 'Sunita Gurung',
    image: '/images/testimonials/student-3.jpg',
    destination: 'Canada',
    university: 'University of Toronto',
    quote: 'IELTS coaching at Brightway helped me score 8.0. Highly recommend their test prep programs. The instructors are patient and very knowledgeable.',
    rating: 5,
  },
  {
    name: 'Bikash Adhikari',
    image: '/images/testimonials/student-4.jpg',
    destination: 'USA',
    university: 'New York University',
    quote: 'From university selection to visa approval, Brightway was with me throughout the journey. Their personalized approach made all the difference.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-gray-900">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Success <span className="text-brand-blue">Stories</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from students who achieved their dreams with our guidance
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-brand-blue"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        <Quote className="w-10 h-10 text-brand-red mb-4 mx-auto lg:mx-0" />
                        <p className="text-lg lg:text-xl text-white leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </p>

                        {/* Rating */}
                        <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
                          ))}
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">
                            {testimonial.university}, {testimonial.destination}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                    ? 'bg-brand-blue w-8'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>

      <ReactGoogleReviews
        layout="carousel"
        featurableId="5011579c-7114-4cc5-af9c-109343b0a998"
      />

    </section>
  )
}
