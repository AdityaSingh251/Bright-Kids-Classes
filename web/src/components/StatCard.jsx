import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

const StatCard = ({ icon: Icon, value, label, color = 'pink', index = 0 }) => {
  const colorStyles = {
    pink: 'bg-[hsl(330,100%,96%)] border-[hsl(var(--primary))] text-[hsl(var(--primary))] shadow-[4px_4px_0px_0px_hsl(var(--primary))]',
    purple: 'bg-[hsl(270,100%,96%)] border-[hsl(var(--secondary))] text-[hsl(var(--secondary))] shadow-[4px_4px_0px_0px_hsl(var(--secondary))]',
    green: 'bg-[hsl(90,100%,94%)] border-[hsl(var(--accent))] text-[hsl(145,100%,30%)] shadow-[4px_4px_0px_0px_hsl(var(--accent))]',
    orange: 'bg-[hsl(15,100%,96%)] border-[hsl(var(--tertiary))] text-[hsl(var(--tertiary))] shadow-[4px_4px_0px_0px_hsl(var(--tertiary))]',
    turquoise: 'bg-[hsl(180,100%,94%)] border-[hsl(var(--highlight))] text-[hsl(180,100%,30%)] shadow-[4px_4px_0px_0px_hsl(var(--highlight))]',
    yellow: 'bg-[hsl(45,100%,94%)] border-[hsl(var(--sunny))] text-[hsl(30,100%,45%)] shadow-[4px_4px_0px_0px_hsl(var(--sunny))]',
  };

  const style = colorStyles[color] || colorStyles.pink;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', bounce: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className={`h-full border-4 rounded-3xl transition-all duration-300 ${style}`}>
        <CardContent className="p-6 text-center flex flex-col items-center justify-center">
          <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 border-2 shadow-sm ${style.split(' ')[1]}`}>
            {Icon && <Icon className="w-8 h-8" />}
          </div>
          <div className="text-4xl font-black text-gray-900 mb-2 drop-shadow-sm">{value}</div>
          <p className="text-base font-extrabold text-gray-700 leading-tight">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;
