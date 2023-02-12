import React from "react";
import { Container } from '../../styles/GlobalStyles';
import { Input } from "./styled";

export default function Search(){
    function handleSearch(){
        let input = document.getElementById("search");
        let filter = input.value.toUpperCase();
        let link = document.getElementsByClassName('vehicle');
        let txtValue;
        for (let i = 0; i < link.length; i++) {
            txtValue = link[i].textContent || link[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                link[i].style.display = "";
            } else {
                link[i].style.display = "none";
            }
        }
    }
    return (
        <Container>
            <Input 
                placeholder="Pesquise por carros, motos ou caminhões..."
                id="search"
                onKeyUp={handleSearch}
            />
        </Container>
    )
}