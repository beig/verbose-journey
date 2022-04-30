import { Scene } from 'phaser';

export class PreloaderScene extends Scene {
    constructor() {
        super('preload');
    }

    preload(): void {
        this.load.image('stone-ground', 'assets/tiles/TX Tileset Stone Ground.png');
        this.load.image('wall', 'assets/tiles/TX Tileset Wall.png');
        this.load.tilemapTiledJSON('test_map', 'assets/maps/test_map.json');
        this.load.image('character', 'assets/character.png');
    }

    create(): void {
        this.scene.start('main-scene');
    }
}
