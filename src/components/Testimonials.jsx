import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'

function Testimonials() {

  const Testimonials = [
    {
      id: 1, 
      image: avatar,
      name: "امین حسینی",
      comment: "دقت بالا و سرعت عملکرد زیاد. وقت شناس و خوش قول"
    },
    {
      id: 2, 
      image: avatar,
      name: "سحر میرزایی",
      comment: "انجام تمامی تسک های محوله بطور کامل و درست. دقیق و حرفه ای👍"
    },
    {
      id: 3, 
      image: avatar,
      name: "آقای هاشمی",
      comment: "تحلیل عالی پروژه و انجام آن به بهترین نحو ممکن با قیمت مناسب. از همکاری با ایشان پشیمان نمی شوید"
    },
  ];

  return (
    <Section title="نظرات 💭" subtitle="در این بخش نظرات کاربرانی که افتخار همکاری با آنها را داشتم مشاهده می کنید">
      <div className="max-w-xl flex flex-col gap-8">
        {
          Testimonials.map(({ image, name, comment, id }) => (
            <div key={id} className="flex justify-center items-center shadow-md dark:shadow-gray-300 p-4 rounded-xl mb-2">
              <div className='w-1/3'>
                <img src={image} alt={name} className="w-20 h-20 object-cover object-top pt-2" />
              </div>
              <div className='flex flex-col w-2/3 justify-center items-center gap-3 p-2'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p className='text-sm font-extralight text-gray-400'>{comment}</p>
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default Testimonials