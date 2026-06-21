import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "~/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Apa Kata Pelanggan?
          </h2>
          <p className="text-neutral-600">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
