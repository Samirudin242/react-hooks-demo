import { useReducer } from "react";

//Define action type
const ADD_PATIENT = "ADD_PATIENT"
const REMOVE_PATIENT = "REMOVE_PATIENT"
const COMPLETE_PAYMENT = "COMPLETE_PAYMENT"

interface Patient {
    id: number,
    name: string,
    paymentCompleted: boolean,
}

const inititalState: Patient[] = []

const reducer = (state: Patient[], action: any) => {
    switch(action.type) {
        case ADD_PATIENT: 
        return [...state, {id: action.payload.id, name: action.payload.name, paymentCompleted: false}]
        case COMPLETE_PAYMENT:
            return state.map((patient) => patient.id === action.payload.id ? {...patient, paymentCompleted: true} : patient)
        case REMOVE_PATIENT:
            return state.filter((patient) => patient.id !== action.payload.id) 
        default:
            return state       
    }
}

function Patient() {

    const [patients, dispatch] = useReducer(reducer, inititalState)


    const addPatient = (name : string) => {
        const id = Date.now()
        dispatch({type: ADD_PATIENT, payload: {id, name}})
    }


  return <div>
    <h3>Patient List</h3>
    <button onClick={() => addPatient("Ridho")}>Add Patient</button>
    <ul>
        {patients.map((patient) => (
            <li key={patient.id}>
                {patient.name} - Payment Status: { patient.paymentCompleted }
            </li>
        ))}
    </ul>
  </div>;
}

export default Patient;
