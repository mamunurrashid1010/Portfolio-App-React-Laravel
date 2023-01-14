import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu/Menu";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <h1>This is Home page</h1>
                </Menu>
            </Fragment>
        );
    }
}

export default HomePage;
