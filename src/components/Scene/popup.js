import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import '../css/button.css';
import { Icon } from 'antd';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
  };


  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          maxWidth={this.props.maxWidth === false? 'xs' : this.props.maxWidth}
          keepMounted
          onClose={this.props.close}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          style={{zIndex:this.props.zIndex?this.props.zIndex:'100'}}
        >

          <img className="pop" src={this.props.image}/>

          {this.props.iconclose === 'none' ?
          null:
          <Icon className="closepop" type="close" onClick={this.props.close}/>
    }

        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
