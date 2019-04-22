import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    static propTypes = {
      setSearchName:PropTypes.func.isRequired
    };
    Search =()=>{
        const {setSearchName} =this.props;
        const searchName =this.input.value.trim();
      // console.log("search"+searchName);
      if(searchName){
          setSearchName(searchName)
        }
    };
    render() {
        return (
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" placeholder="enter the name you search" ref={input=>this.input=input } />
              <button onClick={this.Search}>Search</button>
            </div>
          </section>
        )
    }

}
