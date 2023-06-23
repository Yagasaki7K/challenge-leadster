'use client'
import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoDetails>
            <img src="/logo.png" alt="Leadster" />
        </LogoDetails>
    )
}

export default Logo

const LogoDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin: 1.5rem 0;
    }

`

