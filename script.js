function RimuoviPreferito(event){
    const preferiti = document.querySelector('#preferiti');
    preferiti.removeChild(event.currentTarget.parentNode.parentNode);
    const scritta = document.querySelector('h1');
    if(preferiti.childElementCount === 0)
    {
        preferiti.classList.add('hidden');
        scritta.classList.add('hidden');
    }
}


function AggiungiPreferiti(event){
    const preferiti = document.querySelector('#preferiti');
    const lista = preferiti.querySelectorAll('h1');
    for(elemento of lista)
        if(elemento.textContent === event.currentTarget.parentNode.querySelector('h1').textContent)
        {
            return;
        }
    preferiti.classList.add('pref');
    const scritta = document.querySelector('h1');
    scritta.classList.remove('hidden');
    if(preferiti.classList.contains('hidden'))
        preferiti.classList.remove('hidden');
    for(let i = 0; i < lista_contenuti.length; i++) {
        const box = event.currentTarget.parentNode.parentNode;
        if(lista_contenuti[i].titolo === box.querySelector('h1').textContent)
        {
        const titolo = lista_contenuti[i].titolo;
        const preferiti = rimuovi;
        const foto_src = lista_contenuti[i].immagine;
        const descrizione = lista_contenuti[i].descrizione;
        const contenuto = document.createElement('div');
        const titolo_preferiti = document.createElement('div');
        const title = document.createElement('h1');
        title.textContent = titolo;
        const pre = document.createElement('img');
        pre.src = preferiti;
        pre.addEventListener('click', RimuoviPreferito);
        titolo_preferiti.appendChild(title);
        titolo_preferiti.appendChild(pre);
        contenuto.appendChild(titolo_preferiti);
        const image = document.createElement('img');
        image.src = foto_src;
        image.classList.add('immagine');
        contenuto.appendChild(image);
        const descr = document.createElement('p');
        descr.textContent = descrizione;
        descr.classList.add('descrizione');
        contenuto.appendChild(descr);
        const pref = document.querySelector('#preferiti');
        pref.appendChild(contenuto);
        }
    }
}


function MenoDettagli(event) {
    const tasto = event.currentTarget;
    tasto.textContent = piu_dettagli;
    tasto.classList.add('piu_dettagli');
    tasto.classList.remove('meno_dettagli');
    tasto.removeEventListener('click', MenoDettagli);
    tasto.addEventListener('click', MostraDettagli);
    const dettagli = tasto.parentNode.querySelector('.descrizione');
    dettagli.classList.add("hidden");
}


function MostraDettagli(event) {
    const tasto = event.currentTarget;
    tasto.textContent = meno_dettagli;
    tasto.classList.remove('piu_dettagli');
    tasto.classList.add('meno_dettagli');
    tasto.removeEventListener('click', MostraDettagli);
    tasto.addEventListener('click', MenoDettagli);
    const dettagli = tasto.parentNode.querySelector('.descrizione');
    dettagli.classList.remove("hidden");
}


function CreateContenuto(tit, pref, src, desc, dett) {
    const contenuto = document.createElement('div');
    const titolo_preferiti = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = tit;
    const preferiti = document.createElement('img');
    preferiti.src = pref;
    preferiti.addEventListener('click', AggiungiPreferiti);
    titolo_preferiti.appendChild(title);
    titolo_preferiti.appendChild(preferiti);
    contenuto.appendChild(titolo_preferiti);
    const image = document.createElement('img');
    image.src = src;
    image.classList.add('immagine');
    contenuto.appendChild(image);
    const descr = document.createElement('p');
    descr.textContent = desc;
    descr.classList.add('hidden');
    descr.classList.add('descrizione');
    contenuto.appendChild(descr);
    const piu_dett = document.createElement('p');
    piu_dett.textContent = dett;
    piu_dett.classList.add('piu_dettagli');
    piu_dett.addEventListener('click', MostraDettagli);
    contenuto.appendChild(piu_dett);
    return contenuto;
}


function Ricerca(event){
    var i = 0;
    const barraDiRicerca = event.currentTarget;
    const cont = document.querySelector('#contenuti');
    const lista = cont.querySelectorAll('h1');
    for(elemento of lista)
    {
        if(elemento.textContent.toLowerCase().search(barraDiRicerca.value.toLowerCase()) === -1)
        {
            elemento.parentNode.parentNode.classList.add("hidden");
            i++;
        }
            else
                elemento.parentNode.parentNode.classList.remove("hidden");
    }
    if (i === lista_contenuti.length)
        cont.classList.add("vuoto");
        else
            cont.classList.remove("vuoto");
    if (i === 7 || i === 5 || i === 3 || i === 1)
        cont.classList.add("content");
        else
            cont.classList.remove("content");
}


const barraDiRicerca = document.querySelector('input[type="text"]');
barraDiRicerca.addEventListener('keyup', Ricerca);

const contenuti = document.querySelector('#contenuti');
for(let i = 0; i < lista_contenuti.length; i++) {
    const titolo = lista_contenuti[i].titolo;
    const preferiti = stella;
    const foto_src = lista_contenuti[i].immagine;
    const descrizione = lista_contenuti[i].descrizione;
    const piu_dett = piu_dettagli;
    const contenuto = CreateContenuto(titolo, preferiti, foto_src, descrizione, piu_dett);
    contenuti.appendChild(contenuto);
}