import {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <div>
                <nav className = 'navbar navbar-dark bg-dark' >
                    <a href= "https://www.google.com/" className = 'text-white'>
                        Sobre mi
                    </a>
                    <a  href= "https://www.google.com/" className = 'text-white'>
                        Experiencia
                    </a>
                    <a href= "https://www.google.com/" className = 'text-white'>
                        Tecnologias
                    </a>
                    <a href= "https://www.google.com/" className = 'text-white'>
                        Contacto
                    </a>
                </nav>
            </div>
        );
    }
}

export default Navigation; 