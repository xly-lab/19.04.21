import React, {Component} from 'react'


import Search from './Search.jsx'
import Main from  './Main.jsx'

export default class App extends Component {
    render() {
        return <div className="container">
            <Search/>
            <Main/>
        </div>
    }

}
