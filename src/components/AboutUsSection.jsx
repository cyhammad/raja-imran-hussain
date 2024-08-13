import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden border-b border-primary md:border-none">
      <div className="grid w-full md:grid-cols-2">
        <Image
          src="/speech.jpeg"
          quality={100}
          className="h-full w-full"
          alt="speech"
          width={500}
          height={700}
        />
        <div className="flex w-full flex-col justify-center gap-5 p-10">
          <h1 className="text-5xl font-bold">Who am I?</h1>
          <span className="text-xl">
            Raja Imran Hussain is a highly respected figure in Pakistan, known
            for his extensive work in disability advocacy and polio awareness. A
            polio survivor himself, he has been honored by the Indian Peace
            Committee and the Government of Canada for his impactful
            contributions.
            <br />
            <br />
            Raja Imran Hussain is the founder of disabled cricket in Pakistan,
            bringing the sport to an international level and promoting
            inclusivity through his pioneering efforts. He also made history as
            the first disabled person to run in Pakistan's General and Senate
            Elections in 2018, earning recognition from the United Nations.
            <br />
            <br />
            His entrepreneurial spirit is further demonstrated by his
            establishment of Pakistan’s first restaurant for persons with
            disabilities and an institution for their rehabilitation, SPRING
            Association.
          </span>
        </div>
      </div>
      <div className="grid w-full md:grid-cols-2">
        <div className="order-2 flex w-full flex-col justify-center gap-5 p-10 md:order-1">
          <h1 className="text-5xl font-bold">Workshop on Entreprenuership</h1>
          <span className="text-xl">
            Raja Imran Hussain recently conducted an impactful entrepreneurship
            workshop, empowering participants with the skills and mindset needed
            to succeed in today’s competitive landscape. Drawing from his own
            experiences as a pioneering entrepreneur, particularly in
            establishing Pakistan's first restaurant for persons with
            disabilities, Raja Imran shared valuable insights on overcoming
            challenges, innovating within the market, and fostering an inclusive
            business environment. The workshop was a dynamic platform for
            aspiring entrepreneurs to learn, network, and be inspired to turn
            their ideas into reality. Through this initiative, Raja Imran
            continues to pave the way for a more inclusive and vibrant
            entrepreneurial community.
          </span>
        </div>
        <Image
          src="/award-1.jpeg"
          quality={100}
          className="order-1 h-full w-full md:order-2"
          alt="speech"
          width={500}
          height={700}
        />
      </div>
      <div className="grid w-full md:grid-cols-2">
        <Image
          src="/award-2.jpeg"
          quality={100}
          className="h-full w-full"
          alt="speech"
          width={500}
          height={700}
        />
        <div className="flex w-full flex-col justify-center gap-5 p-10">
          <h1 className="text-5xl font-bold">Spring Happiness for all :)</h1>
          <span className="text-xl">
            Spring Association, founded and led by Raja Imran Hussain, is a
            dedicated organization committed to the rehabilitation and
            empowerment of individuals with disabilities. With a focus on
            creating opportunities for personal growth and societal inclusion,
            Spring Association provides vital support, resources, and programs
            that help people with disabilities lead fulfilling and independent
            lives. The organization embodies Raja Imran’s vision of a more
            inclusive world, where everyone, regardless of their abilities, has
            the chance to thrive. Through its initiatives, Spring Association is
            not just changing lives but also challenging societal norms,
            fostering a community where diversity and inclusion are celebrated.
          </span>
        </div>
      </div>
      <div className="grid w-full md:grid-cols-2">
        <div className="order-2 flex w-full flex-col justify-center gap-5 p-10 md:order-1">
          <h1 className="text-5xl font-bold">Interview by news channel</h1>
          <span className="text-xl">
            Raja Imran Hussain recently appeared on the "Good Morning Public"
            news channel for an insightful interview that highlighted his
            remarkable journey and ongoing efforts in disability advocacy and
            social change. During the interview, he discussed his experiences as
            a polio survivor, his role in founding disabled cricket in Pakistan,
            and his historic run as the first disabled candidate in the
            country's General and Senate Elections.
          </span>
        </div>
        <Image
          src="/news-channel.jpeg"
          quality={100}
          className="order-1 h-full w-full md:order-2"
          alt="speech"
          width={500}
          height={700}
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
