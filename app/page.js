'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { Courses } from "@/components/courses/courses";
import { Contact } from "@/components/contact-us/contact";
import { useRef } from "react";
import Footer from "@/components/footer/footer";
import AboutUs from "@/components/about-us/about-us";
import FAQ from "@/components/FAQ/FAQ";
import Stories from "@/components/success/stories";
import Insta from "@/components/insta/insta";

export default function Home() {
  const services = [
    {
      image: "group-discussion.webp",
      subHeading: "GROUP SESSIONS",
      para: "At Uplift.edu, our mission is to provide mentorship to learners of all backgrounds. We believe that education is the key to success, and we strive to help our students achieve their full potential with the help of industry experts."
    },
    {
      image: "personal-mentor.png",
      subHeading: "PERSONAL MENTORSHIP",
      para: "Embark on a journey of growth and discovery. Let's unlock your potential, tap into your creativity, and build a foundation for success. Our tailored mentorship programs and interactive group sessions cover a wide array of subjects such as English speaking, basic programming, web development, AI/ML, and digital marketing.",
    },
  ];
  const courses = [
    {
      image: "eng-1.png",
      courseName: "INDIVIDUAL MASTERY",
      courseDetails: "Speak with Confidence: Elevate your Spoken English skills with our tailored one-on-one sessions.",
      hoverDetails: "Enhance your English fluency with personalized sessions designed to focus on your unique strengths and challenges. Perfect for professionals, students, or anyone looking to excel in communication, our course ensures rapid progress and confidence-building.",
      price: "₹14,999",
    },
    {
      image: "eng-2.png",
      courseName: "GROUP ACCELERATOR",
      courseDetails: "Collaborate and Communicate: Excel in English with engaging group sessions.",
      hoverDetails: "Learn and grow together in an interactive group setting, where real-world conversations and collaborative exercises help you refine your English. Ideal for teamwork enthusiasts, this course builds both linguistic and social confidence.",
      price: "₹499",
    },
  ];
  
  const upcoming = [
    {
      image: "react.png",
      courseName: "FULL STACK DEVELOPMENT",
      courseDetails: "Master Full Stack Development: From Frontend to Backend, become a coding maestro",
      hoverDetails: "In this digital age, web development skills are highly sought after. Our comprehensive course covers both front-end and back-end development, equipping you with the necessary skills to build dynamic and interactive websites.",
    },
    {
      image: "digital-marketing.png",
      courseName: "DIGITAL MARKETING",
      courseDetails: "Craft your online success story: Dive deep into Digital Marketing strategies with us!",
      hoverDetails: "With the rise of digital marketing, businesses are constantly seeking professionals with expertise in this field. Our course covers various digital marketing strategies, including SEO, social media marketing, and email marketing, to help you become a well-rounded digital marketer.",
    }
  ];

  const FaqData = [
    {
      question: "What courses does Uplift Edu offer?",
      answer: "Uplift Edu provides a range of courses including Spoken English, Full Stack Web Development, Digital Marketing, and Data Science & Machine Learning. Our courses are designed to help you gain in-demand skills and advance your career."
    },
    {
      question: "Are the courses online?",
      answer: "Yes, all our courses are 100% online, allowing you to learn at your own pace and convenience. We offer flexible learning options to fit your schedule."
    },
    {
      question: "How can I contact Uplift Edu for support?",
      answer: "You can reach us via email at upliftedutech@gmail.com or call us at +91 - 93 63 80 70 80. Our customer support team is available Monday through Friday from 9am to 9pm IST."
    },
    {
      question: "What kind of training methods does Uplift Edu use?",
      answer: "We offer personalized training sessions with expert trainers to ensure an engaging and effective learning experience. Our courses include interactive sessions, practical exercises, and real-world applications."
    },
    {
      question: "Do you provide certification upon course completion?",
      answer: "Yes, upon successfully completing a course, you will receive a certification from Uplift Edu, which you can use to demonstrate your skills to potential employers."
    }
  ];

  const links = [
    "https://www.instagram.com/upliftedutech/?igsh=MXQ0czZpdzhmbGVjdg%3D%3D",
    "https://www.instagram.com/upliftedutech/?igsh=MXQ0czZpdzhmbGVjdg%3D%3D",
    "https://www.instagram.com/upliftedutech/?igsh=MXQ0czZpdzhmbGVjdg%3D%3D",
    "https://www.instagram.com/reel/C9zFUXgJx5c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    "https://www.instagram.com/p/DCqgxiHTV63/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    "https://www.instagram.com/reel/C-cjA9UvZkh/?igsh=d3dvYTY0dGZiZXZt"
  ];
  

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const coursesRef = useRef(null);
  const FAQRef = useRef(null);
  const ContactRef = useRef(null);
  const storiesRef = useRef(null);
  const aboutRef = useRef(null);
  const instaRef = useRef(null);

  const refs = {
    homeRef,
    servicesRef,
    coursesRef,
    storiesRef,
    FAQRef,
    aboutRef,
    ContactRef,
    instaRef
  };


  return (
    <div className={styles.main}>

      <div className={styles.imgContainer}>
         <Image src="/arrow.png" alt="arrow-bg" width={400} height={700} className={styles.arrow}/>
      </div>
      <div className={styles.imgContainer}>
         <Image src="/Uplift.jpeg" alt="uplift-bg" width={500} height={500} className={styles.upliftBg}/>
      </div>

     <div className={styles.section} ref={homeRef}>
      <Navbar refs={refs}/>
      <HeroSection refs={refs}/>
     </div>
      
      <div className={styles.section2} ref={servicesRef}>
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
      
      <div className={styles.section2} ref={coursesRef}>
            <h1 className={styles.heading}>POPULAR COURSES</h1>
            <div className={styles.flexRow}>
              {courses.map((course,index) => {
                return (
                  <Courses
                    image={course.image}
                    courseName={course.courseName}
                    courseDetails={course.courseDetails}
                    hoverDetails={course.hoverDetails}
                    price={course.price}
                    refElement = {ContactRef}
                    key={index}
                    isUpcoming={false}
                  />
                )
              })
              }
            </div>
            <h3 className={styles.sideHeading}>UPCOMING COURSES</h3>
            <div className={`${styles.flexRow} ${styles.upcoming}`}>
              {upcoming.map((course,index) => {
                return (
                  <Courses
                    image={course.image}
                    courseName={course.courseName}
                    courseDetails={course.courseDetails}
                    hoverDetails={course.hoverDetails}
                    refElement = {ContactRef}
                    key={index}
                    isUpcoming={true}
                  />
                )
              })
              }
            </div>
      </div>

      <div className={styles.section2} ref={storiesRef}>
          <h1 className={styles.heading}>SUCCESS STORIES</h1>
          <Stories/>
      </div>

      <div className={styles.section2} ref={aboutRef}>
          <h1 className={styles.heading}>ABOUT US</h1>
          <AboutUs/>
      </div>

      <div className={styles.section2} ref={ContactRef}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <Contact/>
      </div>

      <div className={styles.section2} ref={instaRef}>
        <h1 className={styles.heading}>RECENTLY ON INSTAGRAM</h1>
        <Insta links={links}/>  
      </div>

      <div ref={FAQRef}>
        <h1 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h1>
        <FAQ FaqData={FaqData}/>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
}
