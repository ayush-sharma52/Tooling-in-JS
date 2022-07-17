import { map } from '../UI/map.js';

class pageLoaded{
    constructor(coordinates,address){
        new map(coordinates);  //DISPLAYING WRONG MAP
        document.querySelector('header h1').textContent=address;
    }
}
const url=new URL(location.href); //this will take our current url and convert it into an object
//with some properties we can use to get information out of the url 
const queryparams=url.searchParams;//return object of key value pairs present in url after '?'
const coordinates={
    lat:queryparams.get('lat'),
    lng:queryparams.get('lng')
};
const address=queryparams.get('address');
new pageLoaded(coordinates,address);

//tho this page's map will show a different place because the coordinates present in the url
//are dummy ones returned by the function