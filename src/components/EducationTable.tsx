import {useEffect, useState} from "react";
import {GameData} from "../models/GameData.ts";

interface EducationTableProps {
    gameData: GameData;
}

export default function EducationTable(props: EducationTableProps) {
    const [education, setEducation] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchPopulation = async () => {
        setIsLoading(true);
        try{
            const pop = props.gameData.educationBudget;
            setEducation(pop);
        }catch(error){
            console.error(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPopulation();
    }, [props.gameData]);

    return <div className={"row"}>
        {
            !isLoading ? <table>
                <tbody>
                <tr>
                    <th>name</th>
                    <th>unit_cost</th>
                    <th>pop</th>
                    <th>budget</th>
                </tr>
                {
                    education.map((ed: any) => {
                        return <tr>
                            <td>{ed.name}</td>
                            <td>{ed.unit_cost}</td>
                            <td>{ed.pop}</td>
                            <td>{ed.budget}</td>
                        </tr>
                    })
                }
                </tbody>
            </table> : null
        }
    </div>
}
