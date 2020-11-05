import React from 'react';



export default class SwapiServices extends React.Component{

    async getResponse(url){
        return await fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw new Error(`Couldn't fetch ${url}. Receieved ${response.status}`)
            }
            return response.json()
        })
        }
       getAllpeople(){
          return  this.getResponse('https://swapi.dev/api/people/')
        }
       getPerson(id){
        return  this.getResponse(`https://swapi.dev/api/people/${id}`)
        }
       getAllPlanets(){
        return this.getResponse(`https://swapi.dev/api/planets/`)
        }
        getPlanet(id){
            return this.getResponse(`https://swapi.dev/api/planets/${id}`)
        }
        getAllSpecies(){
            return this.getResponse('https://swapi.dev/api/species/')
        }
        getAllStarships(){
            return this.getResponse('https://swapi.dev/api/starships/')
        }
        getStarshipData(id){
            return this.getResponse(`https://swapi.dev/api/starships/${id}`)
        }
        getAllVehicles(){
            return this.getResponse('https://swapi.dev/api/vehicles/')
        }
}
