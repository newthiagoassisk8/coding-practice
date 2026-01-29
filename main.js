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
function getFamousYoutubers() {
    let filterdYoutubers = [];
    topBrazilianYouTubersDec2016.map((youtuber) => {
        if (youtuber.subscribers > 8000000) {
            filterdYoutubers.push(youtuber);
        }
    });
    return filterdYoutubers;
}
//TODO: escrever testes dessas funções
console.log(getFamousYoutubers());
