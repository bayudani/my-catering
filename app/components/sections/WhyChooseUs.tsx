import { motion } from "framer-motion";
import { benefits } from "~/data/benefits";

const iconMap: Record<string, string> = {
  "🍃": "leaf",
  "🧑‍🍳": "chef",
  "✨": "sparkle",
  "🚚": "truck",
};

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
