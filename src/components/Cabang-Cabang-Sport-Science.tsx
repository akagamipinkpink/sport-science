import { Bike, UserRoundSearch, Pill } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const CabangCabangSportScience = () => {
  return (
    <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Cabang-Cabang Ilmu dalam Sport Science
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Jelajahi berbagai bidang yang menjadi dasar sport science untuk
          meningkatkan performa, mencegah cedera, dan mendukung kebugaran Anda.
        </p>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Fisiologi Olahraga */}
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 relative">
              <BorderBeam size={250} duration={18} delay={9} />
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 border border-black/20 rounded-md shadow-lg">
                    <UserRoundSearch className="w-6 h-6 text-red-500" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Fisiologi Olahraga
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Pelajari cara tubuh menghasilkan energi, merespons latihan,
                  dan beradaptasi untuk performa optimal.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Nutrisi dan Gizi Olahraga */}
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 relative">
              <BorderBeam size={250} duration={18} delay={9} />
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center border border-black/20 justify-center p-3 rounded-md shadow-lg">
                    <Pill className="w-6 h-6 text-red-500" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Nutrisi dan Gizi Olahraga
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Optimalkan performa dan pemulihan Anda dengan pola makan yang
                  dirancang berdasarkan kebutuhan atlet.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Biomekanika */}
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 relative">
              <BorderBeam size={250} duration={18} delay={9} />
              <div className="-mt-6">
                <div>
                  <span className="inline-flex border border-black/20 items-center justify-center p-3 rounded-md shadow-lg">
                    <Bike className="w-6 h-6 text-red-500" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Biomekanika
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Analisis gerakan tubuh untuk meningkatkan efisiensi teknik,
                  memperbaiki performa, dan mencegah cedera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabangCabangSportScience;
