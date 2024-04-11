import {GameData} from "../models/GameData.ts";
import Leader from "../json/leader.json"
import { useEffect, useState } from "react";

interface UpdateDataProps {
    gameData: GameData;
    setGameData: any;
}

export default function UpdateData(){
    return <div className={"row"}>
        <input type="number" placeholder="Primary" id={"primary"} />
        <input type="number" placeholder="Secondary" id={"secondary"}/>
        <input type="number" placeholder="High school" id={"high-school"}/>
    </div>
}

