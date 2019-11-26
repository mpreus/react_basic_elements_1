class App extends React.Component {

  state = {
    text: "",
    btn: 'uruchom'
  }

  handleClick = () => { /* generating random numbers: 0 to 9*/
    const number = Math.floor(Math.random() * 10)
    this.setState({
      text: this.state.text + number
    })
  }

  render() {
    const btnName = "stwórz liczbę"
    return (
      <React.Fragment>         {/* wrapping for elements */}
        <h1>Losowa liczba</h1> 
        <p>Każde kliknięcie przycisku generuje losową liczbę całkowitą (od 0 do 9) i wpisuje poniżej</p>                                                                           
        <button style={{color:"red", border:"2px solid gray", borderRadius:"5px", fontSize:"20px", fontWeight:"bold", padding:"10px", textTransform:"uppercase"}} onClick={this.handleClick}>{this.props.btnTitle}</button>
        <PanelResult text={this.state.text} />
      </React.Fragment>
    )
  }
}

const PanelResult = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}

/* rendering 'App' component: */
ReactDOM.render(
  <App btnTitle="dodaj cyfrę" />, 
  document.getElementById("root")
)