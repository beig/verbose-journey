import TilemapLayer = Phaser.Tilemaps.TilemapLayer;
import Scene = Phaser.Scene;

export const debugDraw = (layer: TilemapLayer, scene: Scene) => {
    const debugGraphics = scene.add.graphics().setAlpha(0.7);
    layer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    });
};
