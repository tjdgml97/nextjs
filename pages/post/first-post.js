import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function FirstPost() {
    return (
    <>
     <h1>First Post</h1>
      <h3 className={styles.face}><img  src="/img/IMG_1154.jpg"/> I'm SeongHee</h3>
    
        <p className={styles.description}>
          {/* Get started by editing{' '} */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="profile.html"> className={styles.card}>
          <img className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg"/> 
            <h3> PROFILE </h3>

            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
          <img className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg"/> 
            <h3> FAVORITE</h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a> 

          <a href="https://nextjs.org/learn" className={styles.card}>
          <img className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg"/> 
            <h3>MBTI</h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a> 

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
           <img className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg"/> 
            <h3>PROJECT </h3>
            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
          </a>

        
        </div>


    </>
    )
  }