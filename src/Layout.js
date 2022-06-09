import React from 'react'
import { Container } from '@mui/material'
import { AppMenu } from './AppMenu'

const Layout = ({ children }) => {
    return (
        <>
            <AppMenu />
            {children}
        </>
    )
}

export default Layout
