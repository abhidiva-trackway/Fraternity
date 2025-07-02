// ─── constants.ts ───
export const CATEGORY_ICONS: Record<string,string> = {
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

export const cardVariants = {
  hidden: { x: (dir:number)=>dir*40, opacity:0, scale:0.96 },
  enter: (i:number)=>({
    x:0, opacity:1, scale:1,
    transition:{ type:'spring', stiffness:120, damping:15, delay:i*0.05 }
  }),
  hover: { y:-6, boxShadow:'0 12px 24px -8px rgba(180,83,9,0.2)' }
};

export const PETAL_STYLES = Array.from({ length: 8 }).map(() => ({
  left: Math.random()*100 + '%',
  top: `${-20 - Math.random()*20}%`,
  fontSize:`${10+Math.random()*16}px`,
  filter:`blur(${Math.random()*2}px)`
}));
