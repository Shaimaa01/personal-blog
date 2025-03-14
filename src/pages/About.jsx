import { useEffect, useState } from "react";
import workspaceLarge from "/assets/images/image-workspace-large.jpg";
import workspaceSmall from "/assets/images/image-workspace-small.jpg";
import SocialLinks from "../components/SocialLinks";
function About() {
  const [workspaceImage, setWorkSpaceImage] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setWorkSpaceImage(workspaceLarge);
      } else {
        setWorkSpaceImage(workspaceSmall);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="mx-[9px] px-[10px] border border-Neutral-200  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <div className="flex flex-col gap-[24px] border-b border-Neutral-200 dark:border-Neutral-700 py-[48px] max-lg:py-[32px] max-sm:pb-[24px]">
        <h1 className="text-Neutral-700 dark:text-Neutral-0  font-extrabold text-[32px] leading-[130%] tracking-[-0.5px] relative w-fit z-50">
          About Me
          <span className="w-full h-[8px] bg-Blue-500 dark:bg-Blue-700 absolute bottom-[5px] left-0 -z-1"></span>
        </h1>
        <section className="flex flex-col gap-[24px] text-Neutral-600 dark:text-Neutral-400 text-[18px] leading-[150%] tracking-[-0.2px]">
          <p>
            Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
            creativity and problem-solving. That’s what led me to the world of
            front-end web development. There’s something magical about seeing an
            idea come to life in the browser—whether it’s a simple layout
            experiment or a complex interface for a bigger project.
          </p>
          <p>
            When I’m not coding, I love getting lost in a good book. My taste is
            pretty eclectic: I’ll happily read everything from fantasy novels to
            biographies of tech pioneers. Reading helps me unwind and often
            sparks new ideas for my coding projects.
          </p>
          <p>
            Another big passion of mine is the great outdoors. Hiking allows me
            to disconnect from the digital world and reconnect with nature. I
            love challenging hikes with rewarding views at the top. And if I’m
            not on the trails, you might catch me rock climbing. The combination
            of mental focus and physical endurance is a perfect parallel to
            tackling tough coding challenges!
          </p>
          <p>Some of my favorite books:</p>
          <ul className="list-disc ps-7">
            <li>
              <b>“The Pragmatic Programmer” </b>by Andrew Hunt and David Thomas
              (for helpful insights into software development)
            </li>
            <li>
              <b>“Ready Player One”</b>by Ernest Cline (for some futuristic
              escapism)
            </li>
            <li>
              <b>“The Hobbit”</b>by J.R.R. Tolkien (for a bit of fantasy fun)
            </li>
            <li>
              <b>“Educated”</b> by Tara Westover (for incredible inspiration)
            </li>
          </ul>
          <p>
            I absolutely love my workspace as a place that inspires me to do my
            best work, so I thought I’d share it with you:
          </p>
          <img
            src={workspaceImage}
            alt="work space image"
            className="rounded-[12px]"
          />
          <p>
            I hope this blog not only documents my growth but also helps others
            see that coding can be for everyone. Thanks for joining me on this
            journey!
          </p>
        </section>
        <section className="flex flex-col gap-[16px]">
          <h2 className="text-Neutral-700 dark:text-Neutral-0  font-semibold text-[24px] leading-[130%] tracking-[-0.5px]">
            Follow me
          </h2>
          <SocialLinks />
        </section>
      </div>
    </main>
  );
}

export default About;
