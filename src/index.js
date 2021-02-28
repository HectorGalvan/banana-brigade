// assets
import "./assets/style.scss"
import "./assets/banana.svg"
import "./assets/banana-leaf.jpg"

// Amplify Configure
import Amplify  from '@aws-amplify/core'
// import awsconfig from './aws-exports'

// Harcode!
const awsconfig = {
  "aws_project_region": "us-east-1",
  "aws_appsync_graphqlEndpoint": "https://i2pmgh3v7vbjxocwjhquj7nk7i.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
  "aws_cognito_identity_pool_id": "us-east-1:dd698710-3402-48f2-bc62-b6308dd230c7",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_3ulbJHvda",
  "aws_user_pools_web_client_id": "f25bbfk9ubc377v2h27vslt3s",
  "oauth": {}
};
Amplify.configure(awsconfig)

// Authenicaation
import Auth from './utils/auth'

// views
import './views/logout'
import './views/login'
import './views/signup'
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
