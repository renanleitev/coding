import React from "react";
import { BarFooter } from "./styled";

export default function Footer(){
    return (
        <BarFooter>
            <p><a href='https://github.com/renanleitev'></a></p>
            <p>@</p>
            <p>Projeto desenvolvido em <a href='https://pt-br.reactjs.org/'>React</a> com uso da <a href='https://pokeapi.co/'>PokeApi</a></p>
        </BarFooter>
    )
}