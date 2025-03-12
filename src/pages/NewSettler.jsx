import FormContainer from "../components/Form";

function NewSettler() {
  return (
    <main className="mx-[9px] px-[10px]  border  dark:border-Neutral-700 border-y-transparent dark:border-y-transparent ">
      <div className=" h-[842px] flex flex-col gap-[24px] border-b dark:border-Neutral-700 py-[48px] max-sm:pt-[32px]  max-sm:pb-[24px]">
        <section className="flex flex-col gap-[16px]">
          <h1 className="text-Neutral-0 font-extrabold text-[32px] leading-[130%] tracking-[-0.5px]  ">
            Newsletter
          </h1>
          <p className="flex flex-col gap-[24px] text-Neutral-400 text-[18px] leading-[150%] tracking-[-0.2px]">
            Want to stay updated on my latest articles, coding tutorials, and
            personal adventures? Sign up for my newsletter! It’s a simple way to
            keep track of new posts and occasional coding tips I discover. Just
            drop your email in the sign-up box, and I’ll send you updates
            whenever there’s something new to share.
          </p>
          <p className="text-Neutral-0 font-semibold text-[20px] leading-[130%] tracking-[-0.5px]">
            I’d love to have you along for the ride and also hear about your own
            journey!
          </p>
        </section>
        <FormContainer />
      </div>
    </main>
  );
}

export default NewSettler;
