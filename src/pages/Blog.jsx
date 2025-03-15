import useFetchData from "../hooks/useFetchData";
import { formatDate } from "../utils/formatDate";
import { useNavigate } from "react-router-dom";

function Blog() {
  const data = useFetchData();
  const navigate = useNavigate();

  return (
    <main className="mx-[9px] px-[10px]  border border-Neutral-200  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent">
      <div className="border-b border-Neutral-200 dark:border-Neutral-700 py-[48px] max-lg:py-[32px]">
        <section className="pb-[24px] border-b border-Neutral-200 dark:border-Neutral-700">
          <h1 className="text-Neutral-700 dark:text-Neutral-0 font-extrabold text-[32px] leading-[130%] tracking-[-0.5px]">
            My Articles
            <span className="w-[40px] h-[3px] bg-Blue-500 dark:bg-Blue-700 inline-block ml-2"></span>
          </h1>
          <p className="text-Neutral-600 dark:text-Neutral-400 text-[18px] leading-[150%] tracking-[-0.2px] mt-[6px]">
            Below are all my recent blog posts. Click on any title to read the
            full article.
          </p>
        </section>
        {/* articles */}
        {data?.map((item) => (
          <article
            onClick={() => navigate(`/article/${item.slug}`)}
            key={item.slug}
            className="flex flex-col gap-[8px] cursor-pointer py-[20px] border-b border-Neutral-200 dark:border-Neutral-700 last:border-transparent"
          >
            <h2 className="text-Neutral-700 dark:text-Neutral-0 font-semibold text-[20px] leading-[130%] tracking-[-0.5px]">
              {item.title}
            </h2>
            <p className=" text-Neutral-600 dark:text-Neutral-400 italic text-[16px] leading-[130%] tracking-[-0.2px]">
              {formatDate(item.publishedAt)}
            </p>
            <p className="text-Neutral-600 dark:text-Neutral-400 text-[18px] leading-[150%] tracking-[-0.2px] ">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Blog;
