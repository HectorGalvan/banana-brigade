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

//const el = document.querySelector('section');
//el.addEventListener('click'      , click_left);
//el.addEventListener('contextmenu', click_right);

//async function click_left(ev){
  //const vector = {
    //x: ev.pageX - offset_x,
    //y: ev.pageY - offset_y,
    //z: 1
  //}

  //const bananas = await find_banana()
  //console.log('bananas', bananas)

  //const old_banana = document.querySelector(`[data-banana_id='${banana_id}']`)
  //if (old_banana){
    //BananaElement.move(old_banana,vector)
  //} else {
    //BananaElement.render(vector)
    ////create_banana(vector)
  //}
//}

//function click_right(ev){
  //ev.preventDefault()
  //BananaElement.remove()
  //return false
/*}*/

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
