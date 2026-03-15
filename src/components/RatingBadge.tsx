import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

interface RatingBadgeProps {
  className?: string;
}

const RatingBadge = ({ className }: RatingBadgeProps) => {
  return (
    <div className={cn("inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border border-brand-gold/20", className)}>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map((i) => (
          <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
        ))}
        <div className="relative">
          <Star size={16} className="text-brand-gold" />
          <div className="absolute inset-0 overflow-hidden w-[40%]">
            <Star size={16} className="fill-brand-gold text-brand-gold" />
          </div>
        </div>
      </div>
      <span className="font-bold text-gray-800">4.4</span>
      <span className="text-xs text-gray-500 border-l pl-2 border-gray-300">57 Ulasan</span>
    </div>
  );
};

export default RatingBadge;
