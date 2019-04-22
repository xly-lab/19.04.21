import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import './commnet.css'

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:'',
      content:''
    }
  }
   static propTypes ={
    addComments:PropTypes.func.isRequired
   };

  changeUser=(event) =>{
    const user = event.target.value;
    this.setState({user})
  };
  changeContent=(event) =>{
    const content = event.target.value;
    this.setState({content})
  };
  submitData = () => {
    const newComment = this.state;
    this.props.addComments(newComment);
    this.refs.user.value=this.refs.content.value=""
   };

  render() {
    const {user,content} = this.state
    return <div className="col-md-4">
      <form className="form-horizontal">
        <div className="form-group">
          <label>用户名</label>
          <input type="text" ref="user" className="form-control" placeholder="用户名"
          value={user} onChange={this.changeUser}/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea ref="content" className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.changeContent}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-default pull-right" onClick={this.submitData}>提交</button>
          </div>
        </div>
      </form>
    </div>


  }
}
