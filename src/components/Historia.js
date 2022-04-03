import React, { Component } from "react";
import BotonOpcion from './BotonOpcion';
import HistorialOpciones from "./HistorialOpciones";
import data from './data.json';
import '../index.css';


class Historia extends Component {

  constructor(props) {
    super(props);

    //inicializo el estado del componente
    this.state = {
      //indice representa el índice de mi data.json ->  0 es equivalente a la historia con id = "1"
      indice: 0,
      seleccionAnterior: '',
      historial: []
    };

    // this.handleClick = this.handleClick.bind(this);
  }


  //MÉTODOS DEL CICLO DE VIDA - MONTAJE
  /* 
  MONTAJE
  - constructor() -> al crear una instancia del componente. 
    Desde el constructor se puede inicializar el estado y enlazar 
    manejadores de eventos

  - render() -> único método obligatorio, al ejecutarse, 
    examina el estado y las propiedades, con ésta info 
    renderiza el componente en el árbol del DOM

  - componentDidMount() -> Se invoca inmediatamente después de que un
    componente se ha insertado en el DOM. Es útil para ejecutar 
    suscripciones o peticiones asíncronas a API's, bases de datos, servicios. 
  
  */


  componentDidMount() {
    if (this.state.indice === 0) {
      alert('SEGUIME EN ESTA AVENTURA DE REACT ... ');
    }
  }

  //MÉTODOS DEL CICLO DE VIDA - ACTUALIZACIÓN
  /*
  ACTUALIZACIÓN

  - render () -> re-renderiza el componente cuando detecta cambios
    en el estado o las propiedades del componente

  - componentDidUpdate() -> Se ejecuta inmediatamente después de que 
    la actualización del estado o las propiedades sucede. 

  */

  componentDidUpdate(propsPrevias, estadoPrevio) {

    if (estadoPrevio.indice !== this.state.indice) {
      // Guardo en el historial la última elección
      this.setState({ historial: [...this.state.historial, this.state.seleccionAnterior] });
    }

    if (estadoPrevio.seleccionAnterior === null) {
      this.setState({
        indice: 0,
        seleccionAnterior: '',
        historial: []
      })
    }
  }




  handleClick = (e) => {
    const seleccion = e.target.id;
    // console.log(e.target.id);

    console.log(this.state.indice);

    if (this.state.indice >= (data.length - 2)) {

      // alert('FIN DE LA HISTORIA ')
      this.setState({
        indice: 0,
        seleccionAnterior: null,
        historial: []
      })

    } else

      if (this.state.seleccionAnterior === '') {

        if (seleccion === 'A') {

          this.setState({
            indice: this.state.indice + 1,
            seleccionAnterior: 'A',
          });

        }
        

        if (seleccion === 'B') {

          this.setState({
            indice: this.state.indice + 2,
            seleccionAnterior: 'B',
          });

        }

      } else if (this.state.seleccionAnterior === 'A') {

        if (seleccion === 'A') {

          this.setState({
            indice: this.state.indice + 2,
            seleccionAnterior: 'A',
          });

        }

        if (seleccion === 'B') {

          this.setState({
            indice: this.state.indice + 3,
            seleccionAnterior: 'B',
          });

        }

      } else {

        if (seleccion === 'A') {

          this.setState({
            indice: this.state.indice + 1,
            seleccionAnterior: 'A',
          });

        }

        if (seleccion === 'B') {

          this.setState({
            indice: this.state.indice + 2,
            seleccionAnterior: 'B',
          });

        }
      }
  };


  render() {

    const indice = this.state.indice;
    const historial = this.state.historial;
    const anterior = this.state.seleccionAnterior;

    return (
      <div className="layout">


        {/* llamo la info que importe desde el json como data y uso 
          indice para saber el índice dentro del array de las historias */}
        <h1 className="historia"> {data[indice].historia} </h1>


        {/* Tengo que crear los botones para las opciones A y B. */}
        {/* Uso el estado valor actual de indice como índice para buscar en el json */}
        <BotonOpcion

          handleClick={this.handleClick}

          opcionA={data[indice].opciones.a}
          opcionB={data[indice].opciones.b}

        />

        <h2> - - - - - - - </h2>

        {/* Muestro el historial de las opciones elegidas en caso de que exista alguna*/}
        <div>
          {anterior !== '' && <HistorialOpciones historial={historial} anterior={anterior} />}
        </div>

      </div>
    )
  }
}

export default Historia; 