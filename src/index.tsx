import {render} from "react-dom";
import {Counter} from "./components/Counter";

render(
    <div>
        Hello world
        <Counter />
    </div>,
    document.getElementById("root")
);