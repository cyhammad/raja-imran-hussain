import BlogCard from "./BlogCard";

const HomeBlogSection = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-5 py-10">
        <h1 className="mb-5 md:mb-10 text-center text-6xl font-bold text-black">
          My Blogs
        </h1>
        <BlogCard
          title="Pakistan's Political Quagmire: Judiciary, Imran Khan, and the Future
            of Democracy"
          intro="Pakistan is once again embroiled in a political crisis, with the
            judiciary, Imran Khan's Pakistan Tehreek-e-Insaf (PTI), and the
            government locked in a bitter struggle for power. The country's
            political landscape is marked by controversy, protests, and
            uncertainty. In this blog post, we'll delve into the current state
            of Pakistan's political situation, the role of the judiciary, and
            the implications for democracy."
            imgUrl="/award-1.jpeg"
        />
        <BlogCard
          title="Pakistan's Inflation Crisis: A Heavy Burden on Local People"
          intro={`Pakistan is facing an unprecedented inflation crisis, with
          prices of essential commodities skyrocketing and the cost of
          living becoming increasingly unaffordable for the average
          citizen. The electricity industry, in particular, has become a
          significant contributor to the crisis, with high tariffs, power
          outages, and "electricity pirates" exacerbating the situation.
          In this blog post, we'll explore the impact of Pakistan's
          inflation crisis on local people, with a focus on the
          electricity industry, unemployment, and the broader economic
          implications.`}
          imgUrl="/award-2.jpeg"
        />
      </div>
    </div>
  );
};

export default HomeBlogSection;
