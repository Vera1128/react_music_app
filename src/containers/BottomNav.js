/**
 * Created by yangyang.xu on 2018/8/1.
 */
/*页面底部导航*/
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import { HashRouter, Route, hashHistory, Link, Switch } from 'react-router-dom';

import '../style/bottom-nav.scss';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes = {

  };
  static defaultProps = {

  };
  //父组件定义ChildContext，从这一层开始的子组件都可以拿到定义的context,适用于全局变量的传递，其他尽量使用props层层传递
  static childContextTypes = {
    color: PropTypes.string
  };
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    return (
      <div>
        <div className="content-container">
          {this.props.children}
        </div>
        <div className="bottom-nav">
          <Link className="link-style" to="/">
            <i class="fa fa-search"></i>
            发现
          </Link>
          <Link className="link-style" to="/video">
            <i class="fa fa-video-camera"></i>
            视频
          </Link>
          <Link className="link-style" to="/own">
            <i class="fa fa-music"></i>
            我的
          </Link>
          <Link className="link-style" to="/friends">
            <i class="fa fa-users"></i>
            朋友
          </Link>
          <Link className="link-style" to="/account">
            <i class="fa fa-user"></i>
            账号
          </Link>
        </div>
      </div>
    );
  }
  //生命周期函数
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
    //使用is进行比较是否需要更新节点，节省性能
    const thisProps = this.props || {};
    const thisState = this.state || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length){
      return true;
    }

    for (const key in nextProps) {
      if (nextProps.hasOwnProperty(key) && !is(thisProps[key], nextProps[key])){
        return true;
      }
    }

    for (const key in nextState) {
      if (nextState.hasOwnProperty(key) && !is(thisState[key], nextState[key])){
        return true;
      }
    }
    return false;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default BottomNav
