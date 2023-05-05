const posts = [
    {
        usuario: "meowed",
        imagem: "./assets/gato-telefone.svg",
        curtidas: ["respondeai", "outras 101.523 pessoas"],
    },
    {
        usuario: "barked",
        imagem: "./assets/dog.svg",
        curtidas: ["adorable_animals", "outras 99.159 pessoas"],
    },
    {
        usuario: "barked",
        imagem: "./assets/gato-telefone.svg",
        curtidas: ["adorable_animals", "outras 99.159 pessoas"],
    },
];


export default function Post(){
    return(
        <div class="posts">
        {posts.map((post, index) => (
            <div key={index} class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={`./assets/${post.usuario}.svg`} alt={post.usuario} />
                        {post.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.imagem} alt="imagem do post" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="./assets/adorable_animals.svg" alt="adorable_animals" />
                        <div class="texto">
                            Curtido por <strong>{post.curtidas[0]}</strong> e{" "}
                            <strong>{post.curtidas[1]}</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
        )
        }</div>
    );
}