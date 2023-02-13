import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);

  const savedData = localStorage.getItem('videoplayer-current-time');
  const parsedData = JSON.parse(savedData);
  return parsedData;
};

function getterDataLocalStorage() {
  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );

  if (dataFromLocalStorage) {
    return dataFromLocalStorage;
  }
}
player.setCurrentTime(getterDataLocalStorage());
player.on('timeupdate', throttle(onPlay, 1000));
