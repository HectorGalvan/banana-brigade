import Auth from './auth'

const el_signup_button = document.querySelector('.item.signup')
const el_signup_popup_close = document.querySelector('.signup_popup .close')
const el_signup_submit = document.querySelector('.signup_popup form')

el_signup_button.addEventListener('click', click_signup_button)
el_signup_popup_close.addEventListener('click', click_signup_close)
el_signup_submit.addEventListener('submit', signup_submit)

function click_signup_close(ev){
  const el_popup  = document.querySelector('.signup_popup');
  el_popup.classList.remove('popped')
}

function signup_submit(ev){
  ev.preventDefault()
  const email    = document.querySelector('.signup_popup .email').value
  const password = document.querySelector('.signup_popup .password').value
  const nickname = document.querySelector('.signup_popup .hashnode_username').value
  console.debug(email,password,nickname)
  const data = {
    email: email,
    password: password,
    nickname: nickname
  }
  Auth.sign_up(data,signup_success,signup_error)
  console.debug('signup submit')
  return false
}

function signup_success(user){
  console.debug(user)
  const el_popup  = document.querySelector('.signup_popup');
  el_popup.classList.remove('popped')
}

function signup_error(error){
  console.debug(error)
  const el_err = document.querySelector('.signup_popup .err')
  el_err.innerHTML = error.message
}

function click_signup_button(ev){
  console.debug('click_signup_button',ev)
  ev.preventDefault()
  const el_popup  = document.querySelector('.signup_popup');
  el_popup.classList.add('popped')
  return false
}
