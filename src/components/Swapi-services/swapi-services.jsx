import React from "react";

export default class SwapiServices extends React.Component {
    async getResponse(url) {
        return await fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(
                    `Couldn't fetch ${url}. Receieved ${response.status}`
                );
            }
            return response.json();
        }).then((result)=>{
            return result;
        });
    }
    getId(value){
        let pattern =/\/([0-9]*)\/$/;
        let id=value.match(pattern)[1];
        return id;
    }
    getTemplate(result){
        return {
            planetName: result.name,
            population: result.population,
            rotationPeriod: result.rotation_period,
            diameter: result.diameter,
            id: this.getId(result.url),
        };
    }
    getAllpeople() {
        return this.getResponse("https://swapi.dev/api/people/");
    }
    getPerson(id) {
        return this.getResponse(`https://swapi.dev/api/people/${id}`);
    }
    getAllPlanets() {
        return this.getResponse("https://swapi.dev/api/planets/");
    }
    async getPlanet(id) {
        let planet= await this.getResponse(`https://swapi.dev/api/planets/${id}`);
        return this.getTemplate(planet);
       
    }
    getAllSpecies() {
        return this.getResponse("https://swapi.dev/api/species/");
    }
    getAllStarships() {
        return this.getResponse("https://swapi.dev/api/starships/");
    }
    getStarshipData(id) {
        return this.getResponse(`https://swapi.dev/api/starships/${id}`);
    }
    getAllVehicles() {
        return this.getResponse("https://swapi.dev/api/vehicles/");
    }
}
