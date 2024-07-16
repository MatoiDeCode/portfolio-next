"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 5,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologies mastered",
  },
  {
    num: 156,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 justify-center items-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-semibold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
