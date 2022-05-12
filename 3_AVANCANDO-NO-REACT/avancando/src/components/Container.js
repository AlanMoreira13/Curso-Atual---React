
const Container = ({children, valor}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <h4>Valor: {valor}</h4>
    </div>
  )
}

export default Container