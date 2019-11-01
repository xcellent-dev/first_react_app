import React, { Component } from 'react';
import Intro from 'components/landing/Intro';
import { connect } from 'react-redux';
import { BrickblockActions } from 'store/actionCreators';

class IntroContainer extends Component {
  state = {
    selected_type: "pre_ico"
  }
  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo = () => {    
     BrickblockActions.fetchBrickRate();
     BrickblockActions.fetchBrickData();          
  }
  onChangeType = (type) => {
    this.setState({
      selected_type: type
    });
  }

  render() {
    const { preIco, ico, rate } = this.props;
    const { selected_type } = this.state;
    return (
      <Intro
        pre_ico={preIco}
        ico={ico}        
        selected_type={selected_type}
        onChangeType={this.onChangeType}
        rate={rate}
      />
    );
  }
}

export default connect(
  // state unstructured
  ({ brickblock }) => ({
    preIco: brickblock.preIco,
    ico: brickblock.ico,
    rate: brickblock.rate
  })
)(IntroContainer);

