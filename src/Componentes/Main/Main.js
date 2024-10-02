import React from "react";
import { useState } from "react";
import "./Main.css";

import CardCarrosel from "../CardCarrosel/CardCarrosel";
import Casas from "../Casas/Casas";
import TabNavigator from "../TabNavigator/TabNavigator";
import Seasons from "../Seasons/Seasons";
import FormContact from "../FormContact/FormContact";
import Home from "../Home/Home";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Main() {
  const tabs = [
    {
      title: "Westeros",
      content: <img src="https://awoiaf.westeros.org/images/thumb/0/00/Locator_map_Westeros_in_Known_world.svg/1200px-Locator_map_Westeros_in_Known_world.svg.png" alt="Westeros" />,
    },
    {
      title: "Essos",
      content: <img src="https://awoiaf.westeros.org/images/thumb/d/de/Locator_map_Essos_in_Known_world.svg/800px-Locator_map_Essos_in_Known_world.svg.png" alt="Essos" />,
    },
    {
      title: "Sothoryos",
      content: <img src="https://awoiaf.westeros.org/images/thumb/d/d4/Locator_map_Sothoryos_in_Known_world.svg/800px-Locator_map_Sothoryos_in_Known_world.svg.png" alt="Sothoryos" />,
    },
    {
      title: "Ulthos",
      content: <img src="https://awoiaf.westeros.org/images/thumb/f/ff/Locator_map_Ulthos_in_Known_world.svg/800px-Locator_map_Ulthos_in_Known_world.svg.png" alt="Ulthos" />,
    },
    {
      title: "Mundo Conhecido",
      content: <img src="https://awoiaf.westeros.org/images/thumb/1/10/WorldofIceandFire.png/800px-WorldofIceandFire.png" alt="The Known World" />,
    }
  ];

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    { isOn ? window.document.body.className = "lighttheme" : window.document.body.className = "darktheme" }
  };



  return (
    <div className="main">
      <section id="home">
        <Home />
      </section>
      <div className="toggleSection">
        {isOn ? (<p>Modo Escuro</p>) : (<p>Modo Claro</p>)}
        <ToggleSwitch isOn={isOn} onToggle={handleToggle} size="small" />
      </div>
      <section id="houses">
        <h1>Casas de Game of Thrones</h1>
        <hr />
        <Casas />
      </section>
      <section id="continentes">
        <h1>Continentes</h1>
        <hr />
        <TabNavigator tabs={tabs} />
      </section>
      <section id="seasons">
        <h1>Temporadas</h1>
        <hr />
        <Seasons />
      </section>
      <section id="characters">
        <h1>Personagens</h1>
        <hr />
        <CardCarrosel />
      </section>
      <section id="contact">
        <h1>Contato</h1>
        <hr />
        <FormContact />
      </section>
    </div>
  );
}
