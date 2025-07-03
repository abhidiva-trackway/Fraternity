import { motion } from 'framer-motion';
import type { CateringItem } from '../types';

interface CateringItemCardProps {
  item: CateringItem;
  index: number;
}

const CateringItemCard = ({ item, index }: CateringItemCardProps) => {
  const direction = index % 2 === 0 ? -1 : 1;
  const categoryIcons = {
    'main course': '🍽️',
    'starter': '🍢',
    'dessert': '🍰',
    'beverage': '🥤',
    'salad': '🥗',
    'condiment': '🧂',
    'side dish': '🍛',
    'soup': '🍜',
    'vegetarian': '🥗',
    'vegan': '🌿',
    'spicy': '🌶️',
    'gluten-free': '🌾'
  };

  const getCategoryIcon = () => {
    const lowerCategory = item.category.toLowerCase();
    //@ts-ignore
    return categoryIcons[lowerCategory] || '🍽️';
  };

  // Animation variants for better performance
  const cardVariants = {
    initial: {
      x: direction * 40,
      opacity: 0,
      scale: 0.96
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        delay: index * 0.05
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 25px -10px rgba(180, 83, 9, 0.25)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
        mass: 0.5
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants as any}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative bg-gradient-to-br from-amber-50 to-white rounded-xl overflow-hidden shadow-sm border border-amber-100/50 will-change-transform"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-16 h-16 rotate-45 bg-amber-200/20"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden">
          <div className="absolute -left-12 -bottom-12 w-24 h-24 rotate-45 bg-amber-200/10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="mb-5">
          <div className="flex items-start justify-between">
            <div>
              <motion.h3 
                variants={contentVariants}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-amber-900 font-serif tracking-tight"
              >
                {item.name}
              </motion.h3>
              <motion.div 
                className="h-[2px] bg-gradient-to-r from-amber-300 to-amber-500 rounded-full mt-2 w-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
              />
            </div>
            <motion.span 
              className="text-3xl ml-4"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -3, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              }}
            >
              {getCategoryIcon()}
            </motion.span>
          </div>
        </div>

        <motion.div 
          className="flex justify-between items-center pt-4 border-t border-amber-100/50"
          variants={contentVariants}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm font-medium text-amber-600/90 flex items-center">
            <motion.span 
              className="inline-block mr-2"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            >
              {getCategoryIcon()}
            </motion.span>
            <span className="text-xs uppercase tracking-wider">{item.category}</span>
          </span>
        </motion.div>
      </div>

      {/* Hover overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-200/10 pointer-events-none"
        variants={overlayVariants as any}
        initial="initial"
      />
    </motion.div>
  );
};

export default CateringItemCard;