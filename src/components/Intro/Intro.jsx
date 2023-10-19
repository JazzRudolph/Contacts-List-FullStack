import React from 'react';
import connectImg from './Connect.png';

let Intro = () => {

    return (
        <div className='intro'>
            <img src={connectImg} className='intoPic' alt="Connection Image"/>
            <h1>My Connections</h1>
            <p className='introParagrah'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae quibusdam voluptatum earum exercitationem, ducimus corporis deleniti incidunt asperiores hic tenetur consequatur odio? Accusantium officia quas itaque tenetur debitis excepturi.</p>


        </div>    
    );
}

export default Intro;



/*Trying to figure out how to get the picture out of the public folder and into one of these other folders to raise score on project */