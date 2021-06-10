import Link from 'next/link';

export default function Home() {

  const blurText = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('text').classList.add('used'):
    document.getElementById('text').classList.remove('used');
  }

  const blurPassword = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('password').classList.add('used'):
    document.getElementById('password').classList.remove('used');
  }

  return (
    <div className="App">
        <div id="main">
          <form method="post" action="https://ead.ifrn.edu.br/ava/academico/login/index.php" role="form">
              <div className="group">
                  <h2>ACADÊMICO</h2>
              </div>
              <div className="group">
                  <input id="text" type="text" className="form-control" required type="text" name="username" onBlur={(event) => blurText(event)} /><span className="highlight"></span><span className="bar"></span>
                  <label>Matrícula</label>
              </div>
              <div className="group">
                  <input id="password" className="form-control" type="password" name="password" onBlur={(event) => blurPassword(event)} /><span className="highlight"></span><span className="bar"></span>
                  <label>Senha</label>
              </div>
              <div className="group">
                  {
                    // this.props.error==='1' ?
                    // <p>Infelizmente os cookies não estão habilitados no seu navegador.</p>
                    // : null
                  }
                  {
                    // this.props.error==='2' ?
                    // <p>O usuário pode conter somente caracteres alfanuméricos minúsculos.</p>
                    // : null
                  }
                  {
                    // this.props.error==='3' ?
                    // <p>Mátricula ou senha incorretos, tente novamente.</p>
                    // : null
                  }
                  {
                    // this.props.error==='4' ?
                    // <p>Sua sessão expirou, faça login novamente.</p>
                    // : null
                  }
                  <a href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">esqueci minha senha</a>
                  <br />
              </div>
              <button type="submit" className="button buttonGreen">ACESSAR O MOODLE
                  <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
              </button>
              <div id="instanciaMoodleResponsive">
                <hr width="80%" />
                <ul>
                    <li><Link href="/presencial"><a className="plataforma">Presencial</a></Link></li>
                    <li><Link href="/presencial"><a className="plataforma">PROITEC</a></Link></li>
                </ul>
              </div>
          </form>
          <div id="instanciaMoodle">
              <p><img id="logo" src="/img/MarcaIFRN_ZL.png" alt="Logo IFRN EaD" /></p>
              <hr width="80%" />
              <ul>
                  <li><Link href="/presencial"><a>Presencial</a></Link></li>
                  <li><Link href="/proitec"><a>PROITEC</a></Link></li>
              </ul>
          </div>
        </div>
      </div>
  )
}
