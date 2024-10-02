import { Component } from "react";
import "./Casas.css";


class Casas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            error: ''
        }
    }

    componentDidMount() {
        fetch("/Houses.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ content: data })
            })
            .catch((error) => {
                this.setState({ error: error })
            });
    }

    render() {
        const { content } = this.state
        return (
            <div>
                <div className="grid-container">
                    {content.map((info) => (
                        <div class="card" id={`${info.name}`}>
                            <div>
                                <p class="card__title">{info.name}</p>
                                <img src={info.image}></img>
                            </div>
                            <div class="card__content">
                                <p class="card__description">{info.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Casas;
