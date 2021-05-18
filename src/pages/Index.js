import {useState} from "react"
import {Link} from "react-router-dom";

function Index(props){
    // state to hold formData
    const [newForm, setNewForm] = useState({
      name: "",
      image: "",
      title: "",
    });
  
    // handleChange function for form
    const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };
  
    // handle submit function for form
    const handleSubmit = (event) => {
      event.preventDefault();
      props.createCheeses(newForm);
      setNewForm({
        name: "",
        image: "",
        title: "",
      });
    };

  //Loaded function
  const loaded = () => {
    return props.cheeses.map((cheese) => {
      return <div key={cheese._id} className='cheese'>
        <Link to={`/cheeses/${cheese._id}`}><h1>{cheese.name}</h1></Link>
        <h3>{cheese.countryOfOrigin}</h3>
        <img src={cheese.image} alt={cheese.name}/>
      </div>
    })
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
  return(
    <section>
    <form onSubmit={handleSubmit}>
      <input type="text" value={newForm.name} name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" value={newForm.countryOfOrigin} name="countryOfOrgin" placeholder="Country of Origin" onChange={handleChange} />
      <input type="text" value={newForm.image} name="image" placeholder="Image URL" onChange={handleChange} />
      <input type="submit" value="Create Cheese" />
    </form>
    {props.cheeses ? loaded() : loading()}
  </section>
  )
  } 
  
  export default Index