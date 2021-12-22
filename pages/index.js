import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner';

export default function Home() {
  const handleOnBannerBtnClick = () => {

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerBtnClick}/>
      </main>

    </div>
  )
}
