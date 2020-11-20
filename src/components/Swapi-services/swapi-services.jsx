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
    getTemplatePlanet(planet) {
        return {
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            id: this.getId(planet.url),
            image: this.getPlanetImage(this.getId(planet.url)),
        };
    }
    getHomeWorld = async (person) => {
        let homeWorld;
        await this.getPlanet(this.getId(person.url)).then((result) => {
            homeWorld = result.planetName;
        });
        return homeWorld;
    };
    getTemplatePeople =(person) => {
        this.getHomeWorld(person).then((result)=>{template.homeworld.hmwName=result;});
        let template={
            image:this.getPersonImage( this.getId(person.url)),
            name: person.name,
            id: this.getId(person.url),
            birthYear: person.birth_year,
            height: person.height,
            mass: person.mass,
            homeworld: {
                hmwName:"",
                hmwImg: this.getPlanetImage(this.getId(person.url)),
            },
        };
       
        return template;
    };
    getPersonImage(id){
        let url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        return url;
    }
    getPlanetImage(id) {
        let url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return url;
    }
    async getAllpeople() {
        let people = await this.getResponse("https://swapi.dev/api/people/");
        return people.results.map((elem) => {
            return  this.getTemplatePeople(elem);
        });
    }
    async getPerson(id) {
        let person = await this.getResponse(
            `https://swapi.dev/api/people/${id}`
        );
        return this.getTemplatePeople(person);
    }
    getAllPlanets() {
        return this.getResponse("https://swapi.dev/api/planets/");
    }
    async getPlanet(id) {
        let planet = await this.getResponse(
            `https://swapi.dev/api/planets/${id}`
        );
        return await this.getTemplatePlanet(planet);
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
