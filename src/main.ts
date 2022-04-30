import Phaser from 'phaser';
import { MainScene } from './scenes/main.scene';
import { MapScene } from './scenes/map.scene';
import { PreloaderScene } from './scenes/preloader.scene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-screen',
    scale: {
        width: 800,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: 2
    },
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: true  }
    },
    render: { pixelArt: true },
    scene: [PreloaderScene, MainScene, MapScene]
};

const game = new Phaser.Game(config);
