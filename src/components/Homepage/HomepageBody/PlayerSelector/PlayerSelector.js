import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import classes from './PlayerSelector.css';

class PlayerSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  static getDerivedStateFromProps(nextProps){
      return {headerTitle: nextProps.title};
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
      <div className={classes.ok}>
      <div className={classes.dd_wrapper}>
        <div className={classes.dd_header} onClick={() => this.toggleList()}>
            <div className={classes.dd_headertitle}>{headerTitle}</div>
            {listOpen
              ? <FontAwesomeIcon icon={faAngleUp} size="2x"/>
              : <FontAwesomeIcon icon={faAngleDown} size="2x"/>
            }
        </div>
        {listOpen && <ul className={classes.list}>
          { list.map((item) => (
            <li 
              className={classes.listitem} 
              key={item.name} 
              onClick={() => this.props.toggleItem(item.id, item.key)}>
                {item.name} {item.selected && <FontAwesomeIcon icon={faCheck}/>}
            </li>
            ))}
          </ul> 
        }
      </div>
      </div>
    )
  }
  //get server from data on press
}


export default PlayerSelector;