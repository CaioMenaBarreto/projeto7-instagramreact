const sideBar = [
    {
        usuario: "bad.vibes.memes",
        imagem: "./assets/bad.vibes.memes.svg",
        razao: "Segue você",
        seguir: "Seguir"
    },
    {
        usuario: "chibirdart",
        imagem: "./assets/chibirdart.svg",
        razao: "Segue você",
        seguir: "Seguir"
    },
    {
        usuario: "razoesparaacreditar",
        imagem: "./assets/razoesparaacreditar.svg",
        razao: "Novo no Instagram",
        seguir: "Seguir"
    },
    {
        usuario: "adorable_animals",
        imagem: "./assets/adorable_animals.svg",
        razao: "Segue você",
        seguir: "Seguir"
    },
    {
        usuario: "smallcutecats",
        imagem: "./assets/smallcutecats.svg",
        razao: "Segue você",
        seguir: "Seguir"
    },
]

export default function Sugestions() {
    return (
        <div class="sugestoes">

            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sideBar.map((sugestao, index) => (
                <div key={index} class="sugestao">
                    <div class="usuario">
                        <img src={sugestao.imagem} alt={sugestao.usuario} />
                        <div class="texto">
                            <div class="nome">{sugestao.usuario}</div>
                            <div class="razao">{sugestao.razao}</div>
                        </div>
                    </div>

                    <div class="seguir">{sugestao.seguir}</div>
                </div>

            )
            )
            }
        </div>
    );
}