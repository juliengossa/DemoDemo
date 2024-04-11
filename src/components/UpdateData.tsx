import {GameData} from "../models/GameData.ts";

interface UpdateDataProps {
    gameData: GameData;
    setGameData: any;
}

export default function UpdateData(props: UpdateDataProps){
    const updateData = async () => {
        const value = (document.querySelector("input") as HTMLInputElement).value
        const years = (document.querySelector("input:nth-child(2)") as HTMLInputElement).value
        const newGameData = new GameData();
        Object.assign(newGameData, props.gameData);
        for (let i = 0; i < Number(years); i++)
            newGameData.step(Number(value));
        props.setGameData(newGameData);
    }

    return <div className={"row"}>
        <input type="number" placeholder="Enter the number of seconds" />
        <input type="number" placeholder="Years" defaultValue={1}/>
        <button onClick={updateData}>Update data</button>
    </div>
}
