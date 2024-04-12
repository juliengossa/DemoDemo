import {SchoolData} from "../models/SchoolData.ts"

interface UpdateDataProps {
    schoolData : SchoolData
    setScholData: any
}

export default function UpdateData(props : UpdateDataProps){
    function updateSchool() {
        const newShoolData = new SchoolData()
        Object.assign(newShoolData, props.schoolData)
        newShoolData.setPraimary(Number((document.getElementById("primary") as HTMLInputElement).value))
        newShoolData.setPraimaryValid(Number((document.getElementById("primaryValid") as HTMLInputElement).value))
        newShoolData.setSecondary(Number((document.getElementById("secondary") as HTMLInputElement).value))
        newShoolData.setSecondaryValid(Number((document.getElementById("SecondaryValid") as HTMLInputElement).value))
        newShoolData.setHigth(Number((document.getElementById("high-school") as HTMLInputElement).value))
        newShoolData.setHigthValid(Number((document.getElementById("High-schoolValid") as HTMLInputElement).value))
        newShoolData.setWorkStudy(Number((document.getElementById("work-study") as HTMLInputElement).value))
        props.setScholData(newShoolData)
    }


    return <div className={"row"}>
        <input type="number" placeholder="Primary" id={"primary"} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder=" Primary sucessful (0%) " id={"primaryValid"} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="Secondary" id={"secondary"} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="Secondary sucessful (0%)" id={"SecondaryValid"} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="High school" id={"high-school"} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="High school sucessful (0%)" id={"High-schoolValid"} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="work study" id={"work-study"} min="0" max="100" onChange={updateSchool}/>
    </div>
}

