import { Copyright } from "lucide-react";
import { facebookIcon, instaIcon, twitterIcon, youtubeIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-primary px-5 pb-5 pt-8">
      <div className="flex w-full max-w-7xl gap-5 text-white flex-col items-center">
        <h1 className="text-4xl font-semibold">Raja Imran Hussain</h1>
        <div className="flex items-center gap-3">
          <button className="rounded-full p-1">{instaIcon}</button>
          <button className="rounded-full p-1">{facebookIcon}</button>
          <button className="rounded-full p-1">{twitterIcon}</button>
          <button className="rounded-full p-1">{youtubeIcon}</button>
        </div>
        <span className="text-center text-lg font-light">
          In conclusion, Raja Imran Hussain's unwavering dedication to
          disability advocacy, sports inclusivity, and social change continues
          to inspire and uplift communities both in Pakistan and around the
          world. His journey exemplifies the power of resilience and leadership
          in creating a more inclusive society. Join him in his mission to make
          a difference, one step at a time.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 py-3">
          <div className="flex items-center gap-1 px-3">
            <Copyright size={16} />
            <span className="uppercase">2024 - Copyright</span>
          </div>
          <div className="flex items-center gap-1 border-l border-black px-3">
            <span className="uppercase">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-1 border-l border-black px-3">
            <span className="uppercase">Terms and Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
