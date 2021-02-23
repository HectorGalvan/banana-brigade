export default class BananaElement {
  static move(banana,vector){
    banana.style.top  = `${vector.y}px`
    banana.style.left = `${vector.x}px`
  }

  static async render(hashnode_username,cognito_uuid,vector){
    const new_banana = document.createElement("div")
    new_banana.classList.add('banana')
    new_banana.style.top  = `${vector.y}px`
    new_banana.style.left = `${vector.x}px`
    new_banana.dataset["cognito_uuid"] = cognito_uuid
    //new_banana.dataset["banana_id"] = banana_id

    const label = document.createElement("div")
    label.classList.add('hashnode_username')
    label.innerText = hashnode_username

    new_banana.appendChild(label)

    const el =  document.querySelector('section');
    el.appendChild(new_banana)
  }

  static remove(){
    const banana = document.querySelector(`[data-cognito_uuid='${cognito_uuid}']:last-child`)
    banana.remove()
  }
}
