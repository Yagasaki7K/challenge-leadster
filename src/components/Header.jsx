'use client'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderComponents>
            <div className="webinars">
                Webinars Exclusivos
            </div>

            <h2>Menos Conversinha,</h2>
            <h1>Mais Conversão <img src="/asset-header.png" alt="asset-header" /></h1>

            <hr />

            <p>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</p>
        </HeaderComponents>
    )
}

export default Header

const HeaderComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #f0f8ff;
    padding: 10rem 0;

    .webinars {
        text-transform: uppercase;
        border: 2px solid #0077f4;
        padding: 0.5rem 1rem;
        border-radius: 15px 15px 15px 0px;
        font-weight: bold;
        color: #0077f4;
        font-size: 0.9rem;
    }

    h2 {
        color: #1c3c50;
        margin-top: 1rem;
        font-size: 4rem;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    h1 {
        color: #0077f4;
        font-size: 7rem;

        @media (max-width: 768px) {
            font-size: 4rem;
        }

        img {
            margin-left: -3rem;
            padding-bottom: 3.5rem;

            @media (max-width: 768px) {
                margin-left: -1.8rem;
                padding-bottom: 2rem;
                width: 7%;
            }
        }
    }

    hr {
        width: 40rem;

        @media (max-width: 768px) {
            width: 30rem;
        }

        border: 0.5px solid #ccc;
        margin: 0.5rem 0;
    }


`
