import React, {Component} from 'react';
import './CardContainer.css'
import img from '../src/img/default_img.jpg';
import Card from "./Card";


class CardContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="item-box">
                    <Card
                        duration="23:45"
                        textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid at autem blanditiis debitis distinctio, dolores earum est fuga in, inventore ipsam, maxime nam numquam perspiciatis quae quaerat quam quis quod rem repellat similique sint vel veritatis vero voluptas! Aspernatur deserunt earum harum, nam natus nemo quaerat quis ratione. Aliquid amet asperiores commodi cum deleniti, dolor error expedita, inventore ipsa ipsam minima nihil nisi quaerat quisquam repellendus similique soluta veniam? Assumenda explicabo illo incidunt molestiae nemo, sequi tempora! Aliquid consequuntur eum suscipit? Aliquid animi, eaque odio odit officia quibusdam! A accusamus aut deleniti libero, quod sapiente sed sit!"
                        img='../src/img/default_img.jpg'
                        rating="23"
                        someProp={364645}
                        someVal="someVal"
                        description='hrthrt hrthrthrthrth rhrhrthrhrh hrthrthrthrth rthrthrthrth rhrhrthrthrthrthrthrthrthrthrh rhrthrthrthrhrth rhrthrthrth rthrthrthrthrth rthrthrt h'
                        step={1}
                    />
                    <Card img={img} textContent="wreethrthrt trhrthrhrthhrthrth rththrt rhrthrt rthrthrthrthrthr"/>
                    <Card img={img}/>
                    <Card img={img}/>
                    <Card img={img}/>
                    <Card img={img}/>
                    <Card img={img}/>
                    <Card
                        duration="23:45"
                        textContent="gergerg ergergerger gergergergeger ergergergeg ergergergergergergergegergergergergergergergergerger ergergergerg egergergerg ergergergergerg ergergergergergergergergerger gegergerg  hrthrthrth rthrthrth rthrthrthrth rthrthrhrh rthrthrth rth rt hrthrthrthrthrhrthrthrthrt rth rthrthrthrthr hrthrthrthrth trhtrhr"
                        img={img}
                        raiting='2'
                        description='hrthrt hrthrthrthrth rhrhrthrhrh hrthrthrthrth rthrthrthrth rhrhrthrthrthrthrthrthrthrthrh rhrthrthrthrhrth rhrthrthrth rthrthrthrthrth rthrthrt h'
                    />

                    <Card img={img}/>
                    <Card img={img}/>
                    <Card img={img}/>
                </div>
            </div>
        );
    }
}

export default CardContainer;
