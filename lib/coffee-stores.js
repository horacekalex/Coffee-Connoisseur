const getUrlForCoffeeStores = ( latLong, query, limit ) => {
    return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}3&query=${query}&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
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
});
    const data = await response.json();
    console.log(data);

    return data.results;
};


  

 