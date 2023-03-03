import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'
function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='header'>
            <nav >
                <Navbar className='menu'
                    alignLinks="right"
                    brand={<span className='brand-logo' style={{ color: theme.color, fontWeight: "bolder", marginLeft: "20px" }}>Player Cards</span>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                >
                    <ul style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none',
                        position: 'relative',
                        float: 'right'
                    }}>
                        <li >
                            <a className='active' href='/' style={{ color: theme.color }}><Icon left>home</Icon>Home</a>
                        </li>
                        <li ><Link to='/news' style={{ color: theme.color }}><Icon left>info_outline</Icon>News</Link></li>
                        <li ><Link to='/about' style={{ color: theme.color }}><Icon left>dvr</Icon>About</Link></li>
                        <li ><Link to='/contact' style={{ color: theme.color }}><Icon left>contacts</Icon>Contact</Link></li>
                        <li >
                            <a className='switch-mode' href='#mode' onClick={toggle}
                                style={{ color: theme.color }}
                                data-testid="toggle-theme-btn"
                            >
                                {!dark ? <Icon>brightness_1</Icon> : <Icon>brightness_2</Icon>}
                            </a>
                        </li>
                    </ul>
                </Navbar>
            </nav>
        </div >
    )
}
export default Navigation