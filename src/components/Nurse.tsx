import React, { useEffect, useMemo, useState } from "react";

interface Patients {
    id: number,
    name: string,
    age: number,
    condition: "stable" | "critical" | "recovered"
}


const patientData: Patients[]  = [
    {id: 1, name: "Della", age: 28, condition: "critical"},
    {id: 2, name: "Juan", age: 29, condition: "critical"},
    {id: 3, name: "Ridho", age: 24, condition: "stable"},
    {id: 4, name: "Ilyas", age: 25, condition: "recovered"},
]


function Nurse() {

    const [filterCondition,  setFilterCondition] = useState<"stable" | "critical" | "recovered">("critical")
    const [count, setCount] = useState<number>(0)


    const filteredPatient = useMemo(() => {
        console.log("Filtering patientss....");
        return patientData.filter(patient => patient.condition === filterCondition)
    }, [filterCondition])



  return (
    <div>
        <h2>Critical Patients</h2>

        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Set Count</button>
        </div>

        <select 
        value={filterCondition}
        onChange={(e) => setFilterCondition(e.target.value as "stable" | "critical" | "recovered")}>
            <option value={"stable"}>Stable</option>
            <option value={"critical"}>Critical</option>
            <option value={"recovered"}>Recovered</option>
        </select>

        <ul>
            {filteredPatient?.map((patient: any) => {
                return (
                    <li key={patient.id}>
                        { patient.name } - Age: { patient.age } - Condition: {patient.condition}
                    </li>
                )
            })}
        </ul>
    </div>
  );
}

export default Nurse;
