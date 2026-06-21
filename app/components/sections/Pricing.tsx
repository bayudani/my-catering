import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { pricingPackages } from "~/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
            Paket & Harga
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Pilih Paket Sesuai Kebutuhan
          </h2>
          <p className="text-neutral-600">
            Mulai perjalanan hidup sehat Anda dengan paket catering pilihan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 flex flex-col ${
                pkg.highlighted
                  ? "bg-primary-600 border-primary-600 text-white shadow-2xl shadow-primary-200 scale-105"
                  : pkg.custom
                  ? "bg-white border-dashed border-neutral-300 hover:border-primary-400"
                  : "bg-white border-neutral-100 hover:border-primary-300 hover:shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-800 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Terpopuler
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    pkg.highlighted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-4xl font-bold ${
                      pkg.highlighted ? "text-white" : "text-primary-600"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={
                      pkg.highlighted
                        ? "text-primary-100 text-sm"
                        : "text-neutral-400 text-sm"
                    }
                  >
                    {pkg.custom ? "" : "/hari"}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    pkg.highlighted
                      ? "text-primary-100"
                      : "text-neutral-500"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        pkg.highlighted
                          ? "text-primary-200"
                          : "text-primary-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        pkg.highlighted
                          ? "text-primary-50"
                          : "text-neutral-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlighted ? "secondary" : "default"}
                className={`w-full ${
                  pkg.highlighted
                    ? "bg-white text-primary-700 hover:bg-primary-50"
                    : ""
                } ${pkg.custom ? "border-primary-600 text-primary-600 border-2 bg-transparent hover:bg-primary-50" : ""}`}
              >
                {pkg.custom ? "Hubungi Kami" : "Pilih Paket"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
