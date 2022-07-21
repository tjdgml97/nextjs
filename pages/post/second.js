import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function FirstPost() {
    return (
    <>
    <div className={styles.container}>
     <h1>PROFILE</h1>
     <Link href="/">
     <a className={styles.face}> <Image  src="img/IMG_1154.jpg" height={160} width={250} /> 
      </a>
     </Link>
      
        <div><h3>MBTI : </h3><h4> Park SeongHee</h4></div>
        <div><h3>FAVORITE : </h3>
        <h4>food</h4>
        <div>수박 ,불닭볶음면 , 딸기라떼 </div>
        <h4>movie</h4>

        <div><Link href="/post/first-post">
          <a  className={styles.card}>
          <Image className={styles.bo} src="img/토토로.jpg" height={100} width={100}  /> 
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>
          </Link></div>
        <h4>musical</h4>
        <h4>music</h4>
        <div><h3> : </h3><h4> 21801026@handong.ac.kr</h4></div>
        <br></br>
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