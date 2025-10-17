import Image from "next/image";
import Typingsection from "@/components/PlacementComponents/TypingSection";
import CASsection from "@/components/PlacementComponents/CASection";
import TrainingOverview from "@/components/PlacementComponents/TrainingOverview";
import Impact from "@/components/PlacementComponents/Impact";
import Companies from "@/components/PlacementComponents/Companies";
import ResearchLab from "@/components/PlacementComponents/ResearchLab";
import Career from "@/components/PlacementComponents/Career";
import Testimonials from "@/components/PlacementComponents/Testimonials";
import PlacementInformation from "@/components/PlacementComponents/PlacementInformation";
import Upskilling from "@/components/PlacementComponents/Upskilling";

function Placement() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="w-full relative h-[500px] md:h-[700px]">
        <Image
          src="/Banner.jpg" // place Banner.jpg in public folder
          alt="Indira College Banner"
          fill
          className="object-cover w-full h-full"
          priority // preloads the image for faster LCP
        />
      </section>
      <Typingsection />
      <CASsection />
      <TrainingOverview />
      <Impact />
      <Companies />
      <ResearchLab />
      <Career /> {/* Add logos etc here */}
      <Upskilling />
      <Testimonials />
      <PlacementInformation />
    </div>
  );
}

export default Placement;
