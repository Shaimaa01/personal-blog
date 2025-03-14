import FrontendMentor from "../icons/FrontendMentor";
import TwitterX from "../icons/TwitterX";
import Linkdin from "../icons/Linkedin";
import GitHub from "../icons/GitHub";

const SocialLinks = () => {
  return (
    <div className="flex gap-[12px] text-Neutral-700 dark:text-Neutral-0 items-center ">
      <a
        href="https://x.com/shaimaa385863"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter X Profile"
        className="w-[40px] h-[40px] bg-Neutral-0 dark:bg-Neutral-800  border border-Neutral-200 dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center
         hover:bg-Neutral-200 hover:dark:bg-Neutral-900 hover:border-Neutral-200 hover:dark:border-Neutral-700 hover:shadow-none
        focus:shadow-[0_0_0_2px_#FBF9F7,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#5792C0] 
          "
      >
        <TwitterX />
      </a>

      <a
        href="https://github.com/Shaimaa01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="w-[40px] h-[40px] bg-Neutral-0 dark:bg-Neutral-800 border border-Neutral-200 dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center hover:bg-Neutral-200 hover:dark:bg-Neutral-900 hover:border-Neutral-200 hover:dark:border-Neutral-700 hover:shadow-none"
      >
        <GitHub />
      </a>

      <a
        href="https://www.linkedin.com/in/shaimaa-kamel-818bab31b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="w-[40px] h-[40px] bg-Neutral-0 dark:bg-Neutral-800 border border-Neutral-200 dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center hover:bg-Neutral-200 hover:dark:bg-Neutral-900 hover:border-Neutral-200 hover:dark:border-Neutral-700 hover:shadow-none"
      >
        <Linkdin />
      </a>

      <a
        href="https://www.frontendmentor.io/profile/Shaimaa01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Frontend Mentor Profile"
        className="w-[40px] h-[40px] bg-Neutral-0 dark:bg-Neutral-800 border border-Neutral-200 dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center hover:bg-Neutral-200 hover:dark:bg-Neutral-900 hover:border-Neutral-200 hover:dark:border-Neutral-700 hover:shadow-none"
      >
        <FrontendMentor />
      </a>
    </div>
  );
};

export default SocialLinks;
