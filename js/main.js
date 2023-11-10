let playerDivs = document.querySelectorAll('.player');

let albumCovers = document.querySelectorAll('.album-cover');

function hideAll() {
    playerDivs.forEach(function(el) {
      el.style.display = 'none';
    });
  }

hideAll();

let players = document.querySelectorAll('audio');

albumCovers.forEach(function(el) {
    el.onclick = (e) => {
    hideAll();
    switch (e.target.getAttribute('id')) {
        case 'signalsAlbumCover':
          document.querySelector('#subdivisionsPlayer')
              .style.display = 'block';
              players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
          break;
        case 'movingPicturesAlbumCover':
          document.querySelector('#limelightPlayer')
              .style.display = 'block';
              players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
          break;
        case '2112AlbumCover':
          document.querySelector('#aPassageToBangkokPlayer')
          .style.display = 'block';
          players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
          break;
        case 'rushAlbumCover':
          document.querySelector('#workingManPlayer')
          .style.display = 'block';
          players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
          break;
    }
    }
  });