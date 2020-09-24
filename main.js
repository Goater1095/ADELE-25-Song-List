// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
// 版面增加歌單
for (let i in album.tracks) {
  songList.innerHTML += `</li>
           <li class="nav-item">
            <a class="nav-link " href="#">${album.tracks[i]}</a>
          </li>`
}
// 版面添加歌詞
songList.addEventListener('click', e => {
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active')
  }
  e.target.classList.add('active')
  axios.get(BASE_URL + album.artist + '/' + e.target.innerHTML)
    .then(response => {
      // console.log(response.data.lyrics)
      lyricsPanel.innerHTML = `<h3>${e.target.innerHTML}</h3><pre>${response.data.lyrics}</pre>`
    })
    .catch(error => console.log(error))
})

