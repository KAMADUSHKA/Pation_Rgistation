import React,{useState} from 'react';
import * as icons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ideBarData from './NavBarData';
import { IconContext } from 'react-icons';
import '../Style/NavigationBar.css'


export default function NavigationBar() {

    const [sideBar, setComponantToNavigationBar] =useState(false);

    const displaySideBar = () => setComponantToNavigationBar(!sideBar);

  return (
    <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div id='navBar'>
                <Link to="#" id='menu-bar'>
                    <icons.AiOutlineMenuUnfold onClick={displaySideBar}/>
                </Link>
            </div>
        </IconContext.Provider>
    </>
  )
}
