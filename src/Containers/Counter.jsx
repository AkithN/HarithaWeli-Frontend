import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "../Assets/pic5.jpg"; // Ensure the path is correct

const stats = [
  { id: 1, title: "Year of Experience", value: 23 },
  { id: 2, title: "Winning Our Awards", value: 25 },
  { id: 3, title: "Complete Total Project", value: 203 },
  { id: 4, title: "Happy Our Clients", value: 150 },
];

const CounterSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      className="max-w-7xl mx-auto relative bg-cover bg-center bg-fixed py-16 px-4 text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(236, 233, 230, 0.4), rgba(255, 255, 255, 0)), url(${BackgroundImage})`,
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center" ref={ref}>
            <p className="text-gray-200 font-semibold text-xl md:text-2xl">{stat.title}</p>
            <div className="text-5xl md:text-6xl font-bold mt-4">
              <span className="text-orange-500">
                {inView && <CountUp start={0} end={stat.value} duration={3} />}
              </span>
              <span className="text-white ml-1">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
