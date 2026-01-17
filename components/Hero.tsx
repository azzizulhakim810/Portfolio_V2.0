import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Hero = () => {
  return (
    <>
      {/* Spotlight  */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Main Content  */}
      <div className="h-screen w-full relative flex items-center justify-center bg-white dark:bg-grid-white/[0.1] bg-grid-black-100/[0.2] dark:bg-black-100  ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>

        {/* Hero Content  */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Welcome to My Portfolio
            </h2>

            <TextGenerateEffect
              words="Transforming Ideas into Seamless Experiences"
              // duration={}
              filter={true}
            />
            <p className=" text-center text-black-600 dark:text-white-400 max-w-xl md:text-lg lg:text-xl mb-4 ">
              Hi, I'm Azzizul, a passionate web developer based in Bangladesh.
            </p>

            <a href="#about">
              <MagicButton
                title="Show My Work"
                position="right"
                icon={<FaLocationArrow />}
                otherClasses="rounded-[10px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
