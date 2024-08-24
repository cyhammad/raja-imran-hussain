import BlogCard from "./BlogCard";

const HomeBlogSection = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-5 py-10">
        <h1 className="mb-5 text-center text-6xl font-bold text-black md:mb-10">
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
          imgUrl="/quagmire_full.jpg"
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
          imgUrl="/protest.jpeg"
        />
        <BlogCard
          title="Building an Inclusive Future: Raja Imran Hussain’s Vision for Accessibility in Pakistan"
          intro={`This blog will outline Raja Imran Hussain’s vision for a more inclusive and accessible Pakistan. It will emphasize his ongoing efforts to improve public infrastructure, advocate for inclusive educational opportunities, and push for policy reforms that protect the rights of disabled individuals. The blog will also discuss the importance of creating a society where everyone, regardless of their abilities, is valued and included.`}
          imgUrl="/raja-with-mic.jpeg"
        />
        <BlogCard
          title="Overcoming Adversity: The Resilience and Determination of Raja Imran Hussain"
          intro={`This blog will focus on the personal challenges Raja Imran Hussain has overcome throughout his life, and how these experiences have shaped his advocacy efforts. It will recount significant moments of resilience, such as his educational struggles and experiences of exclusion, demonstrating how these obstacles strengthened his resolve to fight for the rights of disabled individuals and inspired others to do the same.`}
          imgUrl="/raja-at-hospital.jpeg"
        />
        <BlogCard
          title="Breaking Barriers: Raja Imran Hussain's Role in Promoting Disabled Cricket in Pakistan"
          intro={`This blog will explore Raja Imran Hussain's relentless efforts to promote disabled cricket in Pakistan. It will focus on the challenges he faced in advocating for recognition and support, his key interactions with the Pakistan Cricket Board, and the broader significance of his achievements in advancing inclusivity in sports and empowering disabled athletes.`}
          imgUrl="/raja-playing.jpeg"
        />
        <BlogCard
          title="Raja Imran Hussain: A Trailblazer in Disability Rights and Political Engagement"
          intro={`This blog will highlight Raja Imran Hussain's journey as a pioneering advocate for disability rights in Pakistan. It will delve into his early life challenges, the founding of SPRING, and his historic participation in the 2018 and 2024 general elections. The blog will also explore the broader impact of his work in raising awareness and driving change for disabled individuals in Pakistan's political and social landscape.`}
          imgUrl="/raja-banner.jpeg"
        />
      </div>
    </div>
  );
};

export default HomeBlogSection;
