const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UC337_WEfUoQO_I4PyzDOuVA&part=snippet%2Cid&order=date&maxResults=9';

//se obtiene por contenido 
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81b9510b91msh8abb3270c8bd538p1f72f8jsnbadb9bdabe29',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options)
    const data = await response.json();
    return data;
}
//funcion que se invoca asi misma


(async () =>{

    try{
        const videos = await fetchData(API);
        //template html adaptado para iterar x c/u de los elementos que están en la respuesta
        //se muestran 4 elementos de los nuevo por eso se usa SLICE, se comienza del 0 y luego avanza 4(0,4)
        //se unen con JOIN con un valor vacio
        //se accede a cada item y se itera cada video que trae
        let view = `        
        ${videos.items.map(video => `
            <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    title
                </h3>
                </div>
            </div>        
        `).slice(0,4).join('')}       
        `;
        content.innerHTML = view;
    }catch(error){

        console.log(error);        
    }
})();