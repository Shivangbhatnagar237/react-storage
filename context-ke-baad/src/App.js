import "./style.css";
import Appcss from "./App.module.css";

function App() {
    return (
        <div className="App">
            <h1 className={Appcss.red}>Hello</h1>
            <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, corrupti necessitatibus consequuntur amet voluptatem
                ipsam sint eum aliquam numquam atque!
            </h3>

            <nav></nav>
        </div>
    );
}

export default App;
