import { Component } from "react";

class FormComponent extends Component{
    constructor(){
        super();
        this.state = {
            titulo : "",
            responsable : "",
            descripcion : "",
            prioridad : "baja"
        };
        //Enlazar funciones al componente
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        //Desestructuracion
        const {value, name} = e.target
        //Evento para cambiar los datos del estado
        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        //No refresca la pagina al mandar formulario
        e.preventDefault();
        this.props.onAddTask(this.state);
    }

    render(){
        return(
            <div className = "card" >
                <form className = "card-body" onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <input
                            type = "text"
                            name = "titulo"
                            className = "form-control"
                            placeholder = "titulo"
                            onChange ={this.handleInput}
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type = "text"
                            name = "responsable"
                            className = "form-control"
                            placeholder = "responsable"
                            onChange ={this.handleInput}
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type ="text"
                            name = "descripcion"
                            className = "form-control"
                            placeholder = "descripcion"
                            onChange ={this.handleInput}
                        />
                    </div>
                    <div className = "form-group">
                        <select
                            name = "prioridad"
                            className = "form-control"
                            value = {this.state.prioridad}
                            onChange ={this.handleInput}
                        >
                        <option>baja</option>
                        <option>media</option>
                        <option>alta</option>
                        </select>
                    </div>
                    <button type = "submit" className = "btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }

}

export default FormComponent;