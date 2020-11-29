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
    getTemplatePeople = (person) => {
        let template = {
            image: this.getPersonImage(this.getId(person.url)),
            name: person.name,
            id: this.getId(person.url),
            birthYear: person.birth_year,
            height: person.height,
            mass: person.mass,
            imgPlanet: this.getPlanetImage(this.getId(person.url)),
        };

        return template;
    };
    getTemplateShip = (ship) => {
        let template = {
            image: this.getShipImage(this.getId(ship.url)),
            manufacturer: ship.manufacturer,
            model: ship.model,
            name: ship.name,
            starship_class: ship.starship_class,
            max_atmosphering_speed: ship.max_atmosphering_speed,
        };
        return template;
    };

    getPersonImage(id) {
        let url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        return url;
    }
    getPlanetImage(id) {
        let url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return url;
    }
    getShipImage(id) {
        let url = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        return url;
    }
    getAllPeople = async () => {
        let people = await this.getResponse("https://swapi.dev/api/people/");
        return people.results.map((elem) => {
            return { name: elem.name, id: this.getId(elem.url) };
        });
    };
    getPerson = async (id) => {
        let person = await this.getResponse(
            `https://swapi.dev/api/people/${id}`
        );
        return this.getTemplatePeople(person);
    };
    getAllPlanets = async () => {
        let planets = await this.getResponse("https://swapi.dev/api/planets/");
        return planets.results.map((elem) => {
            return { name: elem.name, id: this.getId(elem.url) };
        });
    };
    getPlanet = async (id) => {
        let planet = await this.getResponse(
            `https://swapi.dev/api/planets/${id}`
        );
        return await this.getTemplatePlanet(planet);
    };
    getAllSpecies = async () => {
        return await this.getResponse("https://swapi.dev/api/species/");
    };
    getAllStarships = async () => {
        let starships = await this.getResponse(
            "https://swapi.dev/api/starships/"
        );
        return starships.results.map((elem) => {
            return { name: elem.name, id: this.getId(elem.url) };
        });
    };
    getStarship = async (id) => {
        let starship = await this.getResponse(
            `https://swapi.dev/api/starships/${id}`
        );
        return this.getTemplateShip(starship);
    };
    getAllVehicles = async () => {
        return await this.getResponse("https://swapi.dev/api/vehicles/");
    };
}
