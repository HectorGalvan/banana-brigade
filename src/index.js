import "./style.scss";
import banana from './banana.svg';

import Amplify from '@aws-amplify/core';
import {DataStore} from '@aws-amplify/datastore';
import awsconfig from './aws-exports';

import {Banana} from './models';

Amplify.configure(awsconfig);

const el =  document.querySelector('section');
const offset_y = 22
const offset_x = 16
const cognito_uuid = '34292304982402'
const hashnode_username = '@iamcloud'
const banana_id = 5

function click_left(ev){
  vector = {
    x: ev.pageY - offset_y,
    y: ev.pageX - offset_x,
    z: 1
  }

  const old_banana = document.querySelector(`[data-banana_id='${banana_id}']`)
  if (old_banana){
    old_banana.style.top = `${ev.pageY-offset_y}px`
    old_banana.style.left = `${ev.pageX-offset_x}px`
  } else {
    const new_banana = document.createElement("div")
    new_banana.classList.add('banana')
    new_banana.style.top = `${vector.y}px`
    new_banana.style.left = `${vector_x}px`
    new_banana.dataset["cognito_uuid"] = cognito_uuid
    new_banana.dataset["banana_id"] = banana_id

    const label = document.createElement("div")
    label.classList.add('hashnode_username')
    label.innerText = hashnode_username

    new_banana.appendChild(label)

    el.appendChild(new_banana)

    const model = DataStore.save(
      new Banana({
        cognito_uuid: cognito_uuid,
        vector: vector
      })
    )
    console.log(model)
    model.save()
  }
}

function click_right(ev){
  ev.preventDefault()
  const banana = document.querySelector(`[data-cognito_uuid='${cognito_uuid}']:last-child`)
  banana.remove()
  return false
}

el.addEventListener('click', click_left);
el.addEventListener('contextmenu', click_right);
