import Post from "./Post";

const posts = [
    {
        usuario: "meowed",
        imagem: "./assets/gato-telefone.svg",
        curtidas: ["respondeai", 101523],
    },
    {
        usuario: "barked",
        imagem: "./assets/dog.svg",
        curtidas: ["adorable_animals", 99159],
    },
    {
        usuario: "barked",
        imagem: "./assets/gato-telefone.svg",
        curtidas: ["adorable_animals", 99159],
    },
];

export default function Posts() {
    return (
    <div class="posts">
        {posts.map(post => {
            return(<Post post = {post}/>)
        }
        )
        }
   </div> );
}
