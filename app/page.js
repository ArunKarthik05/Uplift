import Image from "next/image";
import styles from "./page.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { Courses } from "@/components/courses/courses";
import { Contact } from "@/components/contact-us/contact";

export default function Home() {
  const services = [
    {
      image: "personal-mentor.png",
      subHeading: "GROUP SESSIONS",
      para: "At Uplift.edu, our mission is to provide mentorship to learners of all backgrounds. We believe that education is the key to success, and we strive to help our students achieve their full potential with the help of industry experts."
    },
    {
      image: "personal-mentor.png",
      subHeading: "PERSONAL MENTORSHIP",
      para: "Embark on a journey of growth and discovery. Let's unlock your potential, tap into your creativity, and build a foundation for success. Our tailored mentorship programs and interactive group sessions cover a wide array of subjects such as English speaking, basic programming, web development, AI/ML, and digital marketing."
    },
  ];

  const courses = [
    {
      image: "spoken-english.png",
      courseName: "SPOKEN ENGLISH",
      courseDetails: "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
      hoverDetails: "English proficiency is crucial in today's globalized world. Our inclusive online English courses cater to individuals' diverse needs and constraints, helping you improve your language skills and boost your confidence."
    },
    {
      image: "react.png",
      courseName: "FULL STACK DEVELOPMENT",
      courseDetails: "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
      hoverDetails: "In this digital age, web development skills are highly sought after. Our comprehensive course covers both front-end and back-end development, equipping you with the necessary skills to build dynamic and interactive websites."
    },
    {
      image: "digital-marketing.png",
      courseName: "DIGITAL MARKETING",
      courseDetails: "Craft your online success story: Dive deep into Digital Marketing strategies with us!",
      hoverDetails: "With the rise of digital marketing, businesses are constantly seeking professionals with expertise in this field. Our course covers various digital marketing strategies, including SEO, social media marketing, and email marketing, to help you become a well-rounded digital marketer."
    },
    {
      image: "data-science.webp",
      courseName: "DATA SCIENCE AND MACHINE LEARNING",
      courseDetails: "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
      hoverDetails: "In today's data-driven world, the demand for data scientists and machine learning experts is on the rise. Our course covers essential concepts and tools in data science and machine learning, preparing you for a successful career in this field."
    }
  ];
  

  return (
    <div className={styles.main}>
      <Image src="/arrow.png" alt="arrow-bg" width={400} height={400} className={styles.arrow}/>
      <Image src="/Uplift-bg.png" alt="arrow-bg" width={500} height={600} className={styles.upliftBg}/>
     <div className={styles.section}>
      <Navbar />
      <HeroSection />
     </div>
      
      <div className={styles.section}>
        <h1 className={styles.heading}>WHAT WE OFFER</h1>
        <div className={styles.servicesMain}>
          {services.map((service,index) => (
            <Services
              image={service.image}
              subHeading={service.subHeading}
              para={service.para}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.section}>
            <h1 className={styles.heading}>OUR COURSES</h1>
            <div className={styles.gridContainer}>
              {courses.map((course,index) => {
                return (
                  <Courses
                    image={course.image}
                    courseName={course.courseName}
                    courseDetails={course.courseDetails}
                    hoverDetails={course.hoverDetails}
                    key={index}
                  />
                )
              })
              }
            </div>
      </div>

      <div className={styles.section}>
        <Contact/>
      </div>

    </div>
  );
}