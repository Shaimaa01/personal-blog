import SocialLinks from "../components/SocialLinks";
import useFetchData from "../hooks/useFetchData";
import { formatDate } from "../utils/formatDate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showAll, setShowAll] = useState(false);
  const data = useFetchData();
  const shortData = data.slice(0, 5);
  const displayData = showAll ? data : shortData;
  const navigate = useNavigate();

  return (
    <main className="mx-[9px] px-[9px] border  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent font-DM">
      <section className="py-[48px]  flex flex-col gap-[24px] border-b dark:border-Neutral-700">
        <h1 className="text-Neutral-0 font-extrabold text-[32px] leading-[130%] tracking-[-0.5px] relative w-fit z-50">
          Hi, I&rsquo;m Paulina 👋
          <span className="w-full h-[8px] bg-Blue-700 absolute bottom-[2px] left-0 -z-1"></span>
        </h1>
        <p className="text-Neutral-400 text-[18px] leading-[150%] tracking-[-0.2px]">
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
      <section className="py-[48px] flex flex-col gap-[32px] border-b dark:border-Neutral-700">
        <h2 className="text-Neutral-0 font-extrabold text-[32px] leading-[130%] tracking-[-0.5px]">
          Latest Articles
          <span className="w-[40px] h-[3px] bg-Blue-700 inline-block ml-2"></span>
        </h2>
        <div className="flex flex-col gap-[24px]">
          {displayData.map((item) => (
            <article
              onClick={() => navigate(`/article/${item.slug}`)}
              key={item.slug}
              className="flex flex-col gap-[8px] cursor-pointer"
            >
              <h3 className="text-Neutral-0 font-semibold text-[20px] leading-[130%] tracking-[-0.5px]">
                {item.title}
              </h3>
              <p className="text-Neutral-400 italic text-[16px] leading-[130%] tracking-[-0.2px]">
                {formatDate(item.publishedAt)}
              </p>
            </article>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-start text-Neutral-0 font-medium text-[18px] leading-[150%] tracking-[-0.5px] underline decoration-Blue-700 decoration-[3px] underline-offset-3 cursor-pointer"
        >
          View all articles
        </button>
      </section>
    </main>
  );
}

export default Home;
