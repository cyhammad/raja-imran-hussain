const BlogCard = ({ title = "", intro = "", imgUrl = "" }) => {
  return (
    <div className="grid grid-cols-10 gap-8 border-b border-black/10 pb-10">
      <div
        className="col-span-10 h-[280px] w-full rounded-2xl border border-black/10 bg-cover bg-center bg-no-repeat md:col-span-4"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="col-span-10 flex flex-col justify-between gap-2 md:col-span-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{title}</h1>
          <span className="text-lg leading-6 text-black/50">{intro}</span>
        </div>
        <div className="flex items-center justify-between gap-3 pt-5">
          <button className="rounded-full border border-black px-5 py-1 text-lg transition-all duration-200 ease-in-out hover:bg-black hover:from-[#B86BDF] hover:to-[#FFAF4A] hover:text-white sm:px-8">
            Read more ...
          </button>
          <span className="bg-gradient-to-br from-white to-[#FDFFE9] text-end text-xl font-semibold text-black/80 sm:text-2xl">
            - Raja Imran Hussain
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
