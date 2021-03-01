import Auth from '../utils/auth'

const el_verify_button  = document.querySelector('.item.verify');
const el_verify_popup_close  = document.querySelector('.verify_popup .close');
const el_verify_submit  = document.querySelector('.verify_popup form');

el_verify_button.addEventListener('click' , click_verify_button);
el_verify_popup_close.addEventListener('click' , click_verify_close);
el_verify_submit.addEventListener('submit' , verify_submit);

function click_verify_button(ev){
  console.debug('click_verify_button',ev)
  ev.preventDefault()
  const el_popup  = document.querySelector('.verify_popup');
  el_popup.classList.add('popped')
  return false
}

function click_verify_close(ev){
  const el_popup  = document.querySelector('.verify_popup');
  el_popup.classList.remove('popped')
}

function verify_submit(ev){
  ev.preventDefault()
  const email = document.querySelector('.verify_popup .email').value
  const code  = document.querySelector('.verify_popup .verification_code').value
  console.debug(email,code)
  Auth.verify(email,code,verify_success,verify_error)
  console.debug('verify submit')
  return false
}

function verify_success(){
  console.debug('verify_success')
  const el_popup  = document.querySelector('.verify_popup');
  el_popup.classList.remove('popped')
}

function verify_error(error){
  console.debug('verifyg_error', error)
  const el_err = document.querySelector('.verify_popup .err')
  el_err.innerHTML = error.message
}


