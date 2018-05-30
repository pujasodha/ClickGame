import React from 'react';
import './AlbumCard.css';

const AlbumCard = props => (
    <div className = 'card'
    value = {props.id}
    onClick = {() => props.handleClick(props.id)}
    >

    <div className = 'image-container'>
    <img src = {props.image} alt ={props.name} />
    </div>
    </div>
)

export default AlbumCard