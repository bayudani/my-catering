import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { pricingPackages } from "~/data/pricing";

const WA_NUMBER = "6283117071327";
const DURATIONS = [
  "1 Minggu",
  "2 Minggu",
  "3 Minggu",
  "1 Bulan",
  "2 Bulan",
  "3 Bulan",
];

const initialForm = {
  name: "",
  phone: "",
  address: "",
  package: "",
  duration: "",
  notes: "",
};

export function Order() {
  const [form, setForm] = useState(() => {
    const saved = sessionStorage.getItem("selectedPackage");
    if (saved) {
      sessionStorage.removeItem("selectedPackage");
      const match = pricingPackages.find((p) => p.name === saved);
      if (match) {
        return { ...initialForm, package: `${match.name} (${match.price})` };
      }
    }
    return initialForm;
  });
  const [sending, setSending] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const message = `Halo My-Catering, saya ingin memesan:

Nama: ${form.name}
No. WhatsApp: ${form.phone}
Alamat: ${form.address}
Paket: ${form.package}
Durasi: ${form.duration}
Catatan: ${form.notes || "-"}

Terima kasih.`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSending(false);
  }

  return (
    <section id="order" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
            Cara Pemesanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Pesan Catering Sekarang
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Isi form di bawah, dan pesanan Anda akan otomatis terkirim ke WhatsApp kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Masukkan nama Anda"
                      className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-shadow"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">
                      No. WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Contoh: 08123456789"
                      className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-shadow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder="Masukkan alamat lengkap (jalan, kecamatan, kota, kode pos)"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-shadow resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">
                      Pilih Paket <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.package}
                      onChange={(e) => update("package", e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-shadow appearance-none"
                    >
                      <option value="">Pilih paket...</option>
                      {pricingPackages.map((pkg) => (
                        <option key={pkg.name} value={`${pkg.name} (${pkg.price})`}>
                          {pkg.name} — {pkg.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">
                      Durasi <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.duration}
                      onChange={(e) => update("duration", e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-shadow appearance-none"
                    >
                      <option value="">Pilih durasi...</option>
                      {DURATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">
                    Catatan Tambahan
                  </label>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Alergi makanan, preferensi menu, request khusus..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-shadow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={sending}
                >
                  {sending ? (
                    "Memproses..."
                  ) : (
                    <>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Pesan Via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
