import { Pill, UserRoundSearch, Bike } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const PenjelasanUmum = () => {
  return (
    <div id={"sportScienceSection"}>
      <BackgroundBeamsWithCollision className={"mx-auto px-4 py-12"}>
        <div className="flex flex-col justify-center items-start">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Apa Itu{" "}
              <span className="text-[#F5252D] italic">Sport Science?</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Sport science adalah cabang ilmu yang mempelajari bagaimana tubuh
              manusia bekerja selama aktivitas fisik untuk meningkatkan
              performa, kesehatan, dan kebugaran. Disiplin ini melibatkan
              penelitian di bidang
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6">
                <UserRoundSearch className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">Fisiologi</h3>
              <p className="text-gray-600 mb-4">
                Bagaimana tubuh memproduksi energi dan merespons latihan.
              </p>
              <button className="text-red-500 hover:text-red-600">
                Read more
              </button>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6">
                <Bike className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">Biomekanika</h3>
              <p className="text-gray-600 mb-4">
                Menganalisis gerakan untuk efisiensi dan pencegahan cedera.
              </p>
              <button className="text-red-500 hover:text-red-600">
                Read more
              </button>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6">
                <Pill className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">Gizi Olahraga</h3>
              <p className="text-gray-600 mb-4">
                Memberikan panduan nutrisi yang tepat untuk performa dan
                pemulihan.
              </p>
              <button className="text-red-500 hover:text-red-600">
                Read more
              </button>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default PenjelasanUmum;
