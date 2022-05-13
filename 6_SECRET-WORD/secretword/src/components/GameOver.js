import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
      <h3>Game Over</h3>
      <button onClick={retry}>Rezetar jogo</button>
    </div>
  )
}

export default GameOver