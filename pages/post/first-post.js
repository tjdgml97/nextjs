import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function FirstPost() {
    return (
    <>
     <h1>PROFILE</h1>
     <Link href="/">
     <a className={styles.face}> <Image  src="img/IMG_1154.jpg" height={160} width={250} /> 
 I am SeongHee</a>
     </Link>
        <p className={styles.description}>
          {/* Get started by editing{' '} */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <Link href="/post/first-post">
          <a className={styles.card}>
          <Image className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg" height={100} width={100}  /> 
            <h3> PROFILE </h3>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
          <Image className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg" height={100} width={100}  /> 
            <h3> FAVORITE</h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a> 

          <a href="https://nextjs.org/learn" className={styles.card}>
          <Image className={styles.bo} src="/img/FOfaQ3laAAAr_i6.jpeg" height={100} width={100}  /> 
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

          <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      

        </div>


    </>
    )
  }