document.addEventListener('DOMContentLoaded', init, false);

function init() {

   
  const section = document.querySelector('.videos-section');
  const loader = document.querySelector('.lds-ellipsis'); 
  //reseber dados do API usando fetch
   fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=plastic%20ocean%20animals&key=AIzaSyARjuq3aZTKcOviOqzuCTZ6v54TJ1tOq6s')
     //transforma string para json
    .then(response => response.json())
    
     .then(data => {
       loader.style = 'display:none'
         data.items.map((el) => {
           console.log(el.snippet.title);
           console.log(el.id.videoId);
           console.log(el.snippet.description);
           console.log(el.snippet.publishTime);

           section.innerHTML += `
          <article>
        <h1>${el.snippet.title}</h1>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/${el.id.videoId}"></iframe>
        <div class="description">${el.snippet.description}</div>
        <div class="publishTime">📅 ${el.snippet.publishTime}</div>
        
      </article>
         `;

         }

         )
       
        
      
    });














}