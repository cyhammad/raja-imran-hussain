import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { facebookIcon, instaIcon, twitterIcon, youtubeIcon } from "./icons";

const Banner = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-white via-secondary to-white pt-16">
      <section className="flex w-full max-w-7xl flex-col-reverse gap-10 px-5 py-20 sm:flex-row">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-3">
            <button className="rounded-full p-1">{instaIcon}</button>
            <button className="rounded-full p-1">{facebookIcon}</button>
            <button className="rounded-full p-1">{twitterIcon}</button>
            <button className="rounded-full p-1">{youtubeIcon}</button>
          </div>
          <div className="w-full text-5xl font-bold md:text-6xl lg:text-7xl">
            Hey there, <br />
            <span className="">Its Raja Imran Hussain</span>
          </div>
          <span className="text-xl leading-6 text-black/50">
            Welcome to the official page of Raja Imran Hussain, a leading
            advocate for disability rights and polio awareness in Pakistan. As a
            polio survivor, he has pioneered disabled cricket internationally
            and made history as the first disabled candidate in Pakistan's
            elections. His work has earned recognition from the United Nations
            and beyond. Explore his journey of resilience and commitment to
            inclusivity.
          </span>
          <div className="flex items-center gap-4 pt-6">
            <button className="flex items-center justify-center rounded-full border border-primary bg-primary px-10 py-2 text-lg text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary sm:text-xl">
              About me <ArrowRight size={20} className="" />
            </button>
            <button className="rounded-full border border-black px-10 py-2 text-lg transition-all duration-200 ease-in-out hover:bg-black hover:from-[#B86BDF] hover:to-[#FFAF4A] hover:text-white sm:text-xl">
              My Blogs
            </button>
          </div>
        </div>
        <div className="relative h-[300px] max-h-[300px] w-[300px] min-w-[300px] overflow-hidden rounded-full lg:h-[400px] lg:max-h-[400px] lg:w-[400px] lg:min-w-[400px]">
          <div className="absolute bottom-0 z-10">
            <Image
              src="/imran-nobg.png"
              quality={100}
              width={450}
              height={450}
              alt="Imran"
            />
          </div>
          <div className="absolute bottom-0 h-[150px] w-[120%] -rotate-6 bg-gradient-to-r from-primary to-secondary"></div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
