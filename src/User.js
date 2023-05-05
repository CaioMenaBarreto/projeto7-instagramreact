import React, { useState } from 'react';

export default function User() {
    
    const [nome, setNome] = useState("catanacomics");
    const [image, setImage] = useState("./assets/catanacomics.svg")

    function trocarImagem(){
        let novaImagem = prompt("Digite a URL da sua nova foto de perfil.");
        if(novaImagem!==""){
            setImage(novaImagem);
        }
    }

    function trocarNome(){
        let novoNome = prompt("Digite o seu novo nome de usuário.");
        if (novoNome !== "") {
            setNome(novoNome);
        }
    }

    
    
    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={trocarImagem} src={image} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}