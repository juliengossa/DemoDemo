import { useEffect, useState } from "react"
import Leader from '../json/leader.json'
import UpdateData from "./UpdateData";
import {GameData} from "../models/GameData.ts";


interface UpdateDataProps {
    gameData: GameData;
    setGameData: any;
}

interface LeaderData {
    name: string;
    start: number;
    end: number;
}

export function PassYear(props: UpdateDataProps) {
    const[year, setYear] = useState(1800)
    const[leaderId, setLeaderId] = useState(0)
    const[leaderList, setLeaderList] = useState<LeaderData[]>(Leader)
    const[leader, setLeader] = useState<LeaderData>(leaderList[0])

    useEffect(() => {
        updateLeader(year)
    }, [year])

    function updateLeader(nbYear :number) {
        if(nbYear > leader.end) {
            setLeaderId(leaderId+1)
            setLeader(leaderList[leaderId])
        }
    }

    function updateYear(nbYear : number) {
        setYear(year+nbYear)
        updateLeader(year+nbYear)
    }

    const updateData = async (nbYear : number) => {
        const primaryValue = 1;
        const secondaryValue = 2;
        const highSchoolValue = 3;
        const newGameData = new GameData();
        Object.assign(newGameData, props.gameData);
        for (let i = 0; i < nbYear; i++)
            newGameData.step(Number(primaryValue), Number(secondaryValue), Number(highSchoolValue));
        props.setGameData(newGameData);
    }


    return <div id="passYear">
        <p>{year}</p>
        <p>{leader.name}</p>
        <button onClick={() => updateData(1)}>Pass year</button>
        <button onClick={() => updateData((leader.end-year)+1)}>Pass mandat</button>
    </div>
}