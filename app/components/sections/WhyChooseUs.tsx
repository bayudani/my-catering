import { motion } from "framer-motion";
import { Leaf, ChefHat, Sparkles, Truck } from "lucide-react";
import { benefits } from "~/data/benefits";

const icons = [Leaf, ChefHat, Sparkles, Truck];

const bentoItems = [
  {
    benefit: benefits[0],
    icon: icons[0],
    className: "col-span-2",
    featured: true,
  },
  {
    benefit: benefits[1],
    icon: icons[1],
    className: "",
  },
  {
    benefit: benefits[2],
    icon: icons[2],
    className: "",
  },
  {
    benefit: benefits[3],
    icon: icons[3],
    className: "col-span-2",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-spacing bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
            Kenapa My-Catering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-neutral-600">
            Kami berkomitmen memberikan layanan catering sehat terbaik untuk
            mendukung gaya hidup Anda
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-full min-h-[300px] lg:min-h-0"
          >
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
              alt="Chef preparing healthy meal"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {bentoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group ${item.className}`}
                >
                  <div
                    className={`relative h-full rounded-2xl border border-neutral-100 bg-white p-5 md:p-6 transition-all duration-300 hover:border-primary-200 hover:shadow-lg ${
                      item.featured
                        ? "bg-gradient-to-br from-white to-primary-50/40"
                        : ""
                    }`}
                  >
                    <div className="mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors">
                        <Icon size={22} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-neutral-900 text-sm md:text-base mb-1.5">
                      {item.benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                      {item.benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
