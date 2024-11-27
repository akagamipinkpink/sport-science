import { BarChart3, LeafyGreen, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";

const ManfaatDanKeunggulan = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mengapa Sport Science Penting untuk Semua Orang?
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sport science bukan hanya untuk atlet profesional. Ini membantu semua
          orang memahami tubuh mereka, meningkatkan kebugaran, mencegah cedera,
          dan menjalani gaya hidup yang lebih sehat dan aktif.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="p-6 rounded-xl relative overflow-hidden border bg-card">
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Bagi Atlet Profesional:
            </h3>
            <p className="text-muted-foreground">
              Meningkatkan kecepatan, kekuatan, dan daya tahan melalui program
              latihan berbasis sains.
            </p>
            <BorderBeam size={250} duration={4} delay={9} />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>

          <div className="p-6 rounded-xl border bg-card relative overflow-hidden">
            <div className="w-12 h-12 rounded-lg bg-red-50  flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bagi Individu Aktif:</h3>
            <p className="text-muted-foreground">
              Membantu mencapai tujuan kebugaran pribadi, seperti penurunan
              berat badan atau peningkatan stamina.
            </p>
            <BorderBeam size={250} duration={8} delay={9} />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
        </div>

        {/* Center Column - Phone Mockup */}
        <div className="relative">
          <div className="rounded-3xl p-8 relative">
            <img
              src="/Badminton.jpeg"
              alt="Trading app interface"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="p-6 rounded-xl border bg-card relative overflow-hidden">
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Untuk Kesehatan Masyarakat:
            </h3>
            <p className="text-muted-foreground">
              Mencegah penyakit kronis melalui pendekatan aktivitas fisik yang
              aman dan terarah.
            </p>
            <BorderBeam size={250} duration={12} delay={9} />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>

          <div className="p-6 rounded-xl border bg-card relative overflow-hidden">
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
              <LeafyGreen className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pencegahan Cedera:</h3>
            <p className="text-muted-foreground">
              Mengurangi risiko cedera dengan teknik dan alat yang tepat.
            </p>
            <BorderBeam size={250} duration={18} delay={9} />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManfaatDanKeunggulan;
