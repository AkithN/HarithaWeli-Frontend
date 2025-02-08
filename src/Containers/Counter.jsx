import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // To trigger animation when in view

const stats = [
  { id: 1, title: "Year of Experience", value: 23 },
  { id: 2, title: "Winning Our Awards", value: 25 },
  { id: 3, title: "Complete Total Project", value: 203 },
  { id: 4, title: "Happy Our Clients", value: 150 },
];

const CounterSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true }); // Trigger animation once when in view

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center" ref={ref}>
            <p className="text-gray-600 font-semibold text-xl md:text-2xl">{stat.title}</p>
            {/* <div className="relative w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4">
              <div
                className={`absolute top-0 left-0 h-2 bg-orange-500 rounded-full transition-all duration-1500 ${
                  inView ? "w-full" : "w-0"
                }`}
                style={{ transitionDuration: `${stat.value * 30}ms` }}
              ></div>
            </div> */}
            <div className="text-5xl md:text-6xl font-bold mt-4">
              <span className="text-orange-500">
                {inView && <CountUp start={0} end={stat.value} duration={3} />}
              </span>
              <span className="text-gray-800 ml-1">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
