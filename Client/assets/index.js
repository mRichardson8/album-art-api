async function getData(){
    let data = await (await fetch('http://localhost:3000/albums')).json()
    data.data.forEach(element => {
        appendAlbum(element)
    });
}

function appendAlbum(albumData){
    let section = document.getElementById('api-content')
    let name = document.createElement('h3')
    name.innerText = albumData.name
    let img = document.createElement('img')
    img.src = albumData.src
    let songs = document.createElement('p')
    songs.innerText = albumData.songs
    section.append(name, img, songs)
}

getData();
