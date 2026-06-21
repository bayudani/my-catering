import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Mail size={28} className="text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dapatkan Info Menu Terbaru
          </h2>

          <p className="text-primary-100 mb-8 max-w-md mx-auto">
            Berlangganan newsletter untuk mendapatkan update menu mingguan, tips
            sehat, dan promo spesial
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 h-12 px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
            />
            <Button
              type="submit"
              className="bg-white text-primary-700 hover:bg-primary-50 gap-2 shrink-0"
            >
              Berlangganan
              <ArrowRight size={16} />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
