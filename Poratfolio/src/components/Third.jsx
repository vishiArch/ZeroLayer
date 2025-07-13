import React, { useRef } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import gsap from "gsap";
const sections = [
  {
    title: "Front-End Dev",
    image:
      "https://images.unsplash.com/photo-1641391503184-a2131018701b?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Back-End Dev",
    image:
      "https://images.unsplash.com/photo-1651649507836-8f84ca48a35c?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "System design",
    image:
      "https://images.unsplash.com/photo-1639046142069-964f161cf05e?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Data analysis",
    image:
      "https://images.unsplash.com/photo-1641423914598-288fee6cecf2?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Graphic design",
    image:
      "https://images.unsplash.com/photo-1647694420044-6e42df6ca610?w=500&auto=format&fit=crop&q=60",
  },
];

const Third = () => {

  const imageRefs = useRef([]); // Stores references to each image

  const handleMouseEnter = (index) => {
    gsap.to(imageRefs.current[index], { opacity: 1, duration: 0.6 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imageRefs.current[index], { opacity: 0, duration: 0.6 });
  };

  return (
    <div className="h-[132vh] w-full bg-[#050917] flex flex-col gap-[2vh]">
      {/* Header */}
      <div className="h-[30vh] w-full flex items-center px-9 text-white">
        <div className="flex flex-col gap-4">
          <p>OUR SERVICES</p>
          <h1 className="text-5xl uppercase w-[400px] font-bold">
            what <span className="text-[#3AC5AB]">services</span> we're offering
          </h1>
        </div>
        <div className="w-[500px] ml-80">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            repellat possimus dolorum ab. Dolor, pariatur, numquam ad nesciunt
            modi laboriosam saepe quaerat assumenda harum corrupti illum,
            obcaecati exercitationem commodi dolorem?
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="h-[100vh] w-full flex flex-col">
        {sections.map((section, index) => (
          <div
            key={index}
            className="h-[20vh] w-full flex justify-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="h-full w-[90%] text-white border-b border-b-[#22333D] flex items-center justify-between relative">
              <h1 className="text-4xl text-[#6E7683] font-semibold capitalize">
                {section.title}
              </h1>

              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={section.image}
                alt=""
                className="h-[40vh] rounded-[3px] opacity-0 transition-opacity absolute right-80 top-1/2 -translate-y-1/2 z-[9999]"
              />

              <BsBoxArrowInRight className="text-4xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Third;
