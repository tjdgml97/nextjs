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
 I am SeongHee</a>
     </Link>
      
        <div>Park SeongHee</div>
        <div>business administration ,computer science</div>
        <div>21801026@handong.ac.kr</div>

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