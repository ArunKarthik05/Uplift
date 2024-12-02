import React from 'react';
import styles from "./insta.module.scss";
import Image from 'next/image';

const Insta = ({links}) => {
    const handleClick = (i)=>{
        window.open(links[i],'_blank')
    }
    return (
        <div>
            <div className={styles.gridContainer}>
                {Array.from({length:6},(_,i)=>(
                    <div className={styles.imgContainer} onClick={()=>handleClick(i)}>
                        <Image src={`/insta/img-${i+1}.jpeg`} alt={`image-instagram-${i}`} height={300} width={300}/>
                        {i!== 4 && (
                        <div className={styles.playButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='#bebebe'>
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                        </svg>                        
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insta;