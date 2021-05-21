import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

//HomePage return a div with style take it from homepage.styless.jsx 
//directory call menu-item components

const HomePage = () => (
    <div className='homepage'>
        < Directory />
    </div>
);

//Si no exporto, y lo trato de importar desde app.js, me sale este error
//./src/App.js
//Attempted import error: './pages/homepage.component' does not contain a default export (imported as 'HomePage').
export default HomePage;