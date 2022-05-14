export function FeedBackContentStep() {
  return (
    <form className="my-4 w-full">
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo..."
      ></textarea>
    </form>
  );
}
