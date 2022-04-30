declare namespace Phaser {
    class Scene implements CustomScene {
    }
}

interface CustomScene {
    preload(): void;
    create(): void;
}
