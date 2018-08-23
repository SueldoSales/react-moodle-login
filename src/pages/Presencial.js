import React, {Component} from 'react';

class Presencial extends Component {
  render() {
    return (
      <div className="App" style={this.props.estado}>
        <div id="mainPresencial">
          <form>
              <div className="group">
                  <h2>PRESENCIAL</h2>
              </div>
              <div className="group">
                  <input type="text" /><span className="highlight"></span><span className="barPresencial"></span>
                  <label>Matrícula</label>
              </div>
              <div className="group">
                  <input type="email" /><span className="highlight"></span><span className="barPresencial"></span>
                  <label>Senha</label>
              </div>
              <div className="group">
                  <a href="#">esqueci minha senha</a>
                  <br />
              </div>
              <button type="button" className="button buttonBlue">ACESSAR O MOODLE
                  <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
              </button>
          </form>
          <div id="instanciaMoodle">
              <p><img id="logo" src="https://ead.ifrn.edu.br/ava/academico/theme/boost_eadifrn/pix/eadifrn-logo.svg" alt="Logo IFRN EaD" /></p>
              <hr width="80%" />
              <ul>
                  <li><a onClick={this.props.academicoBtn}>Acadêmico</a></li>
                  <li><a onClick={this.props.proitecBtn}>PROITEC</a></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Presencial;