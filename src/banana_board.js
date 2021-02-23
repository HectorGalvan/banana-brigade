import BananaElement from './banana_element'
import BananaData    from './banana_data'

const el_banana_board = document.querySelector('section');
el_banana_board.addEventListener('click'      , click_banana_board_left);
el_banana_board.addEventListener('contextmenu', click_banana_board_right);

let logged_in = false;

async function click_banana_board_left(ev){
  if (logged_in !== true) {return false;}
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
  if (logged_in !== true) {return false;}
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
