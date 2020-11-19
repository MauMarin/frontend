import React from 'react';


class Navbar extends React.Component{
    render(){

        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <a className="navbar-brand" href="#">Welcome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/Organization">Organization</a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navadd" data-toggle="dropdown"> Create </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/New_movement">New Movement</a>
                            <a className="dropdown-item" href="/New_Zone">New Zone</a>
                            <a className="dropdown-item" href="/New_Branch">New Brach</a>
                            <a className="dropdown-item" href="/New_group">New Group</a>
                            <a className="dropdown-item" href="/New_Person">New Member</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navadd" data-toggle="dropdown"> Assign </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/Assign_movements">Assign Movement</a>
                            <a className="dropdown-item" href="/Assign_zones">Assign zone</a>
                            <a className="dropdown-item" href="/Assign_branch">Assign branch</a>
                            <a className="dropdown-item" href="/Assign_group">Assign group</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navadd" data-toggle="dropdown"> Assign lider</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/Assign_lider_to_a_zone">to a zone</a>
                            <a className="dropdown-item" href="/Assign_lider_to_a_branch">to a branch</a>
                          { /* <a className="dropdown-item" href="/Assign_lider_to_a_group">to a group</a> */}
                        </div> 
                    </li> 
{/*
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navadd" data-toggle="dropdown"> Update</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/Update_movement">Update movement</a>
                        </div> 
                    </li> 
*/}
                    </ul>
                </div>
          </nav>
        );
    }
}

export default Navbar;