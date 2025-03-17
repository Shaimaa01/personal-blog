import React from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import data from "../data.json";
import tip from "/assets/images/icon-tip.svg";
import warning from "/assets/images/icon-warning.svg";
import information from "/assets/images/icon-info.svg";
import { useEffect } from "react";

function ArticleDetail() {
  const { slug } = useParams();
  const article = data.find((item) => item.slug === slug);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]); // Runs when slug changes

  // Helper to extract plain text from React elements
  const getTextContent = (children) => {
    return React.Children.toArray(children)
      .flatMap(child => {
        if (typeof child === "string") return child; // Plain text like "\n"
        if (React.isValidElement(child) && child.props && child.props.children) {
          return getTextContent(child.props.children); // Recurse into nested children
        }
        return ""; // Ignore non-text
      })
      .join("")
      .trim(); 
  };

  return (
    <main className="flex-1 mx-[9px] px-[10px] pt-[48px] max-lg:pt-[32px] border border-Neutral-200  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <h1 className="text-Neutral-700 dark:text-Neutral-0   font-extrabold text-[40px] leading-[130%] tracking-[-1px]">
        {article.title}
      </h1>
      <p className="py-[12px] text-Neutral-600 dark:text-Neutral-400 italic text-[16px] leading-[130%] tracking-[-0.2px]">
        Published {formatDate(article.publishedAt)}
      </p>
      <article className=" markdown prose prose-invert border-b border-Neutral-200 dark:border-Neutral-700 pb-[48px] max-lg:pb-[32px] max-sm:pb-[24px]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
          components={{
            br: () => (
              <span className="block border-Neutral-200 dark:border-Neutral-700" />
            ),
            table: ({ ...props }) => (
              <div className="overflow-x-auto rounded-[8px]  border border-Neutral-200 dark:border-Neutral-700">
                <table {...props} />
              </div>
            ),
            blockquote: ({ children }) => {
              const text = getTextContent(children);
              console.log("Blockquote text:", text);
              console.log("Blockquote text:", children);
              let className = "";
              let icon = null;

              if (text.includes("Tip")) {
                className = "tip";
                icon = (
                  <img
                    src={tip}
                    alt="Tip Icon"
                    className="mr-[10px] w-[13px] h-[19px] mt-[3px]"
                  />
                );
              } else if (text.includes("Warning")) {
                className = "warning";
                icon = (
                  <img
                    src={warning}
                    alt="Warning Icon"
                    className="mr-[10px] w-[21px] h-[19px] mt-[3px]"
                  />
                );
              } else if (text.includes("Information")) {
                className = "information";
                icon = (
                  <img
                    src={information}
                    alt="Information Icon"
                    className="mr-[10px] w-[19px] h-[19px] mt-[3px]"
                  />
                );
              }

              return (
                <blockquote className={className}>
                  {icon}
                  {children}
                </blockquote>
              );
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}

export default ArticleDetail;
