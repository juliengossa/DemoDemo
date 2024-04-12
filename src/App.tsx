import './App.css'
import PopulationTable from "./components/PopulationTable.tsx";
import PopulationChart from "./components/PopulationChart.tsx";
import { SchoolData } from './models/SchoolData.ts';
import { PassYear } from './components/PassYear.tsx';
import StatsChart from "./components/StatsChart.tsx";
import EducationTable from "./components/EducationTable.tsx";
import UpdateData from "./components/UpdateData.tsx";
import {useState} from "react";
import {GameData} from "./models/GameData.ts";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import FinalPopulationChart from "./components/FinalPopulationChart.tsx";

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
    const [schoolData, setScholData] = useState<SchoolData>(new SchoolData())
    const [ended, setEnded] = useState(false)

    const reset = () => {
        setGameData(new GameData());
        setScholData(new SchoolData());
        setEnded(false);
    }

    return (
        <div>
            {ended ? (
                <div>
                    <h1>Le jeu est terminé</h1>
                    <div id="container">
                        <div id="sidebar">
                            <EducationTable gameData={gameData}/>
                        </div>
                        <div id="info">
                            <FinalPopulationChart gameData={gameData}/>
                        </div>
                    </div>
                    <hr/>
                    <button id="b1" onClick={() => setActiveTab('Stats')}>Stats</button>
                    <button id="b2" onClick={() => setActiveTab('Population')}>Population</button>
                    <div className={"row"}>
                        {activeTab === 'Stats' && <StatsChart gameData={gameData}/>}
                        {activeTab === 'Population' && <PopulationTable gameData={gameData}/>}
                    </div>
                    <div id="end">
                        <button onClick={reset}>Rejouer</button>
                        {gameData.year<2025 ?
                            <p>Dommage vous etes trop endetté, vous ferez mieux la prochaine fois.</p> :                   
                            <p>Bien jouer vous etes arrivé à la fin.</p>
                        }
                    </div>
                </div>
            ) : (
                <div>
                    <div id="container">
                        <div id="sidebar">
                            <EducationTable gameData={gameData}/>
                            <UpdateData schoolData={schoolData} setScholData={setScholData}/>
                        </div>
                        <div id="info">
                            <PopulationChart gameData={gameData}/>
                        </div>
                    </div>
                    <hr/>
                    <button id="b1" onClick={() => setActiveTab('Stats')}>Stats</button>
                    <button id="b2" onClick={() => setActiveTab('Population')}>Population</button>
                    <div className={"row"}>
                        {activeTab === 'Stats' && <StatsChart gameData={gameData}/>}
                        {activeTab === 'Population' && <PopulationTable gameData={gameData}/>}
                    </div>
                    <div>
                        <PassYear setEnded={setEnded} gameData={gameData} setGameData={setGameData}
                                  schoolData={schoolData} setScholData={schoolData}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
