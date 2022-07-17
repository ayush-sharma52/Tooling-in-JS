/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./UI/map.js":
/*!*******************!*\
  !*** ./UI/map.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": function() { return /* binding */ map; }\n/* harmony export */ });\nclass map {\n  constructor(coords) {\n    this.render(coords);\n  }\n\n  render(coordinates) {\n    document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id=\"map\">\n\n    const map = new ol.Map({\n      target: 'map',\n      layers: [new ol.layer.Tile({\n        source: new ol.source.OSM()\n      })],\n      view: new ol.View({\n        center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),\n        zoom: 16\n      })\n    }); //   if(!google){ //global object set by the map sdk \n    //           alert('can\\'t find your location , sorry! ');\n    //           return;\n    //   }\n    //   const map=new google.maps.Map(document.getElementById('map'),{\n    //      center:coordinates, // what will be present at the centre\n    //      zoom:16\n    //   })//global object's property takes first argument as in which \n    //   //place to render the map and second argument as an object where we define some properties\n    //   new google.maps.marker({\n    //    position: coordinates, //where to put marker at\n    //  map:map //at which map \n    //  })\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLEdBQU4sQ0FBUztFQUNaQyxXQUFXLENBQUNDLE1BQUQsRUFDWDtJQUNHLEtBQUtDLE1BQUwsQ0FBWUQsTUFBWjtFQUNGOztFQUVEQyxNQUFNLENBQUNDLFdBQUQsRUFDTDtJQUNDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLFNBQS9CLEdBQTJDLEVBQTNDLENBREQsQ0FDZ0Q7O0lBRXJELE1BQU1QLEdBQUcsR0FBRyxJQUFJUSxFQUFFLENBQUNDLEdBQVAsQ0FBVztNQUNyQkMsTUFBTSxFQUFFLEtBRGE7TUFFckJDLE1BQU0sRUFBRSxDQUNOLElBQUlILEVBQUUsQ0FBQ0ksS0FBSCxDQUFTQyxJQUFiLENBQWtCO1FBQ2hCQyxNQUFNLEVBQUUsSUFBSU4sRUFBRSxDQUFDTSxNQUFILENBQVVDLEdBQWQ7TUFEUSxDQUFsQixDQURNLENBRmE7TUFPckJDLElBQUksRUFBRSxJQUFJUixFQUFFLENBQUNTLElBQVAsQ0FBWTtRQUNoQkMsTUFBTSxFQUFFVixFQUFFLENBQUNXLElBQUgsQ0FBUUMsVUFBUixDQUFtQixDQUFDaEIsV0FBVyxDQUFDaUIsR0FBYixFQUFrQmpCLFdBQVcsQ0FBQ2tCLEdBQTlCLENBQW5CLENBRFE7UUFFaEJDLElBQUksRUFBRTtNQUZVLENBQVo7SUFQZSxDQUFYLENBQVosQ0FISyxDQWVGO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0VBQ0U7O0FBckNXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhcmVteXBsYWNlLWFwcC8uL1VJL21hcC5qcz8xOTEzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBtYXB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb29yZHMpXHJcbiAgICB7XHJcbiAgICAgICB0aGlzLnJlbmRlcihjb29yZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjb29yZGluYXRlcylcclxuICAgICB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKS5pbm5lckhUTUwgPSAnJzsgLy8gY2xlYXIgdGhlIDxwPiBpbiB0aGUgPGRpdiBpZD1cIm1hcFwiPlxyXG5cclxuY29uc3QgbWFwID0gbmV3IG9sLk1hcCh7XHJcbiAgdGFyZ2V0OiAnbWFwJyxcclxuICBsYXllcnM6IFtcclxuICAgIG5ldyBvbC5sYXllci5UaWxlKHtcclxuICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLk9TTSgpXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgdmlldzogbmV3IG9sLlZpZXcoe1xyXG4gICAgY2VudGVyOiBvbC5wcm9qLmZyb21Mb25MYXQoW2Nvb3JkaW5hdGVzLmxuZywgY29vcmRpbmF0ZXMubGF0XSksXHJcbiAgICB6b29tOiAxNlxyXG4gIH0pXHJcbn0pO1xyXG4gICAvLyAgIGlmKCFnb29nbGUpeyAvL2dsb2JhbCBvYmplY3Qgc2V0IGJ5IHRoZSBtYXAgc2RrIFxyXG4gICAvLyAgICAgICAgICAgYWxlcnQoJ2NhblxcJ3QgZmluZCB5b3VyIGxvY2F0aW9uICwgc29ycnkhICcpO1xyXG4gICAvLyAgICAgICAgICAgcmV0dXJuO1xyXG4gICAvLyAgIH1cclxuICAgICBcclxuICAgLy8gICBjb25zdCBtYXA9bmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykse1xyXG4gICAvLyAgICAgIGNlbnRlcjpjb29yZGluYXRlcywgLy8gd2hhdCB3aWxsIGJlIHByZXNlbnQgYXQgdGhlIGNlbnRyZVxyXG4gICAvLyAgICAgIHpvb206MTZcclxuICAgLy8gICB9KS8vZ2xvYmFsIG9iamVjdCdzIHByb3BlcnR5IHRha2VzIGZpcnN0IGFyZ3VtZW50IGFzIGluIHdoaWNoIFxyXG4gICAvLyAgIC8vcGxhY2UgdG8gcmVuZGVyIHRoZSBtYXAgYW5kIHNlY29uZCBhcmd1bWVudCBhcyBhbiBvYmplY3Qgd2hlcmUgd2UgZGVmaW5lIHNvbWUgcHJvcGVydGllc1xyXG5cclxuICAgLy8gICBuZXcgZ29vZ2xlLm1hcHMubWFya2VyKHtcclxuICAgLy8gICAgcG9zaXRpb246IGNvb3JkaW5hdGVzLCAvL3doZXJlIHRvIHB1dCBtYXJrZXIgYXRcclxuICAgLy8gIG1hcDptYXAgLy9hdCB3aGljaCBtYXAgXHJcbiAgIC8vICB9KVxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJtYXAiLCJjb25zdHJ1Y3RvciIsImNvb3JkcyIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm9sIiwiTWFwIiwidGFyZ2V0IiwibGF5ZXJzIiwibGF5ZXIiLCJUaWxlIiwic291cmNlIiwiT1NNIiwidmlldyIsIlZpZXciLCJjZW50ZXIiLCJwcm9qIiwiZnJvbUxvbkxhdCIsImxuZyIsImxhdCIsInpvb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/map.js\n");

/***/ }),

/***/ "./UI/modal.js":
/*!*********************!*\
  !*** ./UI/modal.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": function() { return /* binding */ modal; }\n/* harmony export */ });\n//here we will create a modal and a background using classes then append it onto the screen\n//the content of the modal will depend on what contenttemplate id user\n// passes as argument to constructor\nclass modal {\n  constructor(contentID, fallbacktext) {\n    this.fallbacktext = fallbacktext;\n    this.modalTemplate = document.getElementById('modal-template'); // to get the template\n\n    this.contentTemplate = document.getElementById(contentID);\n  }\n\n  show() {\n    if ('content' in document.createElement('template')) {\n      const modals = document.importNode(this.modalTemplate.content, true); // to get nodelist of templatecontents\n\n      this.modal = modals.querySelector('.modal'); //selecting a thing from nodelist\n\n      this.backdrop = modals.querySelector('.backdrop');\n      const modalContents = document.importNode(this.contentTemplate.content, true).querySelector('.modal__content');\n      this.modal.append(modalContents);\n      document.body.insertAdjacentElement('afterbegin', this.modal);\n      document.body.insertAdjacentElement('afterbegin', this.backdrop);\n    } else {\n      alert(this.fallbacktext);\n    }\n  }\n\n  hide() {\n    if (this.modal) {\n      document.body.removeChild(this.modal);\n      document.body.removeChild(this.backdrop);\n    }\n\n    this.modal = null;\n    this.backdrop = null;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sTUFBTUEsS0FBTixDQUFXO0VBQ2RDLFdBQVcsQ0FBQ0MsU0FBRCxFQUFXQyxZQUFYLEVBQXlCO0lBQ2hDLEtBQUtBLFlBQUwsR0FBa0JBLFlBQWxCO0lBQ0EsS0FBS0MsYUFBTCxHQUFtQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFuQixDQUZnQyxDQUU4Qjs7SUFDOUQsS0FBS0MsZUFBTCxHQUFxQkYsUUFBUSxDQUFDQyxjQUFULENBQXdCSixTQUF4QixDQUFyQjtFQUNIOztFQUVETSxJQUFJLEdBQ0o7SUFDSSxJQUFHLGFBQWFILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixVQUF2QixDQUFoQixFQUFzRDtNQUM5RCxNQUFNQyxNQUFNLEdBQUNMLFFBQVEsQ0FBQ00sVUFBVCxDQUFvQixLQUFLUCxhQUFMLENBQW1CUSxPQUF2QyxFQUErQyxJQUEvQyxDQUFiLENBRDhELENBQ0k7O01BQ2xFLEtBQUtaLEtBQUwsR0FBV1UsTUFBTSxDQUFDRyxhQUFQLENBQXFCLFFBQXJCLENBQVgsQ0FGOEQsQ0FFbkI7O01BQzNDLEtBQUtDLFFBQUwsR0FBY0osTUFBTSxDQUFDRyxhQUFQLENBQXFCLFdBQXJCLENBQWQ7TUFDUyxNQUFNRSxhQUFhLEdBQ25CVixRQUFRLENBQUNNLFVBQVQsQ0FBb0IsS0FBS0osZUFBTCxDQUFxQkssT0FBekMsRUFBaUQsSUFBakQsRUFDQ0MsYUFERCxDQUNlLGlCQURmLENBREE7TUFJSCxLQUFLYixLQUFMLENBQVdnQixNQUFYLENBQWtCRCxhQUFsQjtNQUNFVixRQUFRLENBQUNZLElBQVQsQ0FBY0MscUJBQWQsQ0FBb0MsWUFBcEMsRUFBaUQsS0FBS2xCLEtBQXREO01BQ0FLLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjQyxxQkFBZCxDQUFvQyxZQUFwQyxFQUFpRCxLQUFLSixRQUF0RDtJQUNILENBWEcsTUFZQTtNQUNBSyxLQUFLLENBQUMsS0FBS2hCLFlBQU4sQ0FBTDtJQUNIO0VBQ0E7O0VBRURpQixJQUFJLEdBQUU7SUFDTCxJQUFHLEtBQUtwQixLQUFSLEVBQWM7TUFDWEssUUFBUSxDQUFDWSxJQUFULENBQWNJLFdBQWQsQ0FBMEIsS0FBS3JCLEtBQS9CO01BQ0FLLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjSSxXQUFkLENBQTBCLEtBQUtQLFFBQS9CO0lBQ0g7O0lBQ0wsS0FBS2QsS0FBTCxHQUFXLElBQVg7SUFDQSxLQUFLYyxRQUFMLEdBQWMsSUFBZDtFQUNDOztBQWpDaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFyZW15cGxhY2UtYXBwLy4vVUkvbW9kYWwuanM/NTUyYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2hlcmUgd2Ugd2lsbCBjcmVhdGUgYSBtb2RhbCBhbmQgYSBiYWNrZ3JvdW5kIHVzaW5nIGNsYXNzZXMgdGhlbiBhcHBlbmQgaXQgb250byB0aGUgc2NyZWVuXHJcbi8vdGhlIGNvbnRlbnQgb2YgdGhlIG1vZGFsIHdpbGwgZGVwZW5kIG9uIHdoYXQgY29udGVudHRlbXBsYXRlIGlkIHVzZXJcclxuLy8gcGFzc2VzIGFzIGFyZ3VtZW50IHRvIGNvbnN0cnVjdG9yXHJcbmV4cG9ydCBjbGFzcyBtb2RhbHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnRJRCxmYWxsYmFja3RleHQpIHtcclxuICAgICAgICB0aGlzLmZhbGxiYWNrdGV4dD1mYWxsYmFja3RleHQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbFRlbXBsYXRlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC10ZW1wbGF0ZScpOyAvLyB0byBnZXQgdGhlIHRlbXBsYXRlXHJcbiAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElEKTsgXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpXHJcbiAgICB7ICBcclxuICAgICAgICBpZignY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkgICB7XHJcbmNvbnN0IG1vZGFscz1kb2N1bWVudC5pbXBvcnROb2RlKHRoaXMubW9kYWxUZW1wbGF0ZS5jb250ZW50LHRydWUpOy8vIHRvIGdldCBub2RlbGlzdCBvZiB0ZW1wbGF0ZWNvbnRlbnRzXHJcbnRoaXMubW9kYWw9bW9kYWxzLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpOyAvL3NlbGVjdGluZyBhIHRoaW5nIGZyb20gbm9kZWxpc3RcclxudGhpcy5iYWNrZHJvcD1tb2RhbHMucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgICAgICAgIGNvbnN0IG1vZGFsQ29udGVudHM9XHJcbiAgICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy5jb250ZW50VGVtcGxhdGUuY29udGVudCx0cnVlKVxyXG4gICAgICAgICAucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50Jyk7XHJcblxyXG4gICAgICB0aGlzLm1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnRzKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsdGhpcy5tb2RhbCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLHRoaXMuYmFja2Ryb3ApO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBhbGVydCh0aGlzLmZhbGxiYWNrdGV4dCk7XHJcbiAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICBpZih0aGlzLm1vZGFsKXtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW9kYWwpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcCk7XHJcbiAgICB9XHJcbnRoaXMubW9kYWw9bnVsbDtcclxudGhpcy5iYWNrZHJvcD1udWxsO1xyXG59XHJcbn0iXSwibmFtZXMiOlsibW9kYWwiLCJjb25zdHJ1Y3RvciIsImNvbnRlbnRJRCIsImZhbGxiYWNrdGV4dCIsIm1vZGFsVGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudFRlbXBsYXRlIiwic2hvdyIsImNyZWF0ZUVsZW1lbnQiLCJtb2RhbHMiLCJpbXBvcnROb2RlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrZHJvcCIsIm1vZGFsQ29udGVudHMiLCJhcHBlbmQiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYWxlcnQiLCJoaWRlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/modal.js\n");

/***/ }),

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/map.js */ \"./UI/map.js\");\n/* harmony import */ var _UI_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/modal.js */ \"./UI/modal.js\");\n/* harmony import */ var _utility_address_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/address.js */ \"./utility/address.js\");\n\n\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    this.shareButton = document.getElementById('share-btn');\n    this.shareButton.addEventListener('click', this.shareButtonhandler);\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this)); //to bind it to object\n\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n\n  selectPlace(cd, address) {\n    //checking whether a map object is already created or not (a\n    // map is rendered or not), if not create a new object (render a new map) else only \n    //call render() again for different coordinates now no need to make another object\n    if (this.map) {\n      this.map.render(cd);\n    } else {\n      this.map = new _UI_map_js__WEBPACK_IMPORTED_MODULE_0__.map(cd);\n    }\n\n    const linkInputElemnt = document.getElementById('share-link');\n    linkInputElemnt.value = \"\".concat(location.origin, \"/my-place?address=\").concat(encodeURI(address), \"&lat=\").concat(cd.lat, \"&lng=\").concat(cd.lng);\n    this.shareButton.disabled = false;\n  }\n\n  shareButtonhandler() {\n    const linkInputElemnt = document.getElementById('share-link');\n\n    if (!navigator.clipboard) {\n      linkInputElemnt.select();\n      return;\n    }\n\n    navigator.clipboard.writeText(linkInputElemnt.value).then(() => alert('copied to clipboard')). //not neccessary to provide then and catch\n    catch(err => {\n      alert('can\\'t copy to clip board');\n      linkInputElemnt.select();\n    });\n  }\n\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      //feature detection for  other browsers\n      alert('Location feature is not available in your browser - please use a more modern browser or manually enter an address.');\n      return;\n    } //in the mean time when it is fetching location we want to show a modal\n\n\n    const mod = new _UI_modal_js__WEBPACK_IMPORTED_MODULE_1__.modal('loading-modal-content', 'can\\'t load your modal');\n    mod.show();\n    navigator.geolocation.getCurrentPosition(async successResult => {\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      const address = await (0,_utility_address_js__WEBPACK_IMPORTED_MODULE_2__.addressValue)(coordinates);\n      this.selectPlace(coordinates, address); //now this refers to whatever binded outside this arrow function\n      // new map(coordinates);  //working\n\n      mod.hide();\n    }, error => {\n      mod.hide();\n      alert('Could not locate you unfortunately. Please enter an address manually!');\n    });\n  }\n\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n\n    if (!address || address.trim() === null) {\n      alert('invalid adress');\n      return;\n    }\n\n    const mod = new _UI_modal_js__WEBPACK_IMPORTED_MODULE_1__.modal('loading-modal-content', 'can\\'t load your modal');\n    mod.show();\n\n    try {\n      //try-catching async await errors\n      const coordinates = await (0,_utility_address_js__WEBPACK_IMPORTED_MODULE_2__.coordinatesValue)(address); //as its an async function it will return a resolved promise in this case\n\n      this.selectPlace(coordinates, address);\n    } catch (err) {\n      alert(err);\n    }\n\n    mod.hide();\n  }\n\n}\n\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0I7TUFDdEM7O01BQ0FtQixHQUFHLENBQUNRLElBQUo7SUFDSCxDQVpELEVBYUVDLEtBQUssSUFBSTtNQUNQVCxHQUFHLENBQUNRLElBQUo7TUFDQVosS0FBSyxDQUNILHVFQURHLENBQUw7SUFHRCxDQWxCSDtFQW9CRDs7RUFFdUIsTUFBbEJsQixrQkFBa0IsQ0FBQ2dDLEtBQUQsRUFBUTtJQUM5QkEsS0FBSyxDQUFDQyxjQUFOO0lBQ0EsTUFBTTlCLE9BQU8sR0FBQzZCLEtBQUssQ0FBQ0UsTUFBTixDQUFhMUMsYUFBYixDQUEyQixPQUEzQixFQUFvQ2MsS0FBbEQ7O0lBQ0EsSUFBRyxDQUFDSCxPQUFELElBQVlBLE9BQU8sQ0FBQ2dDLElBQVIsT0FBaUIsSUFBaEMsRUFDQTtNQUNFakIsS0FBSyxDQUFDLGdCQUFELENBQUw7TUFDQTtJQUNEOztJQUNELE1BQU1JLEdBQUcsR0FBRSxJQUFJckMsK0NBQUosQ0FBVSx1QkFBVixFQUFrQyx3QkFBbEMsQ0FBWDtJQUNBcUMsR0FBRyxDQUFDQyxJQUFKOztJQUNBLElBQUc7TUFBRztNQUNQLE1BQU1HLFdBQVcsR0FBQyxNQUFNeEMscUVBQWdCLENBQUNpQixPQUFELENBQXhDLENBREksQ0FDOEM7O01BQ25ELEtBQUtGLFdBQUwsQ0FBaUJ5QixXQUFqQixFQUE2QnZCLE9BQTdCO0lBQ0MsQ0FIQyxDQUlBLE9BQU1pQixHQUFOLEVBQVU7TUFDVkYsS0FBSyxDQUFDRSxHQUFELENBQUw7SUFDQzs7SUFDREUsR0FBRyxDQUFDUSxJQUFKO0VBQ0Q7O0FBeEZhOztBQTJGaEIsTUFBTU0sV0FBVyxHQUFHLElBQUloRCxXQUFKLEVBQXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhcmVteXBsYWNlLWFwcC8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi4vVUkvbWFwLmpzJztcclxuaW1wb3J0IHttb2RhbH0gZnJvbSAnLi4vVUkvbW9kYWwuanMnO1xyXG5pbXBvcnQge2Nvb3JkaW5hdGVzVmFsdWUsYWRkcmVzc1ZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0eS9hZGRyZXNzLmpzJztcclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuICAgICAgdGhpcy5zaGFyZUJ1dHRvbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtYnRuJyk7XHJcbiAgICAgIHRoaXMuc2hhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMuc2hhcmVCdXR0b25oYW5kbGVyKTtcclxuICAgICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIuYmluZCh0aGlzKSk7Ly90byBiaW5kIGl0IHRvIG9iamVjdFxyXG4gICAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VsZWN0UGxhY2UoY2QsYWRkcmVzcyl7ICBcclxuICAgLy9jaGVja2luZyB3aGV0aGVyIGEgbWFwIG9iamVjdCBpcyBhbHJlYWR5IGNyZWF0ZWQgb3Igbm90IChhXHJcbiAgICAgIC8vIG1hcCBpcyByZW5kZXJlZCBvciBub3QpLCBpZiBub3QgY3JlYXRlIGEgbmV3IG9iamVjdCAocmVuZGVyIGEgbmV3IG1hcCkgZWxzZSBvbmx5IFxyXG4gICAgICAvL2NhbGwgcmVuZGVyKCkgYWdhaW4gZm9yIGRpZmZlcmVudCBjb29yZGluYXRlcyBub3cgbm8gbmVlZCB0byBtYWtlIGFub3RoZXIgb2JqZWN0XHJcbiAgICAgaWYodGhpcy5tYXApe1xyXG4gICAgIHRoaXMubWFwLnJlbmRlcihjZCk7ICB9ICBcclxuICAgICAgZWxzZXtcclxuICAgICAgIHRoaXMubWFwPW5ldyBtYXAoY2QpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxpbmtJbnB1dEVsZW1udD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtbGluaycpO1xyXG4gICAgICBsaW5rSW5wdXRFbGVtbnQudmFsdWU9YCR7bG9jYXRpb24ub3JpZ2lufS9teS1wbGFjZT9hZGRyZXNzPSR7ZW5jb2RlVVJJKGFkZHJlc3MpfSZsYXQ9JHtjZC5sYXR9JmxuZz0ke2NkLmxuZ31gO1xyXG4gICAgICB0aGlzLnNoYXJlQnV0dG9uLmRpc2FibGVkPWZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHNoYXJlQnV0dG9uaGFuZGxlcigpe1xyXG4gICAgICAgIGNvbnN0IGxpbmtJbnB1dEVsZW1udD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtbGluaycpO1xyXG4gICAgICAgaWYoIW5hdmlnYXRvci5jbGlwYm9hcmQpe1xyXG4gICAgICAgbGlua0lucHV0RWxlbW50LnNlbGVjdCgpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgIH1cclxuICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsaW5rSW5wdXRFbGVtbnQudmFsdWUpLlxyXG4gICAgIHRoZW4oKCk9PmFsZXJ0KCdjb3BpZWQgdG8gY2xpcGJvYXJkJykpLiAvL25vdCBuZWNjZXNzYXJ5IHRvIHByb3ZpZGUgdGhlbiBhbmQgY2F0Y2hcclxuICAgICBjYXRjaChlcnI9PntcclxuICAgICAgYWxlcnQoJ2NhblxcJ3QgY29weSB0byBjbGlwIGJvYXJkJyk7XHJcbiAgICAgIGxpbmtJbnB1dEVsZW1udC5zZWxlY3QoKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2F0ZVVzZXJIYW5kbGVyKCkgeyAgXHJcblxyXG4gICAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikgeyAgLy9mZWF0dXJlIGRldGVjdGlvbiBmb3IgIG90aGVyIGJyb3dzZXJzXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAnTG9jYXRpb24gZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3NlciAtIHBsZWFzZSB1c2UgYSBtb3JlIG1vZGVybiBicm93c2VyIG9yIG1hbnVhbGx5IGVudGVyIGFuIGFkZHJlc3MuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vaW4gdGhlIG1lYW4gdGltZSB3aGVuIGl0IGlzIGZldGNoaW5nIGxvY2F0aW9uIHdlIHdhbnQgdG8gc2hvdyBhIG1vZGFsXHJcbiAgICAgIGNvbnN0IG1vZCA9bmV3IG1vZGFsKCdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLCdjYW5cXCd0IGxvYWQgeW91ciBtb2RhbCcpO1xyXG4gICAgICBtb2Quc2hvdygpO1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgYXN5bmMgc3VjY2Vzc1Jlc3VsdCA9PiB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcbiAgICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCBhZGRyZXNzPWF3YWl0IGFkZHJlc3NWYWx1ZShjb29yZGluYXRlcyk7XHJcbiAgICAgICAgIHRoaXMuc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMsYWRkcmVzcyk7IC8vbm93IHRoaXMgcmVmZXJzIHRvIHdoYXRldmVyIGJpbmRlZCBvdXRzaWRlIHRoaXMgYXJyb3cgZnVuY3Rpb25cclxuICAgICAgICAgIC8vIG5ldyBtYXAoY29vcmRpbmF0ZXMpOyAgLy93b3JraW5nXHJcbiAgICAgICAgICBtb2QuaGlkZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIG1vZC5oaWRlKCk7XHJcbiAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgJ0NvdWxkIG5vdCBsb2NhdGUgeW91IHVuZm9ydHVuYXRlbHkuIFBsZWFzZSBlbnRlciBhbiBhZGRyZXNzIG1hbnVhbGx5ISdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gXHJcbiAgICBhc3luYyBmaW5kQWRkcmVzc0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgYWRkcmVzcz1ldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuICAgICAgaWYoIWFkZHJlc3MgfHwgYWRkcmVzcy50cmltKCk9PT1udWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnQoJ2ludmFsaWQgYWRyZXNzJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1vZCA9bmV3IG1vZGFsKCdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLCdjYW5cXCd0IGxvYWQgeW91ciBtb2RhbCcpO1xyXG4gICAgICBtb2Quc2hvdygpO1xyXG4gICAgICB0cnl7ICAvL3RyeS1jYXRjaGluZyBhc3luYyBhd2FpdCBlcnJvcnNcclxuICAgICBjb25zdCBjb29yZGluYXRlcz1hd2FpdCBjb29yZGluYXRlc1ZhbHVlKGFkZHJlc3MpOy8vYXMgaXRzIGFuIGFzeW5jIGZ1bmN0aW9uIGl0IHdpbGwgcmV0dXJuIGEgcmVzb2x2ZWQgcHJvbWlzZSBpbiB0aGlzIGNhc2VcclxuICAgIHRoaXMuc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMsYWRkcmVzcyk7ICBcclxuICAgIH1cclxuICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgfVxyXG4gICAgICBtb2QuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjb25zdCBwbGFjZUZpbmRlciA9IG5ldyBQbGFjZUZpbmRlcigpOyJdLCJuYW1lcyI6WyJtYXAiLCJtb2RhbCIsImNvb3JkaW5hdGVzVmFsdWUiLCJhZGRyZXNzVmFsdWUiLCJQbGFjZUZpbmRlciIsImNvbnN0cnVjdG9yIiwiYWRkcmVzc0Zvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2NhdGVVc2VyQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaGFyZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaGFyZUJ1dHRvbmhhbmRsZXIiLCJsb2NhdGVVc2VySGFuZGxlciIsImJpbmQiLCJmaW5kQWRkcmVzc0hhbmRsZXIiLCJzZWxlY3RQbGFjZSIsImNkIiwiYWRkcmVzcyIsInJlbmRlciIsImxpbmtJbnB1dEVsZW1udCIsInZhbHVlIiwibG9jYXRpb24iLCJvcmlnaW4iLCJlbmNvZGVVUkkiLCJsYXQiLCJsbmciLCJkaXNhYmxlZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsInNlbGVjdCIsIndyaXRlVGV4dCIsInRoZW4iLCJhbGVydCIsImNhdGNoIiwiZXJyIiwiZ2VvbG9jYXRpb24iLCJtb2QiLCJzaG93IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc1Jlc3VsdCIsImNvb3JkaW5hdGVzIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJoaWRlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidHJpbSIsInBsYWNlRmluZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./utility/address.js":
/*!****************************!*\
  !*** ./utility/address.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addressValue\": function() { return /* binding */ addressValue; },\n/* harmony export */   \"coordinatesValue\": function() { return /* binding */ coordinatesValue; }\n/* harmony export */ });\n// const GOOGLE_API_KEY=''; the api key we get from google to use \nasync function coordinatesValue(add) {\n  //     let address;\n  //  address=encodeURI(add);// we need to convert our adress url freindly\n  // //this will return us a promise response\n  // const response=await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`);\n  // if(!response.ok){  //if it came with 404\n  //     throw new Error('can\\'t find coordinates');\n  // }\n  // const data=await response.json();\n  // if(data.error_message){ //here maybe response returned with a 202 code but still it may contain error\n  //     throw new Error(data.error_message);\n  // }\n  //     return data.results[0].geometery.location;  // the exact coordinates we need \n  //above code is perfect but as we don't have the api key thus we'll return dummy coordinates for our map to show\n  return {\n    lat: 47.01,\n    lng: 33.55\n  };\n}\nasync function addressValue(coordinates) {\n  //this will return us a promise response\n  // const response=await \n  // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${GOOGLE_API_KEY}`);\n  // if(!response.ok){  //if it came with 404\n  //     throw new Error('can\\'t find address');\n  // }\n  // const data=await response.json();\n  // if(data.error_message){ //here maybe response returned with a 202 code but still it may contain error\n  //     throw new Error(data.error_message);\n  // }\n  //     return data.results[1].geometery.formatted_address;  // the exact coordinates we need \n  // above code is perfect but as we don't have the api key thus we'll return a dummy address for our map to show\n  return '696, maujpur';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L2FkZHJlc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNPLGVBQWVBLGdCQUFmLENBQWdDQyxHQUFoQyxFQUFvQztFQUN2QztFQUNBO0VBRUM7RUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFFQTtFQUNBLE9BQU87SUFBQ0MsR0FBRyxFQUFFLEtBQU47SUFBYUMsR0FBRyxFQUFFO0VBQWxCLENBQVA7QUFDQztBQUVNLGVBQWVDLFlBQWYsQ0FBNEJDLFdBQTVCLEVBQXdDO0VBRS9DO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFFQTtFQUVBLE9BQU8sY0FBUDtBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhcmVteXBsYWNlLWFwcC8uL3V0aWxpdHkvYWRkcmVzcy5qcz84ZDAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEdPT0dMRV9BUElfS0VZPScnOyB0aGUgYXBpIGtleSB3ZSBnZXQgZnJvbSBnb29nbGUgdG8gdXNlIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29vcmRpbmF0ZXNWYWx1ZShhZGQpe1xyXG4gICAgLy8gICAgIGxldCBhZGRyZXNzO1xyXG4gICAgLy8gIGFkZHJlc3M9ZW5jb2RlVVJJKGFkZCk7Ly8gd2UgbmVlZCB0byBjb252ZXJ0IG91ciBhZHJlc3MgdXJsIGZyZWluZGx5XHJcbiAgICAgXHJcbiAgICAgLy8gLy90aGlzIHdpbGwgcmV0dXJuIHVzIGEgcHJvbWlzZSByZXNwb25zZVxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2U9YXdhaXQgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0ke2FkZHJlc3N9JmtleT0ke0dPT0dMRV9BUElfS0VZfWApO1xyXG4gICAgLy8gaWYoIXJlc3BvbnNlLm9rKXsgIC8vaWYgaXQgY2FtZSB3aXRoIDQwNFxyXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcignY2FuXFwndCBmaW5kIGNvb3JkaW5hdGVzJyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gICAgLy8gaWYoZGF0YS5lcnJvcl9tZXNzYWdlKXsgLy9oZXJlIG1heWJlIHJlc3BvbnNlIHJldHVybmVkIHdpdGggYSAyMDIgY29kZSBidXQgc3RpbGwgaXQgbWF5IGNvbnRhaW4gZXJyb3JcclxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9tZXNzYWdlKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gICAgIHJldHVybiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0ZXJ5LmxvY2F0aW9uOyAgLy8gdGhlIGV4YWN0IGNvb3JkaW5hdGVzIHdlIG5lZWQgXHJcbiAgICBcclxuICAgIC8vYWJvdmUgY29kZSBpcyBwZXJmZWN0IGJ1dCBhcyB3ZSBkb24ndCBoYXZlIHRoZSBhcGkga2V5IHRodXMgd2UnbGwgcmV0dXJuIGR1bW15IGNvb3JkaW5hdGVzIGZvciBvdXIgbWFwIHRvIHNob3dcclxuICAgIHJldHVybiB7bGF0OiA0Ny4wMSwgbG5nOiAzMy41NX07IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkcmVzc1ZhbHVlKGNvb3JkaW5hdGVzKXtcclxuICAgIFxyXG4gICAgLy90aGlzIHdpbGwgcmV0dXJuIHVzIGEgcHJvbWlzZSByZXNwb25zZVxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2U9YXdhaXQgXHJcbiAgICAvLyBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtjb29yZGluYXRlcy5sYXR9LCR7Y29vcmRpbmF0ZXMubG5nfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gKTtcclxuICAgIC8vIGlmKCFyZXNwb25zZS5vayl7ICAvL2lmIGl0IGNhbWUgd2l0aCA0MDRcclxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhblxcJ3QgZmluZCBhZGRyZXNzJyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gICAgLy8gaWYoZGF0YS5lcnJvcl9tZXNzYWdlKXsgLy9oZXJlIG1heWJlIHJlc3BvbnNlIHJldHVybmVkIHdpdGggYSAyMDIgY29kZSBidXQgc3RpbGwgaXQgbWF5IGNvbnRhaW4gZXJyb3JcclxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9tZXNzYWdlKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gICAgIHJldHVybiBkYXRhLnJlc3VsdHNbMV0uZ2VvbWV0ZXJ5LmZvcm1hdHRlZF9hZGRyZXNzOyAgLy8gdGhlIGV4YWN0IGNvb3JkaW5hdGVzIHdlIG5lZWQgXHJcbiAgICBcclxuICAgIC8vIGFib3ZlIGNvZGUgaXMgcGVyZmVjdCBidXQgYXMgd2UgZG9uJ3QgaGF2ZSB0aGUgYXBpIGtleSB0aHVzIHdlJ2xsIHJldHVybiBhIGR1bW15IGFkZHJlc3MgZm9yIG91ciBtYXAgdG8gc2hvd1xyXG4gICAgXHJcbiAgICByZXR1cm4gJzY5NiwgbWF1anB1cic7XHJcbiAgICB9Il0sIm5hbWVzIjpbImNvb3JkaW5hdGVzVmFsdWUiLCJhZGQiLCJsYXQiLCJsbmciLCJhZGRyZXNzVmFsdWUiLCJjb29yZGluYXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utility/address.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/SharePlace.js");
/******/ 	
/******/ })()
;