const keyApi = 'insira sua chave aqui';
// acesse (gratuito)=> https://hgbrasil.com/status/weather/

const inputSearch = document.querySelector('#inputSearch');
const btnSearch = document.querySelector('#btnSearch');

async function getCity() {
    const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${keyApi}&city_name=${inputSearch.value}`);
    const data = await response.json();

    localStorage.setItem('lastSearch',inputSearch.value);

    document.querySelector('#name-city').innerHTML = data.results.city_name;
    document.querySelector('#date').innerHTML = data.results.date;
    document.querySelector('#temp').innerHTML = data.results.temp + "°";
    document.querySelector('#condition').innerHTML = data.results.condition_slug;
    document.querySelector('#description-weather').innerHTML = data.results.description;
}

btnSearch.addEventListener('click', () => {
    if(inputSearch.value != "") getCity();
})
inputSearch.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13) getCity() 
});


