import React, {Component} from 'react'
import Comment from '../comment/Comment.jsx'
import CommentList from '../comment/CommentList.jsx'
import '../../css/index.css'
import PubSub from 'pubsub-js'

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.
    // }
    state = {
      comments:[
        {user:'zs',content:'可以'},
        {user:'asd',content:'行吧'}
        ]
    };

    componentDidMount(){
      //订阅消息
      PubSub.subscribe('deleteComment',(msg,index)=>{
        const {comments} = this.state;
        comments.splice(index,1);
        this.setState({comments})
      })
    }

    addComment = (comment) =>{
      const {comments} =this.state;
      comments.unshift(comment);
      this.setState({comments})
    };
    render() {
      const  {comments}= this.state;
        return <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <Comment addComments={this.addComment}></Comment>
            <CommentList comments={comments}></CommentList>
          </div>

        </div>
    }

}
