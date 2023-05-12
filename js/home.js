// slide show
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  // Ẩn ảnh hiện tại bằng cách đặt opacity = 0
  slides[slideIndex].style.opacity = 0;
  // Tăng chỉ số của ảnh tiếp theo
  slideIndex++;
  // Nếu đang ở ảnh cuối cùng, quay trở lại ảnh đầu tiên
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  // Hiển thị ảnh tiếp theo bằng cách đặt opacity = 1 và transition
  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].style.transition = 'opacity 1s ease-in-out';
}, 3000); // Thời gian chuyển đổi ảnh (3 giây)

// filter homemusic
const trend1 = document.querySelector('.trend1');
const trend2 = document.querySelector('.trend2');
const trend3 = document.querySelector('.trend3');
const trend4 = document.querySelector('.trend4');
const trend5 = document.querySelector('.trend5');
const picture1 = document.querySelector('.picture1');
const picture2 = document.querySelector('.picture2');
const picture3 = document.querySelector('.picture3');
const picture4 = document.querySelector('.picture4');
const picture5 = document.querySelector('.picture5');

const note = document.querySelector('.note');
const slideshow = document.querySelector('.slideshow');
const playmusic = document.querySelector('.playmusic');
const trendingrightnow = document.querySelector('.trendingrightnow');
const playmusiclike = document.querySelector('.playmusiclike');
const buttonplaymusiclike = document.querySelector('.buttonplaymusiclike');
const homemusic = document.querySelector('.homemusic');
const h1homemusic = document.querySelector('.h1homemusic');
const showai = document.querySelector('.showai');
const topartist = document.querySelector('.topartist');
const recent = document.querySelector('.recent');
const mspicture = document.querySelector('#mspicture');
// âm thanh   
const volumeSlider = document.getElementById('volume-slider');

trend1.addEventListener('click', () => {
  //mspicture
  mspicture.src = 'https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s176-c-k-c0x00ffffff-no-rj';
  // repeat music
  repeatButton.addEventListener('click', () => {
    audio.currentTime = 0;
  });
  // thời gian
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds - (minutes * 60));
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTime.textContent = formatTime(audio.currentTime);
  });
  // âm lượng
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  })

  isPlaying = false;
  if (isPlaying) {
    // Nếu đang phát nhạc, chuyển sang trạng thái "pause"
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
    audio.pause();
  }
  else if (isPlaying === false || audio2.play() || audio3.play() || audio4.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
  // hide
  showai.style.display = 'none';
  recent.style.display = 'none';
  topartist.style.display = 'none';
  // custom homemusic
  homemusic.style.width = '600px';
  h1homemusic.style.marginLeft = '50px';
  h1homemusic.style.marginTop = '13px';
  // trend1
  trend1.style.width = "480px";
  picture1.style.width = "8%";

  // trend2
  trend2.style.width = "480px";
  picture2.style.width = "8%";

  // trend3
  trend3.style.width = "480px";
  picture3.style.width = "8%";

  // trend4
  trend4.style.width = "480px";
  picture4.style.width = "8%";

  // trend5
  trend5.style.width = "480px";
  picture5.style.width = "8%";

  // // custom search
  note.style.width = "50%";
  note.style.marginTop = "-35px";

  // // custom slide show
  slideshow.style.width = "80%";
  slideshow.style.marginLeft = "45px";
  // // custom trendingrightnow
  trendingrightnow.style.marginTop = '-1px';
  trendingrightnow.style.marginLeft = '50px';

  // custom playmusic
  playmusic.style.display = 'block';
  playmusic.style.float = 'right';
  playmusic.style.marginRight = '35px';
  playmusic.style.marginTop = '20px';
  playmusic.style.borderRadius = '50%';
});

trend2.addEventListener('click', () => {
  //mspicture
  mspicture.src = 'https://imgs.search.brave.com/543NmuUg-qF7IBfjzSfAMMVwSblce7Z_EbGFKAjr5zY/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUl2cHFE/ZGNzUnowNUVQZnkt/Q21EYWt3LXQ1MDB4/NTAwLmpwZw';
  // repeat music
  repeatButton.addEventListener('click', () => {
    audio2.currentTime = 0;
  });
  // thời gian
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds - (minutes * 60));
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  audio2.addEventListener('timeupdate', () => {
    const progressPercent = (audio2.currentTime / audio2.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTime.textContent = formatTime(audio2.currentTime);
  });
  // âm lượng
  volumeSlider.addEventListener('input', () => {
    audio2.volume = volumeSlider.value;
  })

  isPlaying = false;
  if (isPlaying) {
    // Nếu đang phát nhạc, chuyển sang trạng thái "pause"
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
    audio2.pause();
  }
  else if (isPlaying === false || audio.play() || audio3.play() || audio4.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio2.play();
    audio.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
  // hide
  showai.style.display = 'none';
  recent.style.display = 'none';
  topartist.style.display = 'none';
  // custom homemusic
  homemusic.style.width = '600px';
  h1homemusic.style.marginLeft = '50px';
  h1homemusic.style.marginTop = '13px';
  // trend1
  trend1.style.width = "480px";
  picture1.style.width = "8%";

  // trend2
  trend2.style.width = "480px";
  picture2.style.width = "8%";

  // trend3
  trend3.style.width = "480px";
  picture3.style.width = "8%";

  // trend4
  trend4.style.width = "480px";
  picture4.style.width = "8%";

  // trend5
  trend5.style.width = "480px";
  picture5.style.width = "8%";

  // // custom search
  note.style.width = "50%";
  note.style.marginTop = "-35px";

  // // custom slide show
  slideshow.style.width = "80%";
  slideshow.style.marginLeft = "45px";
  // // custom trendingrightnow
  trendingrightnow.style.marginTop = '-1px';
  trendingrightnow.style.marginLeft = '50px';

  // custom playmusic
  playmusic.style.display = 'block';
  playmusic.style.float = 'right';
  playmusic.style.marginRight = '35px';
  playmusic.style.marginTop = '20px';
  playmusic.style.borderRadius = '50%';
});

trend3.addEventListener('click', () => {
  //mspicture
  mspicture.src = 'https://imgs.search.brave.com/iCtryeRNaBc5zy4pU_9JpfPUohJbJquCu1TNphGC-TA/rs:fit:960:960:1/g:ce/aHR0cHM6Ly9rZW5o/MTRjZG4uY29tLzIw/MTgvMTIvMjkvdWUt/MTU0NjA1NDg1MTQ4/MDQzNDM4MDk3MC5q/cGc';
  // repeat music
  repeatButton.addEventListener('click', () => {
    audio3.currentTime = 0;
  });
  // thời gian
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds - (minutes * 60));
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  audio3.addEventListener('timeupdate', () => {
    const progressPercent = (audio3.currentTime / audio3.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTime.textContent = formatTime(audio3.currentTime);
  });
  // âm lượng
  volumeSlider.addEventListener('input', () => {
    audio3.volume = volumeSlider.value;
  })

  isPlaying = false;
  if (isPlaying) {
    // Nếu đang phát nhạc, chuyển sang trạng thái "pause"
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
    audio3.pause();
  }
  else if (isPlaying === false || audio2.play() || audio.play() || audio4.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio3.play();
    audio2.pause();
    audio.pause();
    audio4.pause();
    audio5.pause();
  }
  // hide
  showai.style.display = 'none';
  recent.style.display = 'none';
  topartist.style.display = 'none';
  // custom homemusic
  homemusic.style.width = '600px';
  h1homemusic.style.marginLeft = '50px';
  h1homemusic.style.marginTop = '13px';
  // trend1
  trend1.style.width = "480px";
  picture1.style.width = "8%";

  // trend2
  trend2.style.width = "480px";
  picture2.style.width = "8%";

  // trend3
  trend3.style.width = "480px";
  picture3.style.width = "8%";

  // trend4
  trend4.style.width = "480px";
  picture4.style.width = "8%";

  // trend5
  trend5.style.width = "480px";
  picture5.style.width = "8%";

  // // custom search
  note.style.width = "50%";
  note.style.marginTop = "-35px";

  // // custom slide show
  slideshow.style.width = "80%";
  slideshow.style.marginLeft = "45px";
  // // custom trendingrightnow
  trendingrightnow.style.marginTop = '-1px';
  trendingrightnow.style.marginLeft = '50px';

  // custom playmusic
  playmusic.style.display = 'block';
  playmusic.style.float = 'right';
  playmusic.style.marginRight = '35px';
  playmusic.style.marginTop = '20px';
  playmusic.style.borderRadius = '50%';
});

trend4.addEventListener('click', () => {
  //mspicture
  mspicture.src = 'https://imgs.search.brave.com/IlTtU7KLl5j6vyg7VH4DdXfv8DvYrxhd0YCtqN4RSmc/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/YjI3Mzk1MzNkN2Nh/M2I1N2Q5YjBlMzNk/N2RjMw';
  // repeat music
  repeatButton.addEventListener('click', () => {
    audio4.currentTime = 0;
  });
  // thời gian
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds - (minutes * 60));
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  audio4.addEventListener('timeupdate', () => {
    const progressPercent = (audio4.currentTime / audio4.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTime.textContent = formatTime(audio4.currentTime);
  });
  // âm lượng
  volumeSlider.addEventListener('input', () => {
    audio4.volume = volumeSlider.value;
  })

  isPlaying = false;
  if (isPlaying) {
    // Nếu đang phát nhạc, chuyển sang trạng thái "pause"
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
    audio4.pause();
  }
  else if (isPlaying === false || audio2.play() || audio3.play() || audio.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio4.play();
    audio2.pause();
    audio3.pause();
    audio.pause();
    audio5.pause();
  }
  // hide
  showai.style.display = 'none';
  recent.style.display = 'none';
  topartist.style.display = 'none';
  // custom homemusic
  homemusic.style.width = '600px';
  h1homemusic.style.marginLeft = '50px';
  h1homemusic.style.marginTop = '13px';
  // trend1
  trend1.style.width = "480px";
  picture1.style.width = "8%";

  // trend2
  trend2.style.width = "480px";
  picture2.style.width = "8%";

  // trend3
  trend3.style.width = "480px";
  picture3.style.width = "8%";

  // trend4
  trend4.style.width = "480px";
  picture4.style.width = "8%";

  // trend5
  trend5.style.width = "480px";
  picture5.style.width = "8%";

  // // custom search
  note.style.width = "50%";
  note.style.marginTop = "-35px";

  // // custom slide show
  slideshow.style.width = "80%";
  slideshow.style.marginLeft = "45px";
  // // custom trendingrightnow
  trendingrightnow.style.marginTop = '-1px';
  trendingrightnow.style.marginLeft = '50px';

  // custom playmusic
  playmusic.style.display = 'block';
  playmusic.style.float = 'right';
  playmusic.style.marginRight = '35px';
  playmusic.style.marginTop = '20px';
  playmusic.style.borderRadius = '50%';
});

trend5.addEventListener('click', () => {
  //mspicture
  mspicture.src = 'https://imgs.search.brave.com/ZJ8t0WOywMalenCzhXslUOD6zum_kFEISPBh2BXQPRE/rs:fit:600:557:1/g:ce/aHR0cHM6Ly9pLnZk/b2Mudm4vZGF0YS9p/bWFnZS8yMDE2LzAz/LzE3L2xvaS1iYWkt/aGF0LWtodW9uLW1h/dC1kYW5nLXRodW9u/Zy5qcGc';
  // repeat music
  repeatButton.addEventListener('click', () => {
    audio5.currentTime = 0;
  });
  // thời gian
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds - (minutes * 60));
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  audio5.addEventListener('timeupdate', () => {
    const progressPercent = (audio5.currentTime / audio5.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTime.textContent = formatTime(audio5.currentTime);
  });
  // âm lượng
  volumeSlider.addEventListener('input', () => {
    audio5.volume = volumeSlider.value;
  })

  isPlaying = false;
  if (isPlaying) {
    // Nếu đang phát nhạc, chuyển sang trạng thái "pause"
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
    audio5.pause();
  }
  else if (isPlaying === false || audio2.play() || audio3.play() || audio4.play() || audio.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio5.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio.pause();
  }
  // hide
  showai.style.display = 'none';
  recent.style.display = 'none';
  topartist.style.display = 'none';
  // custom homemusic
  homemusic.style.width = '600px';
  h1homemusic.style.marginLeft = '50px';
  h1homemusic.style.marginTop = '13px';
  // trend1
  trend1.style.width = "480px";
  picture1.style.width = "8%";

  // trend2
  trend2.style.width = "480px";
  picture2.style.width = "8%";

  // trend3
  trend3.style.width = "480px";
  picture3.style.width = "8%";

  // trend4
  trend4.style.width = "480px";
  picture4.style.width = "8%";

  // trend5
  trend5.style.width = "480px";
  picture5.style.width = "8%";

  // // custom search
  note.style.width = "50%";
  note.style.marginTop = "-35px";

  // // custom slide show
  slideshow.style.width = "80%";
  slideshow.style.marginLeft = "45px";
  // // custom trendingrightnow
  trendingrightnow.style.marginTop = '-1px';
  trendingrightnow.style.marginLeft = '50px';

  // custom playmusic
  playmusic.style.display = 'block';
  playmusic.style.float = 'right';
  playmusic.style.marginRight = '35px';
  playmusic.style.marginTop = '20px';
  playmusic.style.borderRadius = '50%';
});

let button = document.getElementById("play");
let isPlaying = false; // Khởi tạo trạng thái ban đầu là "pause"

function changeButton() {
  if (isPlaying && (audio.play() || audio2.play() || audio3.play() || audio4.play() || audio5.play())) {
    // Nếu đang phát nhạc, chuyển sang trạng thái "pause"
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
  else if (isPlaying === false || audio.pause() || audio2.play() || audio3.play() || audio4.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }

  else if (isPlaying === false || audio.play() || audio2.pause() || audio3.play() || audio4.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio2.play();
    audio.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }

  else if (isPlaying === false || audio.play() || audio2.play() || audio3.pause() || audio4.play() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio3.play();
    audio2.pause();
    audio.pause();
    audio4.pause();
    audio5.pause();
  }

  else if (isPlaying === false || audio.play() || audio2.play() || audio3.play() || audio4.pause() || audio5.play()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio4.play();
    audio2.pause();
    audio3.pause();
    audio.pause();
    audio5.pause();
  }

  else if (isPlaying === false || audio.play() || audio2.play() || audio3.play() || audio4.play() || audio5.pause()) {
    // Nếu đang tạm dừng nhạc hoặc chưa bắt đầu phát, chuyển sang trạng thái "play"
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    audio5.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio.pause();
  }
}

// runmusic
const audio = document.getElementById('my-audio-element');
const audio2 = document.getElementById('my-audio-element2');
const audio3 = document.getElementById('my-audio-element3');
const audio4 = document.getElementById('my-audio-element4');
const audio5 = document.getElementById('my-audio-element5');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('current-time');
const repeatButton = document.getElementById('repeat');

// musicpicture
const img = document.getElementById('mspicture');

setInterval(() => {
  img.style.transform = 'scale(1.2)';
  setTimeout(() => {
    img.style.transform = 'scale(1)';
  }, 300);
}, 1000);

// home
const home = document.querySelector('li i.fa-house');
home.addEventListener('click', () => {
  // hide
  like.style.display = 'none';
  playmusiclike.style.display = 'none';
  buttonplaymusiclike.style.display = 'none';
  topartist.style.display = 'block';
  title.style.display = 'block';
  slideshow.style.display = 'block';
  showai.style.display = 'block';
  recent.style.display = 'block';
  trendingrightnow.style.display = 'block';
  homemusic.style.width = '600px';
  homemusic.style.background = '#fff';
  // custom homemusic
  homemusic.style.width = '90%';
  // trend1
  trend1.style.width = "81%";
  picture1.style.width = "10%";

  // trend2
  trend2.style.width = "81%";
  picture2.style.width = "10%";

  // trend3
  trend3.style.width = "81%";
  picture3.style.width = "10%";

  // trend4
  trend4.style.width = "81%";
  picture4.style.width = "10%";

  // trend5
  trend5.style.width = "81%";
  picture5.style.width = "10%";

  // custom search
  note.style.width = "30%";
  note.style.marginTop = "-35px";

  // custom slide show
  slideshow.style.width = "40%";
  slideshow.style.marginLeft = "1px";

  // custom playmusic
  playmusic.style.display = 'none';
  // custom trendingrightnow
  trendingrightnow.style.marginTop = '-2px';
});


function thayDoiIcon2() {
  var icon = "fa-right-to-bracket";
  document.getElementById("icon-dangnhap").className = "fa-solid " + icon;

  // Lưu icon mới vào localStorage
  localStorage.setItem("icon", icon);
}

// Lấy icon-like
const iconLike = document.getElementById('icon-like');
const title = document.querySelector('.title');
const like = document.querySelector('.like');
// Thêm sự kiện khi ấn icon-like
iconLike.addEventListener('click', () => {
  if (icon === "fa-user-secret") {
    // hide
    playmusic.style.display = "none";
    buttonplaymusiclike.style.display = 'block';
    playmusiclike.style.display = 'block';
    like.style.display = 'block';
    topartist.style.display = 'none';
    title.style.display = 'none';
    slideshow.style.display = 'none';
    showai.style.display = 'none';
    recent.style.display = 'none';
    trendingrightnow.style.display = 'none';
    homemusic.style.width = '600px';
    homemusic.style.background = 'linear-gradient(to bottom, #33ccff 0%, #cc99ff 100%)';
    // custom homemusic
  } else {
    loginFormContainer.classList.toggle('show');
  }
});

// Lấy icon-library
const iconLibrary = document.getElementById('icon-library');
// Thêm sự kiện khi ấn icon-library
iconLibrary.addEventListener('click', () => {
  if (icon === "fa-user-secret") {
    topartist.style.display = 'none';
    title.style.display = 'none';
    slideshow.style.display = 'none';
    showai.style.display = 'none';
    recent.style.display = 'none';
    trendingrightnow.style.display = 'none';
    homemusic.style.width = '600px';
    homemusic.style.background = 'linear-gradient(to bottom, #55ddee 0%, #cc99ff 100%)';
  } else {
    loginFormContainer.classList.toggle('show');
  }
});

// Bài hát yêu thích của người dùng














