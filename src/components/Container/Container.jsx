import React from 'react';
import './Container.css'
import NameCard from '../NameCard/NameCard';


const Container = ({ suggestedNames }) =>{
 
const suggestedNameJsx = suggestedNames.map(suggestedName =>{
    return  <NameCard key={suggestedName} suggestedName ={suggestedName} />;
}) 
return (
    <div className = "container" >
        { suggestedNameJsx }
    </div>


 );



};







export default Container;