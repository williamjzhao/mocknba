import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './PlayerSelector.css';

class PlayerSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside() {
    this.setState( {
      listOpen: false
    })
  }

  toggleList() {
    this.setState(prevState => ( {
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const {list} = this.props;
    const {listOpen, headerTitle} = this.state;
    return(
      <div className={classes.dd_wrapper}>
        <div className={classes.dd_header} onClick={() => this.toggleList()}>
            <div className={classes.dd_headertitle}>{headerTitle}</div>
            {listOpen
              ? <FontAwesomeIcon name="angle-up" size="2x"/>
              : <FontAwesomeIcon name="angle-down" size="2x"/>
            }
        </div>
        {listOpen && <ul className={classes.list}>
          { list.map((item) => (
            <li className={classes.listitem} key={item.id} >{item.title}</li>
            ))}
          </ul> 
        }
      </div>
    )
  }
  //get server from data on press
}


export default PlayerSelector;