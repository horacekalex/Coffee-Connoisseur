import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner';
import Card from '../components/card';

// import coffeeStoresData from '../data/coffee-stores.json'

export async function getStaticProps(context) {
  
  const response = await fetch('https://api.foursquare.com/v3/places/nearby?ll=37.980760%2C23.768903&query=cafe&limit=6', {
  "headers": {
    'Authorization': 'fsq3XW1HFVq64INlFZGglK6fcBkRJwm0E8b+T6CsbLpNT9g=',
  }
  })
  const data = await response.json();
  console.log(data);
  

  return {
    props: {
      coffeeStores: data.results,
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
        {props.coffeeStores.length > 0 && (
        <>
          <h2 className={styles.heading2}> Toronto Stores
          </h2>
          <div className={styles.cardLayout}>
            {props.coffeeStores.map((coffeeStore) => {
              return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} 
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
              );
            })}
          </div>
        </>
        )}
      </main>

    </div>
  )
}
