//  import { my_api_key } from "./config";



const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6eeedec946mshd38d885cf2cf1bbp1b8026jsn17a3e7c7feed",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};


function StartAlbums() {


fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", options)
  .then((response) => response.json())
  .then( response => {
    console.log(response)
  let info = response.data;
  const grid  =document.querySelector(".container > .row")
   for (let i = 0; i < info.length; i++) {
    let datas = info[i];
    
  const card = document.createElement("div")
  card.className = "col-sm-6 col-md-4 col-lg-3"

  card.innerHTML = ` 
  <div class="card">
  <img src=${datas.album.cover} class="card-img-top" alt=${datas.title}>
  <div class="card-body">
      <h5 class="card-title">${datas.title}</h5>
      <p class="card-text">${datas.title_short}</p>
      <p class="card-text"> Duration:${datas.duration}</p>
      <a href="${datas.link}" class="btn btn-primary">Listen</a>
  </div>
</div>
  `
  console.log(datas);
 grid.appendChild(card)
    
   }
  })
  .catch((err) => console.error(err));
}

window.onload = () => {

    const btn = document.querySelector("button")

    btn.addEventListener("click", StartAlbums)

}
