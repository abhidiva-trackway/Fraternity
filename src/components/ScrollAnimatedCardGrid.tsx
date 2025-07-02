import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import { cateringItems } from "../data/cateringItems";
import CateringItemCard from "./CateringItemCard";
const ScrollAnimatedCardGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={gridRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {cateringItems.map((item, index) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9],
              }
            }
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          <CateringItemCard item={item} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollAnimatedCardGrid;