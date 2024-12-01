"use client"
import React, { useState ,useRef} from 'react';
import Image from 'next/image'
import styles from "./courses.module.scss";
import { CustomButton } from "@/components/button/button";

export const Courses = ({image,courseName,courseDetails,hoverDetails,refElement,isUpcoming,price})=> {
    const [isHovered, setIsHovered] = useState(false);
    const hoverEl = useRef(null);
    const mainEl = useRef(null)

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (mainEl.current) {
      mainEl.current.style.backgroundColor = '#FF3364';
    }
    if(hoverEl.current) hoverEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMouseLeave = () => {
    if (!isUpcoming && mainEl.current) {
      mainEl.current.style.backgroundColor = 'transparent';
    }
    setIsHovered(false);
  };

  const handleClick = (ref)=>{
      if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRedirect = () => {
    window.open('https://uplifteduexly.exlyapp.com/a5132380-c879-4577-be20-bc5d51efb88b', '_blank');
  }; 

  return (
        <div className={styles.gradientContainer} onMouseLeave={handleMouseLeave} style={{ backgroundColor: isUpcoming && '#FF96AF' }} ref={mainEl} onMouseEnter={!isUpcoming ? handleMouseEnter : undefined}>
            <div className={styles.contentContainer} ref={hoverEl}>
                {!isHovered ? (
                <>
                <div className={styles.imgContainer}>
                <Image src={`/courses/${image}`} alt={courseName} height={400} width={400}></Image>
                </div>
                <div className={styles.courseName}><h1>{courseName}</h1></div>
                <div className={styles.courseDetails} style={{color : isUpcoming && "white"}}><p>{courseDetails}</p></div>
                {!isUpcoming ? (
                      <>
                        <div className={styles.btnContainer}><div className={styles.price}>{price}</div></div>
                      </>
                      ):(
                        <div className={styles.btnContainer} onClick={handleRedirect}><CustomButton text="Enquire Now" bgColor="black" hoverColor="rgb(61, 60, 60)"/></div>
                  )
                  }
                </>
                ):(
                  <>
                    <div className={styles.hoverDiv}>
                      <p className={styles.hoverDetails}>{hoverDetails}</p>
                      {(price !== null && (
                          <div className={styles.btnContainer}><div className={styles.price}>{price}{courseName === "GROUP ACCELERATOR" && " -/month"}</div></div>
                      ))}
                    </div>
                    <div className={styles.btnContainer} onClick={()=>handleClick(refElement)}><CustomButton text="Enroll Now" bgColor="black" textColor="white" hoverColor="rgb(61, 60, 60)" hoverTextColor="white"/></div>
                  </>
                )
                }
            </div>
        </div>
    )
}