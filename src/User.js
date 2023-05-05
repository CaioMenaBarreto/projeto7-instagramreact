import React, { useState } from 'react';

export default function User() {
    
    const [nome, setNome] = useState("catanacomics");

    function trocarNome(){
        let novoNome = prompt("Digite o seu novo nome de usuário.");
        setNome(novoNome);
    }
    
    return (
        <div class="usuario">
            <img src="./assets/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}