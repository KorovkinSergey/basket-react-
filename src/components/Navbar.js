import React from 'react'
import routes from '../router/routes'
import {NavLink} from 'react-router-dom'


let navLinks = routes.map((route, index) => {
	return (
		<li className="nav-item" key={index} >
			<NavLink
				className="nav-link"
				to={route.url}
				exact={route.exact}
				activeClassName="active"
			>
				{route.name}
			</NavLink>
		</li>
	)

})

const Navbar = () => {
	return (
			<ul className="nav flex-column justify-content-center col-3 border h-100 border-dark p-2">
				{navLinks}
			</ul>
	)
}

export default Navbar
