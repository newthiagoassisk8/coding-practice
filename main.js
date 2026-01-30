import { topBrazilianYouTubersDec2016 } from './db.js';

function filterByCategory(category) {
    let arr = [];
    topBrazilianYouTubersDec2016.map((youtuber) => {
        if (youtuber.categories.includes(category)) {
            arr.push(youtuber);
        }
    });
    return arr;
}
function getFamousYoutubers(subscribersCount) {
    let filterdYoutubers = [];
    topBrazilianYouTubersDec2016.map((youtuber) => {
        if (youtuber.subscribers > subscribersCount) {
            filterdYoutubers.push(youtuber);
        }
    });
    return filterdYoutubers;
}

function getAllCategories(){
    return topBrazilianYouTubersDec2016.reduce((acc, valorAtual) => {
     return acc.concat(valorAtual.channel)
    },[]); 
}

