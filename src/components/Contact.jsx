import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Section from "./common/Section";
import contact from "../assets/mobile.png";

function Contact() {
  const SOCIAL = [
    {
      id: 1,
      link: "http://twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "http://facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "http://Linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <Section
      title="ارتباط با ما 📱"
      subittl="راه های ارتباط با من این زیر هستش. امیدوارم زودتر بتونیم با هم همکاری داشته باشیم :)"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={contact} alt="contact info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight text-gray-400">
            از طریق فرم زیر و لینک های داده شده در سایت میتوانید با من در ارتباط
            باشید.
          </p>
        </div>
        <div className="flex items-center justify-evenly text-3xl w-full">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              className="hover:text-rose-500 duration-300 hover:scale-110 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
        {/* bottom form */}
        <div className="p-8 w-full text-right">
          <form action="https://getform.io/f/26137dc3-337d-4c5e-9dfc-e4b090c3c71b" method="POST">
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="py-2 text-sm font-extralight text-gray-400">
                  نام
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="py-2 text-sm font-extralight text-gray-400">
                  تلفن تماس
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="py-2 text-sm font-extralight text-gray-400">
                  ایمیل
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="py-2 text-sm font-extralight text-gray-400">
                  پیام
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white rounded-md px-6 py-3 cursor-pointer hover:scale-110 duration-300">
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
