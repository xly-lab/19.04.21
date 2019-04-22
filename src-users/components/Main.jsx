import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          initView:true,
          loading:false,
          users:null,
          errorMsg:null
        }
    }
    static propTypes ={
      searchName:PropTypes.string.isRequired
    };

    componentWillReceiveProps(newProp){
      const {searchName} = newProp;
      //更新状态
      this.setState({
        initView:false,
        loading:true
      });
      const url =`https://api.github.com/search/users?q=${searchName}`;
      axios.get(url).then(response=>{
        const result =response.data;
        // console.log(result.items);
        this.setState({
          initView:false,
          loading:false,
          users:result.items.map(item=>({login:item.login,html_url:item.html_url,avatar_url:item.avatar_url}))
        })
      }).catch(msg=>{
        this.setState({
          initView:false,
          loading:false,
          errorMsg:msg
        })
      })
    }


    render() {
      const {initView, loading, users, errorMsg} =this.state;
      const {searchName} = this.props;
        // console.log("额呵呵 "+searchName);
      if(initView){
        return <h2>请输入关键字:{searchName}</h2>
      }else if(loading){
        return <h2>正在请求中.....</h2>
      }else if(errorMsg){
        return <h2>{errorMsg}</h2>
      }else{
          return (
            <div className="row">
              {
                users.map((user, index) => (
                    <div className="card" key={index }>
                      <a href={user.html_url} target="_blank">
                        <img alt='' src={user.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>

                ))
              }
          </div>
          )
      }
    }

}
