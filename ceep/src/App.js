import React, { Component } from "react"
import ListaDeNotas from "./components/ListaDeNotas/index"
import FormularioCadastro from "./components/FormularioCadastro/index"
import "./assets/App.css"
import "./assets/index.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: [],
    }
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arratNotas = this.state.notas
    arratNotas.splice(index, 1)
    this.setState({ notas: arratNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    )
  }
}

export default App
