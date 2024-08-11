import { Quote } from "lucide-react";
import React from "react";

const MoreAboutStrip = () => {
  return (
    <div className="flex w-full items-center justify-center bg-primary px-5 py-16">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-2">
        <Quote size={32} />
        <p className="text-3xl font-light text-center max-w-3xl">
          Challenges are not roadblocks; they are opportunities to rise above
          and create a path for others to follow. Believe in your strength, and
          let your resilience lead the way.
        </p>
        <h1 className="text-4xl font-semibold">
            - Raja Imran Hussain
        </h1>
      </div>
    </div>
  );
};

export default MoreAboutStrip;
