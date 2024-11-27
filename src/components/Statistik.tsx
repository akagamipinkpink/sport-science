import { BarChart3 } from "lucide-react";
import NumberTicker from "@/components/ui/number-ticker";
const Statistik = () => {
  return (
    <div className="relative w-full min-h-[300px]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-8 text-center ">
          {/* Assets Managed */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center mx-auto">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-4xl font-light">
              <NumberTicker value={70} />%
            </h2>
            <p className="text-gray-500">
              Cedera olahraga dapat dicegah dengan teknik latihan yang benar.
            </p>
          </div>

          {/* CDIC Coverage */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center mx-auto">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-4xl font-light">
              <NumberTicker value={80} />%
            </h2>
            <p className="text-gray-500">
              Atlet top dunia menggunakan sport science untuk meningkatkan
              performa mereka
            </p>
          </div>

          {/*//Management Fees */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center mx-auto">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-4xl font-light">
              <NumberTicker value={75} />%
            </h2>
            <p className="text-gray-500">
              Orang merasa lebih bahagia dan memiliki tingkat stres yang lebih
              rendah setelah berolahraga secara rutin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistik;
