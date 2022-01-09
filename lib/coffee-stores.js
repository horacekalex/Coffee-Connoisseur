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
     Authorization: 'fsq3XW1HFVq64INlFZGglK6fcBkRJwm0E8b+T6CsbLpNT9g='
    },
});
    const data = await response.json();
    console.log(data);

    return data.results;
};


  

 