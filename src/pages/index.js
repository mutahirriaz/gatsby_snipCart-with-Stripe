import React from "react"

export default function Home() {
  return (
    <div>
      Hello world!

      <div>
        <button class ="snipcart-add-item" 
          data-item-id="formal-shoe"
          data-item-price="25"
          data-item-description="This is best shoe ever"
          data-item-url="/"
          data-item-image="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          data-item-name="Hobbit"
          data-item-custom1-name="Size"
          data-item-custom1-options="8|9[+5]|10"
          data-item-custom2-name="Info"
          data-item-custom2-type="checkbox"
        >
          checkout
        </button>
      </div>

    </div>
  )
}
