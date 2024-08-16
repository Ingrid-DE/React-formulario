import './App.css';

import { useState } from "react";
import ReactDOM from 'react-dom/client'; 
function App() {

    function MyForm() {
        const [inputs, setInputs] = useState({});
        
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();
            alert(`Tu pedido realizado fue de: ${inputs}`);
        }
        
        return (
            <form onSubmit={handleSubmit}>
            <label>Cliente:
            <input 
              type="text" 
              name="nombre" 
              value={inputs.nombre || ""} 
              onChange={handleChange}
              />
            <label>Tipo de ramo:
            <input 
              type="text" 
              name="tiporamo" 
              value={inputs.tiporamo || ""} 
              onChange={handleChange}
              />
            </label>
            </label>
            <label>Precio:
              <input 
                type="number" 
                name="precio" 
                value={inputs.precio || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Direccion de envio:
              <input 
                type="text" 
                name="direccion" 
                value={inputs.direccion || ""} 
                onChange={handleChange}
            />
            </label>
        
            <input type="submit" />
          </form>
        )
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);
}
export default App;