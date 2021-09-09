import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from './../UIElements/Backdrop';


const MainNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDrawerHandler = () =>{
        setIsOpen(true)
    } 

    const closeDrawerHandler = () =>{
        setIsOpen(false)
    } 
    return (
        <>
            {isOpen && <Backdrop onClick={closeDrawerHandler}/>}

            {
            isOpen && 
            <SideDrawer onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            }
            
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span /> 
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation
