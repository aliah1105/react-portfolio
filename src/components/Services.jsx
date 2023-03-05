import Section from "./common/Section";
import commerce from "../assets/commerce.png";
import research from "../assets/research.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";

function Services() {
  const SERVICES = [
    {
      id: 1,
      image: commerce,
      title: "وب سایت فروشگاهی",
    },
    {
      id: 1,
      image: web,
      title: "توسعه وب سایت",
    },
    {
      id: 1,
      image: mobile,
      title: "توسعه اپلیکیشن موبایل",
    },
    {
      id: 1,
      image: research,
      title: "تحقیق و توسعه",
    },
  ];

  return (
    <Section
      title="خدمات 🛠️"
      subtitle="در اینجا تمامی خدماتی که به مشتری ها ارائه میشود مشاهده میکنید. امیدوارم آن خدماتی که شما به دنبال آن هستید در این لیست وجود داشته باشد.(اگه ام نبود بگین وارد میکنیم 😅)"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {SERVICES.map(({ image, title, id }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <h3 className="mb-3 text-base">{title}</h3>
            <img src={image} alt={title} className="w-36 h-36 md:w-44 md:h-44 object-contain" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Services;
