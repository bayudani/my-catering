import { motion } from "framer-motion";
import { Clock, Flame } from "lucide-react";
import { useState } from "react";
import { weeklyMenu } from "~/data/menu";

const mealTypes = [
  { key: "breakfast", label: "Sarapan", emoji: "🌅" },
  { key: "lunch", label: "Makan Siang", emoji: "☀️" },
  { key: "dinner", label: "Makan Malam", emoji: "🌙" },
  { key: "snack", label: "Camilan", emoji: "🍿" },
] as const;

type MealKey = (typeof mealTypes)[number]["key"];

export function WeeklyMenu() {
  const [activeDay, setActiveDay] = useState(0);

  const currentDay = weeklyMenu[activeDay];

  const getImageByKey = (key: MealKey) => {
    const map: Record<MealKey, string> = {
      breakfast: currentDay.breakfast.image,
      lunch: currentDay.lunch.image,
      dinner: currentDay.dinner.image,
      snack: currentDay.snack.image,
    };
    return map[key];
  };

  return (
    <section id="weekly-menu" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
            Menu Mingguan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Menu Minggu Ini
          </h2>
          <p className="text-neutral-600">
            Menu bervariasi setiap hari dengan gizi seimbang dan bahan segar
            berkualitas
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {weeklyMenu.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeDay === idx
                  ? "bg-primary-600 text-white shadow-md shadow-primary-200"
                  : "bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-700"
              }`}
            >
              {item.day}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mealTypes.map((meal, idx) => {
            const item = currentDay[meal.key];
            return (
              <motion.div
                key={meal.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={getImageByKey(meal.key)}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
                      {meal.emoji} {meal.label}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white font-semibold text-sm drop-shadow-sm">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Flame size={14} className="text-primary-600" />
                        {item.calories} kal
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-primary-600 font-medium">P</span>
                        {item.protein}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
