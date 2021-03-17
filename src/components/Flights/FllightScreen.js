import React, { useState } from 'react'
import { MdFlightTakeoff } from "@react-icons/all-files/md/MdFlightTakeoff";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import './flights.css'
import { Card, Col, Container, Form, Modal, Row, Button } from 'react-bootstrap';

const FllightScreen = ({ flightList }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [addingFlight, setAddingFlight] = useState(false);
    const [listFlights, setListFlights] = useState(flightList);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [price, setPrice] = useState(0);

    const FlightElement = ({ flight }) => {
        return (
            <div onClick={() => { getDetails(flight) }}>
                <Card className="flightscreen">
                    <Card.Body>
                        <MdFlightTakeoff />
                        <Card.Title>{flight.name}</Card.Title>
                        <Card.Text>
                            Price: {flight.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    const getDetails = (flight) => {
        setShowDetails(true);
        setSelectedFlight(flight);
    }

    const ShowDetails = () => {
        return (
            <div style={{ margin: "auto", width: "80%" }}>
                {selectedFlight.allFlights.map((eFlight) => {
                    return (
                        <Container style={{ textAlign: "center", backgroundColor: "#f7f7f7" }}>
                            <Row>
                            <Col></Col>
                                <Col>
                                    Departure
                                </Col>
                                <Col>
                                    {eFlight.dep}
                                </Col>
                            </Row>
                            <Row>
                                <Col> <MdFlightTakeoff /></Col>
                                
                                <Col>
                                    Arrival
                                </Col>
                                <Col>
                                    {eFlight.arr}
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "10px" }}>
                            <Col></Col>
                                <Col>
                                    Time
                                </Col>
                                <Col>
                                    {eFlight.time}
                                </Col>
                            </Row>
                        </Container>

                    )
                })}

            </div>
        );
    }

    const AddFlight = () => {
        return (
            <Card onClick={()=>{setAddingFlight(true)}} className="flightscreen">
                <Card.Body>
                    <AiOutlinePlus />
                    <Card.Title>Add Flight</Card.Title>
                </Card.Body>
            </Card>
        );
    };

    const addOneflight = () => {
        setListFlights(listFlights => [...listFlights, {
            dep: from,
            arr: to
        }]);
    };

    const AddingFlight = () => {
        return (
            <div style={{ textAlign: "center", backgroundColor: "#f7f7f7" }}>

                {listFlights.map((eFlight)=>{
                    console.log(eFlight)
                    return(
                     <Container style={{ textAlign: "center", backgroundColor: "#f7f7f7" }}>
                     <Row>
                     <Col></Col>
                         <Col>
                             Departure
                         </Col>
                         <Col>
                             {eFlight.name}
                         </Col>
                     </Row>
                     <Row>
                         <Col> <MdFlightTakeoff /></Col>
                         <Col>
                             Arrival
                         </Col>
                         <Col>
                             {eFlight.arr}
                         </Col>
                     </Row>
                     <Row style={{ marginBottom: "10px" }}>
                     <Col></Col>
                         <Col>
                             Time
                         </Col>
                         <Col>
                             {eFlight.price}
                         </Col>
                     </Row>
                 </Container>
                )})}

                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" onChange={(e)=>{setFrom(e.target.value)}} placeholder="From" />
                        </Col>
                        <Col>
                            <Form.Control type="text" onChange={(e) => {setTo(e.target.value)}} placeholder="to" />
                        </Col>
                    </Form.Row>
                    <div style={{width: "40%", margin: "auto", textAlign: "center", marginTop: "20px", marginBottom: "20px"}} >
                    <Form.Control type="text" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price" />
                    </div>
                    <Button onClick={addOneflight}>Add Flight</Button>
                </Form>
            </div>
        );
    }

    return (
        <>
            <Modal
                size="lg"
                show={showDetails}
                onHide={() => setShowDetails(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Flight Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShowDetails />
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={addingFlight}
                onHide={() => setAddingFlight(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Adding Flight
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddingFlight />
                </Modal.Body>
            </Modal>

            <div style={{ margin: "auto", width: "80%", boxShadow: "10px" }}>
                <div style={{ textAlign: "center" }}>
                    <h1>Flights</h1>
                    {flightList.map((flight) => { return (<FlightElement flight={flight} key={flight.id} />) })}
                    <AddFlight />
                </div>
            </div>
        </>
    )
}

export default FllightScreen
