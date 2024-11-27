import HeroSection from "@/components/Hero-Section";
import PenjelasanUmum from "@/components/Penjelasan-Umum";
import ManfaatDanKeunggulan from "@/components/Manfaat-dan-Keunggulan";
import Statistik from "@/components/Statistik";
import CabangCabangSportScience from "@/components/Cabang-Cabang-Sport-Science";
import FaktaMenarik from "@/components/Fakta-Menarik";
import Memulai from "@/components/Memulai";
import AccordionComponent from "@/components/Accordion";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <HeroSection />
      <PenjelasanUmum />
      <ManfaatDanKeunggulan />
      <Statistik />
      <CabangCabangSportScience />
      <FaktaMenarik />
      <Memulai />
      <AccordionComponent />
      <Footer />
    </>
  );
};

export default Page;
