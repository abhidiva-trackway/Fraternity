import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { CateringMenus } from "../data/items";
import CateringItemCard from "./CateringItemCard";
import type { CateringItem } from "../types";

const ScrollAnimatedCardGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  // 🧠 Determine current or upcoming event
  const { currentMenu, upcomingDate } = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    const sortedMenus = [...CateringMenus].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const todayMenu = sortedMenus.find(menu => menu.date === today);
    if (todayMenu) return { currentMenu: todayMenu, upcomingDate: null };

    const upcoming = sortedMenus.find(menu => new Date(menu.date) > new Date(today));
    return { currentMenu: null, upcomingDate: upcoming?.date || null };
  }, []);

  // 🍽️ Convert menu object into array of CateringItem objects
  const itemsArray: CateringItem[] = useMemo(() => {
    if (!currentMenu) return [];
    const items: CateringItem[] = [];
    Object.entries(currentMenu.menu).forEach(([category, names]) => {
      names.forEach((name, idx) => {
        items.push({
          id: `${category}-${idx}`,
          name,
          category,
          description: "",
        });
      });
    });

    // 💬 Add WhatsApp contact card at the end
    items.push({
      id: "whatsapp-contact",
      name: "Have questions? Message us on WhatsApp",
      category: "Contact",
      description: "Tap below to reach us instantly!",
    });

    return items;
  }, [currentMenu]);

  return (
    <motion.div
      ref={gridRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="max-w-6xl mx-auto px-4"
    >
      {currentMenu ? (
        // ✅ Show menu grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsArray.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
                },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {item.id === "whatsapp-contact" ? (
                <a
                  href="https://wa.me/919845222522?text=Hello%2C%20I%20want%20to%20inquire%20about%20the%20menu!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 hover:bg-green-600 text-white text-center px-6 py-10 rounded-lg font-semibold text-lg shadow-md transition-all duration-300"
                >
                  💬 Message Us on WhatsApp
                </a>
              ) : (
                <CateringItemCard item={item} index={index} />
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        // 🚀 Show upcoming event message
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            🍽️ No Event Today
          </h2>
          <p className="text-lg text-gray-600">
            Our next event is on{" "}
            <span className="font-semibold text-green-600">
              {upcomingDate
                ? new Date(upcomingDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "TBA"}
            </span>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ScrollAnimatedCardGrid;
