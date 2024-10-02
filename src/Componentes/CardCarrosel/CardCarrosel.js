import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardCarrosel.css";

class CardCarrosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [],
      error: "",
    };
  }

  componentDidMount() {
    fetch("/Characters.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ infos: data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { infos } = this.state;
    return (
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <div className="painel_principal">
              <a href="#houses"><img src="/wallpaper.jpg" alt="" /></a>
              <h4>Conheça as Principáis Casas</h4>
            </div>
          </div>
          {infos.map((info) => (
            <div
              key={info.id}
              className="carousel-item"
              data-bs-interval="10000"
            >
              <Card data={info} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default CardCarrosel;
