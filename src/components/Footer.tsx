export default function Footer() {
  return (
    <footer className="bg-[#F5252D] text-white px-6 py-12 md:px-16">
      <div className="w-full mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Kolom 1: Deskripsi */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tentang Kami</h3>
            <p className="text-sm leading-relaxed">
              Kami percaya bahwa sport science dapat diakses oleh semua orang,
              dari pemula hingga atlet profesional. Tujuan kami adalah membantu
              Anda mencapai kebugaran optimal melalui pendekatan berbasis ilmu
              pengetahuan.
            </p>
          </div>
        </div>

        {/* Batas Bawah */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 Wika Teach. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
