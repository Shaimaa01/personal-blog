import FrontendMentor from "../icons/FrontendMentor";
import TwitterX from "../icons/TwitterX";
import Linkdin from "../icons/Linkedin";
import GitHub from "../icons/GitHub";

function Footer() {
  return (
    <footer className=" mx-[9px] px-[10px] -mt-[1px]  flex justify-between items-center pb-[32px] max-lg:pb-[20px] max-sm:pb-[16px] pt-[17px] text-Neutral-600 dark:text-Neutral-400 border border-Neutral-200  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <p className=" text-[16px] leading-[130%] tracking-[-0.2px]">
        Made with ❤️ and ☕️
      </p>
      <div className="flex gap-[16px] items-center  ">
        <a
          href="https://x.com/shaimaa385863"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter X Profile"
          className="hover:opacity-70 focus:bg-Neutral-100 focus:dark:bg-Neutral-800 focus:shadow-[0_0_0_2px_#FBF9F7,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:rounded-[2px] "
        >
          <TwitterX />
        </a>

        <a
          href="https://github.com/Shaimaa01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:opacity-70 focus:bg-Neutral-100 focus:dark:bg-Neutral-800 focus:shadow-[0_0_0_2px_#FBF9F7,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:rounded-[2px] "
        >
          <GitHub />
        </a>

        <a
          href="https://www.linkedin.com/in/shaimaa-kamel-818bab31b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:opacity-70 focus:bg-Neutral-100 focus:dark:bg-Neutral-800 focus:shadow-[0_0_0_2px_#FBF9F7,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:rounded-[2px] "
        >
          <Linkdin />
        </a>

        <a
          href="https://www.frontendmentor.io/profile/Shaimaa01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Frontend Mentor Profile"
          className="hover:opacity-70 focus:bg-Neutral-100 focus:dark:bg-Neutral-800 focus:shadow-[0_0_0_2px_#FBF9F7,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:rounded-[2px] "
        >
          <FrontendMentor />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
