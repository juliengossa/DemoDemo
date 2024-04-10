import {useEffect, useState} from "react";
// @ts-ignore
import {Bar} from "react-chartjs-2";
import {GameData} from "../models/GameData.ts";

interface PopulationChartProps {
    gameData: GameData;
}

export default function PopulationChart(props: PopulationChartProps){
    const [options, setOptions] = useState<any>();
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchPopulationChart = async () => {
        setIsLoading(true);
        try{
            // await new Promise(r => setTimeout(r, 1000));
            const popChart = {...props.gameData.popChart};
            setOptions(popChart.options);
            setData(popChart.data);
            console.log("Here")
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
