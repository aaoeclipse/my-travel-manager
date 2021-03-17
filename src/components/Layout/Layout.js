import React from 'react'
import CustomNavbar from './CustomNavbar'

const Layout = ({children}) => {
    return (
        <>
        <CustomNavbar />
        {children}
        </>
    )
}

export default Layout
