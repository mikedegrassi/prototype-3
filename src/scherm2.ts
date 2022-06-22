import * as PIXI from "pixi.js"
import { Assets } from "./asset"

export class Screen2 {

    pixi: PIXI.Application
    loader: PIXI.Loader
    backgroundImage: PIXI.Sprite
    button: PIXI.Sprite
    backgroundSprite: PIXI.Sprite

    constructor(pixi: PIXI.Application, loader: PIXI.Loader) {

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this.pixi = pixi

        this.loader = loader

        // this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        // document.body.appendChild(this.pixi.view)

        this.loader = new Assets(this)

    }

    doneLoading() {

        this.backgroundSprite = new PIXI.Sprite(this.loader.resources["city2"].texture!)  
        this.backgroundSprite.scale.set(0.75)
        this.pixi.stage.addChild(this.backgroundSprite)
    }

}