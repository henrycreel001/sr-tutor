import PreviewBar from "@/components/preview/PreviewBar";
import HeroV3 from "@/components/preview/HeroV3";
import TrustBar from "@/components/ui/TrustBar";
import CoursesOverview from "@/components/sections/CoursesOverview";
import WhySRTutor from "@/components/sections/WhySRTutor";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import Testimonials from "@/components/sections/Testimonials";
import Toppers from "@/components/sections/Toppers";
import LocationStrip from "@/components/sections/LocationStrip";
import GalleryPreview from "@/components/sections/GalleryPreview";

export const metadata = {
  title: "Design Preview V3 — Modern Minimal | SR TUTOR",
  robots: { index: false, follow: false },
};

export default function PreviewV3() {
  return (
    <>
      <PreviewBar />
      <HeroV3 />
      <TrustBar />
      <CoursesOverview />
      <WhySRTutor />
      <FounderSpotlight />
      <Testimonials />
      <Toppers />
      <LocationStrip />
      <GalleryPreview />
    </>
  );
}
