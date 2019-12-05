import React, { Component } from 'react';
import './css/Styles.css';
import Academico from './pages/Academico';
import Presencial from './pages/Presencial';
import Proitec from './pages/Proitec';

class App extends Component {
  constructor(props) {
    super(props);
    
      this.getQueryVariable('ava') === 'presencial' ?
      this.state = {
        academico: false,
        presencial: true,
        proitec: false
      }:
      this.getQueryVariable('ava') === 'proitec' ?
      this.state = {
        academico: false,
        presencial: false,
        proitec: true
      }:
      this.state = {
        academico: true,
        presencial: false,
        proitec: false
      }
    
  }

  academicoButton = () => {
    this.setState({
      academico: true,
      presencial: false,
      proitec: false
    });
  }

  presencialButton = () => {
    this.setState({
      academico: false,
      presencial: true,
      proitec: false
    });
  }

  proitecButton = () => {
    this.setState({
      academico: false,
      presencial: false,
      proitec: true
    });
  }

  getQueryVariable = (variable) => {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] === variable){return pair[1];}
    }
    return(false);
  }

  // Actions

  blurText = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('text').classList.add('used'):
    document.getElementById('text').classList.remove('used');
  }

  blurPassword = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('password').classList.add('used'):
    document.getElementById('password').classList.remove('used');
  }

  getAllUrlParams = (url) => {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  
    // we'll store the parameters here
    var obj = {};
  
    // if query string exists
    if (queryString) {
  
      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];
  
      // split our query string into its component parts
      var arr = queryString.split('&');
  
      for (var i = 0; i < arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');
  
        // set parameter name and value (use 'true' if empty)
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
  
        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {
  
          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
  
          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }
  
    return obj;
  }

  render() {
    return (
      <div>
          { this.state.academico ?
          <Academico presencialBtn={this.presencialButton}
                     proitecBtn={this.proitecButton}
                     blurText={this.blurText}
                     blurPassword={this.blurPassword}
                     error={this.getAllUrlParams().errorcode} /> 
                     : null}

          { this.state.presencial ?
          <Presencial academicoBtn={this.academicoButton}
                      proitecBtn={this.proitecButton}
                      blurText={this.blurText}
                      blurPassword={this.blurPassword}
                      error={this.getAllUrlParams().errorcode} /> 
                      : null}

          { this.state.proitec ?
          <Proitec academicoBtn={this.academicoButton}
                   presencialBtn={this.presencialButton}
                   blurText={this.blurText}
                   blurPassword={this.blurPassword}
                   error={this.getAllUrlParams().errorcode} /> 
                  : null}                  
      </div>
    );
  }
}

export default App;
