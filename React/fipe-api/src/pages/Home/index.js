import React from "react";
import { Container } from "../../styles/GlobalStyles";
import CarModel from "../../components/CarModel";
import TruckModel from "../../components/TruckModel";
import MotoModel from "../../components/MotoModel";
import Search from "../../components/Search";

export default function Home(){
    return (
        <>
            <Search/>
            <Container>
                <div>
                    <h1>Carros</h1>
                    <CarModel/>
                </div>
                <div>
                    <h1>Motos</h1>
                    <MotoModel/>
                </div>
                <div>
                    <h1>Caminhões</h1>
                    <TruckModel/>
                </div>
            </Container>
        </>
    )
};