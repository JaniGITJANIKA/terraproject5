import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom"


import './App.css'

function Todo() {  
  const [todos, setTodos] = useState([
    { id: 1, time: "0" , text: "Megtanulni az useState-et", completed: true},
    { id: 2, time: "0" ,text: "Elkesziteni a kodot.", completed: false},
  ]);
  const [text, setText] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const times = new Date();

    const newTodo = {
      id: Date.now(),
      time: `${times.getFullYear()}:${times.getMonth() + 1}:${times.getDate()}:${times.getHours()}:${times.getMinutes()}`,
      text: trimmed,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
          <div className='todo oldal'>
      <h1>Teendőim</h1>

      <form onSubmit={handleAddTodo}>
        <input
         type="text" 
         placeholder='Újabb teendő...'
         value={text}
         onChange={(e) => setText(e.target.value)}
         />
         <button type='submit'>Hozzáadás</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input className='checkbox'
              type="checkbox" 
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text} <sup className='time'>{todo.time}</sup>,
                </span>
            </label>
            <button type='button' onClick={() => handleDeleteTodo(todo.id)}>
                Törlés
            </button>
          </li>
        ))}
      </ul>
      </div>
  );
}

function Timer() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Első idő" ,time: "0"},
    { id: 2, text: "Második idő" ,time: "0"},
  ]);
  const [text, setText] = useState("");
  const [time, setTime] = useState(new Date());
    
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function handleAddTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();

    const times = new Date();
    const time = `${times.getFullYear()}:${times.getMonth() + 1}:${times.getDate()}:${times.getHours()}:${times.getMinutes()}:${times.getSeconds()}:${times.getMilliseconds()}`;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      time: time,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div className='timer oldal'>
      <h1>Stoperóra</h1>
      <div className='clock'>
        <p>Idő {time.getFullYear()}:{time.getMonth()+1}:{time.getDate()}:{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
      </div>
      <p>Ez egy olyan stoper óra ami igy tárolja az időt.</p>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="{text}" onChange={(e) => setText(e.target.value)}
        placeholder='Részidő / megjegyzés...'
        />
         <button type='submit'>Hozzáadás</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text} <sup className='time'>{todo.time}</sup>,
                </span>
            </label>
            <button type='button' onClick={() => handleDeleteTodo(todo.id)}>
                Törlés
            </button>
          </li>
        ))}
      </ol>
      </div>
  );
}


function Csshouse() {
  return (
    <div className='house oldal'>
      <div className='place'></div>
      <div className='table1'></div>
      <div className='table2'></div>
      <div className='table3'></div>
      <div className='window1'></div>
      <div className='window11'></div>
      <div className='window12'></div>
      <div className='window2'></div>
      <div className='window21'></div>
      <div className='window22'></div>
      <div className='bot1'></div>
      <div className='bot12'></div>
      <div className='bot13'></div>
      <div className='bot14'></div>
      <div className='bot15'></div>
      <div className='bot16'></div>
      <div className='bot17'></div>



      <div className='gift1'></div>
      <div className='gift2'></div>
      <div className='gift3'></div>
      <div className='gift4'></div>
      <div className='gift5'></div>
    </div>
  );
}


function MyKeyboard() {
  return (
    <div className='oldal'>
      <h1>Ez az én billentyűzetem.</h1>
  <table>
  <tr>
    <td>Esc</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>0</td>
    <td>-</td>
    <td>=</td>
    <td colSpan={2}>⬅️</td>
  </tr>
  <tr>
    <td>Tab</td>
    <td>Q</td>
    <td>W</td>
    <td>E</td>
    <td>R</td>
    <td>T</td>
    <td>Y</td>
    <td>U</td>
    <td>I</td>
    <td>O</td>
    <td>P</td>
    <td>[</td>
    <td>]</td>
    <td colSpan={2}>#</td>
  </tr>
  <tr>
    <td>Caps</td>
    <td>A</td>
    <td>S</td>
    <td>D</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>;</td>
    <td>'</td>
    <td colSpan={3}>Enter</td>
  </tr>
  <tr>
    <td colSpan={2}>Shift</td>
    <td>Z</td>
    <td>X</td>
    <td>C</td>
    <td>V</td>
    <td>B</td>
    <td>N</td>
    <td>M</td>
    <td>,</td>
    <td>.</td>
    <td>/</td>
    <td>⬆️</td>
    <td colSpan={2}>Shift</td>
  </tr>
  <tr>
    <td>Ctrl</td>
    <td>Win</td>
    <td>Alt</td>
    <td colSpan={7}></td>
    <td>Alt</td>
    <td>⬅️</td>
    <td>⬇️</td>
    <td>➡️</td>
    <td>Fn</td>
  </tr>
</table>
    </div>
  );
}

function Kisszimbulomok() {
  return (
  <div className='oldal'>
    <h1>Kis szimbulomok</h1>
    <div className='doboz'>
    <div className='tv1'></div>
    <div className='tv2'></div>
    <div className='tv3'></div>
    <div className='ures'></div>
    <div className='mobil'></div>
    <div className='ures'></div>
    <div className='controller1'></div>
    <div className='controller2'></div>
    <div className='controller3'></div>
    <div className='controller4'></div>
    <div className='controller5'></div>
    <div className='controller6'></div>
    <div className='controller7'></div>
    <div className='controller8'></div>
    <div className='controller9'></div>
    <div className='controller10'></div>
    <div className='controller11'></div>
    <div className='controller12'>A</div>
    <div className='controller13'>Y</div>
    <div className='controller14'>B</div>
    <div className='controller15'>X</div>
    </div>
  </div>
  );
}

function Tel() {
  return (
    <div className='oldal'>
      <h1>Tél</h1>
      <div className='doboz blue'>
      <div className='snowman1'></div>
      <div className='snowman2'></div>
      <div className='kisures'></div>
      <div className='snowman3'></div>
      <div className='snowman4'></div>
      <div className='snowman5'></div>
      <div className='snowman6'></div>
      <div className='snowman7'></div>
      <div className='snowman8'></div>
      <div className='snowman9'></div>
      <div className='snowman10'></div>
      <div className='snowman11'></div>
      <div className='snowman12'></div>
      <div className='snowman13'></div>
      <div className='snowman14'></div>
      <div className='snowman15'></div>
      <div className='snowman16'></div>
      <div className='snowman17'></div>
      <div className='snowman18'></div>
      <div className='snowman19'></div>
      <div className='snowman20'></div>
      <div className='snowman21'></div>
      <div className='snowman22'></div>
      <div className='snowman23'></div>
      <div className='snowman24'></div>
      <div className='snow'></div>
      <div className='snow1'></div>
      <div className='snow2'></div>
      <div className='snow3'></div>
      <div className='snow4'></div>
      <div className='snow5'></div>
      <div className='snow6'></div>
      <div></div>
      </div>
    </div>
  );
}

function Flags() {
return (
  <div className='oldal'>
    <h1>Zászlók</h1>
    <h2>Magyar Zászló</h2>
    <div className='flag'>
      <div className='flag1'></div>
      <div className='flag2'></div>
      <div className='flag3'></div>
    </div>
    <h2>Olasz zászló</h2>
    <div className='flag'>
      <div className='flag4'></div>
      <div className='flag5'></div>
      <div className='flag6'></div>
    </div>
    <h2>Japán zászló</h2>
    <div className='flag'>
      <div className='flag7'></div>
      <div className='flag8'></div>
    </div>
    <h2>Finn zászló</h2>
    <div className='flag'>
      <div className='flag9'></div>
      <div className='flag10'></div>
      <div className='flag11'></div>
    </div>
    <h2>Indonéz zászló</h2>
    <div className='flag'>
      <div className='flag12'></div>
      <div className='flag13'></div>
    </div>
    <h2>Svájc zászló</h2>
    <div className='flag'>
      <div className='flag14'></div>
      <div className='flag15'></div>
      <div className='flag16'></div>
    </div>
    <h2>Grönland zászló</h2>
    <div className='flag'>
      <div className='flag17'></div>
      <div className='flag18'></div>
      <div className='flag19'></div>
      <div className='flag20'></div>
    </div>
    <h2>Izland zászlója</h2>
    <div className='flag'>
      <div className='flag21'></div>
      <div className='flag22'></div>
      <div className='flag23'></div>
      <div className='flag24'></div>
    </div>
    <h2>Német zászló</h2>
    <div className='flag'>
      <div className='flag25'></div>
      <div className='flag26'></div>
      <div className='flag27'></div>
    </div>
    <h2>Ausztria</h2>
    <div className='flag'>
      <div className='flag28'></div>
      <div className='flag29'></div>
      <div className='flag30'></div>
    </div>
    <h2>Ukrán zászló</h2>
    <div className='flag'>
      <div className='flag31'></div>
      <div className='flag32'></div>
    </div>
    <h2>Belgium zászló</h2>
    <div className='flag'>
      <div className='flag33'></div>
      <div className='flag34'></div>
      <div className='flag35'></div>
    </div>
    <h2>Latvánia zászló</h2>
    <div className='flag'>
      <div className='flag36'></div>
      <div className='flag37'></div>
    </div>
    <h2>Észtország</h2>
    <div className='flag'>
      <div className='flag38'></div>
      <div className='flag39'></div>
      <div className='flag40'></div>
    </div>
    <h2>Thaiföld zászló</h2>
    <div className='flag'>
      <div className='flag41'></div>
      <div className='flag42'></div>
      <div className='flag43'></div>
      <div className='flag44'></div>
      <div className='flag45'></div>
      </div>
    <h2>Åland zászló</h2>
    <div className='flag'>
      <div className='flag46'></div>
      <div className='flag47'></div>
      <div className='flag48'></div>
      <div className='flag49'></div>
    </div>
  </div>
);
}

function Weather() {
  return (
    <div className='oldal'>
      <h1>Időjárás jelentés</h1>
      <p>Ez a legeslegpontosabb időjárás jelentés.</p>
      <p>Menj ki és nézd meg milyen az időjárás.</p>
      <h2>Napos</h2>
      <div className='doboz'>
        <div className='napos'></div>
        <div className='nap'></div>
        <div className='napsugar1'></div>
        <div className='napsugar2'></div>
        <div className='napsugar3'></div>
        <div className='napsugar4'></div>
        <div className='napsugar5'></div>
        <div className='napsugar6'></div>
        <div className='napsugar7'></div>
        <div className='napsugar8'></div>
      </div>
      <h2>Felhős</h2>
      <div className='doboz'>
        <div className='felhos'></div>
        <div className='felho1'></div>
        <div className='felho2'></div>
        <div className='felho3'></div>
        <div className='felho4'></div>
        <div className='felho5'></div>
        <div className='felho6'></div>
      </div>
      <h2>Esős</h2>
      <div className='doboz'>
        <div className='napos'>
        <div className='esos1'></div>
        <div className='esos2'></div>
        <div className='esos3'></div>
        <div className='esos4'></div>
        <div className='esos5'></div>
        <div className='esos6'></div>
        <div className='esoviz1'></div>
        <div className='esoviz2'></div>
        <div className='esoviz3'></div>
        <div className='esoviz4'></div>
        <div className='esoviz5'></div>
        <div className='esoviz6'></div>
        <div className='esoviz7'></div>
        <div className='esoviz8'></div>
        <div className='esoviz9'></div>
        </div>
        <h2>Szelles</h2>
        <div className='doboz'>
          <div className='napos'>
          <div className='szel1'></div>
          <div className='szel2'></div>
          <div className='szel3'></div>
          <div className='szel4'></div>
          <div className='szel5'></div>
          <div className='szel6'></div>
          </div>
        </div>
        <h2>Viharos</h2>
        <div className='doboz'>
          <div className='napos'>
        <div className='esos1'></div>
        <div className='esos2'></div>
        <div className='esos3'></div>
        <div className='esos4'></div>
        <div className='esos5'></div>
        <div className='esos6'></div>
        <div className='esoviz1'></div>
        <div className='esoviz2'></div>
        <div className='esoviz3'></div>
        <div className='esoviz4'></div>
        <div className='esoviz5'></div>
        <div className='esoviz6'></div>
        <div className='esoviz7'></div>
        <div className='esoviz8'></div>
        <div className='esoviz9'></div>
        <div className='villam1'></div>
        <div className='villam2'></div>
        <div className='villam3'></div>
          </div>
        <h2>Havas</h2>
        <div className='doboz'>
        <div className='felhos'>
        <div className='havas1'></div>
        <div className='havas2'></div>
        <div className='havas3'></div>
        <div className='havas4'></div>
        <div className='havas5'></div>
        <div className='havas6'></div>
        <div className='havasviz1'></div>
        <div className='havasviz2'></div>
        <div className='havasviz3'></div>
        <div className='havasviz4'></div>
        <div className='havasviz5'></div>
        <div className='havasviz6'></div>
        <div className='havasviz7'></div>
        <div className='havasviz8'></div>
        <div className='havasviz9'></div>
        </div>
        </div>
        </div>
        <h2>Tornádós</h2>
        <div  className='doboz'>
          <div className='felhos'>
            <div className='kisures'></div>
            <div className='kisures'></div>
            <div className='kisures'></div>
            <div className='tornado1'></div>
            <div className='kisures'></div>
            <div className='tornado2'></div>
            <div className='kisures'></div>
            <div className='tornado3'></div>
            <div className='kisures'></div>
            <div className='tornado4'></div>
            <div className='kisures'></div>
            <div className='tornado5'></div>
            <div className='kisures'></div>
            <div className='tornado6'></div>
          </div>
        </div>  
        </div>
    </div>
  );
}

function Car() {
  return(
    <div className='oldal'>
      <h1>Járművek</h1>
      <h2>Sima Autó</h2>
      <div className='doboz'>
        <div className='car1'></div>
        <div className='car2'></div>
        <div className='car3'></div>
        <div className='car4'></div>
        <div className='car5'></div>
        <div className='car6'></div>
        <div className='car7'></div>
        <div className='car8'></div>
        <div className='car9'></div>
        <div className='car10'></div>
        <div className='car11'> q:)-</div>
        <div className='ures'></div>
      </div>
      <h2>Kamion</h2>
      <div className='doboz'>
        <div className='truck1'></div>
        <div className='truck2'></div>
        <div className='truck3'></div>
        <div className='truck4'></div>
        <div className='truck5'></div>
        <div className='truck6'></div>
        <div className='truck7'></div>
        <div className='truck8'></div>
        <div className='truck9'></div>
        <div className='truck10'></div>
        <div className='truck11'></div>
      </div>
    </div>
  );
}

export default function  App() {


  return (
    <HashRouter>
    <div>
      <h1>Terraproject5</h1>
      <Link className="link" to="/">Teendőim</Link>
      <Link className="link" to="/timer">Stoperóra</Link>
      <Link className="link" to="/csshouse">Csshouse</Link>
      <br />
      <br />
      <Link className="link" to="/mykeyboard">Az én billentyűzetem</Link>
      <Link className="link" to="/kisszimbulomok">Kis szimbulomok</Link>
      <Link className="link" to="/tel">Tél</Link>
      <br />
      <br />
      <Link className="link" to="/flags">Zászlók</Link>
      <Link className="link" to="/weather">Időjárás jelentés</Link>
      <Link className="link" to="/car">Autók</Link>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Todo />}/>
        <Route path="/timer" element={<Timer />} />
        <Route path="/csshouse" element={<Csshouse />} />
        <Route path="/mykeyboard" element={<MyKeyboard />} />
        <Route path="/kisszimbulomok" element={<Kisszimbulomok />} />
        <Route path="/tel" element={<Tel />} />
        <Route path="/flags" element={<Flags />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </div>
    </HashRouter>
  );
}