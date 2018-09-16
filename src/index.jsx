import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './component/profile.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Profile />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));