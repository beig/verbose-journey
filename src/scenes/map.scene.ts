import Scene = Phaser.Scene;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import { debugDraw } from '../utils/debug-draw';
import { Character } from '../entities/character';

export class MapScene extends Scene {

    private cursorKeys!: CursorKeys;
    private character!: Character;

    constructor() {
        super('map-scene');
    }

    preload(): void {
    }

    create(): void {
        const map = this.make.tilemap({ key: 'test_map' });
        const tilesetGround = map.addTilesetImage('TX Tileset Stone Ground', 'stone-ground');
        const tilesetWall = map.addTilesetImage('TX Tileset Wall', 'wall');

        map.createLayer('Tile Layer 1', tilesetGround);

        const wallsLayer = map.createLayer('Tile Layer 2', tilesetWall);
        wallsLayer.setCollisionByProperty({ collide: true });
        debugDraw(wallsLayer, this);

        this.character = new Character(this.physics, this.input.keyboard, this.input.mousePointer);
        this.physics.add.collider(this.character.sprite, wallsLayer);

        this.cameras.main.startFollow(this.character.sprite);
    }


    update(time: number, delta: number) {
        super.update(time, delta);
        this.character.update(time, delta);
    }
}
