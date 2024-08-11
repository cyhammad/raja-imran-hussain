import Banner from "@/components/Banner";
import HomeBlogSection from "@/components/HomeBlogSection";
import MoreAboutStrip from "@/components/MoreAboutStrip";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center">
      <Banner />
      <MoreAboutStrip />
      <HomeBlogSection />
    </main>
  );
}
