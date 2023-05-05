
const stories = [
    { imagem: "./assets/9gag.svg", usuario: "9gag" },
    { imagem: "./assets/meowed.svg", usuario: "meowed" },
    { imagem: "./assets/barked.svg", usuario: "barked" },
    { imagem: "./assets/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { imagem: "./assets/wawawicomics.svg", usuario: "wawawicomics" },
    { imagem: "./assets/respondeai.svg", usuario: "respondeai" },
    { imagem: "./assets/filomoderna.svg", usuario: "filomoderna" },
    { imagem: "./assets/memeriagourmet.svg", usuario: "memeriagourmet" }
];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map((story, index) => (
                <div key={index} className="story">
                    <div className="imagem">
                        <img src={story.imagem} alt={story.usuario} />
                    </div>
                    <div className="usuario">
                        {story.usuario}
                    </div>
                </div>
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}