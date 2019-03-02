import React from 'react';
import './Card.css'
import 'tachyons'


const Card =(props) => { 
    const {name , email} = props;   
 return (
<div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
<img className="edit" alt='phiti' src={`https://robohash.org/${props.id}?200*200` } />
<div>
<h1>{name} </h1>
<h5>{email}</h5>
</div>
</div>
);
 }


export default Card;