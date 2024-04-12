/*See licence in LICENCE.md
Created by Tom CZEKAJ, Anatole VOLTZ and Gaël SEILER*/


import {useEffect, useState} from "react";
import {GameData} from "../models/GameData.ts";

interface PopulationTableProps {
    gameData: GameData;
}

export default function PopulationTable(props: PopulationTableProps) {
    const [population, setPopulation] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchPopulation = async () => {
        setIsLoading(true);
        try{
            const pop = props.gameData.nationBudget;
            setPopulation(pop);
        }catch(error){
            console.error(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPopulation();
    }, [props.gameData]);

    return <div className={"column"}>
        {
            !isLoading ? <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>pop</th>
                        <th>consumption</th>
                        <th>production</th>
                        <th>total_consumption</th>
                        <th>total_production</th>
                        <th>net</th>
                    </tr>
                    {
                        population.map((pop: any, id: number) => {
                            return <tr key={id}>
                                <td>{pop.name}</td>
                                <td>{pop.pop}</td>
                                <td>{pop.consumption}</td>
                                <td>{pop.production}</td>
                                <td>{pop.total_consumption}</td>
                                <td>{pop.total_production}</td>
                                <td>{pop.net}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table> : null
        }
    </div>
}
