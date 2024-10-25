

const baseUrl='https://api.flickr.com/services/rest';
const method = 'flickr.photos.search';
const apiKey = '';
const format = 'json';
const nojsoncallback = 1;
const perPage = 10;
const search = 'viana';

const reqURL = baseUrl + 
                '?method=' + method + '&api_key=' + apiKey + '&format=' + format + '&nojsoncallback=' + nojsoncallback + '&per_page=' + perPage + '&text=' + searchTerm;

fetch(reqURL)
    .then(response => response.json())
    .then(data = displayimages(data))
    .catch(error => console.error(error));

function displayimages(data){
    console.log(data.photos.photo);
}
       