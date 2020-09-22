import React from 'react';
import '../styles/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                <div className='container-fluid'>
                    <a className='Navbar__brand' href='/'>
                        <span className='font-weight-light'>Politécnico</span>
                        <span className='font-weight-bold'>Colombiano JIC</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;