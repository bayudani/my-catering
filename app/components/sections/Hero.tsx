import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "~/components/ui/button";

const highlights = [
  "Bahan segar berkualitas",
  "Gizi seimbang tepat takaran",
  "Tanpa MSG & pengawet",
  "Masak fresh setiap hari",
];

export function Hero() {
  return (
    <section id="hero" className="pt-20 md:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                Catering Sehat Premium
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Menu Sehat, Praktis,{" "}
              <span className="text-primary-600">dan Bergizi</span> Setiap Hari
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
              My-Catering hadir untuk membantu Anda menjaga pola makan sehat dengan
              menu bergizi, bahan berkualitas, dan pengolahan higienis.
            </p>

            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <CheckCircle2
                    size={20}
                    className="text-primary-600 shrink-0"
                  />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#weekly-menu">
                <Button size="lg" className="gap-2">
                  Lihat Menu Mingguan
                  <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#pricing">
                <Button variant="secondary" size="lg">
                  Pilih Paket
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
                alt="Healthy meal bowl with fresh ingredients"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl">🥗</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  100% Fresh
                </p>
                <p className="text-xs text-neutral-500">Every single day</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Chef Profesional
                </p>
                <p className="text-xs text-neutral-500">Experience 10+ years</p>
              </div>
            </div>

            <div className="absolute top-1/2 -left-6 w-16 h-16 rounded-full bg-primary-100/50 -z-10 blur-xl" />
            <div className="absolute bottom-1/3 -right-8 w-24 h-24 rounded-full bg-primary-200/30 -z-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
