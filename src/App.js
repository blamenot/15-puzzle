import React, { Component } from 'react'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducers'
import Tools from './components/tools'
import Tiles from './components/tiles'

class App extends Component {
    render() {
        const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        return (
            <Provider store={store}>
                <Tiles />
                <Tools />
            </Provider>
        );
    }
}

export default App;