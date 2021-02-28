// assets
import "./assets/style.scss"
import './assets/banana.svg'
import './assets/banana-leaf.jpg'

// Amplify Configure
import Amplify   from '@aws-amplify/core'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

// Authenicaation
import Auth from './auth'

// views
import './login_popup'
import './signup_popup'
import './banana_board'

// Hold the logged in / logged out state
window.logged_in = false
// Hold the reference to the current user
window.cognito_uuid = null
window.hashnode_username = null

Auth.current_user(current_user_success,current_user_error)

function current_user_success(user){
  window.logged_in = true
  window.cognito_uuid = user.attributes.sub
  window.hashnode_username = user.attributes.nickname
  console.debug('current_user_success',user)
  const hashnode_username = "@" + user.attributes.nickname
  const el = document.querySelector('.item.profile')
  el.innerHTML = hashnode_username
  el.href = "https://hashnode.com/" + hashnode_username
  document.body.classList.add('logged_in')
  document.body.classList.remove('logged_out')
}

function current_user_error(error){
  window.logged_in = false
  console.debug('current_user_error',error)
  document.body.classList.remove('logged_in')
  document.body.classList.add('logged_out')
}
