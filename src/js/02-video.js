import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

function getterDataLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem('videoplayer-current-time');

  if (dataFromLocalStorage) {
    return dataFromLocalStorage;
  }
  return 0;
}
player.setCurrentTime(getterDataLocalStorage());
player.on('timeupdate', throttle(onPlay, 1000));
