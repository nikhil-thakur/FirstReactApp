import React from 'react';

class App extends  React.Component {
    render(){
        let txt = this.props.txt
        return (
            <div>
                <h1 className="">{txt}</h1>
                <b>Bold</b>
            </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "This is the default text"
}

/*const App = () => <h1> Hello World</h1>*/
export default App
