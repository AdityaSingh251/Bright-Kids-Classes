import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, CheckCircle2, Sparkles, MessageCircle, BookOpen, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import SubjectCard from '@/components/SubjectCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import RegistrationForm from '@/components/RegistrationForm.jsx';
import FAQ from '@/components/FAQ.jsx';
import FreeDemo from '@/components/FreeDemo.jsx';

const HomePage = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const highlights = [
    {
      icon: '❤️',
      title: 'Teaching with Love',
      description: 'Every child is taught with patience, care, and individual attention to build confidence.',
      color: 'pink'
    },
    {
      icon: '🎯',
      title: 'Focused Learning',
      description: 'Small batches ensure personalized guidance and better understanding of concepts.',
      color: 'purple'
    },
    {
      icon: '📚',
      title: 'Strong Basics',
      description: 'Building solid foundations in all subjects for long-term academic success.',
      color: 'turquoise'
    },
    {
      icon: '🌟',
      title: 'Personal Guidance',
      description: 'Regular feedback and progress tracking to help every child excel.',
      color: 'sunny'
    }
  ];

  const features = [
    { title: '15+ Years Experience', description: 'Proven track record of excellence', iconType: 'award', color: 'pink' },
    { title: 'Friendly Teaching', description: 'Making learning stress-free', iconType: 'smile', color: 'purple' },
    { title: 'Small Batches', description: 'Maximum individual attention', iconType: 'target', color: 'turquoise' },
    { title: 'Individual Care', description: 'Personalized guidance', iconType: 'heart', color: 'orange' },
    { title: 'Homework Support', description: 'Daily doubt clearing', iconType: 'book', color: 'green' },
    { title: 'Confidence Building', description: 'Believing in themselves', iconType: 'star', color: 'yellow' },
    { title: 'Regular Motivation', description: 'Good study habits', iconType: 'sparkles', color: 'pink' },
    { title: 'Happy Parents', description: 'Constant communication', iconType: 'smile', color: 'purple' }
  ];

  const subjects = [
    { emoji: '🧮', subject: 'Mathematics', description: 'Building strong numerical skills', color: 'pink' },
    { emoji: '🔬', subject: 'Science', description: 'Making concepts interesting', color: 'turquoise' },
    { emoji: '📝', subject: 'Hindi', description: 'Developing language skills', color: 'orange' },
    { emoji: '📖', subject: 'English', description: 'Improving communication', color: 'green' },
    { emoji: '🎒', subject: 'Homework Help', description: 'Support for all assignments', color: 'purple' }
  ];

  const stats = [
    { icon: TrendingUp, value: '87%', label: 'Improved Marks', color: 'pink' },
    { icon: Star, value: '92%', label: 'Better Confidence', color: 'sunny' },
    { icon: BookOpen, value: '95%', label: 'Study Habits', color: 'purple' },
    { icon: Users, value: '150+', label: 'Happy Parents', color: 'orange' },
    { icon: Award, value: '100%', label: 'Strong Basics', color: 'green' }
  ];

  const testimonials = [
    { quote: 'My daughter\'s marks improved from 62% to 84% in just 4 months. Mamta ma\'am teaches with so much patience and love.', parentName: 'Priya Sharma', childName: 'Ananya (Class 4)', rating: 5, color: 'pink' },
    { quote: 'My son used to struggle with maths, but now he actually enjoys it! Highly recommended.', parentName: 'Rajesh Kumar', childName: 'Aarav (Class 3)', rating: 5, color: 'purple' },
    { quote: 'Best decision we made for our child\'s education. Regular homework support and test preparation are excellent.', parentName: 'Neha Gupta', childName: 'Ishaan (Class 5)', rating: 5, color: 'turquoise' },
    { quote: 'Mamta ma\'am is not just a teacher but a mentor. My daughter looks forward to classes every day.', parentName: 'Amit Verma', childName: 'Diya (Class 2)', rating: 5, color: 'orange' }
  ];

  return (
    <>
      <Helmet>
        <title>Bright Kids Classes - Fun & Expert Tuition in Kanpur</title>
        <meta name="description" content="Join Bright Kids Classes! Vibrant, playful, and expert education for Nursery to Class 5." />
      </Helmet>

      <Header onDemoClick={() => setIsDemoOpen(true)} />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1698993081947-8a3654303904)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))/90] via-[hsl(var(--secondary))/85] to-[hsl(var(--tertiary))/80] backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-8 font-bold text-lg shadow-lg">
                <Sparkles className="w-5 h-5 text-[hsl(var(--sunny))]" />
                Admissions Open for 2026-27
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg tracking-tight">
                Give your child the <br className="hidden md:block"/>
                <span className="text-[hsl(var(--sunny))]">Best Start</span> with Bright Kids! 🌟
              </h1>
              <p className="text-xl md:text-3xl mb-8 font-bold text-white/95 max-w-3xl mx-auto drop-shadow-md">
                Expert teaching by Mamta Singh with 15+ years of experience
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--sunny))] text-[hsl(var(--foreground))] hover:bg-white text-xl px-10 py-8 font-black rounded-2xl shadow-[0_8px_0_0_hsl(45,100%,40%)] hover:translate-y-1 hover:shadow-[0_4px_0_0_hsl(45,100%,40%)] active:translate-y-2 active:shadow-none transition-all duration-200"
                  onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
                >
                  Register Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-[hsl(var(--primary))] hover:bg-gray-50 text-xl px-10 py-8 font-black rounded-2xl shadow-[0_8px_0_0_hsl(330,100%,40%)] hover:translate-y-1 hover:shadow-[0_4px_0_0_hsl(330,100%,40%)] active:translate-y-2 active:shadow-none transition-all duration-200"
                  onClick={() => setIsDemoOpen(true)}
                >
                  Book Free Demo
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,130.4,201.3,121.72,243.68,116.5,284.85,100.8,321.39,56.44Z" fill="#ffffff"></path>
            </svg>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--primary))] drop-shadow-sm">Meet Mamta Singh 👋</h2>
              <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed">
                With over <span className="text-[hsl(var(--secondary))]">15 years of dedicated teaching experience</span>, I believe in nurturing young minds with love, patience, and care. Every child is unique!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {highlights.map((highlight, index) => {
                const bgColors = {
                  pink: 'bg-[hsl(330,100%,96%)] border-[hsl(var(--primary))]',
                  purple: 'bg-[hsl(270,100%,96%)] border-[hsl(var(--secondary))]',
                  turquoise: 'bg-[hsl(180,100%,94%)] border-[hsl(var(--highlight))]',
                  sunny: 'bg-[hsl(45,100%,94%)] border-[hsl(var(--sunny))]'
                };
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${bgColors[highlight.color]} border-4 rounded-[2rem] p-8 shadow-playful hover:-translate-y-2 transition-transform duration-300`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-5xl bg-white p-4 rounded-2xl shadow-sm border-2 border-black/5">{highlight.icon}</div>
                      <div>
                        <h3 className="text-2xl font-black mb-3 text-gray-900">{highlight.title}</h3>
                        <p className="text-lg font-semibold text-gray-700 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-[hsl(270,50%,97%)] relative border-y-8 border-[hsl(var(--primary))] border-dashed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--secondary))] drop-shadow-sm">Why Choose Bright Kids? 🚀</h2>
              <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                Join hundreds of satisfied parents who trust us!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  iconType={feature.iconType}
                  color={feature.color}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CLASS DETAILS */}
        <section id="classes" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--highlight))] drop-shadow-sm">Daily Learning Sessions ⏰</h2>
              <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                Structured classes designed for strong academic foundations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-[3rem] p-2 shadow-playful hover:shadow-playful-hover transition-all">
                <div className="bg-white border-4 border-white rounded-[2.5rem] p-10 h-full">
                  <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                    <div className="bg-[hsl(var(--sunny))] p-4 rounded-3xl shadow-sm border-4 border-[hsl(45,100%,40%)]">
                      <Clock className="w-12 h-12 text-[hsl(var(--foreground))]" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900">Class Timing: 5:00 PM – 6:00 PM</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl border-2 border-gray-100">
                    <div className="space-y-5">
                      {['Daily concept teaching', 'Complete homework support', 'Doubt clearing sessions'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <CheckCircle2 className="w-8 h-8 text-[hsl(var(--accent))] flex-shrink-0 bg-[hsl(90,100%,90%)] rounded-full" />
                          <p className="text-lg font-bold text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-5">
                      {['Regular tests & assessments', 'Concept clarity with examples', 'Progress tracking updates'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <CheckCircle2 className="w-8 h-8 text-[hsl(var(--accent))] flex-shrink-0 bg-[hsl(90,100%,90%)] rounded-full" />
                          <p className="text-lg font-bold text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBJECTS */}
        <section id="subjects" className="py-24 bg-[hsl(45,100%,95%)] relative overflow-hidden border-t-8 border-[hsl(var(--sunny))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 drop-shadow-sm">Subjects We Teach 📚</h2>
              <p className="text-xl font-bold text-gray-700 max-w-2xl mx-auto">
                Comprehensive coverage for holistic development!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.slice(0, 3).map((subject, index) => (
                <SubjectCard key={index} {...subject} index={index} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
              {subjects.slice(3).map((subject, index) => (
                <SubjectCard key={index + 3} {...subject} index={index + 3} />
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS/STATS */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--primary))] drop-shadow-sm">Why Parents Love Us ❤️</h2>
              <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                Real results that make a difference in your child's journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 bg-[hsl(270,50%,97%)] border-y-8 border-[hsl(var(--secondary))] border-dashed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--secondary))] drop-shadow-sm">Happy Parents Say 💬</h2>
              <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                Hear from satisfied parents about their children's transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* REGISTRATION */}
        <section id="registration" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegistrationForm />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-gray-50 border-t-8 border-[hsl(var(--tertiary))]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--tertiary))] drop-shadow-sm">Got Questions? 🤔</h2>
              <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our classes
              </p>
            </div>

            <FAQ />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-[hsl(180,100%,95%)] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--highlight))] drop-shadow-sm">Get in Touch 📞</h2>
            <p className="text-xl font-bold text-gray-700 mb-12">
              We'd love to hear from you!
            </p>

            <div className="bg-white border-4 border-[hsl(var(--highlight))] rounded-[3rem] p-12 shadow-playful">
              <h3 className="text-3xl font-black mb-8 text-gray-900">Mamta Singh</h3>
              
              <div className="space-y-6 text-xl font-bold text-gray-600 flex flex-col items-center">
                <div className="flex items-center gap-3 bg-[hsl(180,100%,95%)] px-6 py-3 rounded-2xl">
                  <Sparkles className="w-6 h-6 text-[hsl(var(--highlight))]" />
                  Bright Kids Classes, Kanpur
                </div>
                <div className="flex items-center gap-3 bg-[hsl(180,100%,95%)] px-6 py-3 rounded-2xl">
                  <Clock className="w-6 h-6 text-[hsl(var(--highlight))]" />
                  Daily: 5:00 PM - 6:00 PM
                </div>
                <div className="flex items-center gap-3 bg-[hsl(180,100%,95%)] px-6 py-3 rounded-2xl">
                  <Phone className="w-6 h-6 text-[hsl(var(--highlight))]" />
                  +91-8429008066
                </div>
              </div>

              <div className="mt-12 bg-[hsl(var(--whatsapp))/10] border-2 border-[hsl(var(--whatsapp))] rounded-3xl p-8 max-w-2xl mx-auto">
                <h4 className="text-2xl font-black text-gray-900 mb-3">Questions? Let's Talk!</h4>
                <p className="text-lg font-bold text-gray-700 mb-6">
                  Chat with us on WhatsApp for quick inquiries and demo bookings
                </p>
                <Button
                  size="lg"
                  className="bg-[hsl(var(--whatsapp))] text-white hover:brightness-110 h-16 px-10 rounded-2xl text-xl font-black shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.5)] hover:translate-y-[-2px] transition-all w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/917753888040?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Bright%20Kids%20Classes', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FreeDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default HomePage;