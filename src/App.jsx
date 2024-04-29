import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
/*
const tempCategories = menu.map((item)=>item.category);
const tempSet = new Set(tempCategories);
const tempItem = ['all',...tempSet];*/


const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {

const [data,setData] = useState(menu);
const [categories,setCategories] = useState(allCategories);
const filterItems =(category)=>{
  if(category==='all'){
    setData(menu);
    return;
  }
  const newItems = menu.filter((item)=>category === item.category);
  setData(newItems);
}


  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu data={data} />
      </section>
    </main>
  )};
export default App;
