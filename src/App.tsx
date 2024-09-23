import { useState } from 'react'
import './App.css'
import Doctor from './components/Doctor'
import Nurse from './components/Nurse'
import Cashier from './components/Cashier';
import Patient from './components/Patient';

function App() {

  const [ page, setPage ] = useState<string>("doctor");

  const changePage = (val: string) => {
    setPage(val)
  }

  return (
    <>
    <div style={{
      display: "flex",
      gap: 40,
      marginBottom: "40px"
    }}>
      <button onClick={() => changePage("doctor")}>Doctor</button>
      <button onClick={() => changePage("nurse")}>Nurse</button>
      <button onClick={() => changePage("cashier")}>Cashier</button>
      <button onClick={() => changePage("patient")}>Patient</button>
    </div>
       <div>
        {
          page === "doctor" ? (
            <Doctor />
          ): page == "nurse" ? (
            <Nurse />
          ) : page === "cashier" ? <Cashier /> 
          : <Patient />
        }
       </div>
    </>
  )
}

export default App
