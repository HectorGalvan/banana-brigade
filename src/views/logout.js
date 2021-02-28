import Auth from '../utils/auth'

const el_logout_button  = document.querySelector('.item.logout');

el_logout_button.addEventListener('click' , click_logout_button);

function click_logout_button(ev){
  console.debug('click_logout_button',ev)
  ev.preventDefault()
  Auth.log_out(function(){
    window.logged_in = false
    window.cognito_uuid = null
    window.hashnode_username = null
    document.body.classList.remove('logged_in')
    document.body.classList.add('logged_out')
  })
  return false
}

