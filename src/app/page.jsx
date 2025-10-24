import AcademicYearSection from "@/components/home/AcademicYearSection";
import CampusBeat from "@/components/home/CampusBeat";
import CollegeUnplugged from "@/components/home/CollegeUnplugged";
import DiscoverPaths from "@/components/home/DiscoverPaths";
import EnergyInnovation from "@/components/home/EnergyInnovation";
import EventsSection from "@/components/home/EventSection";
import ExploreSection from "@/components/home/ExploreSection";
import FacultySection from "@/components/home/FacultySection";
import HeroSlider from "@/components/home/HeroSlider";
import InstagramMosaic from "@/components/home/InstagramMosaic";
import NewsSection from "@/components/home/NewsSection";
import RecruitersSection from "@/components/home/RecruiterSection";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <HeroSlider />
      <ExploreSection />
      <DiscoverPaths />
      <AcademicYearSection />
      <RecruitersSection />
      <EnergyInnovation />
      <CampusBeat />
      <CollegeUnplugged />
 
      <NewsSection />
      <EventsSection />
      <InstagramMosaic />
      {/* <InstagramFeed /> */}
    </div>
  );
}
