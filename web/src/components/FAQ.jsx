import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What are the class timings and structure? ⏰',
      answer: 'Classes are held daily from 5:00 PM to 6:00 PM. Each session includes concept teaching, homework help, doubt clearing, and regular practice. We maintain small batches to ensure every child gets individual attention.',
      color: 'pink',
      borderClass: 'border-[hsl(var(--primary))]',
      textClass: 'text-[hsl(var(--primary))]'
    },
    {
      question: 'What is your teaching methodology? 🧠',
      answer: 'We believe in teaching with love and patience. Our approach focuses on building strong basics, making learning enjoyable, and ensuring every child understands concepts thoroughly. We use simple explanations, real-life examples, and regular practice to build confidence.',
      color: 'purple',
      borderClass: 'border-[hsl(var(--secondary))]',
      textClass: 'text-[hsl(var(--secondary))]'
    },
    {
      question: 'How soon can we expect to see results? 📈',
      answer: 'Most parents notice improvements within 2-3 months. Children show better understanding of concepts, improved homework completion, and increased confidence. Regular tests and feedback help track progress consistently.',
      color: 'orange',
      borderClass: 'border-[hsl(var(--tertiary))]',
      textClass: 'text-[hsl(var(--tertiary))]'
    },
    {
      question: 'What is the fee structure? 💳',
      answer: 'Our fees are very affordable and designed keeping parents in mind. Please contact us directly via phone or WhatsApp for detailed fee information and any available discounts for siblings or advance payments.',
      color: 'green',
      borderClass: 'border-[hsl(var(--accent))]',
      textClass: 'text-[hsl(145,100%,30%)]'
    },
    {
      question: 'Do you offer a free demo class? 🎁',
      answer: 'Yes! We offer a completely free demo class so your child can experience our teaching style. This helps both parents and children understand our approach before making a commitment. Book your free demo class today!',
      color: 'turquoise',
      borderClass: 'border-[hsl(var(--highlight))]',
      textClass: 'text-[hsl(180,100%,30%)]'
    },
    {
      question: 'How do you involve parents in the learning process? 👨‍👩‍👧‍👦',
      answer: 'We maintain regular communication with parents about their child\'s progress, strengths, and areas needing attention. Parents receive updates on homework completion, test results, and overall development. We believe parent involvement is key to a child\'s success.',
      color: 'yellow',
      borderClass: 'border-[hsl(var(--sunny))]',
      textClass: 'text-[hsl(30,100%,40%)]'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`border-4 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow ${faq.borderClass}`}
          >
            <AccordionTrigger className={`text-left text-lg font-black ${faq.textClass} hover:no-underline py-5`}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 font-semibold text-base leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default FAQ;
