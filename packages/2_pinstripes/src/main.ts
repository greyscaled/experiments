import getCanvas from "./canvas/getCanvas"
import controller from "./controller/controller"
import "./style.css"

console.debug("starting main")
controller(getCanvas())
