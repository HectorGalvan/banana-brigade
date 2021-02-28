import BananaElement from '../utils/banana_element'
import BananaData    from '../utils/banana_data'

const el_banana_board = document.querySelector('section.banana_board');
el_banana_board.addEventListener('click'      , click_banana_board_left);
el_banana_board.addEventListener('contextmenu', click_banana_board_right);

// used to center the banana to cursor click
const offset_x = 16
const offset_y = 22

async function click_banana_board_left(ev){
  console.debug('click_banana_board_left',ev)
  if (window.logged_in !== true) {return false;}
  const vector = {
    x: ev.pageX - offset_x,
    y: ev.pageY - offset_y,
    z: 1
  }

  const banana = await BananaData.find_by_cognito_uuid(window.cognito_uuid)
  console.debug('banana', banana)

  if (banana){
    const el_old_banana = document.querySelector(`[data-banana_id='${banana.id}']`)
    console.debug('old_banana', el_old_banana)
    if (el_old_banana){
      BananaData.update(banana.id, vector, function(updated_banana){
        BananaElement.move(el_old_banana,vector)
      })
    } else {
      BananaData.create(window.hashnode_username, window.cognito_uuid, vector, function(new_banana){
        BananaElement.render(
          new_banana.id,
          new_banana.attributes.nickname,
          new_banana.attributes.sub,
          vector
        )
      })
    }
  } else {
    BananaData.create(window.hashnode_username, window.cognito_uuid, vector, function(new_banana){
      BananaElement.render(
        new_banana.id,
        new_banana.hashnode_username,
        new_banana.cognito_uuid,
        vector
      )
    })
  }
}

function click_banana_board_right(ev){
  console.debug('click_banana_board_right',ev)
  ev.preventDefault()
  if (logged_in !== true) {return false;}
  BananaElement.remove()
  return false
}

async function render_bananas(){
  const bananas = await BananaData.all()
  console.debug('render_bananas',bananas)
  for(let i=0; i < bananas.length; i++){
    BananaElement.render(
      bananas[i].id,
      bananas[i].hashnode_username,
      bananas[i].cognito_uuid,
      JSON.parse(bananas[i].vector)
    )
  } // for(let i=0; i < bananas.length; i++){
}

render_bananas()
