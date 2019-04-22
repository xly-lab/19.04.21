import React, {Component} from 'react'


import Search from './Search.jsx'
import Main from  './Main.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          searchName:''
        }
    }
    setSearchName=(searchName)=>{
      this.setState({searchName})
    };

    render() {
      const {searchName} = this.state;
        return <div className="container">
          <Search setSearchName={this.setSearchName}/>
          <Main searchName={searchName}/>
        </div>
    }

}
