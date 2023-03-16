import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <h1 class="display-4 text-center">Student Management System</h1>
                        <div>
                        <p>Welcome to our Home Page<br/>
        To proceed any further we request you<br/>
        to login first
      </p>
      <Link to='/login'>
      <button>LOGIN</button>
      </Link>
      <br/><br/>
      <Link to='/register'>
      <button>SIGN UP</button>
      </Link>

                        </div>
                        </div>
                </div>
                </div>
            
            </div>
        )
    }
}

export default Home;