import React from 'react';
import '../styles/insigniaNueva.css'
import Navbar from '../components/Navbar.jsx'
import Insignia from '../components/Insignia.jsx'
import InsigniaFormulario from '../components/InsigniaFormulario.jsx'
import LogoHeader from '../images/LOGOPOLI.png'

class InsigniaNueva extends React.Component {
    state={form: {}}
    handleChange = e =>{
       const nextForm = this.state.form
       nextForm [e.target.name] = e.target.value 
       this.setState({
           form: nextForm,
       })

    }
    render() {
        return (
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={LogoHeader} alt='Logo' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Insignia />
                        </div>
                        <div className='col-6'>
                            <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}

export default InsigniaNueva;