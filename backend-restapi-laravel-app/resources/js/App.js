import React, {Component} from 'react';
import Menu from "./components/Menu/Menu";
import Example from "./components/Example";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Example/>
            </div>
        );
    }
}

export default App;
