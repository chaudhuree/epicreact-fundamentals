// Rendering Lists
// http://localhost:3000/isolated/final/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    console.log(itemIds)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  //  line explanation
  //  includes return true or false
  //  first itemsIds a item gulo jeta state a ase oitar id dea akta array banay niewa hoice
  //  then setItems er kaj
  //   aikhane !itemIds.includes(i.id)) check korce allItems er ak ak ta item bortoman items a ase kina
  //  dhori amra apple delete korci
  //  tahole itemIds.includes(i.id)) aita return korbe: apple ta to items a nai so false
  //  akhn er samne ! boshy oitare true kore dice.
  //  so allItems.find a ar value ta true hoye gelo. so akhn array ta akhn oi object ta k return kore dicce
  //  [...items, allItems.find(i => !itemIds.includes(i.id))]
  //  ...items dea to item er vitore age ki  ki ase oita newa hoiloi
  //  tarpor array find kore konta nai first a seta ber kore oitar dewa hoilo.
  //  next add a abar same thing repeat hobe
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>
            <label htmlFor={`${item.id}-input`}>{item.value}</label>
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
