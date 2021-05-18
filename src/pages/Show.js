import {useState} from 'react'

function Show(props){
  const id = props.match.params.id
  const cheeses = props.cheeses
  const cheese = cheeses.find(p => p._id === id)

  // State for form
  const [editForm, setEditForm] = useState(cheese)

  // Handle Change function for form
  const handleChange = (event) => {
    setEditForm({...editForm, [event.target.name]: event.target.value})
  }

  // Handle Submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheeses(editForm)
    // Redirect people back to the index
    props.history.push('/')
  }

  const removeCheeses = () => {
    props.deleteCheeses(cheese._id)
    props.history.push('/')
  }

    return (
      <div className="person">
      <h1>{cheese.name}</h1>
      <h2>{cheese.countryOfOrigin}</h2>
      <img src={cheese.image} alt={cheese.name} />
      <button id="delete" onClick={removeCheeses}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={editForm.name} name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" value={editForm.title} name="countryOfOrigin" placeholder="Country of Origin" onChange={handleChange} />
        <input type="text" value={editForm.image} name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
    )
  } 
  
  export default Show