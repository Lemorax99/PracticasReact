import './App.css';
import React from 'react';
import { Component } from 'react';
import FormComponent from "./components/FormComponent";
import {tareas} from './tareas.json';
import Navigation from './components/navigation';

class App extends Component{
  constructor(){
    super();
    this.state = {
      tareas,
      nav: true
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.hideNavigation = this.hideNavigation.bind(this);
  }
  handleAddTask(tarea)
    {
      this.setState((state) =>{
        return{
          tareas: [...this.state.tareas,tarea]
        }
      });
    }
  removeTask(index){
    if(window.confirm("Estas seguro de eliminar esta tarea")){
      this.setState({
        tareas: this.state.tareas.filter((e,i) =>{
          return i!==index
        })
      });
    }
  }
  hideNavigation(){
    this.setState({nav: !this.state.nav});
  }

  render(){
    const {nav} = this.state;
    const tareas = this.state.tareas.map((tarea,i) => {
      return(
        <div className = "col-md-4">
          <div className="card mt-4">
            <div className = "card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.priodidad}
              </span>
            </div>
            <div className = "card-body">
              <p>{tarea.descripcion}</p>
              <p><mark>{tarea.responsable}</mark></p>
            </div>
            <div className = "card-footer">
              <button className = "btn btn-danger" 
              onClick ={this.removeTask.bind(this,i)}>
                  Eliminar
              </button>
            </div>
          </div>
        </div>
      )

    })

    return (
      <div>
        <h1 className = 'Titulo' >Curso de React</h1>
        {nav && <Navigation/>}
        <button onClick ={this.hideNavigation} className="btn btn-modern" >
          { nav ? "Oculta barra": "Mostrar barra" }
        </button>
        <div className = "container">
          <div className = "row mt-4">
            <FormComponent onAddTask = {this.handleAddTask}/>
            {tareas}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
