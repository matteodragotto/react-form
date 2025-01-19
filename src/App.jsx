import { useState } from "react"

const postTitlesList = [
  "Exploring the Wonders of the Grand Canyon",
  "A Journey Through the Streets of Tokyo",
  "Discovering the Hidden Gems of Paris",
  "Adventures in the Australian Outback",
  "A Foodie's Guide to Italy",
  "The Best Beaches in the Caribbean",
  "Hiking the Trails of the Swiss Alps",
  "Cultural Experiences in India",
  "Road Trip Across the United States",
  "A Safari Adventure in South Africa"
];

const App = () => {

  const [postTitle, setPostTitle] = useState(postTitlesList)
  const [newTitle, setNewTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setPostTitle([newTitle, ...postTitle])

  }
  return (
    <div className="container my-5">
      <div className="row">
        <h1>Inserisci qui il titolo dell'articolo per il tuo blog</h1>
        <div className="col-6 d-flex justify-content-center flex-column">

          <form action="#" onSubmit={submitHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Titolo"
              value={newTitle}
              onChange={((e) => setNewTitle(e.target.value))}
            />
            <button className="btn btn-success my-3" type="submit"> Invia</button>
          </form>

          <ul className="list-group">
            {postTitle.map((title, index) => (
              <li key={index} className="list-group-item">{title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App