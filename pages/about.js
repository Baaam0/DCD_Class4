import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <>
    <div className={styles.main}>
      <h1 className={styles.title}>About Page</h1>
      
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          Go Back
        </Link>
      </div>
    </div>
    </>
  )
}