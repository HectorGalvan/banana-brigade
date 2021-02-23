// assets
import "./assets/style.scss"
import './assets/banana.svg'
import './assets/banana-leaf.jpg'

// Amplify Configure
import Amplify   from '@aws-amplify/core'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

import Auth from './auth'

// views
import './login_popup'
import './signup_popup'
import './banana_board'

/*const offset_y = 22*/
//const offset_x = 16
//const cognito_uuid = 'a34292304982402'
//const hashnode_username = '@iamcloud'
//const banana_id = 5

Auth.current_user(current_user_success,current_user_error)

function current_user_success(user){
  console.debug('current_user_success',user)
  const hashnode_username = "@" + user.attributes.nickname
  const el = document.querySelector('.item.profile')
  el.innerHTML = hashnode_username
  el.href = "https://hashnode.com/" + hashnode_username
  document.body.classList.add('logged_in')
}

function current_user_error(error){
  console.debug('current_user_error',error)
}
