import PreviewBar from "@/components/preview/PreviewBar";
import HeroV2 from "@/components/preview/HeroV2";
import TrustBar from "@/components/ui/TrustBar";
import CoursesOverview from "@/components/sections/CoursesOverview";
import WhySRTutor from "@/components/sections/WhySRTutor";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import Testimonials from "@/components/sections/Testimonials";
import Toppers from "@/components/sections/Toppers";
import LocationStrip from "@/components/sections/LocationStrip";
import GalleryPreview from "@/components/sections/GalleryPreview";

export const metadata = {
  title: "Design Preview V2 — Warm Emerald | SR TUTOR",
  robots: { index: false, follow: false },
};

export default function PreviewV2() {
  return (
    <>
      <PreviewBar />
      <HeroV2 />
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
