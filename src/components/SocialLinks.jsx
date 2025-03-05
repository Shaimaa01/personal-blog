import FrontendMentor from "../icons/FrontendMentor";
import TwitterX from "../icons/TwitterX";
import Linkdin from "../icons/Linkedin";
import GitHub from "../icons/GitHub";

const SocialLinks = () => {
  return (
    <div className="flex gap-[12px] dark:text-Neutral-0 items-center ">
      <a
        href="https://x.com/shaimaa385863"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter X Profile"
        className="w-[40px] h-[40px] dark:bg-Neutral-800 border dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center"
      >
        <TwitterX />
      </a>

      <a
        href="https://github.com/Shaimaa01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="w-[40px] h-[40px] dark:bg-Neutral-800 border dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center"
      >
        <GitHub />
      </a>

      <a
        href="https://www.linkedin.com/in/shaimaa-kamel-818bab31b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="w-[40px] h-[40px] dark:bg-Neutral-800 border dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center"
      >
        <Linkdin />
      </a>

      <a
        href="https://www.frontendmentor.io/profile/Shaimaa01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Frontend Mentor Profile"
        className="w-[40px] h-[40px] dark:bg-Neutral-800 border dark:border-Neutral-700 shadow-[0px_2px_0px_0px_rgba(72,77,91,0.4)] rounded-[10px] flex justify-center items-center"
      >
        <FrontendMentor />
      </a>
    </div>
  );
};

export default SocialLinks;
