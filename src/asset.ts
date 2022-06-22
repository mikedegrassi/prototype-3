import * as PIXI from 'pixi.js'
import { Screen1 } from './scherm1'

import city2 from './images/city2.png'
import city from "./images/City1.png"

import button from "./images/croppedbutton2.png"
import buttonDown from "./images/croppedbuttonDown2.png"

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    // private game: Game
    private assets: AssetFile[] = []

    constructor(screen: Screen1) {
        super()
        
        this.assets = [

            {name: 'city2', url: city2},
            {name: "city", url: city},
            {name: "button", url: button},
            {name: 'buttonDown', url: buttonDown}
            
        ]

        this.assets.forEach(asset => {
            this.add(asset.name, asset.url)
        })

        this.onError.add((arg) => { console.error(arg) })
        this.onProgress.add((loader) => this.showProgress(loader))
        this.load(() => screen.doneLoading())
    }

    private showProgress(loader) {
        console.log(`Loading ${loader.progress}%`)
    }
}