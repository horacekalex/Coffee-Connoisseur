import { createApi } from 'unsplash-js';

// on your node server
const   unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = ( latLong, query, limit ) => {
    return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}3&query=${query}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
    const photos = await unsplashApi.search.getPhotos({
            query: 'coffee shop',
            perPage: 10,
    });
    const unsplashResults = photos.response.results;
    return unsplashResults.map((result) => result.urls['small']);
};

export const fetchCoffeeStores = async () => {
    const photos = await getListOfCoffeeStorePhotos();
    const response = await fetch(
    getUrlForCoffeeStores(
        '37.980760%2C23.768903', 
        'cafe', 
        6
    ),     
    
    {
    headers: {
     Authorization: `${process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY}`
    },
}
);
    const data = await response.json();
    return (
        data?.results?.map((venue, idx) => { // <------
            return {
            id: venue.fsq_id, // <------
            address: venue.location.address || "",
            name: venue.name,
            neighbourhood:
                venue.location.neighborhood || venue.location.crossStreet || "",
            imgUrl: photos[idx],
            };
    }) || []
    );
};


    // const transformedData = data?.results?.map((venue) => {
    // return {
    //     id: venue.fsq_id,
    //     ...venue
    // }}) || [];

    // console.log(transformedData)

    // console.log(data);

    // return transformedData;
    // };



  

 