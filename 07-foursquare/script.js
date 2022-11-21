async function loadData() {
    // the second parameter of axios.get is a configuration object
    // in the configuration object we can set the query string parameters
    // via the 'params' key
    const response = await axios.get("https://api.foursquare.com/v3/places/search", {
        params: {
            query: "sushi",
            near: "Singapore",
            v: '20210903'
        },
        headers:{
            Accept: 'application/json',
            Authorization:'fsq3wsVh3XbICcgWtobQCeG2CT41ct8V9NIVPvTLADIg70A='
        }
    });
    console.log(response.data);
}

loadData();