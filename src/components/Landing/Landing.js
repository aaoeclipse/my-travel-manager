import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "gatsby"
import './landing.css'

const Landing = () => {
    return (
        <div className='landing'>
            <div className='middle'>
                <h1 className="text-light">Welcome!</h1>
            </div>
            <div className='middle'>
                <h1 className="text-light">My Travel Manager</h1>
            </div>
            <div className='middle2'>
                <Link to='flights'>
                <Button style={{marginRight: '1rem'}}>Dashboard</Button>
                </Link>
            </div>
        </div>
    )
}

export default Landing
