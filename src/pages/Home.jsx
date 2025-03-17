import SocialLinks from "../components/SocialLinks";
import data from "../data.json";
import { formatDate } from "../utils/formatDate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showAll, setShowAll] = useState(false);
  const shortData = data.slice(0, 5);
  const displayData = showAll ? data : shortData;
  const navigate = useNavigate();

  return (
    <main className="flex-1 mx-[9px] px-[10px]  border border-Neutral-200  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <section className="py-[48px] max-lg:py-[32px] flex flex-col gap-[24px] border-b dark:border-Neutral-700 border-Neutral-200">
        <h1 className="text-Neutral-700 dark:text-Neutral-0 font-extrabold text-[32px] leading-[130%] tracking-[-0.5px] relative w-fit z-5">
          Hi, I&rsquo;m Paulina 👋
          <span className="w-full h-[8px] bg-Blue-500 dark:bg-Blue-700 absolute bottom-[3px] left-0 -z-1"></span>
        </h1>
        <p className="text-Neutral-600 dark:text-Neutral-400 text-[18px] leading-[150%] tracking-[-0.2px]">
          I&rsquo;m on a journey to become a front-end web developer. I love
          building little projects, trying out new coding techniques, and
          sharing what I learn along the way. When I&rsquo;m not at my desk,
          you&rsquo;ll find me reading, hiking through the mountains, or
          challenging myself on rock-climbing walls.
          <span className="block mt-[24px]">
            I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who&rsquo;s learning
            to code. Welcome to my corner of the internet, and thanks for
            stopping by!
          </span>
        </p>
        <SocialLinks />
      </section>
      <section className="py-[48px] max-lg:py-[32px]  flex flex-col gap-[32px] border-b border-Neutral-200 dark:border-Neutral-700 text-Neutral-700 dark:text-Neutral-0">
        <h2 className=" font-extrabold text-[32px] leading-[130%] tracking-[-0.5px]">
          Latest Articles
          <span className="w-[40px] h-[3px] bg-Blue-500 dark:bg-Blue-700 inline-block ml-2"></span>
        </h2>
        <div className="flex flex-col gap-[24px]">
          {displayData.map((item) => (
            <article
              onClick={() => navigate(`/article/${item.slug}`)}
              key={item.slug}
              className="flex flex-col gap-[8px] cursor-pointer
   
              "
            >
              <h3
                className=" font-semibold text-[20px] leading-[130%] tracking-[-0.5px] hover:opacity-70 hover:underline
              focus:bg-Neutral-100 focus:rounded-[8px] focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#5792C0] focus:underline-none
               focus:dark:bg-Neutral-900 focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:dark:underline-none
              "
              >
                {item.title}
              </h3>
              <p className="text-Neutral-600 dark:text-Neutral-400 italic text-[16px] leading-[130%] tracking-[-0.2px] ">
                {formatDate(item.publishedAt)}
              </p>
            </article>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-start w-fit  font-medium text-[18px] leading-[150%] tracking-[-0.5px] underline decoration-Blue-500 dark:decoration-Blue-700 decoration-[3px] underline-offset-3 cursor-pointer hover:opacity-70
          focus:bg-Neutral-100 focus:rounded-[8px] focus:shadow-[0_0_0_2px_#FBF9F7,0_0_0_4px_#5792C0] focus:decoration-transparent
          focus:dark:bg-Neutral-900 focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:dark:decoration-transparent
          "
        >
          View all articles
        </button>
      </section>
    </main>
  );
}

export default Home;
