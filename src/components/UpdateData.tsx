import {GameData} from "../models/GameData.ts";

interface UpdateDataProps {
    gameData: GameData;
    setGameData: any;
}

export default function UpdateData(props: UpdateDataProps){
    const updateData = async () => {
        const primaryValue = (document.getElementById("primary") as HTMLInputElement).value;
        const secondaryValue = (document.getElementById("secondary") as HTMLInputElement).value;
        const highSchoolValue = (document.getElementById("high-school") as HTMLInputElement).value;
        const years = (document.getElementById("years") as HTMLInputElement).value;
        const newGameData = new GameData();
        Object.assign(newGameData, props.gameData);
        for (let i = 0; i < Number(years); i++)
            newGameData.step(Number(primaryValue), Number(secondaryValue), Number(highSchoolValue));
        props.setGameData(newGameData);
    }

    return <div className={"row"}>
        <input type="number" placeholder="Primary" id={"primary"} />
        <input type="number" placeholder="Secondary" id={"secondary"}/>
        <input type="number" placeholder="High school" id={"high-school"}/>
        <input type="number" placeholder="Years" defaultValue={1} id={"years"}/>
        <button onClick={updateData}>Update data</button>
    </div>
}
