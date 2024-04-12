import {SchoolData} from "../models/SchoolData.ts"

interface UpdateDataProps {
    schoolData : SchoolData
    setScholData: any
}

export default function UpdateData(props : UpdateDataProps){
    function updateSchool() {
        const newShoolData = new SchoolData()
        Object.assign(newShoolData, props.schoolData)

        if (Number((document.getElementById("primary") as HTMLInputElement).value) > 100) {
            (document.getElementById("primary") as HTMLInputElement).value = "100"
        }
        if (Number((document.getElementById("primaryValid") as HTMLInputElement).value) > 100) {
            (document.getElementById("primaryValid") as HTMLInputElement).value = "100"
        }
        if (Number((document.getElementById("secondary") as HTMLInputElement).value) > 100) {
            (document.getElementById("secondary") as HTMLInputElement).value = "100"
        }
        if (Number((document.getElementById("SecondaryValid") as HTMLInputElement).value) > 100) {
            (document.getElementById("SecondaryValid") as HTMLInputElement).value = "100"
        }
        if (Number((document.getElementById("high-school") as HTMLInputElement).value) > 100) {
            (document.getElementById("high-school") as HTMLInputElement).value = "100"
        }
        if (Number((document.getElementById("work-study") as HTMLInputElement).value) > 100) {
            (document.getElementById("work-study") as HTMLInputElement).value = "100"
        }
        if (Number((document.getElementById("High-schoolValid") as HTMLInputElement).value) > 100) {
            (document.getElementById("High-schoolValid") as HTMLInputElement).value = "100"
        }

        newShoolData.setPraimary(Number((document.getElementById("primary") as HTMLInputElement).value))
        newShoolData.setPraimaryValid(Number((document.getElementById("primaryValid") as HTMLInputElement).value))
        newShoolData.setSecondary(Number((document.getElementById("secondary") as HTMLInputElement).value))
        newShoolData.setSecondaryValid(Number((document.getElementById("SecondaryValid") as HTMLInputElement).value))
        newShoolData.setHigth(Number((document.getElementById("high-school") as HTMLInputElement).value))
        newShoolData.setHigthValid(Number((document.getElementById("High-schoolValid") as HTMLInputElement).value))
        newShoolData.setWorkStudy(Number((document.getElementById("work-study") as HTMLInputElement).value))


        props.setScholData(newShoolData)
    }

    function teste(e : any) {
        if (isNaN(Number(e.key))) {
            e.preventDefault();
        }


    }

    return <div className={"row"}>
        <input type="number" placeholder="Primary" id={"primary"} pattern="[0-9]*" min="0" max="100" onKeyPress={teste} onChange={updateSchool}/>
        <input type="number" placeholder=" Primary sucessful (0%) " pattern="[0-9]*" id={"primaryValid"} onKeyPress={teste} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="Secondary" id={"secondary"} pattern="[0-9]*" onKeyPress={teste} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="Secondary sucessful (0%)" pattern="[0-9]*" id={"SecondaryValid"} onKeyPress={teste} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="High school" id={"high-school"} pattern="[0-9]*" min="0" max="100" onKeyPress={teste} onChange={updateSchool}/>
        <input type="number" placeholder="High school sucessful (0%)" pattern="[0-9]*" id={"High-schoolValid"} onKeyPress={teste} min="0" max="100" onChange={updateSchool}/>
        <input type="number" placeholder="work study" id={"work-study"} pattern="[0-9]*" min="0" max="100" onKeyPress={teste} onChange={updateSchool}/>
    </div>
}

