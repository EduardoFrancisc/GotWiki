import "./Home.css";

export default function Home() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="https://wallpapers.com/images/hd/iron-throne-of-game-of-thrones-nf79q124fikj37px.webp" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>O Que é Game Of Thrones</h5>
                        <p>Game of Thrones é a primeira série de televisão live-action do Mundo de Westeros. É a primeira parcela da franquia em geral. É baseada na série de romances A Song of Ice and Fire, escrita por George R.R. Martin.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://motionbgs.com/media/2222/jon-snow-game-of-thrones.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Sobre</h5>
                        <p>A série consiste em oito temporadas totalmente transmitidas, compreendendo setenta e três episódios no total.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://wallpapers.com/images/hd/game-of-thrones-season-white-army-66ncc2723s8aboid.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Produção</h5>
                        <p>A produção da série é baseada em Belfast, Irlanda do Norte, principalmente no Paint Hall Studios. É a maior e mais cara produção de televisão já montada na Irlanda do Norte. As filmagens da série também foram realizadas em Malta, Islândia, Croácia, Marrocos, Espanha e EUA.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden" style={{ filter: 'none' }}>Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden" style={{ filter: 'none' }}>Next</span>
            </button>
        </div>
    )
}