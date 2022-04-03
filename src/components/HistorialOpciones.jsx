import React, { Component } from "react";



const Seleccionada = (props) => {

    // console.log(props);
    const {historial, anterior} = props;
    // console.log(historial);

    return (
        <>
            <h3>Selección anterior: {anterior} </h3>
            <h4>Historial de opciones elegidas: </h4>

            <ul>
                {/* CREO EL MAP PARA RECORRER EL HISTORIAL DE OPCIONES */}
                {historial.map( (opcion, index) => {return (<li key={index}>{opcion}</li>)})}
            </ul>

        </>
    )

}


export default class HistorialOpciones extends Component {


//MÉTODOS DEL CICLO DE VIDA - DESMONTAJE
  /*

    Son ejecutados cuando el componente ha sido eliminado del DOM. 
    Es importante que el componente padre indique cuando debe desmontarse el componente hijo. 
    En el componente hijo declaramos el método componentWillUnmount para que realice tareas 
    antes de desmontarse. 

    - componentWillUnmount() -> se ejecuta antes de destruir el 
      componente del DOM, útil para hacer tareas de limpieza. 
  */

    componentWillUnmount(){
       
        alert('FIN DE LA HISTORIA')

    }

    render() {
        return (

            <div className="recordatorio">

                <Seleccionada historial={this.props.historial} anterior={this.props.anterior}/>

            </div>

        );
    }

}