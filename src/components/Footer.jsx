import FrontendMentor from "../icons/FrontendMentor";
import TwitterX from "../icons/TwitterX";
import Linkdin from "../icons/Linkedin";
import GitHub from "../icons/GitHub";

function Footer() {
  return (
    <footer className=" mx-[9px] px-[9px] -mt-[1px]  flex justify-between items-center pb-[32px] pt-[17px]  text-Neutral-400 border  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <p className=" text-[16px] leading-[130%] tracking-[-0.2px]">
        Made with ❤️ and ☕️
      </p>
      <div className="flex gap-[16px] items-center ">
        <a
          href="https://x.com/shaimaa385863"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter X Profile"
        >
          <TwitterX />
        </a>

        <a
          href="https://github.com/Shaimaa01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GitHub />
        </a>

        <a
          href="https://www.linkedin.com/in/shaimaa-kamel-818bab31b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkdin />
        </a>

        <a
          href="https://www.frontendmentor.io/profile/Shaimaa01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Frontend Mentor Profile"
        >
          <FrontendMentor />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
