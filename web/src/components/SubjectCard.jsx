import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SubjectCard = ({ emoji, subject, description, color = 'pink', index = 0 }) => {
  const colorStyles = {
    pink: 'bg-gradient-to-br from-[hsl(var(--primary))] to-[#d1005a] border-[#a00045] shadow-[4px_4px_0px_0px_#a00045]',
    purple: 'bg-gradient-to-br from-[hsl(var(--secondary))] to-[#7b00ff] border-[#5500b3] shadow-[4px_4px_0px_0px_#5500b3]',
    green: 'bg-gradient-to-br from-[hsl(var(--accent))] to-[#55cc00] border-[#3e9900] shadow-[4px_4px_0px_0px_#3e9900]',
    orange: 'bg-gradient-to-br from-[hsl(var(--tertiary))] to-[#e64a00] border-[#b33a00] shadow-[4px_4px_0px_0px_#b33a00]',
    turquoise: 'bg-gradient-to-br from-[hsl(var(--highlight))] to-[#00b3b3] border-[#008080] shadow-[4px_4px_0px_0px_#008080]',
    yellow: 'bg-gradient-to-br from-[hsl(var(--sunny))] to-[#ffc800] border-[#cca000] shadow-[4px_4px_0px_0px_#cca000] text-gray-900',
  };

  const style = colorStyles[color] || colorStyles.pink;
  const isYellow = color === 'yellow';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
    >
      <Card className={`h-full border-4 rounded-3xl transition-all duration-300 ${style}`}>
        <CardContent className="p-8 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner border-2 border-black/10">
            {emoji}
          </div>
          <h3 className={`text-2xl font-extrabold mb-3 ${isYellow ? 'text-gray-900' : 'text-white'} drop-shadow-sm`}>{subject}</h3>
          <p className={`text-base font-semibold ${isYellow ? 'text-gray-800' : 'text-white/90'} leading-relaxed`}>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SubjectCard;