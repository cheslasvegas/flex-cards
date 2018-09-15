import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            ratingCount: 0
        };

        this.imageClickHandler = () => {
            this.setState(function (prevState, props) {
                return {
                    isClicked: !prevState.isClicked,
                    ratingCount: prevState.ratingCount + props.step
                }

            });
        }
    }


    render() {
        return (
            <div className="item">
                <div className={this.state.isClicked ? "wrapper clicked" : "wrapper"}>
                    <div className="img-content"
                         data-list="../public/img/1/arid-barren-black-and-white-150944.jpg, img/1/avenue-bend-black-and-white-4241.jpg, img/1/beach-benches-bicycle-103523.jpg, img/1/beach-black-and-white-nature-194735.jpg"
                         onClick={this.imageClickHandler}>

                        <img src={this.props.img} width="400" height="375"
                             alt="altImage"/>
                        <div className="description">
                            <p>{this.props.description}</p>
                        </div>
                        <div className="rating">{this.props.rating}</div>
                        <div className="duration">{this.props.duration}</div>
                    </div>
                    <div className="text-content">{this.props.textContent}</div>

                </div>
            </div>

        );
    }
}


export default Card;
