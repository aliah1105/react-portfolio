import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "UI موبایل",
      image: p1,
      github: "http://github.com/nodejs/node",
      demo: "http://nodejs.org/en/",
    },
    {
      id: 2,
      title: "UI موبایل",
      image: p2,
      github: "http://github.com/nodejs/node",
      demo: "http://nodejs.org/en/",
    },
    {
      id: 3,
      title: "UI موبایل",
      image: p3,
      github: "http://github.com/nodejs/node",
      demo: "http://nodejs.org/en/",
    },
    {
      id: 4,
      title: "UI وب سایت مانیتورینگ",
      image: p4,
      github: "http://github.com/nodejs/node",
      demo: "http://nodejs.org/en/",
    },
    {
      id: 5,
      title: "UI وبلاگ",
      image: p5,
      github: "http://github.com/nodejs/node",
      demo: "http://nodejs.org/en/",
    },
    {
      id: 1,
      title: "UI/UX وب سایت",
      image: p6,
      github: "http://github.com/nodejs/node",
      demo: "http://nodejs.org/en/",
    },
  ];

  return (
    <Section
      title="نمونه کارها 📄"
      subtitle=" در این بخش نمونه کارهای من در زمینه های توسعه وب اپلیکیشن ها و طراحی سایت و توسعه اپلیکیشن های موبایل را مشاهده میکنید."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ title, image, id, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden duration-300 hover:scale-110"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly">
              <h2>{title}</h2>
              <a
                href={github}
                className="cursor-pointer hover:text-rose-500 duration-300 text-lg md:text-xl lg:text-2xl hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-rose-500 duration-300 text-lg md:text-xl lg:text-2xl hover:scale-110"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Portfolio;
