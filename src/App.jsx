import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='App'>
      
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Computer Science Engineer with a Master's in Artificial Intelligence</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Write a brief introduction about yourself and your passion for computer science and artificial intelligence.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            Master's in Artificial Intelligence - University Name, Year
          </p>
          <p>
            Bachelor's in Computer Science - University Name, Year
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Project 1:</strong> Description of the project.
            </li>
            <li>
              <strong>Project 2:</strong> Description of the project.
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
          <p>GitHub: github.com/your-username</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  )
}

export default App
