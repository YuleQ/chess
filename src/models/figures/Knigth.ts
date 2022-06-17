import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-knigth.png"
import whiteLogo from "../../assets/white-knigth.png"

export class Knight extends Figure{
    constructor(color : Colors , cell : Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name =FigureNames.KNIGHT;
    }
}