import './App.css';
import Menu from './folder/menu';
import Categorie from './folder/categorie';
import data from './folder/data';
import { useState } from 'react';

const allCategories = ['all', ...new Set(data.map((item) => item.category))] ;
// on utilise set pour annule la redondance 

function App() {
  const [menuItems,setMenu]=useState(data);
  const [categorie,setCategorie] = useState(allCategories);

  const filterItems = (category) => {
    if(category==='all')
    {
      setMenu(data);
      return;
    }
      const newItems =data.filter((item) => item.category===category)
        setMenu(newItems);
  }
  return (
    <div className="container">
      <section>
        <div className='title'>
        <h2>our menu</h2>
        </div>
          <Categorie categorie={categorie} filterItems={filterItems}/>
          <Menu items={menuItems}/>        
      </section>
    </div>
  );
}

export default App;
