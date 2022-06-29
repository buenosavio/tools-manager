import { Container } from './App.styles'
import Header from './components/header/Header'
import ListCards from './components/list-cards/ListCards'

function App() {
  const callMe = () => {}
  return (
    <Container>
      <Header />
      <ListCards callMe={callMe} />
    </Container>
  )
}

export default App
