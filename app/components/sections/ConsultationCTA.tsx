import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "~/components/ui/button";

export function ConsultationCTA() {
  return (
    <section id="order" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl shadow-primary-200"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 w-fit">
                <CalendarCheck size={16} className="text-white" />
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Gratis
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Konsultasi Gratis Dengan Ahli Gizi
              </h2>

              <p className="text-primary-100 mb-8 max-w-md leading-relaxed">
                Dapatkan rekomendasi menu sesuai kebutuhan tubuh Anda. Tim ahli
                gizi kami siap membantu Anda memulai pola makan sehat yang tepat.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Analisis kebutuhan gizi harian",
                  "Rekomendasi menu personal",
                  "Tips pola makan sehat",
                  "Jadwal konsultasi fleksibel",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-primary-50 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50 gap-2 w-fit"
              >
                Jadwalkan Konsultasi
                <ArrowRight size={18} />
              </Button>
            </div>

            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="Nutritionist consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-primary-600/30 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
