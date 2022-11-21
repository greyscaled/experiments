import getCanvas from "./canvas/getCanvas"
import controllerFSM from "./controller/controller"
import "./style.css"

console.debug("starting main")
controllerFSM(getCanvas())
