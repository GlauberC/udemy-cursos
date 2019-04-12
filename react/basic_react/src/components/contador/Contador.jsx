import React, {Component} from 'react'

export default class Contador extends Component{
    constructor(){
        super()
        this.state = {
            valor: 0,
            modificador: 1
        }
    }
    aumentar = () => this.setState({valor: this.state.valor + this.state.modificador})
    reduzir = () => this.setState({valor: this.state.valor - this.state.modificador})
    changeModificador = e => this.setState({modificador: Number(e.target.value)})
    render(){
        return(
            <div>
                <h1>Valor:</h1>
                <h2>{this.state.valor}</h2>
                <h1>Alterar valor:</h1>
                <button onClick = {this.aumentar}>Aumentar</button>
                <button onClick = {this.reduzir}>Reduzir</button>
                <label htmlFor="modificador">Modificador</label>
                <input onChange = {this.changeModificador} name = "modificador" type = "number" value = {this.state.modificador} />
            </div>
        )
    }
}