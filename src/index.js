// assets
import "./assets/style.scss";
import './assets/banana.svg';
import './assets/banana-leaf.jpg';

// Amplify Configure
import Amplify   from '@aws-amplify/core';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import BananaElement from  './banana_element'
import BananaData    from  './banana_data'

console.log('BananaData',BananaData)

/*const offset_y = 22*/
//const offset_x = 16
//const cognito_uuid = 'a34292304982402'
//const hashnode_username = '@iamcloud'
//const banana_id = 5

let logged_in = false;

const el_banana_board = document.querySelector('section');
const el_login_button  = document.querySelector('.item.login');
const el_signup_button = document.querySelector('.item.signup');
const el_login_popup_close  = document.querySelector('.login_popup .close');
const el_signup_popup_close = document.querySelector('.signup_popup .close');
el_banana_board.addEventListener('click'      , click_banana_board_left);
el_banana_board.addEventListener('contextmenu', click_banana_board_right);
el_login_button.addEventListener('click' , click_login_button);
el_signup_button.addEventListener('click', click_signup_button);
el_login_popup_close.addEventListener('click' , click_login_close);
el_signup_popup_close.addEventListener('click', click_signup_close);

function click_signup_button(ev){
  console.debug('click_signup_button',ev)
  ev.preventDefault()
  const el_popup  = document.querySelector('.signup_popup');
  el_popup.classList.add('popped')
  return false
}

function click_login_button(ev){
  console.debug('click_login_button',ev)
  ev.preventDefault()
  const el_popup  = document.querySelector('.login_popup');
  el_popup.classList.add('popped')
  return false
}

function click_signup_close(ev){
  const el_popup  = document.querySelector('.signup_popup');
  el_popup.classList.remove('popped')
}

function click_login_close(ev){
  const el_popup  = document.querySelector('.login_popup');
  el_popup.classList.remove('popped')
}


async function click_banana_board_left(ev){
  if (logged_in !== true) {return false; }
  const vector = {
    x: ev.pageX - offset_x,
    y: ev.pageY - offset_y,
    z: 1
  }

  const bananas = await find_banana()
  console.log('bananas', bananas)

  const old_banana = document.querySelector(`[data-banana_id='${banana_id}']`)
  if (old_banana){
    BananaElement.move(old_banana,vector)
  } else {
    BananaElement.render(vector)
    //create_banana(vector)
  }
}

function click_banana_board_right(ev){
  ev.preventDefault()
  if (logged_in !== true) {return false; }
  BananaElement.remove()
  return false
}

async function render_bananas(){
  const bananas = await BananaData.all()
  for(let i=0; i < bananas.length; i++){
    BananaElement.render(
      bananas[i].hashnode_username,
      bananas[i].cognito_uuid,
      JSON.parse(bananas[i].vector)
    )
  } // for(let i=0; i < bananas.length; i++){
}

render_bananas()
