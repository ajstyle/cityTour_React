import React, { Component } from 'react'
import './tour.scss';
export default class Tour extends Component {

  state =   {
    showInfo: false 
  }

 
   showInfoChange  = () => {
     this.setState({showInfo: !this.state.showInfo });
     console.log(this.state);
  }
 
  render() 
  {

    const {id,city,img,name,info} = this.props.tour ; 
    const {removeTour} = this.props ; 
    console.log(this.props.tour);
   
    return (
      <article className = 'tour'>
        <div className = 'img-container'>
      <img src = {img} alt = ' City tour' />
      <span className = 'close-btn' onClick = {()=>removeTour(id)} >
      <i className="fa fa-window-close"></i>
      </span>
        </div>
        <div className="tour-info">
        <h3>{city} </h3>
        <h4>{name} </h4>
        <h5> info 
        <span>
          <i onClick = {this.showInfoChange} className="fa fa-caret-square-down"></i>
          </span>
          {this.state.showInfo &&  <p >  {info} </p>}
       

        </h5>
        </div>
        
      </article>
    )
  }
}
