import { useEffect, useState } from "react"
import Leader from '../json/leader.json'
import {GameData} from "../models/GameData.ts";
import { SchoolData } from "../models/SchoolData.ts";


interface UpdateSchoolProps {
    gameData: GameData;
    setGameData: any;
    schoolData : SchoolData
    setScholData: any;
    setEnded: any;
}

interface LeaderData {
    name: string;
    start: number;
    end: number;
}

export function PassYear(props: UpdateSchoolProps) {
    const[year, setYear] = useState(props.gameData.year)
    const[leaderId, setLeaderId] = useState(0)
    const leaderList = Leader;
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
        if(year + nbYear > 2024)
            props.setEnded(true);
        setYear(year+nbYear)
        updateLeader(year+nbYear)
    }

    const updateData = async (nbYear : number) => {
        updateYear(nbYear)
        const primaryValue = props.schoolData.getPrimary();
        const secondaryValue = props.schoolData.getSecondary();
        const highSchoolValue = props.schoolData.getHigth();
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
        <button onClick={() => updateData((leader.end-year)+1)}>Pass mandat {`(${(leader.end-year+1)} ans)`}</button>
    </div>
}
