import React, {Component} from 'react';
import './CardContainer.css'
import img from '../src/img/default_img.jpg';
import Card from "./Card";
import axios from 'axios';
import data from './card-data.json';


class CardContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="item-box">{
                    data.map(({id, description, rating, duration, textContent}, ind) => (
                        <Card key={id} img={img} textContent={textContent} description={description} rating={rating}
                              duration={duration}/>
                    ))
                }</div>
            </div>
        );
    }
}

export default CardContainer;
