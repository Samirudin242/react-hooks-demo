import React, { memo, useCallback, useState } from "react";

function Cashier() {

    const [services, setServices] = useState<string[]>([])
    const [count, setCount] = useState<number>(0)

    const allServices = [
        {
            name: "Consultation", price: 5000
        },
        {
            name: "Lab Test", price: 20000,
        },
        {
            name: "Rad Test", price: 20000,
        },
        {
            name: "Medicine", price: 20000,
        },
    ]

    const calcultateTotal = useCallback((selectedServices: string[]) => {
        return selectedServices.reduce((total, serviceName) => {
            const service = allServices.find((s) => s.name === serviceName)
            return service ? total + service.price : total
        },0)
    }, [])

    const handleSelectService = (serviceName: string) => {
        setServices((preValue) => (
            preValue.includes(serviceName) ? preValue.filter((service) => service !== serviceName) 
            : [...preValue, serviceName]
        ))
    }

  return (
    <div>
        <h2>Hospital Cahsier</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Button Count</button>
        <div>
            <h4>Select Services:</h4>
            {allServices?.map((service) => (
                <button 
                key={service.name}
                style={{
                    margin: "5px",
                    color: "white",
                    backgroundColor: services.includes(service.name) ? "green" : "gray"
                }}
                onClick={() => handleSelectService(service.name)}
                >
                    {service.name}
                </button>
            ))}
        </div>
        <Payment calcultateTotal={calcultateTotal} services={services} />
    </div>
  );
}

interface PaymentProps {
    calcultateTotal: (services: string[]) => number,
    services: string[]
}


const Payment = memo(({calcultateTotal, services}: PaymentProps) => {
    console.log("Payment component rendered")
    return (
        <div>
            <h3>Payment Detail</h3>
            <p>Total Amount:  {calcultateTotal(services)}</p>
        </div>
    )
})


// const Payment = ({calcultateTotal, services}: PaymentProps) => {
//     console.log("Payment component rendered")
//     return (
//         <div>
//             <h3>Payment Detail</h3>
//             <p>Total Amount:  {calcultateTotal(services)}</p>
//         </div>
//     )
// }
export default Cashier;
