import { Entity } from './entity';
import KeyboardPlugin = Phaser.Input.Keyboard.KeyboardPlugin;
import Key = Phaser.Input.Keyboard.Key;
import Pointer = Phaser.Input.Pointer;

export class Character implements Entity {

    private speed = 100;
    private readonly _sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    private keys!: Map<string, Key>;

    get sprite(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
        return this._sprite;
    }

    constructor(private physics: Phaser.Physics.Arcade.ArcadePhysics, private keyboard: KeyboardPlugin, private pointer: Pointer) {
        this.keys = new Map<string, Key>([
            ['LEFT', this.keyboard.addKey('A')],
            ['RIGHT', this.keyboard.addKey('D')],
            ['UP', this.keyboard.addKey('W')],
            ['DOWN', this.keyboard.addKey('S')],
            ['SPACE', this.keyboard.addKey('SPACE')],
        ]);

        this._sprite = this.physics.add.sprite(32, 32, 'character');
        this._sprite.debugShowBody = true;
        this._sprite.debugShowVelocity = true;

        this.keys.get('SPACE')?.on('down', () => {
            const t = Phaser.Math.RotateTo(this.sprite.getCenter(), this.sprite.getCenter().x, this.sprite.getCenter().y, this.sprite.body.angle, 100);
            this.sprite.setPosition(t.x, t.y);
        });
    }

    update(time: number, delta: number): void {
        this.sprite.setVelocity(0);

        if (this.keys.get('UP')?.isDown) {
            this.sprite.setVelocityY(-this.speed);
        }
        if (this.keys.get('DOWN')?.isDown) {
            this.sprite.setVelocityY(this.speed);
        }
        if (this.keys.get('LEFT')?.isDown) {
            this.sprite.setVelocityX(-this.speed);
        }
        if (this.keys.get('RIGHT')?.isDown) {
            this.sprite.setVelocityX(this.speed);
        }
    }
}
