import Auth from '../utils/auth'

const el_login_button  = document.querySelector('.item.login');
const el_login_popup_close  = document.querySelector('.login_popup .close');
const el_login_submit  = document.querySelector('.login_popup form');

el_login_button.addEventListener('click' , click_login_button);
el_login_popup_close.addEventListener('click' , click_login_close);
el_login_submit.addEventListener('submit' , login_submit);

function click_login_button(ev){
  console.debug('click_login_button',ev)
  ev.preventDefault()
  const el_popup  = document.querySelector('.login_popup');
  el_popup.classList.add('popped')
  return false
}

function click_login_close(ev){
  const el_popup  = document.querySelector('.login_popup');
  el_popup.classList.remove('popped')
}

function login_submit(ev){
  ev.preventDefault()
  const email    = document.querySelector('.login_popup .email').value
  const password = document.querySelector('.login_popup .password').value
  console.debug(email,password)
  Auth.log_in(email,password,login_success,login_error)
  console.debug('login submit')
  return false
}

function login_success(user){
  console.debug('login_success',user)
  const el_popup  = document.querySelector('.login_popup');
  el_popup.classList.remove('popped')

  window.logged_in = true
  window.cognito_uuid = user.attributes.sub
  window.hashnode_username = user.attributes.nickname
  document.body.classList.add('logged_in')
  document.body.classList.remove('logged_out')
}

function login_error(error){
  console.debug('loging_error', error)
  const el_err = document.querySelector('.login_popup .err')
  el_err.innerHTML = error.message
}

