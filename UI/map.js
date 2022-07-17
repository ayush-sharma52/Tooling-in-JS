export class map{
    constructor(coords)
    {
       this.render(coords);
    }

    render(coordinates)
     {
      document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
    zoom: 16
  })
});
   //   if(!google){ //global object set by the map sdk 
   //           alert('can\'t find your location , sorry! ');
   //           return;
   //   }
     
   //   const map=new google.maps.Map(document.getElementById('map'),{
   //      center:coordinates, // what will be present at the centre
   //      zoom:16
   //   })//global object's property takes first argument as in which 
   //   //place to render the map and second argument as an object where we define some properties

   //   new google.maps.marker({
   //    position: coordinates, //where to put marker at
   //  map:map //at which map 
   //  })
    }

}