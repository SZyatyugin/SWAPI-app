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
            image:this.getPlanetImage(this.getId(planet.url)),
        };
    }
    getTemplatePeople=async(person)=>{
        let image;
        await this.getPlanet(this.getId(person.homeworld)).then((result)=>{ 
            image=result;});
        return{
            name:person.name,
            id:this.getId(person.url),
            birthYear:person.birth_year,
            height:person.height,
            mass:person.mass,
            homeworld:{
                name:person.homeworld,
                img:image,
            }        
        };
    }

    getPlanetImage(id){
        let url=`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return url;
    }
    async getAllpeople() {
        let people=await this.getResponse("https://swapi.dev/api/people/");
        return people.results.map((elem)=>{
            return this.getTemplatePeople(elem);
        });
    }
    async getPerson(id) {
        let person=await this.getResponse(`https://swapi.dev/api/people/${id}`);
        return this.getTemplatePeople(person);
    }
    getAllPlanets() {
        return this.getResponse("https://swapi.dev/api/planets/");
    }
    async getPlanet(id) {
        let planet = await this.getResponse(
            `https://swapi.dev/api/planets/${id}`
        );
        return this.getTemplatePlanet(planet);
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
