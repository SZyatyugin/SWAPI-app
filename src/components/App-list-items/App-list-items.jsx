import React from "react";
import PropTypes from "prop-types";
import SwapiServices from "../Swapi-services";
import Apploading from "../App-loading";
let swapiService=new SwapiServices();

export default class AppListItems extends React.Component{

    
    state={
        peopleList:null,
    }
    componentDidMount(){
        swapiService.getAllpeople().then((result)=>{
            console.log(result);
            this.getResultFromAPI(result);
        });
    }
    getResultFromAPI(peopleList){
        this.setState({peopleList});
    }
    renderListItems(peopleList){
        console.log(peopleList);
        let people=[...peopleList];
        return people.map((elem)=>{
            return (
                <li key={elem.id} className="list-group-item list-group-item-action d-flex justify-content-center" onClick={()=>{this.props.getPerson(elem.id);}}>
                    <h5>{elem.name}</h5>
                </li>
            );
        });   
    }
    render(){
        let{peopleList}=this.state;
        if(!peopleList){
            return <Apploading/>;
        }
        return this.renderListItems(peopleList);
        
    }

}
AppListItems.propTypes={
    getPerson:PropTypes.func,
};