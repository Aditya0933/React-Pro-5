import './App.css';
import { useState } from 'react';

function App() {
  function changeHandler(event){
    const{name,type,checked,value} = event.target
    setformData(preData =>{
      return {
        ...preData,[name]:type === "checkbox" ? checked : value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Printing Entire Form Data...")
    console.log(formData)
  }

  // By making Object in UseState We will Handle Multiple States Data
  const[formData,setformData] = useState({firstname:"",lastname:"",email:"",comments:"",isVisible:false,mode:"",favCar:""});
  console.log(formData)
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
          type="text"
          placeholder='Enter First Name...'
          onChange={changeHandler}
          name='firstname'
          value={formData.firstname}
        />
        <br></br> 
        <input 
          type="text"
          placeholder='Enter First Name...'
          onChange={changeHandler}
          name='lastname'
          value={formData.lastname}
        />
        <br></br>
        <input 
          type="email"
          placeholder='Enter Last Name...'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br></br>
        <textarea
          type="text"
          placeholder="Enter your's Comment's"
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />
        <br></br>
        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          // checked={formData.isVisible}
        />
        <label htmlFor='isVisible' >Am i Visible To you ?</label>
        <br></br>
        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value='Online-mode'
          id='Online-mode'
          checked={formData.mode ==="Online-mode"}
        />
        <label htmlFor='Online-mode'> Online Mode</label>
        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value='Offline-mode'
          id='Offline-mode'
          checked={formData.mode ==="Offline-mode"}
        />
        <label htmlFor='Online-mode'> Offline Mode</label>
        <br></br>
        <label htmlFor='favCar'> Tell me Your Fav Car...</label>

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="Scarpio">Scarpio</option>
          <option value="Tharrrrrrr">Tharr</option>
          <option value="Defender">Defender</option>
          <option value="Legender">Legender</option>
        </select>
        <br></br>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
