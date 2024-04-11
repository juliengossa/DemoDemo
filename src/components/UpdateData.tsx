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
        props.setScholData(newShoolData)
    }


    return <div className={"row"}>
        <input type="number" placeholder="Primary" id={"primary"} onChange={updateSchool}/>
        <input type="number" placeholder=" Primary sucessful (0%) " id={"primaryValid"} onChange={updateSchool}/>
        <input type="number" placeholder="Secondary" id={"secondary"} onChange={updateSchool}/>
        <input type="number" placeholder="Secondary sucessful (0%)" id={"SecondaryValid"} onChange={updateSchool}/>
        <input type="number" placeholder="High school" id={"high-school"} onChange={updateSchool}/>
        <input type="number" placeholder="High school sucessful (0%)" id="High-schoolValid" onChange={updateSchool}/>
    </div>
}

