import React from 'react';
import '../styles/Insignia.css'
import Logo from '../images/LOGOPOLI.png'
class Insignia extends React.Component{
    render(){
        // const firstName = 'Derly';
        // const lastName = 'Murcia';
        return(
            <div className="Insignia">
                <div className='Insignia_header'>
                    <img src={Logo} alt='Logo'/>
                </div>
                <div className='Insignia__section_name'>
                    <img className='Insignia__avatar' src={this.props.avatar} alt='avatar'/>
                    <h1>{this.props.firstName}<br/> {this.props.lastName} </h1>
                </div>
                <div className= 'Insignia__section_info'>
                    <h3>{this.props.ocupacion}</h3>
                    <div>
                        @{this.props.twitter}
                    </div>
                </div>
                <div className='Insignia__footer'>
                Politécnico Colombiano Jaime Isaza Cadavid © 2020
                </div>
            </div>
        )
    }
}

export default Insignia;

