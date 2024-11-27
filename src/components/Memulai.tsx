const Memulai = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 text-center bg-neutral-100">
      <div className="space-y-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Langkah Pertama untuk Meningkatkan Performa Anda
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Mulailah perjalanan Anda dengan pendekatan berbasis ilmu olahraga yang
          dirancang untuk hasil optimal.
        </p>
      </div>

      <div className="relative">
        {/* Dotted lines connecting the stats */}
        <div className="absolute top-5 left-1/4 right-1/4 h-px border-t-2 border-dashed border-muted-foreground/25 hidden md:block" />

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Stat 1 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900 font-semibold mx-auto">
              1
            </div>
            <div>
              <div className="text-lg font-medium text-muted-foreground">
                Pelajari Dasar-Dasar Ilmu Olahraga
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Mulai dari memahami fungsi tubuh hingga teknik dasar latihan, ilmu
              ini membantu Anda membangun fondasi yang kuat.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900 font-semibold mx-auto">
              2
            </div>
            <div>
              <div className="text-lg font-medium text-muted-foreground">
                Manfaatkan Teknologi Kebugaran Modern
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Gunakan perangkat seperti pelacak kebugaran untuk memantau
              performa Anda dan melacak kemajuan secara akurat.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900 font-semibold mx-auto">
              3
            </div>
            <div>
              <div className="text-lg font-medium text-muted-foreground">
                Dapatkan Bimbingan Ahli Sport Science
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Konsultasi dengan para ahli untuk rencana kebugaran yang
              disesuaikan dengan kebutuhan dan tujuan Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memulai;
