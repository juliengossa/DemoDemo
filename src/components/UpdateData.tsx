import {GameData} from "../models/GameData.ts";

interface UpdateDataProps {
    gameData: GameData;
    setGameData: any;
}

export default function UpdateData(props: UpdateDataProps){
    const updateData = async () => {
        const value = (document.querySelector("input") as HTMLInputElement).value
        const newGameData = new GameData();
        Object.assign(newGameData, props.gameData);
        newGameData.step(Number(value));
        props.setGameData(newGameData);
    }

    return <div className={"row"}>
        <input type="number" placeholder="Enter the number of seconds" />
        <button onClick={updateData}>Update data</button>
    </div>
}
