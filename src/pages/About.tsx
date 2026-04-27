import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Globe, BookOpen, Quote, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

// --- Components ---

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    let animationFrame: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// --- Data ---

const milestones = [
  { year: '2004', title: 'Established', desc: 'Brightway founded in Kathmandu.' },
  { year: '2008', title: 'Expansion', desc: 'First branch opened outside valley.' },
  { year: '2012', title: 'Partnerships', desc: 'Tie-ups with top UK & Aus unis.' },
  { year: '2016', title: 'Milestone', desc: '5,000+ students placed globally.' },
  { year: '2020', title: 'Digital', desc: 'Online counseling launched.' },
  { year: '2024', title: 'Leader', desc: 'Top rated consultancy in Nepal.' },
]

const leadership = [
  {
    name: 'Mr. Drona Bikram Thapa', // Replace with actual Chairman Name
    role: 'Chairman & Founder',
    image: '../images/ceo.jpg',
    message: "Since establishing Brightway in 2012, I have been driven by a single belief: that education is a powerful tool for transformation—academically, personally, and professionally. It is with great pride that I welcome you to a community dedicated to unlocking your unique potential. At the heart of our approach is a commitment to honest guidance and personalized counseling. We understand that every student has distinct goals, which is why our experienced team tailors our professional service to your specific aspirations. From course selection and application assistance to visa processing and pre-departure orientation, we are here to ensure your journey abroad is well-informed, seamless, and successful. To expand your opportunities, we have cultivated strong academic partnerships with reputable universities and colleges in Japan and South Korea. These collaborations allow us to offer exciting pathways in diverse fields such as technology, business, hospitality, healthcare, and engineering—connecting you with destinations known for their innovation and cultural richness.I am deeply honored by the trust thousands of students and families have placed in us over the years. Your success stories are the true reflection of our values. Thank you for choosing Brightway as your trusted partner. I look forward to walking alongside you as you take this next big step toward a brighter, more promising future.",
  },
  {
    name: 'Ms. Anushka Singh Thapa', // Replace with actual Director Name
    role: 'Managing Director',
    image: '../images/managing.jpg',
    message: "It gives me great pleasure to extend my warmest greetings to all who are embarking on the journey of international education and global opportunities. Since our inception, Brightway has been driven by a single vision — to connect ambition with the right path and help individuals transform their dreams into reality. Choosing to study abroad is one of the most important decisions a student can make. It’s ot just about pursuing a degree; it’s about stepping into a new world, embracing change, and building a future full of possibilities. At Brightway, we fully understand the emotional, academic, and financial challenges this journey brings. That’s why we are here — to guide,support, and empower you every step of the way. Our commitment goes beyond consultancy. With a tudent-first philosophy, an experienced and compassionate team, and an unwavering dedication to ethical practices, we have built a reputation as one of Nepal’s most trusted education partners. We are proud to have walked alongside countless students on their pth to success, helping them gain admission to prestigious institutions across the globe. What makes Brightway different is our deep belief in relationships. To us, every student is not just a client, but a part of our extended family. We strive to be a source of encouragement, advice, and clarity throughout your educational journey and even beyond. Thank you for choosing Brightway International Education. We are honored to be a part of your story and look forward to shaping a future filled with knowledge, growth, and achievement — together.",
  },
]

const team = [
  { name: 'Drona Bikram Thapa', role: 'Founder & CEO', img: '../images/ceo.jpg' },
  { name: 'Anushka Singh Thapa', role: 'Managing Director', img: '../images/managing.jpg' },
  { name: 'Jiwan Giri', role: 'Executive Director', img: '/images/team/3.jpg' },
  { name: 'Narayan Kshetri', role: 'Head Operations', img: '/images/team/4.jpg' },
]

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const amount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* 1. Short Description (Hero) - Brand Colors */}
      <section className="relative py-20 lg:py-28 bg-blue-900 overflow-hidden">
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/50 skew-x-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Leading the Way in <br />
                <span className="text-white">Global Education</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Established in 2012, <strong className="text-white">Brightway International Education</strong> has grown to become one of Nepal's most trusted educational consultancies. With over 14 years of experience, we have successfully guided thousands of students to top universities in Australia, the UK, Japan, Korea, and beyond.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                We pride ourselves on our high visa success rate, ethical counseling practices, and comprehensive support system that stays with students from pre-departure to post-arrival.
              </p>

              {/* Quick Stats in Hero */}
              <div className="flex gap-8 mt-8 pt-8 border-t border-blue-700">
                <div>
                  <p className="text-3xl font-bold text-white">14+</p>
                  <p className="text-sm text-blue-200">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">15k+</p>
                  <p className="text-sm text-blue-200">Students Placed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">95%+</p>
                  <p className="text-sm text-blue-200">Visa Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">10+</p>
                  <p className="text-sm text-blue-200">Countries</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400/30">
                <img src="/images/about-hero.jpg" alt="Students" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000'} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission - Clean White Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-10 rounded-3xl border-l-8 border-blue-900 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the most preferred and trusted education consultancy in Nepal, recognized globally for our integrity, expertise, and unwavering commitment to shaping the future of Nepali students.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-10 rounded-3xl border-l-8 border-brand-red shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-brand-red-light text-white rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower students with accurate information, personalized counseling, and end-to-end support, ensuring they secure admissions in world-class institutions that align with their career aspirations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Message from Director & Chairman - Alternating Layout */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {leadership.map((leader, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative z-10 border-4 border-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => e.currentTarget.src = `https://ui-avatars.com/api/?name=${leader.name}&background=1e3a8a&color=fff&size=512`}
                  />
                </div>
                {/* Decorative Box */}
                <div className={`absolute -z-0 w-full h-full border-2 border-brand-red rounded-2xl ${idx % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'}`} />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <Quote className="w-12 h-12 text-brand-red mb-6" />
                <h2 className="text-3xl font-bold text-blue-900 mb-2">Message from {leader.role.split(' ')[0]}</h2>
                <p className="text-brand-red font-bold uppercase tracking-wide text-sm mb-6">{leader.role}</p>

                <p className="text-lg text-slate-600 leading-relaxed italic mb-8 border-l-4 border-brand-blue pl-6">
                  "{leader.message}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-slate-300"></div>
                  <span className="font-serif text-xl text-brand-blue font-bold">{leader.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Journey (Single Row Horizontal Scroll) - Dark Theme */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-wider text-sm">Our History</span>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">Two Decades of Growth</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full border border-brand-red-dark hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-brand-red-dark">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full border border-brand-red-dark hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-brand-red-dark">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 gap-6 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="snap-center shrink-0 w-[300px] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-red-dark transition-colors group"
            >
              <span className="text-4xl font-bold text-blue-900 group-hover:text-brand-red-dark transition-colors mb-2 block">{item.year}</span>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Team Members - Grid */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold uppercase tracking-wider text-sm">Our Experts</span>
            <h2 className="text-3xl font-bold text-brand-blue mt-2">Meet The Team</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-blue-100"
              >
                <div className="h-64 overflow-hidden bg-gray-200 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name}&background=fbbf24&color=1e3a8a`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    {/* Social icons could go here */}
                  </div>
                </div>
                <div className="p-6 text-center border-t-4 border-transparent group-hover:border-brand-blue transition-colors">
                  <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                  <p className="text-brand-red text-sm font-medium mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}