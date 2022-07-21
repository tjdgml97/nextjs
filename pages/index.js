import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Detail(){

}
{/* <Image
width=""
height=""
src="img/IMG_1154.jpg"
alt="profile"/><br></br> */}
export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title >Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
      {/* <h3 className={styles.face}><Link href="post/first-post"><a><img src="img/pngwing.com.png"/></a></Link></h3> */}
        {/* <h2 className={styles.title}>
          Welcome <br></br>
        </h2> */}
        
        {/* <Link href="post/first-post"></Link> */}
        <h3 className={styles.face}>Hi<br></br><Image src="img/IMG_1154.jpg" height={auto} width={auto} /><br></br></h3>
        <h2>I am SeongHee</h2> 
    
        <p className={styles.description}>
          {/* Get started by editing{' '} */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="profile.html" className={styles.card}> 
          <Image className={styles.bo} src="img/FOfaQ3laAAAr_i6.jpeg" height={90} width={90} /> 
            <h3> PROFILE </h3>

            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
          <Image className={styles.bo} src="img/FOfaQ3laAAAr_i6.jpeg" height={90} width={90} /> 
            <h3> TMI </h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a> 

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
          <Image className={styles.bo} src="img/FOfaQ3laAAAr_i6.jpeg" height={90} width={90} /> 
            <h3>PROJECT </h3>
            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
          </a>

        
        </div>
      </main>

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
  )
}


// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h2 className={styles.title}>
//           Hi!! Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h2>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
