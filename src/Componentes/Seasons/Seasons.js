import { useState } from "react";
import "./Seasons.css";

export default function App() {
    const [content, setContent] = useState(
        <div class="season_content">
            <p><strong>Season 1</strong></p>
            <div className="media-container">
                <img
                    src="https://static.wikia.nocookie.net/gameofthrones/images/1/14/Game_of_Thrones-_Season_1.jpg"
                    alt="Season 1 image"
                />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bjqEWgDVPe0?si=JOB5QfdPmZFxoDzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p>A 1ª temporada abrange um período de vários meses em um mundo onde as estações duram anos de cada vez. A ação começa nos Sete Reinos unificados de Westeros, quando o longo verão termina e o inverno se aproxima. Lorde Eddard Stark é convidado por seu velho amigo, o Rei Robert Baratheon, para servir como Mão do Rei após a morte do titular anterior, o mentor de Eddard, Jon Arryn. Eddard está relutante, mas recebe informações sugerindo que Jon foi assassinado. Eddard aceita a oferta de Robert, planejando usar sua posição e autoridade para investigar o suposto assassinato.</p>
        </div>
    );

    const handleMenuClick = (info) => {
        setContent(info);
    };

    return (
        <div class="season_main">
            <nav class="season_sidebar">
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>1ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/1/14/Game_of_Thrones-_Season_1.jpg"
                                alt="Season 1 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/bjqEWgDVPe0?si=JOB5QfdPmZFxoDzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>A 1ª temporada abrange um período de vários meses em um mundo onde as estações duram anos de cada vez. A ação começa nos Sete Reinos unificados de Westeros, quando o longo verão termina e o inverno se aproxima. Lorde Eddard Stark é convidado por seu velho amigo, o Rei Robert Baratheon, para servir como Mão do Rei após a morte do titular anterior, o mentor de Eddard, Jon Arryn. Eddard está relutante, mas recebe informações sugerindo que Jon foi assassinado. Eddard aceita a oferta de Robert, planejando usar sua posição e autoridade para investigar o suposto assassinato.</p>
                    </div>
                )}>1ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>2ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/6/64/Game_of_Thrones-_Season_2.jpg"
                                alt="Season 2 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AlhHGUfCYw4?si=Bc4kFrkOLDjLpKRp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>A 2ª temporada abrange vários meses em um mundo onde as estações duram anos de cada vez. Os Sete Reinos estão em guerra, com o Rei do Norte, Robb Stark, lutando para ganhar a independência de seu povo e dos Riverlands. Robb decide que deve ganhar a lealdade dos ferozmente independentes Ironborn para sua causa, e envia seu melhor amigo Theon Greyjoy para negociar com seu pai, que está tramando seus próprios planos. Enquanto isso, Joffrey Baratheon mantém o Trono de Ferro com o apoio da poderosa Casa Lannister, mas seu tio Renly também reivindicou o trono com o apoio da Casa Tyrell, cujos exércitos são muito maiores. Enquanto eles lutam pelo trono, Tyrion Lannister chega a Porto Real para tomar as rédeas da situação, apenas para enfrentar a oposição de sua intrigante irmã, Cersei, agora a Rainha Regente.</p>
                    </div>
                )}>2ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>3ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/d/df/Game_of_Thrones-_Season_3.jpg"
                                alt="Season 3 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/nblUgAMoOvU?si=FKBjqLwWQX_ovXZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>A terceira temporada abrange vários meses em um mundo onde as estações podem durar anos. O outono chegou ao mundo todo, com o inverno não muito atrás. As pessoas deveriam estar se preparando para anos de neve e gelo, mas os Sete Reinos de Westeros continuam dominados pela guerra civil. O aspirante a rei Renly Baratheon foi assassinado, alterando as alianças na guerra. O cruel menino-rei Joffrey Baratheon obteve uma grande vitória ao garantir uma aliança com a Casa Tyrell, com seus apoiadores derrotando seu tio Stannis em uma batalha épica. Joffrey agora comanda os maiores exércitos do reino e seu triunfo parece inevitável.</p>
                    </div>
                )}>3ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>4ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/5/53/Game_of_Thrones-_Season_4.jpg"
                                alt="Season 4 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xZY43QSx3Fk?si=W66ko2zIbFD6msc5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>A Guerra dos Cinco Reis está chegando ao fim, mas novas intrigas e tramas estão em andamento, e as facções sobreviventes devem lutar contra inimigos não apenas fora de suas fileiras, mas dentro delas. Rei no Norte Robb Stark está morto, traído por seus próprios vassalos, os Boltons e Freys, enquanto ele era um convidado sob o teto dos Freys. A mãe de Robb, Catelyn, e sua esposa Talisa, junto com a maioria da liderança do Norte, também foram mortas no massacre agora conhecido como o Casamento Vermelho, junto com todo o exército do Norte.</p>
                    </div>
                )}>4ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>5ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/5/54/Game_of_Thrones-_Season_5.jpg"
                                alt="Season 5 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QgqzkJM0M5Q?si=ltxqfKeNI2b8SHOC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>A Guerra dos Cinco Reis, que antes se pensava estar chegando ao fim, está entrando em uma nova e mais caótica fase. Westeros está à beira do colapso, e muitos estão tomando o que podem enquanto o reino implode, como um cadáver fazendo um banquete para corvos.</p>
                    </div>
                )}>5ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>6ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/3/33/Game_of_Thrones-_Season_6.jpg"
                                alt="Season 6 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/zjiM6PDQJi8?si=VZUaRGJfA4bMfm2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>O inverno chegou. Westeros se prepara para um inverno que pode se tornar uma nova Longa Noite, enquanto os Caminhantes Brancos e seu exército de mortos estão prontos para atacar a Muralha e os reinos dos homens. Em Porto Real, a Rainha Cersei Lannister foi publicamente envergonhada pela Fé dos Sete e aguarda seu julgamento por regicídio e incesto. Até o Grande Meistre Pycelle a abandonou e chamou seu tio, Sor Kevan Lannister, para governar como a nova Mão do Rei.</p>
                    </div>
                )}>6ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>7ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/5/54/Game_of_Thrones-_Season_7.jpg"
                                alt="Season 7 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/giYeaKsXnsI?si=tusgvv4ERKJkiJpL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>Após um verão que durou quase dez anos, as palavras da Casa Stark finalmente se tornaram realidade mais uma vez: o inverno chegou. Em Porto Real, Cersei Lannister finalmente tomou o poder que ela ansiava por muitos anos. Em um movimento rápido, ela eliminou quase todos os seus inimigos, rivais e obstruções; Rainha Margaery Tyrell, Lorde Mace Tyrell, Sor Loras Tyrell, o tio de Cersei, Sor Kevan Lannister, Grande Meistre Pycelle, o Alto Pardal e a maioria - se não todos - os membros da Fé Militante foram mortos quando o Grande Septo de Baelor foi destruído usando grandes quantidades de fogo selvagem, um evento orquestrado por Cersei. Ela se coroou a Rainha indiscutível dos Sete Reinos, com Qyburn como sua Mão e o cavaleiro morto-vivo Sor Gregor Clegane ao seu lado. Após quase quatro décadas servindo como o poder por trás do trono, a Casa Lannister finalmente se tornou a nova casa real. No entanto, Cersei ainda é assombrada pela profecia que lhe foi contada durante sua infância, que afirmava que as mortes de seus três (futuros) filhos seriam anteriores às suas; Joffrey, Myrcella e Tommen estão todos mortos, Tommen tendo tirado a própria vida logo após a destruição do Septo. Isso deixou Cersei ainda mais determinada a esmagar seus inimigos de uma vez por todas, mas o número de seus inimigos aumentou exponencialmente. Embora ela agora esteja sentada no Trono de Ferro, ela efetivamente desfez todos os esforços de Tywin Lannister para garantir que sua família permanecesse no poder, pois suas ações sem dúvida lhe renderam o ódio de todos em Westeros. A maior parte do reino está em rebelião aberta contra o Trono de Ferro ou caiu fora do controle de seus aliados, deixando Cersei efetivamente como a Rainha de Porto Real e as terras de propriedade dos Lannisters. É o começo do fim.</p>
                    </div>
                )}>7ª Temporada</a>
                <a onClick={() => handleMenuClick(
                    <div class="season_content">
                        <p><strong>8ª Temporada</strong></p>
                        <div className="media-container">
                            <img
                                src="https://static.wikia.nocookie.net/gameofthrones/images/3/30/Game_of_Thrones-_Season_8.jpg"
                                alt="Season 8 image"
                            />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rlR4PJn8b8I?si=cwP6jcc0hGYprrw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>Após oito mil anos de pé entre os Sete Reinos de Westeros e as terras além, o inevitável finalmente aconteceu - a Muralha foi violada: Montado no cadáver reanimado do dragão Viserion de Daenerys Targaryen, o Rei da Noite explodiu a antiga fortificação e destruiu o castelo de Atalaialeste-do-Mar. O exército dos mortos, agora com mais de 100.000 wights, assim como os Caminhantes Brancos, está indo direto para o Norte, trazendo um inverno que se tornará outra Longa Noite, uma que pode durar para sempre.</p>
                    </div>
                )}>8ª Temporada</a>
            </nav>
            {content}
        </div>

    );
}