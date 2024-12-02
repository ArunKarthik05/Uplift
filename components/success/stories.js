import styles from './stories.module.scss';

const Stories = ({ stories }) => {
  return (
    <div className={styles.outerStories}>
      <div className={styles.storiesMain}>
        {/* {stories.map((story, index) => (
          <div key={index} className={styles.storyDiv}>
           <div className={styles.sucessTop}>
              <div className={styles.imgContainer}>
                <Image  src={story.gender === 'female' ? '/gender/female.jpg' : '/gender/male.jpg'}  alt='story' height={200} width={200}/>
              </div>
              <div className={styles.storyNameDiv}>
                <h2 className={styles.subHeading}>{story.name}</h2>
                <h3 className={styles.course}>{story.course}</h3>
              </div>
           </div>
            <p className={styles.para}>{story.review}</p>
          </div>
        ))} */}
        <video src='/success.mp4' autoFocus autoPlay loop controls/>
      </div>
    </div>
  );
};

export default Stories;
