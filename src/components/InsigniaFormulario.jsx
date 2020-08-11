import React from 'react';

class InsigniaFormulario extends React.Component{
    state={
       /*  firstName: 'derly',
        lastName:'Murcia',
        email:'derlyvivianamurcia@gmail.com',
        ocupacion:'FrontEnd',
        twitter:'derlyvmurcia' */
    };


      //EVENTO FORMULARIO
      handleSubmit = e =>{
        e.preventDefault();
        console.log('submit')
        console.log(this.state);
    }
    //EVENTO INPUT
    handleChange = (e) =>{
/*         this.setState({[e.target.name]: e.target.value})
 */    }
    //EVENTO BOTÓN
    handleClick = e =>{
        console.log('Botón presionado')
    }
  
    render(){
        return(
            <div>
                <h1>Formulario de Registro</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>
                            Nombre
                        </label>
                        <input onChange={this.handleChange}
                         className='form-control' 
                         name='firstName' 
                         type='text'
                        value={this.state.firstName} />
                    </div>

                    <div className='form-group'>
                        <label>
                            Apelllido
                        </label>
                        <input onChange={this.handleChange} className='form-control' name='lastName' type='text'
                          value={this.state.lastName}  />
                    </div>

                    <div className='form-group'>
                        <label>
                            Email
                        </label>
                        <input onChange={this.handleChange} className='form-control' name='email' type='email'   value={this.state.email} />
                    </div>

                    <div className='form-group'>
                        <label>
                            Ocupación
                        </label>
                        <input onChange={this.handleChange} className='form-control' name='ocupacion' type='text'
                          value={this.state.ocupacion}  />
                    </div>

                    <div className='form-group'>
                        <label>
                            Twitter
                        </label>
                        <input onChange={this.handleChange} className='form-control' name='twitter' type='text'   value={this.state.twitter} />
                    </div>

                    <button onClick={this.handleClick} className='btn btn-success' >
                            Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default InsigniaFormulario;