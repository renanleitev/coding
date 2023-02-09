import React from "react";
import { BarFooter } from "./styled";

export default function Footer(){
    return (
        <BarFooter>
            <p>Renan Leite Vieira</p>
            <p>@</p>
            <p>Projeto desenvolvido em React com uso da <a href='https://pokeapi.co/'>PokeApi</a></p>
        </BarFooter>
    )
}