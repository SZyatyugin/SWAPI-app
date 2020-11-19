import React from "react";

export default class SwapiServices extends React.Component {
    async getResponse(url) {
        return await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Couldn't fetch ${url}. Receieved ${response.status}`
                    );
                }
                return response.json();
            })
            .then((result) => {
                return result;
            });
    }
    getId(value) {
        let pattern = /\/([0-9]*)\/$/;
        let id = value.match(pattern)[1];
        return id;
    }
    getTemplate(planet) {
        return {
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            id: this.getId(planet.url),
            image:this.getPlanetImage(this.getId(planet.url)),
        };
    }
    getPlanetImage(id){
        let url=`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return url;
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
        let planet = await this.getResponse(
            `https://swapi.dev/api/planets/${id}`
        );
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
