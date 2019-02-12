import React, { Component, PropTypes} from 'react';
import BottomNav from './containers/BottomNav';
import DiscoveryPage from './containers/DiscoveryPage';
import VideoPage from './containers/VideoPage';
import OwnPage from './containers/OwnPage';
import FriendsPage from './containers/FriendsPage';
import AccountPage from './containers/AccountPage';
import history from './public/history';
import { Router, Route, hashHistory, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes = {

  };
  static defaultProps = {

  };
  render() {
    return (
      <Router history={history}>
        <div>
          {/*
            放公共的ui，比如头部或尾部
          */}
          <Switch>
            <BottomNav>
              {/*发现页*/}
              <Route exact path="/" component={DiscoveryPage}/>
              {/*视频页*/}
              <Route path="/video" component={VideoPage}/>
              {/*我的页*/}
              <Route path="/own" component={OwnPage}/>
              {/*朋友页*/}
              <Route path="/friends" component={FriendsPage}/>
              {/*账号页*/}
              <Route path="/account" component={AccountPage}/>
            </BottomNav>
          </Switch>
        </div>
      </Router>
    );
  }
  //在render方法之前执行
  componentWillMount() {

  }
  //在render方法之后执行
  componentDidMount() {

  }
  //组件卸载前，常在其中执行一些清理方法，如事件回收或清除定时器
  componentWillUnmount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}
export default App
