import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/ui/TrustBar";
import CoursesOverview from "@/components/sections/CoursesOverview";
import WhySRTutor from "@/components/sections/WhySRTutor";
import Toppers from "@/components/sections/Toppers";
import Testimonials from "@/components/sections/Testimonials";
import GalleryPreview from "@/components/sections/GalleryPreview";
import LocationStrip from "@/components/sections/LocationStrip";
import LocalBusinessSchema from "@/components/ui/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <TrustBar />
      <CoursesOverview />
      <WhySRTutor />
      <Toppers />
      <Testimonials />
      <GalleryPreview />
      <LocationStrip />
    </>
  );
}
