import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import styles from './navBar.module.scss'
import offcanvas from 'react-bootstrap/offcanvas'
const linkStyle = {
    textDecoration:'none'
}
const AppHeader = () => {
    const [show, setShow]=useState(false)
    const handleClose =()=> setShow(false)
    const handleShow =()=> setShow(true)
    return ( 
        <div className={`${styles.header}`}>
            <div className={`${styles.textLogo}`}>
                {/* <img className={`${styles.logo}`} src="../assets/logo.png" alt="logo" /> */}
                <div>Icopy Story </div>
            </div>
            <div  className={` ${styles.hideOnMobile} ${styles.navSection}   justify-content-end`}>
                <Link to="/" style={linkStyle}><span className={`${styles.navItem}`}>Home</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>About Us</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>E-portal</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Programs</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Resources</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Contact us</span></Link>
                
            </div>

            <div  className={` ${styles.hideOnDesktop}  ${styles.navSection} `}>
               <div style={{float:'right'}} className='pull-right'>
                   
                    <HiOutlineMenuAlt1 size={29} onClick={handleShow} />
                    <offcanvas show={true}></offcanvas>

               </div>
            </div>
        </div>
     );
}
 
export default AppHeader;