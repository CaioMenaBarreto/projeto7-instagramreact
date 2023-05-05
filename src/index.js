import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Corpo from "./Corpo";

function App() {
    return (
        <div>
            <NavBar />
            <Corpo />
        </div>
    );
}

const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);