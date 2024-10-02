import React, { Component } from "react";
import style from "./Card.module.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: this.props.data,
      standartList: [
        "https://static.wikia.nocookie.net/gameofthrones/images/7/7e/House_Stark.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/d/d5/House_Lannister.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/1/1e/House_Targaryen.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/5/5b/House_Greyjoy.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/2/2d/House_Baratheon.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/6/60/House_Martell.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/3/31/House_Tyrell.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/0/0c/House_Bolton.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/d/da/House_Frey.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/6/61/House_Tully.svg",
        "https://static.wikia.nocookie.net/gameofthrones/images/b/b4/House_Arryn.svg"
      ]
    };
  }

  houseStandart = () => {
    let { infos, standartList } = this.state
    switch (true) {
      case infos.family == "House Stark":
        infos.standart = standartList[0]
        break;
      case infos.family == "House Lannister":
        infos.standart = standartList[1]
        break;
      case infos.family == "House Targaryen":
        infos.standart = standartList[2]
        break;
      case infos.family == "House Greyjoy":
        infos.standart = standartList[3]
        break;
      case infos.family == "House Baratheon":
        infos.standart = standartList[4]
        break;
      case infos.family == "House Martell":
        infos.standart = standartList[5]
        break;
      case infos.family == "House Tyrell":
        infos.standart = standartList[6]
        break;
      case infos.family == "House Bolton":
        infos.standart = standartList[7]
        break;
      case infos.family == "House Frey":
        infos.standart = standartList[8]
        break;
      case infos.family == "House Tully":
        infos.standart = standartList[9]
        break;
      case infos.family == "House Arryn":
        infos.standart = standartList[10]
        break;
    }
  }

  render() {
    const { infos } = this.state;
    this.houseStandart();
    return (
      <div className={style.card}>
        <div className={style.profile}>
          <p className="title"><strong>{infos.fullName}</strong></p>
          <img src={infos.imageUrl} alt={`${infos.firstName} foto`} />
          <p className="title"><strong>{infos.title}</strong></p>
          {infos.family ? <div className={style.house}>
            <p>{infos.family}</p>
            <img
              src={infos.standart}
              alt={`${infos.family}`}
              height={40}
            />
          </div> : ''}
        </div>
        {infos.quotes ? <div className={style.citacoes}>
          <div>
            <p className="title">
              <strong>Frases:</strong>
            </p>
            {infos.quotes.map((quote) => (
              <p className="quote">{quote}</p>
            ))}
          </div>
        </div> : ''}
      </div>
    );
  }
}

export default Card;
