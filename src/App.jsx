import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
/*
const tempCategories = menu.map((item)=>item.category);
const tempSet = new Set(tempCategories);
const tempItem = ['all',...tempSet];*/


const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(allCategories);

const App = () => {

const [data,setData] = useState(menu);
const [categories,setCategories] = useState(allCategories);

const allButton=()=>{
  setData(data);
};
const breakfastButton = () => {
  data.filter((item)=>{
    const breakfast = item.category.includes('breakfast');
    console.log(breakfast);
    return setData(breakfast); 
  })
  
};
const lunchButton = () => {};
const shakesButton = () => {};

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <div className="btn-container">
          <button type="button" className="btn" onClick={allButton}>
            All
          </button>
          <button type="button" className="btn" onClick={breakfastButton}>
            Breakfast
          </button>
          <button type="button" className="btn" onClick={lunchButton}>
            Lunch
          </button>
          <button type="button" className="btn" onClick={shakesButton}>
            Shakes
          </button>
        </div>
        <Menu data={data} />
      </section>
    </main>
  )};
export default App;
