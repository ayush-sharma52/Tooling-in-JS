// const GOOGLE_API_KEY=''; the api key we get from google to use 
export async function coordinatesValue(add){
    //     let address;
    //  address=encodeURI(add);// we need to convert our adress url freindly
     
     // //this will return us a promise response
    // const response=await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`);
    // if(!response.ok){  //if it came with 404
    //     throw new Error('can\'t find coordinates');
    // }
    // const data=await response.json();
    
    // if(data.error_message){ //here maybe response returned with a 202 code but still it may contain error
    //     throw new Error(data.error_message);
    // }
    
    //     return data.results[0].geometery.location;  // the exact coordinates we need 
    
    //above code is perfect but as we don't have the api key thus we'll return dummy coordinates for our map to show
    return {lat: 47.01, lng: 33.55}; 
    }
    
    export async function addressValue(coordinates){
    
    //this will return us a promise response
    // const response=await 
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${GOOGLE_API_KEY}`);
    // if(!response.ok){  //if it came with 404
    //     throw new Error('can\'t find address');
    // }
    // const data=await response.json();
    
    // if(data.error_message){ //here maybe response returned with a 202 code but still it may contain error
    //     throw new Error(data.error_message);
    // }
    
    //     return data.results[1].geometery.formatted_address;  // the exact coordinates we need 
    
    // above code is perfect but as we don't have the api key thus we'll return a dummy address for our map to show
    
    return '696, maujpur';
    }