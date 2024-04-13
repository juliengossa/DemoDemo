/*See licence in LICENCE.md
Created by Tom CZEKAJ, Anatole VOLTZ and Gaël SEILER*/


import {useEffect, useState} from "react";
// @ts-ignore
import {Bar} from "react-chartjs-2";
import {GameData} from "../models/GameData.ts";

interface PopulationChartProps {
    gameData: GameData;
}

export default function FinalPopulationChart(props: PopulationChartProps){
    const [options, setOptions] = useState<any>();
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchPopulationChart = async () => {
        setIsLoading(true);
        try{
            const popChart = {...props.gameData.getYearsReviewChart()};
            setOptions(popChart.options);
            setData(popChart.data);
            await new Promise(r => setTimeout(r, 1));
        }catch(error){
            console.error(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPopulationChart();
    }, [props.gameData]);

    return <>
        {
            !isLoading ?
                <Bar options={options} data={data}></Bar>
                : null
        }
    </>

}
