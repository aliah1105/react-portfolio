import { FaInstagram, FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";

function Hero() {
  const SOCIAL = [
    {
      id: 1,
      link: "http://instagram.com",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      link: "http://Linkedin.com",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "http://github.com",
      icon: <FaGithub />,
    },
  ];

  window.addEventListener("scroll", function(){
    const downArrow = document.querySelector(".down-arrow");
    if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-500 font-bold ">علی احدی</h2>
      <h3 className="py-3 text-2xl">
        برنامه نویس وب و توسعه دهنده اپلیکیشن های موبایل
      </h3>
      <p className="max-w-xl font-light text-gray-500">
        سلام <span className="animate-pulse text-4xl">👋</span>به وب سایت من خوش
        آمدید. من یه نیمچه مهندس فریلنسرم که علاقه خیلی زیادی به توسعه اپلیکیشن
        های وب و موبایل دارم.
      </p>
      {/* social icons */}
      <div className="flex justify-evenly py-2 lg:py-8 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-500"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* avatar and resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-70 md:h-70 object-cover object-top bg-gradient-to-b from-rose-500 rounded-xl pt-5"
        />
        <a
          href="/Ali Ahadi.pdf"
          download={true}
          className="flex justify-center items-center text-white bg-gradient-to-r from-rose-500 to-teal-500 mt-10 rounded-xl py-2"
        >
          رزومه من
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-5 down-arrow">
        <FaArrowDown className="text-2xl text-gray-400 animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;
