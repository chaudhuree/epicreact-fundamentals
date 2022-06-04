// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
//
// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input
//   // 🐨 add the onSubmit handler to the <form> below
//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   function handleSubmit(event) {
//     event.preventDefault()
//     let value = event.target.elements.username.value
//     // let inputvalue = document.querySelector('#username').value
//     // console.log(inputvalue)
//     onSubmitUsername(value)
//
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" name="user-name" id="username" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }
// export default App

//<---- using useRef ---->
// function UsernameForm({onSubmitUsername}) {
//   const usernameRef=React.useRef()
//   function handleSubmit(event) {
//     event.preventDefault()
//     let value = usernameRef.current.value
//     // let inputvalue = document.querySelector('#username').value
//     // console.log(inputvalue)
//     onSubmitUsername(value)
//
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={usernameRef} type="text" name="user-name" id="username" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }
// export default App

//<---- username input only accepts lower-case characters ---->
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)
//   const usernameRef = React.useRef()
//   function handleSubmit(event) {
//     event.preventDefault()
//     let value = usernameRef.current.value
//     // let inputvalue = document.querySelector('#username').value
//     // console.log(inputvalue)
//     onSubmitUsername(value)
//   }
//   const handleChange = event => {
//     const value = event.target.value
//     let isLower = value === value.toLowerCase()
//     setError(isLower ? null : 'please put only lowercase word')
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           ref={usernameRef}
//           type="text"
//           name="user-name"
//           id="username"
//           onChange={handleChange}
//         />
//       </div>
//       <p style={{color: 'red'}}>{error}</p>
//       <button disabled={Boolean(error)} type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }
// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }
// export default App


//<---- make it lowercase always ---->
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}
export default App