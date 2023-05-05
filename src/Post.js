import { useState } from "react";

export default function Post(props) {

    const [heartColor, setHeartColor] = useState("white");
    const [heartName, setHeartName] = useState("heart-outline");
    const [bookName, setBookName] = useState("bookmark-outline");
    const [like, setLike] = useState(props.post.curtidas[1]);

    function curtirFoto(){
        setHeartColor("red");
        setHeartName("heart");
        if(heartColor==="white"){
            setLike(like+1);
        }
    }

    function handleClick() {
        setHeartColor(heartColor === "white" ? "red" : "white");
        setHeartName(heartName === "heart-outline" ? "heart" : "heart-outline");
        setLike(heartColor === "white" ? (like+1) : (like-1));
    }

    function bookClick() {
        setBookName(bookName === "bookmark-outline" ? "bookmark" : "bookmark-outline");
    }
    return (
        
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`./assets/${props.post.usuario}.svg`} alt={props.post.usuario} />
                    {props.post.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={curtirFoto} src={props.post.imagem} alt="imagem do post" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={handleClick} name={heartName} class={heartColor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={bookClick} name={bookName}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="./assets/adorable_animals.svg" alt="adorable_animals" />
                    <div class="texto">
                        Curtido por <strong>{props.post.curtidas[0]}</strong> e{" "}
                        <strong data-test="likes-number">outras {like.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}