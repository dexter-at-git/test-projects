!function(){"use strict";function a(a,b){a.otherwise("/"),b.state("/",{url:"/",views:{"":{templateUrl:"views/image-search-main.html",controller:"imageSearchController",controllerAs:"vm"},"results@/":{templateUrl:"views/image-search-results.html"},"history@/":{templateUrl:"views/image-search-history.html"}}})}angular.module("imageSearchApp",["ui.router","cgBusy"]).config(["$urlRouterProvider","$stateProvider",a])}(),function(){"use strict";function a(a,b,c){function d(){e.searchHistory=c.getSavedResults()}var e=this;e.searchQuery="",e.searchResults=[],e.searchHistory=[],e.error=void 0,d(),e.saveSearchResults=function(){c.saveResults(e.searchResults),e.searchHistory=c.getSavedResults()},e.removeElement=function(a){e.searchResults.splice(a,1)},e.restoreHistory=function(b){var c=a("filter")(e.searchHistory,{key:b})[0];c&&(e.searchResults=c.searchResults)},e.search=function(){""!==e.searchQuery&&(e.searchImagePromise=b.searchImages(e.searchQuery).then(function(a){e.error=void 0,e.searchResults=a},function(a){e.error=a.data}))}}angular.module("imageSearchApp").controller("imageSearchController",a),a.$inject=["$filter","imageSearchService","localStorageService"]}(),function(){"use strict";function a(a,b,c){function d(d){var e={q:d,key:"AIzaSyDLF4mZZTwcGZO0XoFhXN0Z1cTLSSu9j7s",cx:"010614378049903159039:h3-6gwuk96u",searchType:"image",imgSize:"medium",num:10};return a({method:"GET",url:f+"?"+b(e)}).then(function(a){return g=c.transform(a.data)})}var e={searchImages:d},f="https://www.googleapis.com/customsearch/v1",g={};return e}angular.module("imageSearchApp").factory("imageSearchService",a),a.$inject=["$http","$httpParamSerializer","modelTransformer"]}(),function(){"use strict";function a(){function a(){for(var a=[],b=0,c=localStorage.length;b<c;++b){var d=localStorage.key(b),e={key:d,date:new Date(parseInt(d)),searchResults:angular.fromJson(localStorage.getItem(d))};a.push(e)}return a}function b(a){localStorage.setItem((new Date).getTime(),angular.toJson(a))}var c={getSavedResults:a,saveResults:b};return c}angular.module("imageSearchApp").factory("localStorageService",a),a.$inject=[]}(),function(){"use strict";function a(){return{transform:b}}angular.module("imageSearchApp").factory("modelTransformer",a);var b=function(a){var b=[];return angular.forEach(a.items,function(a){var c={url:a.link,title:a.link.split("/").pop().split("#")[0].split("?")[0],thumbnailUrl:a.image.thumbnailLink};b.push(c)}),b}}();