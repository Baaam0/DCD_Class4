import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my home page</h1>

      <div className={styles.grid}>
        <div className={styles.grid__container} style={{display:"grid"}}>
          <div className={styles.grid__item}>
            <h2>What does C.R.U.D stand for?</h2>
          </div>
            <div className={styles.grid__item}>
            <ul>
              <li>Create</li>
              <li>Read</li>
              <li>Update</li>
              <li>Delete</li>
            </ul>
            <button>View all this info</button>
          </div>
        </div>

          <div className={styles.grid}>
            <Link href="/about" className={styles.card}>
              About page
            </Link>
          </div>

         <div className={styles.grid}>
            <Link href="/grades" className={styles.card}>
              Grades page
            </Link>
         </div>
       </div>
       
      </main>

    <footer>
      In class Example #1
    </footer>
      
    </div>
  )
}
