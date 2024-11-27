import Image from "next/image";
import { Globe2, Target, UserX } from "lucide-react";
import Particles from "@/components/ui/particles";

const FaktaMenarik = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl relative">
      <div className="space-y-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start mt-16 relative">
          {/* Left Column - Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/manfaat2.jpeg"
              alt="Business meeting scene with two people at a desk"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 md:pt-12">
            <h2 className="text-[#1a1a4b] text-3xl md:text-4xl font-bold">
              Fakta Menarik tentang Sport Science
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Globe2 className="h-6 w-6 text-gray-600 flex-shrink-0" />
                <p className="text-gray-700">
                  “Atlet yang menggunakan analisis biomekanika menunjukkan
                  peningkatan performa hingga 20%.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <UserX className="h-6 w-6 text-gray-600 flex-shrink-0" />
                <p className="text-gray-700">
                  “Latihan berbasis sains mengurangi risiko overtraining hingga
                  50%.”
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Target className="h-6 w-6 text-gray-600 flex-shrink-0" />
                <p className="text-gray-700">
                  “Nutrisi olahraga yang tepat dapat meningkatkan pemulihan
                  hingga 30% lebih cepat.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={2000}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  );
};

export default FaktaMenarik;
