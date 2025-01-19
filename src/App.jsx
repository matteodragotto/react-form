import { useState } from "react"

const App = () => {

  const [postTitle, setPostTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    alert('Titolo registrato')
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
              value={postTitle}
              onChange={((e) => setPostTitle(e.target.value))}
            />
            <button className="btn btn-success my-3" type="submit"> Invia</button>
          </form>



        </div>
      </div>
    </div>

  )
}

export default App