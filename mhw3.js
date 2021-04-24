let results;
var i = 0;


function CaricaImmagine()
{
	return results[0].largeImageURL;
}


function VaiAvanti(event){
	if(i !== 34)
	{
	const immagine = event.currentTarget.parentNode.querySelector('.immagine');
	i++;
	if(results[i].id === 4787545)
		i++;
	if(results[i].id === 142556)
		i++;
	if(results[i].id === 142568)
		i++;
	if(results[i].id === 1723479)
		i++;
	if(results[i].id === 2070828)
		i++;
	if(results[i].id === 5058956)
		i++;
	if(results[i].id === 3287147)
		i++;
	immagine.src = results[i].largeImageURL;
	}
}


function VaiIndietro(event){
	if(i !== 0)
	{
	const immagine = event.currentTarget.parentNode.querySelector('.immagine');
	i--;
	if(results[i].id === 4787545)
		i--;
	if(results[i].id === 2070828)
		i--;
	if(results[i].id === 142556)
		i--;
	if(results[i].id === 142568)
		i--;
	if(results[i].id === 1723479)
		i--;
	if(results[i].id === 5058956)
		i++;
	if(results[i].id === 3287147)
		i--;
	immagine.src = results[i].largeImageURL;
	}
}


function onJson_img(json) {
	const contenuti = document.querySelector('#contenuto');
	contenuti.innerHTML = '';
	results = json.hits;
	const img = document.createElement('img');
	img.classList.add('immagine');
	const immagine = CaricaImmagine();
	img.src = immagine;
	const avanti = document.createElement('div');
	avanti.classList.add('avanti_indietro');
	const img_destra = document.createElement('img');
	img_destra.classList.add("Frecce");
	img_destra.src = "Freccia_Destra.png";
	avanti.appendChild(img_destra);
	avanti.addEventListener('click', VaiAvanti);
	const indietro = document.createElement('div');
	indietro.classList.add('avanti_indietro');
	const img_sinistra = document.createElement('img');
	img_sinistra.classList.add("Frecce")
	img_sinistra.src = "Freccia_Sinistra.png";
	indietro.appendChild(img_sinistra);
	indietro.addEventListener('click', VaiIndietro);
	const contenuto = document.createElement('div');

	contenuto.appendChild(indietro);
	contenuto.appendChild(img);
	contenuto.appendChild(avanti);
	contenuti.appendChild(contenuto);
}


function onResponse(response) {
	return response.json();
}


const key_img = '21214246-ac09f479e5828615df7f0c53e';
const img_api_endpoint = 'https://pixabay.com/api/';
const text = "Taormina";
const numResults = 50;
const img_request = img_api_endpoint + '?key='  + key_img + '&q=' + text + '&per_page=' + numResults;
fetch(img_request).then(onResponse).then(onJson_img);




function FermaNotizie(event)
{
	const sezione = event.currentTarget.parentNode;
	sezione.stop();
}


function AttivaNotizie(event)
{
	const sezione = event.currentTarget.parentNode;
	sezione.start();
}


function onJsonNews(json)
{ 
  let notizie = document.querySelector('#news');
  for (let i = 0; i < 50; i++)
  {       
	  news.classList.add("hidden");
      const notizia = document.createElement('div');

      let tit = document.createElement('h1');
	  tit.textContent = json.data[i].title + ':';

      let link= document.createElement('a');
      
      link.textContent = 'Leggi la notizia';
	  link.setAttribute('target','_blank');
      link.addEventListener('click', function(){
      link.href=json.data[i].url});

      notizia.classList.add('notizia');
        
      notizia.appendChild(tit);
	  notizia.appendChild(link);
      notizie.appendChild(notizia);
	  notizie.addEventListener('mouseover', FermaNotizie);
	  notizie.addEventListener('mouseout', AttivaNotizie);
	}
}


function onResponseNews(response){
	return response.json();
}


const api_key='c25ae2fe5b492e4b4800bcbbfcb1d56c';
const languages = 'it';
const keywords = 'covid-ristoranti-riaperture';
const limit = '50';
const request = 'http://api.mediastack.com/v1/news?languages='+languages+'&keywords='+keywords+'&limit='+limit+'&access_key='+ api_key;
fetch(request).then(onResponseNews).then(onJsonNews);