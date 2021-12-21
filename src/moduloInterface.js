import userLogin from './moduloDados.js'
import comunicacaoModal from './moduloComunicacaoDados.js'
import userLogin from './moduloDados.js'

class ControlerUserLogin {
  constructor(status) {
    this.status = status
  }
  checkLogin() {
    this.status = true
  }

  loginInfo(user, senha) {
    var infoCheck = userLogin.find(userLogin => userLogin.username === user)
    if (!infoCheck) {
      console.log(
        comunicacaoModal.find(
          comunicacaoModal => comunicacaoModal.idModal === 'usuarioNaoExiste1'
        )
      )
    } else {
      console.log(infoCheck)
      if (infoCheck.senha === senha) {
        this.checkLogin()
        console.log(
          comunicacaoModal.find(
            comunicacaoModal => comunicacaoModal.idModal === 'loginExecutado1'
          )
        )
      } else {
        console.log(
          comunicacaoModal.find(
            comunicacaoModal => comunicacaoModal.idModal === 'falhaLogin1'
          )
        )
      }
    }
  }
}
const controlerUserLogin = new ControlerUserLogin()
export default controlerUserLogin
