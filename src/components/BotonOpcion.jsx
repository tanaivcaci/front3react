import React, { Component } from "react";
import '../index.css';


const Boton = (props) => {
    
    // console.log(props);

    const {id, handleClick, children} = props;

    return (
        <h3 className="opcion" >
            <button className="botones" id={id} onClick={handleClick}>{id}</button>
            <span className="opciones">{children}</span>
        </h3>
    )
}


export default class BotonOpcion extends Component {


    render() {

        return (
            <div className="opciones">
                
                <Boton id="A" handleClick={this.props.handleClick}> {this.props.opcionA} </Boton>
                <Boton id="B" handleClick={this.props.handleClick}> {this.props.opcionB} </Boton>

            </div>
        )
    }
}

