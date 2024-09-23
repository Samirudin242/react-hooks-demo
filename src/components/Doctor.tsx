import React, { useState } from "react";

interface Doctor {
    id:  number,
    name: string,
    isAvailable?: boolean,
}

function Doctor() {

    const [ doctor, setDoctor ] = useState<Doctor>({
        id: 1,
        name: "Dr Juan S.Kom",
        isAvailable: true,
    })

    const changeAvailability = () => {
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            isAvailable: !prevDoctor.isAvailable
        }))
    }


  return (
    <div>
        <h2>{doctor.name}</h2>
        <p>Status: { doctor.isAvailable ? "Available" : "Not Available" } </p> 
        <button
        onClick={changeAvailability}>Update Status dokter</button>
    </div>
  );
}

export default Doctor;
