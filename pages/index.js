import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner';
import Card from '../components/card';

import coffeeStores from '../data/coffee-stores.json'

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
    console.log('props', props);
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
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400}/>
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore) => {
            return (
                 <Card
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  href={`/coffee-store/${coffeeStore.id}`}
                  className={styles.card}
                />
            );
          })}
        </div>
      </main>

    </div>
  )
}
