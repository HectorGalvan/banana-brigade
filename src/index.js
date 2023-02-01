// assets
import "./assets/style.scss"
import "./assets/banana.svg"
import "./assets/banana-leaf.jpg"

// Amplify Configure
import Amplify  from '@aws-amplify/core'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

// Authenicaation
import Auth from './utils/auth'

// views
import './views/logout'
import './views/login'
import './views/signup' q
import './views/verify'
import BananaBoard from './views/banana_board'

const el_banana_board = document.querySelector('section.banana_board');
el_banana_board.addEventListener('click'      , BananaBoard.left_click);
el_banana_board.addEventListener('contextmenu', BananaBoard.right_click);

// Hold the logged in / logged out state
window.logged_in = false
// Hold the reference to the current user
window.cognito_uuid = null
window.hashnode_username = null

Auth.current_user(current_user_success,current_user_error)

function current_user_success(user){
  console.debug('current_user_success',user)
  if (user){
    window.logged_in = true
    window.cognito_uuid = user.attributes.sub
    window.hashnode_username = user.attributes.nickname
    const hashnode_username = "@" + user.attributes.nickname
    const el = document.querySelector('.item.profile')
    el.innerHTML = hashnode_username
    el.href = "https://hashnode.com/" + hashnode_username
    document.body.classList.add('logged_in')
    document.body.classList.remove('logged_out')
    BananaBoard.render()
  } else {
    window.logged_in = false
    window.cognito_uuid = null
    window.hashnode_username = null
    document.body.classList.remove('logged_in')
    document.body.classList.add('logged_out')
  }
}

function current_user_error(error){
  console.debug('current_user_error',error)
  window.logged_in = false
  window.cognito_uuid = null
  window.hashnode_username = null
  document.body.classList.remove('logged_in')
  document.body.classList.add('logged_out')
}
