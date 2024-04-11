import './App.css'
import PopulationTable from "./components/PopulationTable.tsx";
import PopulationChart from "./components/PopulationChart.tsx";
import StatsChart from "./components/StatsChart.tsx";
import EducationTable from "./components/EducationTable.tsx";
import UpdateData from "./components/UpdateData.tsx";
import {useState} from "react";
import {GameData} from "./models/GameData.ts";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const [gameData, setGameData] = useState<GameData>(new GameData());

    return <div>
        <PopulationChart gameData={gameData}/>
        <div className={"row"}>
            <StatsChart gameData={gameData} />
            <PopulationTable gameData={gameData} />
        </div>
        <EducationTable gameData={gameData}/>
        <UpdateData gameData={gameData} setGameData={setGameData}/>
    </div>
}

export default App
