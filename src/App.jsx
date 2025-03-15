import { useState } from 'react'
import './App.css'

function App() {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: '/src/assets/images/Survivor.jpg',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: '/src/assets/images/Scavenger.jpg',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: '/src/assets/images/Shadow.jpg',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: '/src/assets/images/Tracker.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: '/src/assets/images/Sharpshooter.jpg',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: '/src/assets/images/Medic.jpg',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: '/src/assets/images/Engineer.jpg',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: '/src/assets/images/Brawler.jpg',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: '/src/assets/images/Infiltrator.jpg',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: '/src/assets/images/Leader.jpg',
      },
    ]

  )
  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money')
      return
    }

    setTeam([...team, fighter])

    // setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id))
    // This could work if you wanted the fighter to no longer be available after being added to the team

    setMoney(money - fighter.price)
  }
  const handleRemoveFighter = (fighter) => {

    const index = team.findIndex(f => f.id === fighter.id)
    if (index !== -1) {
      const updatedTeam = [...team]
      updatedTeam.splice(index, 1)   // Remove the fighter at the found index
      setTeam(updatedTeam)
      // Created like this as to allow the individual fighters to be removed from the team
    }



    setMoney(money + fighter.price)
  }


  const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0)
  const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0)


  const resetGame = () => {
    setZombieFighters(zombieFighters)
    setTeam([])
    setMoney(100)
  }

  return (
    <>
      <div className='App'>
        <h1>Zombie Fighters</h1>
        <h2>Money: {money}</h2>
        <h2>Total Strength: {totalStrength}</h2>
        <h2>Total Agility: {totalAgility}</h2>

              <h2>Your Team:</h2>
              {team.length === 0 ? (
                <p>Pick some team members!</p>
              ) : (
                <ul>
                  {team.map((fighter, index) => (
                    <li key={index} className='App'>
                      <img src={fighter.img} alt={fighter.name} />
                      <h3>{fighter.name}</h3>
                      <p>Strength: {fighter.strength}</p>
                      <p>Agility: {fighter.agility}</p>
                      <button onClick={() => handleRemoveFighter(fighter)}>
                        Remove from Team
                      </button>
                    </li>
                  ))}
                </ul>
      
              )}
              
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id} className='fighterItem'>
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>
                Add to Team
              </button>
            </li>
          ))}
        </ul>

      </div>

      <button onClick={resetGame}>Reset</button>
    </>
  )
}

export default App
