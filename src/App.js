import React from 'react';
import logo from './logo.svg';
import './App.css';

// задания 1 - 5,10:



let mass_of_users = [
  
  {name:'Nikita',age:'19'},
  {name:'Danya',age:'18'},
  {name:'Artem',age:'18'},
  {name:'Alina',age:'20'}
]


function App() {
  const r = React.createRef();
 
  const g = () => {
    let name = mass_of_users[0].name
    if (r.current.value == 'google'){
      
      const Answ = () => {
        alert(name + ":" + 'яндекс,круче-но это не точно')
      }
      setTimeout(Answ, 3000);
    }else{
      
      const Answ_two = () => {
        alert(name + ":" +  r.current.value)
      }
      setTimeout(Answ_two, 3000);
    }
      
    
  }

  return (
    <div className="App">
      <div className='Search'>
        <textarea ref={r} className='textarea'></textarea>
        <button onClick={g} className='button'>Поиск</button>
      </div>
      
    </div>
  );
}

// задния 6-7:

//6:
const SuperSum = (x,y) => {
  let sum = x+y
  alert(sum)
}

SuperSum(4,5)
SuperSum(4546,65)
SuperSum(44,5646)
SuperSum(4464,-5)


//7:
const bubbleSort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  let min_el = arr[0]
  let max_el = arr[arr.length-1]  
  let mass_result = [min_el,max_el]
  return mass_result
};

let res = bubbleSort([-5,4,6,3,33,5,-74,56,-8])
console.log(res);

//8:
let a = 56, b =65547;
[a, b] = [b, a];
console.log(`${a} ${b}`);

//9:
const Sort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  let max_element = arr[arr.length-1]
  return max_element
}

let result_mass = [Sort([45,576,23,35,77,8,5,-7,77])]
console.log(`${result_mass}`);


export default App;
