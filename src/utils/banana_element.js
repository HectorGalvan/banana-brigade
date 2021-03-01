export default class BananaElement {
  static move(banana,vector){
    console.debug('move', arguments)
    banana.style.top  = `${vector.y}px`
    banana.style.left = `${vector.x}px`
  }

  static async render(banana_id,hashnode_username,cognito_uuid,vector){
    console.debug('render', arguments)
    const new_banana = document.createElement("a")
    new_banana.href = `https://hashnode.com/@${hashnode_username}`
    new_banana.target = '_blank'
    new_banana.classList.add('banana')
    new_banana.style.top  = `${vector.y}px`
    new_banana.style.left = `${vector.x}px`
    new_banana.dataset.cognito_uuid = cognito_uuid
    new_banana.dataset.banana_id    = banana_id

    const label = document.createElement("span")
    label.classList.add('hashnode_username')
    label.innerText = `@${hashnode_username}`

    new_banana.appendChild(label)

    const el =  document.querySelector('section.banana_board');
    el.appendChild(new_banana)
  }

  static remove(banana_id){
    const banana = document.querySelector(`[data-banana-id='${banana_id}']:last-child`)
    console.debug('remove',banana)
    banana.remove()
  }
}
