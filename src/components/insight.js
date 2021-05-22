import React, { Component } from 'react';
import Question from './question';


// show page = edit page
export default class Insight extends Component {
  render () {
    return (
      <div className='insight'>
        <div className='header'>
          <div className='date'></div>
        </div>
        <div className='subheader'>
          <div className='quote'></div>
        </div>
        <div className='content-container container bordered'>
          <div className='morning-container'>
            <Question></Question>
          </div>
          <div className='night-container'></div>
        </div>
      </div>
    );
  }
}
