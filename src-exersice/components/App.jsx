import React ,{Component} from 'react'
import logo from '../logo.svg'
import '../index.css'
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div>
          <img className="logo" src={logo} alt=""/>
          <p className="text"> Hello React</p>
        </div>
    }

}
