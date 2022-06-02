import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Day 2</title>
        <meta name="description" content="NextJS Day 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="csr" className={styles.card}>
            <h2>CSR &rarr;</h2>
            <p>Client-Side Rendering</p>
          </a>

          <a href="ssr" className={styles.card}>
            <h2>SSR &rarr;</h2>
            <p>Server-Side Rendering</p>
          </a>

          <a
            href="ssg"
            className={styles.card}
          >
            <h2>SSG &rarr;</h2>
            <p>Static Site Generation</p>
          </a>

          <a
            href="isr"
            className={styles.card}
          >
            <h2>ISR &rarr;</h2>
            <p>
              Incremental Static Regeneration
            </p>
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
