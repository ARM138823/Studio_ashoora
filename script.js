/* =================================
ELEMENTS
================================= */

const loader =
document.getElementById("loader");

const welcomeModal =
document.getElementById("welcomeModal");

const closeModal =
document.getElementById("closeModal");

const clock =
document.getElementById("clock");

/* =================================
MODALS
================================= */

const newSongsBtn =
document.getElementById("newSongsBtn");

const categoriesBtn =
document.getElementById("categoriesBtn");

const favoritesBtn =
document.getElementById("favoritesBtn");

const popularBtn =
document.getElementById("popularBtn");

const aboutBtn =
document.getElementById("aboutBtn");

const newSongsModal =
document.getElementById("newSongsModal");

const categoriesModal =
document.getElementById("categoriesModal");

const favoritesModal =
document.getElementById("favoritesModal");

const popularModal =
document.getElementById("popularModal");

const aboutModal =
document.getElementById("aboutModal");

/* =================================
CATEGORY MODALS
================================= */

const studioBtn =
document.getElementById("studioBtn");

const emotionalBtn =
document.getElementById("emotionalBtn");

const rozeBtn =
document.getElementById("rozeBtn");

const turkishBtn =
document.getElementById("turkishBtn");

const studioModal =
document.getElementById("studioModal");

const emotionalModal =
document.getElementById("emotionalModal");

const rozeModal =
document.getElementById("rozeModal");

const turkishModal =
document.getElementById("turkishModal");

/* =================================
WELCOME EVERY 24 HOURS
================================= */

window.addEventListener(
"load",
()=>{

setTimeout(()=>{

loader.style.display =
"none";

const lastWelcome =

localStorage.getItem(
"lastWelcome"
);

const now =
Date.now();

if(

!lastWelcome ||

(now - Number(lastWelcome))
>
86400000

){

welcomeModal.style.display =
"flex";

localStorage.setItem(
"lastWelcome",
now
);

}

},5000);

});

/* =================================
CLOSE WELCOME
================================= */

closeModal.onclick =
()=>{

welcomeModal.style.display =
"none";

};

/* =================================
DIGITAL CLOCK
================================= */

function updateClock(){

const now =
new Date();

let h =
now.getHours();

let m =
now.getMinutes();

if(h < 10)
h = "0" + h;

if(m < 10)
m = "0" + m;

clock.textContent =
`${h}:${m}`;

}

updateClock();

setInterval(
updateClock,
1000
);
/* =================================
OPEN MAIN MODALS
================================= */

newSongsBtn.onclick =
()=>{

newSongsModal.style.display =
"flex";

};

categoriesBtn.onclick =
()=>{

categoriesModal.style.display =
"flex";

};

favoritesBtn.onclick =
()=>{

renderFavorites();

favoritesModal.style.display =
"flex";

};

popularBtn.onclick =
()=>{

popularModal.style.display =
"flex";

};

aboutBtn.onclick =
()=>{

aboutModal.style.display =
"flex";

};

/* =================================
OPEN CATEGORY MODALS
================================= */

studioBtn.onclick =
()=>{

studioModal.style.display =
"flex";

};

emotionalBtn.onclick =
()=>{

emotionalModal.style.display =
"flex";

};

rozeBtn.onclick =
()=>{

rozeModal.style.display =
"flex";

};

turkishBtn.onclick =
()=>{

turkishModal.style.display =
"flex";

};

/* =================================
CLOSE BUTTONS
================================= */

document
.querySelectorAll(".close")
.forEach(btn=>{

btn.onclick =
()=>{

const modal =

btn.closest(
".custom-modal"
);

if(modal){

modal.style.display =
"none";

}

};

});

/* =================================
CLICK OUTSIDE MODAL
================================= */

window.addEventListener(
"click",
e=>{

document
.querySelectorAll(
".custom-modal"
)
.forEach(modal=>{

if(
e.target === modal
){

modal.style.display =
"none";

}

});

});

/* =================================
ESC KEY CLOSE
================================= */

document.addEventListener(
"keydown",
e=>{

if(
e.key === "Escape"
){

document
.querySelectorAll(
".custom-modal"
)
.forEach(modal=>{

modal.style.display =
"none";

});

}

});

/* =================================
SEARCH SONGS
================================= */

/* =================================
SEARCH SONGS
================================= */

const searchInput =
document.getElementById(
"searchInput"
);

const searchModal =
document.getElementById(
"searchModal"
);

const searchResults =
document.getElementById(
"searchResults"
);

searchInput.addEventListener(
"input",
()=>{

const text =

searchInput.value
.trim()
.toLowerCase();

if(text.length < 1){

searchModal.style.display =
"none";

return;

}

const results =

songs.filter(song=>

song.title
.toLowerCase()
.includes(text)

);

searchResults.innerHTML =
"";

if(results.length === 0){

searchResults.innerHTML =

`

<div class="song-item">

<span>

هیچ مداحی پیدا نشد

</span>

</div>

`;

searchModal.style.display =
"flex";

return;

}

results.forEach(song=>{

searchResults.innerHTML +=

`

<div class="song-item">

<span>

${song.title}

</span>

<button onclick="
playSong(
'${song.file}',
'${song.title}',
'${song.cover}',
'${song.download}'
)
">

▶

</button>

</div>

`;

});

searchModal.style.display =
"flex";

});

/* =================================
PLAYER ELEMENTS
================================= */

const player =
document.getElementById("player");

const playerModal =
document.getElementById("playerModal");

const closePlayer =
document.getElementById("closePlayer");

const songName =
document.getElementById("songName");

const coverImage =
document.getElementById("coverImage");

const playPause =
document.getElementById("playPause");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const downloadBtn =
document.getElementById("downloadBtn");

const likeBtn =
document.getElementById("likeBtn");

const visualizer =
document.querySelector(".visualizer");

/* =================================
SONGS DATABASE
================================= */

/* =================================
SONGS DATABASE
================================= */

let songs = [];

async function loadSongs(){

try{

const response =
await fetch("data/songs.json")

songs =
await response.json();

renderLists();

}catch(error){

console.error(
"خطا در بارگذاری JSON",
error
);

}

}

loadSongs();

/* =================================
CREATE SONG CARD
================================= */

function createSongCard(song){

return `

<div class="song-item">

<span>

${song.title}

</span>

<button onclick="
playSong(
'${song.file}',
'${song.title}',
'${song.cover}',
'${song.download}'
)
">

▶

</button>

</div>

`;

}

/* =================================
RENDER LISTS
================================= */

function renderLists(){

/* مداحی های جدید */

const newSongsList =
document.getElementById(
"newSongsList"
);

if(newSongsList){

newSongsList.innerHTML =

songs
.filter(
song =>
song.category === "new"
)
.map(
createSongCard
)
.join("");

}

}

/* =================================
STUDIO
================================= */

const studioList =
document.getElementById(
"studioList"
);

if(studioList){

studioList.innerHTML =

songs
.filter(
song =>
song.category === "studio"
)
.map(
createSongCard
)
.join("");

}

/* =================================
EMOTIONAL
================================= */

const emotionalList =
document.getElementById(
"emotionalList"
);

if(emotionalList){

emotionalList.innerHTML =

songs
.filter(
song =>
song.category === "emotional"
)
.map(
createSongCard
)
.join("");

}

/* =================================
ROZE
================================= */

const rozeList =
document.getElementById(
"rozeList"
);

if(rozeList){

rozeList.innerHTML =

songs
.filter(
song =>
song.category === "roze"
)
.map(
createSongCard
)
.join("");

}

/* =================================
TURKISH
================================= */

const turkishList =
document.getElementById(
"turkishList"
);

if(turkishList){

turkishList.innerHTML =

songs
.filter(
song =>
song.category === "turkish"
)
.map(
createSongCard
)
.join("");

}

/* =================================
POPULAR
================================= */

const popularList =
document.getElementById(
"popularList"
);

if(popularList){

popularList.innerHTML =

songs
.filter(
song =>
song.popular === true
)
.map(
createSongCard
)
.join("");

}

/* =================================
STATE
================================= */

let currentIndex = -1;

let currentSong = null;

/* =================================
PLAY SONG
================================= */

function playSong(
src,
title,
cover,
download
){

currentIndex =
songs.findIndex(
s => s.file === src
);

currentSong = {

src,
title,
cover,
download

};

/* اطلاعات مداحی */

songName.textContent =
title;

coverImage.src =
cover;

/* اگر همان مداحی نیست */

if(player.src.indexOf(src) === -1){

player.src =
src;

}

/* دانلود */

downloadBtn.onclick = () => {

const a =
document.createElement("a");

a.href = download;

a.download = title + ".mp3";

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

};

downloadBtn.setAttribute(
"download",
title + ".mp3"
);

/* اگر از علاقه مندی ها اجرا شده */

const existsInFavorites =
favorites.find(
item =>
item.file === src
);

if(existsInFavorites){

likeBtn.style.display =
"none";

}else{

likeBtn.style.display =
"inline-flex";

}

/* نمایش پلیر */

playerModal.style.display =
"flex";

/* پخش */

player.play();

/* دکمه پلی */

playPause.innerHTML =
"⏸";

/* کاور */

coverImage.classList.add(
"playing"
);

/* ویژوالایزر */

visualizer.classList.remove(
"paused"
);

visualizer.classList.add(
"playing"
);

/* ذخیره آخرین مداحی */

localStorage.setItem(
"lastSong",
JSON.stringify(
currentSong
)
);

/* نمایش زمان */

if(player.duration){

durationEl.textContent =
formatTime(
player.duration
);

}

}
/* =================================
PLAY / PAUSE
================================= */

playPause.onclick =
()=>{

if(player.paused){

player.play();

playPause.innerHTML =
"⏸";

coverImage.classList.add(
"playing"
);

visualizer.classList.remove(
"paused"
);

}else{

player.pause();

playPause.innerHTML =
"▶";

coverImage.classList.remove(
"playing"
);

visualizer.classList.add(
"paused"
);

}

};

/* =================================
DOWNLOAD
================================= */

downloadBtn.onclick =
()=>{

if(!player.src)
return;

};

/* =================================
PREV SONG
================================= */

prevBtn.onclick =
()=>{

if(currentIndex < 0)
return;

currentIndex--;

if(currentIndex < 0){

currentIndex =
songs.length - 1;

}

playSong(

songs[currentIndex].file,
songs[currentIndex].title,
songs[currentIndex].cover,
songs[currentIndex].download

);

};

/* =================================
NEXT SONG
================================= */

nextBtn.onclick =
()=>{

if(currentIndex < 0)
return;

currentIndex++;

if(
currentIndex >= songs.length
){

currentIndex = 0;

}

playSong(

songs[currentIndex].file,
songs[currentIndex].title,
songs[currentIndex].cover,
songs[currentIndex].download

);

};
/* =================================
PROGRESS ELEMENTS
================================= */

const progressContainer =
document.getElementById(
"progressContainer"
);

const progressBar =
document.getElementById(
"progressBar"
);

const currentTimeEl =
document.getElementById(
"currentTime"
);

const durationEl =
document.getElementById(
"duration"
);

/* =================================
FORMAT TIME
================================= */

function formatTime(seconds){

if(isNaN(seconds))
return "0:00";

const mins =
Math.floor(seconds / 60);

const secs =
Math.floor(seconds % 60);

return `${mins}:${
secs < 10
? "0" + secs
: secs
}`;

}

/* =================================
UPDATE PROGRESS
================================= */

player.addEventListener(
"timeupdate",
()=>{

if(!player.duration)
return;

const percent =

(
player.currentTime /
player.duration
) * 100;

progressBar.style.width =
percent + "%";

currentTimeEl.textContent =
formatTime(
player.currentTime
);

durationEl.textContent =
formatTime(
player.duration
);

});

/* =================================
CLICK SEEK
================================= */

progressContainer.addEventListener(
"click",
e=>{

if(!player.duration)
return;

const rect =
progressContainer
.getBoundingClientRect();

const clickX =
e.clientX - rect.left;

const percent =
clickX / rect.width;

player.currentTime =

percent *
player.duration;

});
/* =================================
DRAG WITH MOUSE
================================= */

let dragging = false;

progressContainer
.addEventListener(
"mousedown",
()=>{

dragging = true;

}
);

document
.addEventListener(
"mouseup",
()=>{

dragging = false;

}
);

document
.addEventListener(
"mousemove",
e=>{

if(
!dragging ||
!player.duration
)
return;

const rect =
progressContainer
.getBoundingClientRect();

let x =
e.clientX -
rect.left;

if(x < 0)
x = 0;

if(x > rect.width)
x = rect.width;

const percent =
x / rect.width;

player.currentTime =

percent *
player.duration;

}
);

/* =================================
MOBILE TOUCH SUPPORT
================================= */

progressContainer
.addEventListener(
"touchmove",
e=>{

if(!player.duration)
return;

const touch =
e.touches[0];

const rect =
progressContainer
.getBoundingClientRect();

let x =
touch.clientX -
rect.left;

if(x < 0)
x = 0;

if(x > rect.width)
x = rect.width;

const percent =
x / rect.width;

player.currentTime =

percent *
player.duration;

}
);

/* =================================
METADATA LOADED
================================= */

player.addEventListener(
"loadedmetadata",
()=>{

durationEl.textContent =
formatTime(
player.duration
);

});

/* =================================
AUTO NEXT SONG
================================= */

player.addEventListener(
"ended",
()=>{

if(currentIndex < 0)
return;

currentIndex++;

if(
currentIndex >= songs.length
){

currentIndex = 0;

}

playSong(

songs[currentIndex].file,
songs[currentIndex].title,
songs[currentIndex].cover,
songs[currentIndex].download

);

});
/* =================================
FAVORITES
================================= */

const favoritesList =
document.getElementById(
"favoritesList"
);

const favoriteSuccessModal =
document.getElementById(
"favoriteSuccessModal"
);

const favoriteSuccessText =
document.getElementById(
"favoriteSuccessText"
);

const favoriteSuccessClose =
document.getElementById(
"favoriteSuccessClose"
);


let favorites =

JSON.parse(
localStorage.getItem(
"favorites"
)
) || [];

/* =================================
ADD FAVORITE
================================= */

likeBtn.onclick =
()=>{

if(currentIndex < 0)
return;

const song =
songs[currentIndex];

const exists =
favorites.find(
item =>
item.file === song.file
);

if(exists){

favoriteSuccessText.innerHTML =

`❤️ مداحی
<b>${song.title}</b>
قبلاً در علاقه‌مندی‌ها وجود دارد`;

favoriteSuccessModal.style.display =
"flex";

return;

}

favorites.push(song);

localStorage.setItem(
"favorites",
JSON.stringify(
favorites
)
);

renderFavorites();

favoriteSuccessText.innerHTML =

`❤️ مداحی
<b>${song.title}</b>
به لیست علاقه‌مندی‌ها افزوده شد`;

favoriteSuccessModal.style.display =
"flex";

};

/* =================================
REMOVE FAVORITE
================================= */

function removeFavorite(file){

favorites =
favorites.filter(
item =>
item.file !== file
);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

renderFavorites();

}

/* =================================
RENDER FAVORITES
================================= */

function renderFavorites(){

favoritesList.innerHTML = "";

favorites.forEach((song,index)=>{

favoritesList.innerHTML += `

<div class="song-item">

<span>${song.title}</span>

<button
class="playFav"
data-index="${index}"
>
▶
</button>

<button
class="removeFav"
data-index="${index}"
>
🗑
</button>

</div>

`;

});

document
.querySelectorAll(".playFav")
.forEach(btn=>{

btn.onclick = ()=>{

const song =
favorites[
btn.dataset.index
];

playSong(
song.file,
song.title,
song.cover,
song.download
);

};

});

document
.querySelectorAll(".removeFav")
.forEach(btn=>{

btn.onclick = ()=>{

const song =
favorites[
btn.dataset.index
];

removeFavorite(
song.file
);

};

});

}

/* =================================
LOAD FAVORITES
================================= */

renderFavorites();

/* =================================
LAST SONG
================================= */

const lastSong =

JSON.parse(
localStorage.getItem(
"lastSong"
)
);

if(lastSong){

songName.textContent =
lastSong.title;

coverImage.src =
lastSong.cover;

downloadBtn.href =
lastSong.download;

}

/* =================================
CLOSE PLAYER
================================= */

closePlayer.onclick =
()=>{

player.pause();

player.currentTime = 0;

playPause.innerHTML =
"▶";

progressBar.style.width =
"0%";

currentTimeEl.textContent =
"0:00";

coverImage.classList.remove(
"playing"
);

visualizer.classList.add(
"paused"
);

playerModal.style.display =
"none";

};

/* =================================
STOP WHEN SITE CLOSES
================================= */

window.addEventListener(
"pagehide",
()=>{

player.pause();

player.currentTime = 0;

}
);

window.addEventListener(
"beforeunload",
()=>{

player.pause();

player.currentTime = 0;

}
);

/* =================================
REFRESH EVERY 2 HOURS
================================= */

setInterval(
()=>{

if(
player.paused
){

location.reload();

}

},
7200000
);

/* =================================
PAUSE EVENTS
================================= */

player.addEventListener(
"pause",
()=>{

playPause.innerHTML =
"▶";

coverImage.classList.remove(
"playing"
);

visualizer.classList.add(
"paused"
);

});

/* =================================
PLAY EVENTS
================================= */

player.addEventListener(
"play",
()=>{

playPause.innerHTML =
"⏸";

coverImage.classList.add(
"playing"
);

visualizer.classList.remove(
"paused"
);

});



favoriteSuccessClose.onclick =
()=>{

favoriteSuccessModal.style.display =
"none";

};


/* =================================
END OF FILE
================================= */
