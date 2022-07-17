import { map } from '../UI/map.js';
import {modal} from '../UI/modal.js';
import {coordinatesValue,addressValue } from '../utility/address.js';
class PlaceFinder {
    constructor() {
      const addressForm = document.querySelector('form');
      const locateUserBtn = document.getElementById('locate-btn');
      this.shareButton=document.getElementById('share-btn');
      this.shareButton.addEventListener('click',this.shareButtonhandler);
      locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));//to bind it to object
      addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    }
    
    selectPlace(cd,address){  
   //checking whether a map object is already created or not (a
      // map is rendered or not), if not create a new object (render a new map) else only 
      //call render() again for different coordinates now no need to make another object
     if(this.map){
     this.map.render(cd);  }  
      else{
       this.map=new map(cd);
      }
      const linkInputElemnt=document.getElementById('share-link');
      linkInputElemnt.value=`${location.origin}/my-place?address=${encodeURI(address)}&lat=${cd.lat}&lng=${cd.lng}`;
      this.shareButton.disabled=false;
      }
      shareButtonhandler(){
        const linkInputElemnt=document.getElementById('share-link');
       if(!navigator.clipboard){
       linkInputElemnt.select();
       return;
     }
     navigator.clipboard.writeText(linkInputElemnt.value).
     then(()=>alert('copied to clipboard')). //not neccessary to provide then and catch
     catch(err=>{
      alert('can\'t copy to clip board');
      linkInputElemnt.select();
    });
    }

    locateUserHandler() {  

      if (!navigator.geolocation) {  //feature detection for  other browsers
        alert(
          'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
        );
        return;
      }
      //in the mean time when it is fetching location we want to show a modal
      const mod =new modal('loading-modal-content','can\'t load your modal');
      mod.show();
      navigator.geolocation.getCurrentPosition(
       async successResult => {
         
          const coordinates = {
            lat: successResult.coords.latitude,
            lng: successResult.coords.longitude
          };
         
        const address=await addressValue(coordinates);
         this.selectPlace(coordinates,address); //now this refers to whatever binded outside this arrow function
          // new map(coordinates);  //working
          mod.hide();
      },
        error => {
          mod.hide();
          alert(
            'Could not locate you unfortunately. Please enter an address manually!'
          );
        }
      );
    }
 
    async findAddressHandler(event) {
      event.preventDefault();
      const address=event.target.querySelector('input').value;
      if(!address || address.trim()===null)
      {
        alert('invalid adress');
        return;
      }
      const mod =new modal('loading-modal-content','can\'t load your modal');
      mod.show();
      try{  //try-catching async await errors
     const coordinates=await coordinatesValue(address);//as its an async function it will return a resolved promise in this case
    this.selectPlace(coordinates,address);  
    }
      catch(err){
      alert(err);
      }
      mod.hide();
    }
  }
  
  const placeFinder = new PlaceFinder();