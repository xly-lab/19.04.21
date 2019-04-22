import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    constructor(props) {
      super(props);

      this.state = {}
    }
    Search =()=>{
        const searchName =this.input.value.trim();
      // console.log("search"+searchName);
      if(searchName){
        //发布消息
        PubSub.publish('search',searchName)
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
