import './App.css'
import PopulationTable from "./components/PopulationTable.tsx";
import PopulationChart from "./components/PopulationChart.tsx";
import { PassYear } from './components/PassYear.tsx';
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
    const [activeTab, setActiveTab] = useState('Stats');

    return (<div>
        <div id= "container">
            <div id="sidebar">
                <EducationTable gameData={gameData}/>
                <UpdateData/>
            </div>
            <div id="info">
                <PopulationChart gameData={gameData}/>
            </div>
        </div>
        <hr/>
            <button id="b1" onClick={() => setActiveTab('Stats')} >Stats</button>
            <button id="b2" onClick={() => setActiveTab('Population')}>Population</button>
            <div className={"row"}>
            {activeTab === 'Stats' && <StatsChart gameData={gameData} />}
            {activeTab === 'Population' && <PopulationTable gameData={gameData} />}
        </div>
        <div>
            <PassYear gameData={gameData} setGameData={setGameData}/>
        </div>
    </div>
    )
}

export default App
