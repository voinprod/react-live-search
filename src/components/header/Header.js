import React from 'react'
import { Route, Link } from 'react-router-dom'
import Search from '../../pages/project1/componentns/SearchContainer'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link to="/project1" className="navbar-brand">Project1</Link>
            </nav>
            <Route exact path="/project1" component={Search} />
        </div>
    )
}

export default Header
