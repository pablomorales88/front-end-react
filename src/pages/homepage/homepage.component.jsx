import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        < Directory />
    </div>

);

//Si no exporto, y lo trato de importar desde app.js, me sale este error
//./src/App.js
//Attempted import error: './pages/homepage.component' does not contain a default export (imported as 'HomePage').
export default HomePage;