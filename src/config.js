import 'phaser';

import preload from './lifecycle/preload';
import create from './lifecycle/create';
import update from './lifecycle/update';

export default {
  type: Phaser.AUTO,
  backgroundColor: '#c5c5c5',
  parent: 'phaser-example',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 600 },
        debug: false
    }
  },
  width: 1280,
  height: 896,
  scene: {
      preload,
      create,
      update,
  }
};