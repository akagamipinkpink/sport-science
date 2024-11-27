import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SparklesText from "@/components/ui/sparkles-text";
const AccordionComponent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-medium">
              Pertanyaan Umum tentang{" "}
              <span className="italic">Sport Science</span>
            </h2>
            <SparklesText text={"Kami punya jawabannya"} />
            {/*<h3 className="text-3xl">Kami punya jawabannya</h3>*/}
          </div>
          <p className="text-muted-foreground">
            Tim ahli kami siap membantu menjawab semua pertanyaan Anda seputar
            sport science, dari dasar teori hingga penerapan praktis dalam
            kehidupan sehari-hari.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger>
                Apakah sport science hanya untuk atlet profesional?
              </AccordionTrigger>
              <AccordionContent>
                Tidak, sport science cocok untuk siapa saja yang ingin memahami
                tubuh mereka, meningkatkan kebugaran, atau menjalani gaya hidup
                lebih sehat, baik pemula maupun atlet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger>
                Apa manfaat utama dari pendekatan sport science?
              </AccordionTrigger>
              <AccordionContent>
                Sport science membantu meningkatkan performa fisik, mencegah
                cedera, dan memberikan panduan berbasis data untuk mencapai
                tujuan kebugaran Anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger>
                Apakah saya memerlukan peralatan khusus atau mahal?
              </AccordionTrigger>
              <AccordionContent>
                Tidak selalu. Banyak konsep sport science dapat diterapkan
                dengan peralatan sederhana seperti matras yoga, resistance band,
                atau bahkan berat badan sendiri.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger>
                Apakah sport science dapat membantu dalam pemulihan cedera?
              </AccordionTrigger>
              <AccordionContent>
                Ya, sport science memiliki pendekatan sistematis untuk
                rehabilitasi cedera dengan fokus pada biomekanika, terapi fisik,
                dan program latihan terarah.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger>
                Bagaimana cara memulai dengan sport science?
              </AccordionTrigger>
              <AccordionContent>
                Anda dapat mulai dengan memahami dasar-dasar seperti nutrisi
                olahraga, teknik latihan yang benar, dan menggunakan teknologi
                sederhana seperti aplikasi kebugaran.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
