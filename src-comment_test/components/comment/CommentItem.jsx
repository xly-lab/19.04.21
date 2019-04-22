import React, {Component} from 'react'
import PropTypes from "prop-types";
// import ReactDOM from 'react-dom'

export default class CommentItem extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    static propTypes = {
    item:PropTypes.object.isRequired,
      deleteComment:PropTypes.func.isRequired,
      index:PropTypes.number.isRequired
  };
    deleteSelf = ()=>{
      const {index,item} =this.props
     if(window.confirm(`是否要删除${item.user}的评论？`)){
       this.props.deleteComment(index)
     }
    };
    render() {
      const {item} =this.props;
        return (
          <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;" onClick={this.deleteSelf}>删除</a>
            </div>
            <p className="user"><span>{item.user}</span><span>说:</span></p>
            <p className="centence">{item.content}</p>
          </li>
        )
    }

}
