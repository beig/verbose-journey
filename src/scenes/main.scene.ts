import Scene = Phaser.Scene;

export class MainScene extends Scene {
    constructor() {
        super('main-scene');
    }

    create(): void {
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Los gehts')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start('map-scene');
            });
    }
}
