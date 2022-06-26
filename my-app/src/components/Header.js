import React from 'react';
import '../styles/header.css';






function Header () {
    return (
        <div className='header'>
            <h1 className='title'>Manga-Scan</h1>
            <nav>
                <ul className='nav-list'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Liste des mangas</a></li>
                    <li><a href='#'>Recherche des manga</a></li>
                </ul>

                <input className='header-input' placeholder='Recherche...'/>
            </nav>
        </div>
    )
}



export default Header;