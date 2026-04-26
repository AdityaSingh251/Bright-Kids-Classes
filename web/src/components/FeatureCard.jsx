import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Heart, Award, Sparkles, Smile, BookOpen, Target } from 'lucide-react';

const FeatureCard = ({ iconType = 'check', title, description, color = 'pink', index = 0 }) => {
  // Map friendly colors to our custom properties
  const colorStyles = {
    pink: { bg: 'bg-[hsl(330,100%,96%)]', border: 'border-[hsl(var(--primary))]', text: 'text-[hsl(var(--primary))]', darkText: 'text-gray-900', shadow: 'hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]' },
    purple: { bg: 'bg-[hsl(270,100%,96%)]', border: 'border-[hsl(var(--secondary))]', text: 'text-[hsl(var(--secondary))]', darkText: 'text-gray-900', shadow: 'hover:shadow-[4px_4px_0px_0px_hsl(var(--secondary))]' },
    green: { bg: 'bg-[hsl(90,100%,94%)]', border: 'border-[hsl(var(--accent))]', text: 'text-[hsl(145,100%,30%)]', darkText: 'text-gray-900', shadow: 'hover:shadow-[4px_4px_0px_0px_hsl(var(--accent))]' },
    orange: { bg: 'bg-[hsl(15,100%,96%)]', border: 'border-[hsl(var(--tertiary))]', text: 'text-[hsl(var(--tertiary))]', darkText: 'text-gray-900', shadow: 'hover:shadow-[4px_4px_0px_0px_hsl(var(--tertiary))]' },
    turquoise: { bg: 'bg-[hsl(180,100%,94%)]', border: 'border-[hsl(var(--highlight))]', text: 'text-[hsl(180,100%,30%)]', darkText: 'text-gray-900', shadow: 'hover:shadow-[4px_4px_0px_0px_hsl(var(--highlight))]' },
    yellow: { bg: 'bg-[hsl(45,100%,94%)]', border: 'border-[hsl(var(--sunny))]', text: 'text-[hsl(30,100%,40%)]', darkText: 'text-gray-900', shadow: 'hover:shadow-[4px_4px_0px_0px_hsl(var(--sunny))]' },
  };

  const style = colorStyles[color] || colorStyles.pink;

  const getIcon = () => {
    switch (iconType) {
      case 'heart': return <Heart className={`w-7 h-7 ${style.text}`} />;
      case 'star': return <Star className={`w-7 h-7 ${style.text}`} />;
      case 'award': return <Award className={`w-7 h-7 ${style.text}`} />;
      case 'sparkles': return <Sparkles className={`w-7 h-7 ${style.text}`} />;
      case 'smile': return <Smile className={`w-7 h-7 ${style.text}`} />;
      case 'book': return <BookOpen className={`w-7 h-7 ${style.text}`} />;
      case 'target': return <Target className={`w-7 h-7 ${style.text}`} />;
      default: return <Check className={`w-7 h-7 ${style.text}`} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full border-4 ${style.border} ${style.bg} transition-all duration-300 hover:-translate-y-2 ${style.shadow} rounded-3xl overflow-hidden`}>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-white border-2 ${style.border} flex items-center justify-center shadow-sm`}>
              {getIcon()}
            </div>
            <div>
              <h3 className={`text-xl font-extrabold mb-2 ${style.darkText}`}>{title}</h3>
              <p className="text-base font-semibold text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;