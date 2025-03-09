import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import { enhanceBlockquotes } from "../utils/enhanceBlockquotes";
import { useEffect } from "react";

function ArticleDetail() {
  const { slug } = useParams();
  const data = useFetchData();
  const article = data.find((item) => item.slug === slug);

  useEffect(() => {
  
    
      enhanceBlockquotes();
      console.log("tip")
  
  }, [article?.content]);

  return (
    <main className="mx-[9px] px-[10px] pt-[48px] max-lg:pt-[32px] border  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <h1 className="text-Neutral-0  font-extrabold text-[40px] leading-[130%] tracking-[-1px]">
        {article?.title}
      </h1>
      <p className="py-[12px] text-Neutral-400 italic text-[16px] leading-[130%] tracking-[-0.2px]">
        Published {formatDate(article?.publishedAt)}
      </p>
      <article className=" markdown prose prose-invert border-b dark:border-Neutral-700 pb-[48px] max-lg:pb-[32px] max-sm:pb-[24px]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
          components={{
            br: () => <span className="block " />,
            table: ({ ...props }) => (
              <div className="overflow-x-auto rounded-[8px]  border border-Neutral-700">
                <table {...props} />
              </div>
            ),
          }}
        >
          {article?.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}

export default ArticleDetail;
