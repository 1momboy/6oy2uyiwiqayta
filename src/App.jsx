import { useState } from 'react'

import './App.css'

function App() {
  
  const [power, setpower] = useState(false);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ismingiz");
  const [products, setProducts] = useState([
    { id: 1, name: 'Mahsulot 1', price: 20 },
    { id: 2, name: 'Mahsulot 2', price: 30 },
    { id: 3, name: 'Mahsulot 3', price: 25 },
  ]);

  
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Yangi Mahsulot ${products.length + 1}`,
      price: Math.floor(Math.random() * 50) + 1, 
    };

    setProducts([...products, newProduct]);
  };

  const [isToggle, setToggle] = useState(false);

  
  const toggleValue = () => {
    setToggle(!isToggle);
  };


  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const changeName = () => {
    const newName = prompt("Yangi ismingizni kiriting:");
    if (newName) {
      setName(newName);
    }
  };

  const [user, setUser] = useState({
    id: 1,
    username: 'foydalanuvchi1',
    email: 'foydalanuvchi1@example.com',
  });

  
  const changeUser = () => {
    const newUsername = prompt("Yangi foydalanuvchi nomini kiriting:");
    const newEmail = prompt("Yangi foydalanuvchi emailini kiriting:");

    if (newUsername && newEmail) {
      setUser({
        id: user.id,
        username: newUsername,
        email: newEmail,
      });
    }
  };

  const [items, setItems] = useState(['element1', 'element2', 'element3']);

  const addItem = () => {
    const newItem = prompt("Yangi elementni kiriting:");
    if (newItem) {
      setItems([...items, newItem]);
    }
  };


  const [realNumber, setRealNumber] = useState(0.0);

  const increaseRealNumber = () => {
  
    const newRealNumber = realNumber + 0.1;
    setRealNumber(newRealNumber);
  };

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const [text, setText] = useState("Salom, dunyo!");

  const changeText = () => {
    const newText = prompt("Yangi matnni kiriting:");
    if (newText) {
      setText(newText);
    }
  }
  const [integerNumber, setIntegerNumber] = useState(0);

  const incrementIntegerNumber = () => {
    setIntegerNumber(integerNumber + 1);
  };

  
  
  const [numberValue, setNumberValue] = useState(0);

  
  const incrementNumber = () => {
    setNumberValue(numberValue + 1);
  };

 
  const decrementNumber = () => {
    setNumberValue(numberValue - 1);
  };

  const [food, setFood] = useState({
    name: 'Plov',
    type: 'Osh',
    price: 10.99,
  });


  const changeFood = () => {
    const newName = prompt("Yangi taom nomini kiriting:");
    const newType = prompt("Yangi taom turi kiriting:");
    const newPrice = prompt("Yangi taom narxini kiriting:");

    if (newName && newType && newPrice) {
      setFood({
        name: newName,
        type: newType,
        price: parseFloat(newPrice),
      });
    }
  };

  const [pepsi, setPepsi] = useState({
    brand: 'Pepsi',
    flavor: 'Original',
    size: 'Medium',
    price: 1.99,
  });

  const changePepsi = () => {
    const newFlavor = prompt("Yangi Pepsi turi kiriting:");
    const newSize = prompt("Yangi Pepsi hajmi kiriting:");
    const newPrice = prompt("Yangi Pepsi narxi kiriting:");

    if (newFlavor && newSize && newPrice) {
      setPepsi({
        ...pepsi,
        flavor: newFlavor,
        size: newSize,
        price: parseFloat(newPrice),
      });
    }
  };


  const [laysChips, setLaysChips] = useState({
    brand: 'Lays',
    flavor: 'Classic',
    size: 'Regular',
    price: 2.49,
  });
  const changeLaysChips = () => {
    const newFlavor = prompt("Yangi Lays chips turi kiriting:");
    const newSize = prompt("Yangi Lays chips hajmi kiriting:");
    const newPrice = prompt("Yangi Lays chips narxi kiriting:");

    if (newFlavor && newSize && newPrice) {
      setLaysChips({
        ...laysChips,
        flavor: newFlavor,
        size: newSize,
        price: parseFloat(newPrice),
      });
    }
  };

  const [ufcInfo, setUfcInfo] = useState({
    organization: 'UFC',
    weightClass: 'Lightweight',
    currentChampion: 'Charles Oliveira',
    payPerViewPrice: 64.99,
  });

  
  const changeUfcInfo = () => {
    const newWeightClass = prompt("Yangi UFC chempionati turi kiriting:");
    const newChampion = prompt("Yangi UFC jangi kiriting:");
    const newPrice = prompt("Yangi UFC PPV narxi kiriting:");

    if (newWeightClass && newChampion && newPrice) {
      setUfcInfo({
        ...ufcInfo,
        weightClass: newWeightClass,
        currentChampion: newChampion,
        payPerViewPrice: parseFloat(newPrice),
      });
    }
  };

  const [ronaldoInfo, setRonaldoInfo] = useState({
    name: 'Cristiano Ronaldo',
    team: 'Manchester United',
    position: 'Forward',
    goals: 700,
  });

  const changeRonaldoInfo = () => {
    const newTeam = prompt("Yangi Ronaldo jamoasi kiriting:");
    const newPosition = prompt("Yangi Ronaldo pozitsiyasi kiriting:");
    const newGoals = prompt("Yangi Ronaldo janglari soni kiriting:");

    if (newTeam && newPosition && newGoals) {
      setRonaldoInfo({
        ...ronaldoInfo,
        team: newTeam,
        position: newPosition,
        goals: parseInt(newGoals, 10),
      });
    }
  };

  return (
    <>


<div>
      <h1>Ronaldo Ma'lumotlari</h1>
      <p>Ismi: {ronaldoInfo.name}</p>
      <p>Jamoasi: {ronaldoInfo.team}</p>
      <p>Pozitsiyasi: {ronaldoInfo.position}</p>
      <p>Janglari soni: {ronaldoInfo.goals}</p>
      <button onClick={changeRonaldoInfo}>Ronaldo ma'lumotlarini o'zgartirish</button>
    </div>



<div>
      <h1>UFC Ma'lumotlari</h1>
      <p>Tashkil etuvchi: {ufcInfo.organization}</p>
      <p>Chempionati turi: {ufcInfo.weightClass}</p>
      <p>Jangi: {ufcInfo.currentChampion}</p>
      <p>PPV narxi: ${ufcInfo.payPerViewPrice.toFixed(2)}</p>
      <button onClick={changeUfcInfo}>UFC ma'lumotlarini o'zgartirish</button>
    </div>
<div>
      <h1>Lays Chips Ma'lumotlari</h1>
      <p>Mahsulot markasi: {laysChips.brand}</p>
      <p>Turi: {laysChips.flavor}</p>
      <p>Hajmi: {laysChips.size}</p>
      <p>Narxi: ${laysChips.price.toFixed(2)}</p>
      <button onClick={changeLaysChips}>Lays chips ma'lumotlarini o'zgartirish</button>
    </div>

<div>
      <h1>Pepsi Ma'lumotlari</h1>
      <p>Mahsulot markasi: {pepsi.brand}</p>
      <p>Turi: {pepsi.flavor}</p>
      <p>Hajmi: {pepsi.size}</p>
      <p>Narxi: ${pepsi.price.toFixed(2)}</p>
      <button onClick={changePepsi}>Pepsi ma'lumotlarini o'zgartirish</button>
    </div>

<div>
      <h1>Taom Ma'lumotlari</h1>
      <p>Nomi: {food.name}</p>
      <p>Turi: {food.type}</p>
      <p>Narxi: ${food.price.toFixed(2)}</p>
      <button onClick={changeFood}>Taomni o'zgartirish</button>
    </div>

<div>
      <h1>Raqam: {numberValue}</h1>
      <button onClick={incrementNumber}>Oshirish</button>
      <button onClick={decrementNumber}>Kamaytirish</button>
    </div>


  <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>

    <div>
      <h1>Massiv Elementlari</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Element qo'shish</button>
    </div>




      <div>
      <h1>Foydalanuvchi Ma'lumotlari</h1>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={changeUser}>Foydalanuvchi ma'lumotlarini o'zgartirish</button>
    </div>

     <div>
      <h1>Matn: {text}</h1>
      <button onClick={changeText}>Matnni o'zgartirish</button>
    </div>

      <div>
      <h1>Son: {number}</h1>
      <button onClick={increaseNumber}>Sonni o'zgartirish</button>
    </div>

    <div>
      <h1>Ism: {name}</h1>
      <button onClick={changeName}>Ismni o'zgartirish</button>
    </div>
    <div>
      <h1>Mahsulotlar</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Mahsulot qo'shish</button>
    </div>
    <div>
      <h1>Boolean Qiymati: {isToggle.toString()}</h1>
      <button onClick={toggleValue}>Qiymatni o'zgartirish</button>
    </div>
    <div>
      <h1>Real Son: {realNumber}</h1>
      <button onClick={increaseRealNumber}>Real Sonni o'zgartirish</button>
    </div>


    </>
  )
} 



export default App
