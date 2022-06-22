import * as PIXI from "pixi.js"
import { Assets } from "./asset"
import { Screen2 } from "./scherm2"

export class Screen1 {

    pixi: PIXI.Application
    loader: PIXI.Loader
    backgroundImage: PIXI.Sprite
    button: PIXI.Sprite
    backgroundSprite: PIXI.Sprite

    constructor() {

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this.pixi.view)

        this.loader = new Assets(this)

    }

    doneLoading() {

        this.backgroundSprite = new PIXI.Sprite(this.loader.resources["city"].texture!)
        
        this.backgroundSprite.scale.set(0.75)
        this.pixi.stage.addChild(this.backgroundSprite)

        this.button = new PIXI.Sprite(this.loader.resources["button"].texture!)
        this.button.anchor.set(0.5)
        this.button.x = 720
        this.button.y = 400
        this.pixi.stage.addChild(this.button)
        this.button.scale.set(4)

        this.button.interactive = true;
        this.button.buttonMode = true;

        this.button.on('mousedown', () => this.onButtonDown())
        this.button.on('mouseup', () => this.onButtonUp())


    }

    onButtonDown() {

        this.button.texture = this.loader.resources["buttonDown"].texture!

        this.button.destroy()
        this.backgroundSprite.destroy()
        new Screen2(this.pixi, this.loader)

    }

    onButtonUp() {

        this.button.texture = this.loader.resources["croppedbutton2"].texture!
        console.log("working")

    }




}