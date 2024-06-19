import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/button'
import Label from './components/label/Label'
import Text from './components/text/Text'
import Dropdown from './components/dropdown/Dropdown'
import Card from './components/card/Card'


function App() {
  const [count, setCount] = useState(0)
  const dropdownOptions = [
    { value: 'mexico', label: 'mexico' },
    { value: 'nepal', label: 'nepal' },
    { value: 'canada', label: 'canada' },
    { value: 'iran', label: 'iran' },
    { value: 'philippines', label: 'philippines' }
  ];

  return (
    <>
    <div className="navbar-menu">
          <Dropdown options={dropdownOptions} disabled={false} />
        </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Once the line below was added, line 5 was automatically created */}
      {/* <MyButton></MyButton> */}

      {/* Modified this line after I added line "const MyButton =..." in the "MyButton.tsx" file */}
      {/* And after I added the "?" in the "MyButton.types.tsx" file */}
      <p><Text>Hello</Text></p>
      <p><Card>This is a card</Card></p>
      <p><Label>Great Canada</Label></p>
      <p><Button>Submit</Button></p>
      
      
      
      
      </>
  )
}

export default App
