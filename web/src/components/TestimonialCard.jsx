import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ quote, parentName, childName, rating = 5, color = 'pink', index = 0 }) => {
  const borderColors = {
    pink: 'border-[hsl(var(--primary))]',
    purple: 'border-[hsl(var(--secondary))]',
    green: 'border-[hsl(var(--accent))]',
    orange: 'border-[hsl(var(--tertiary))]',
    turquoise: 'border-[hsl(var(--highlight))]',
    yellow: 'border-[hsl(var(--sunny))]'
  };

  const borderColor = borderColors[color] || borderColors.pink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`p-1 rounded-3xl bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--sunny))] to-[hsl(var(--highlight))] hover:-translate-y-2 transition-transform duration-300`}>
        <Card className="h-full bg-white rounded-[22px] border-none">
          <CardContent className="p-8 relative">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-[hsl(var(--primary))]" />
            </div>
            
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[hsl(var(--sunny))] text-[hsl(var(--sunny))] drop-shadow-sm" />
              ))}
            </div>
            
            <p className="text-gray-800 text-lg font-bold leading-relaxed mb-8 relative z-10">"{quote}"</p>
            
            <div className={`pt-4 border-t-4 ${borderColor} border-dashed`}>
              <p className="font-extrabold text-xl text-gray-900">{parentName}</p>
              <p className="text-base font-semibold text-[hsl(var(--primary))]">Parent of {childName}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;