// Đặt thời gian đếm ngược (ví dụ 5 phút)
var countdownTime = 10 * 60 + 30; // thời gian tính bằng giây
var targetDate = new Date().getTime() + countdownTime * 1000;

var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');

// Danh sách các bài nhạc và thông tin bài hát
var musicPlaylist = [
  {
    src: "1.mp3", // Thay thế bằng tên file nhạc của bạn
    title: "Song 1",
    artist: "Artist 1",
    cover: "cover.jpg" // Thay thế bằng ảnh bìa của bài hát
  },
  {
    src: "2.mp3",
    title: "Song  2",
    artist: "Artist  2",
    cover: "cover.jpg"
  },
  {
    src: "3.mp3",
    title: "Song  3",
    artist: "Artist 3",
    cover: "cover.jpg"
  }
];

var audioPlayer = document.getElementById('audio-player');
var currentTrack = 0;
var coverArt = document.getElementById('cover-art');
var trackTitle = document.getElementById('track-title');
var trackArtist = document.getElementById('track-artist');

// Chuyển bài nhạc khi bài trước kết thúc
audioPlayer.addEventListener('ended', function() {
  currentTrack++;
  if (currentTrack >= musicPlaylist.length) {
    currentTrack = 0; // Bắt đầu lại từ đầu danh sách
  }
  loadTrack(currentTrack);
});

// Tải bài hát
function loadTrack(trackIndex) {
  audioPlayer.src = musicPlaylist[trackIndex].src;
  coverArt.src = musicPlaylist[trackIndex].cover;
  trackTitle.innerText = musicPlaylist[trackIndex].title;
  trackArtist.innerText = musicPlaylist[trackIndex].artist;
  audioPlayer.play();
}

// Tải bài hát đầu tiên
loadTrack(currentTrack);

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;

  if (distance < 0) {
    clearInterval(x);
    setTimeout(function() {
      window.location.href = "https://d2vd.github.io/INTRO/"; // Thay thế bằng URL của trang đích
    }, 2000);
    return;
  }

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Cập nhật hiển thị
  minutesDisplay.innerHTML = String(minutes).padStart(2, '0');
  secondsDisplay.innerHTML = String(seconds).padStart(2, '0');
}, 1000);
