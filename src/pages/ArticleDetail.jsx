import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";

function ArticleDetail() {
  const { slug } = useParams();
  const data = useFetchData();
  const article = data.find((item) => item.slug === slug);

  if (!article) return <p className="text-Neutral-0">Article not found.</p>;

  return (
    <main className="mx-[9px] px-[9px] py-[48px] border  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent font-DM">
      <h1 className="text-Neutral-0  font-extrabold text-[40px] leading-[130%] tracking-[-1px]">
        {article.title}
      </h1>
      <p className="py-[12px] text-Neutral-400 italic text-[16px] leading-[130%] tracking-[-0.2px]">
        Published {formatDate(article.publishedAt)}
      </p>
      <article className=" markdown prose prose-invert">
        <ReactMarkdown
          components={{
            br: () => <span className="block mt-[10px]" />,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}

export default ArticleDetail;
