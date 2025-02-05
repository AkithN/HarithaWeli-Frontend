import React from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, title: "Year of Experience", value: 23 },
  { id: 2, title: "Winning Our Awards", value: 25 },
  { id: 3, title: "Complete Total Project", value: 203 },
  { id: 4, title: "Happy Our Clients", value: 150 },
];

const CounterSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <p className="text-gray-600 font-semibold text-xl md:text-2xl">{stat.title}</p>
            <div className="flex items-center text-5xl md:text-6xl font-bold mt-2">
              <span className="text-orange-500">
                <CountUp start={0} end={stat.value} duration={3} />
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
