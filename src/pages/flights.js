import React from 'react'
import Layout from '../components/Layout/Layout'
import FllightScreen from '../components/Flights/FllightScreen'

const Flights = () => {
    const flights = [
        {
            id: 1,
            name: "Guatemala -> Singapour",
            price: 100,
            allFlights: [
                {
                    dep: "Guatemala",
                    arr: "Miami",
                    time: 120
                },
                {
                    dep: "Miami",
                    arr: "Singapour",
                    time: 3600
                }
            ]
        }
    ];
    
    return (
        <Layout>
            <FllightScreen flightList={flights} />
        </Layout>
    )
}

export default Flights
