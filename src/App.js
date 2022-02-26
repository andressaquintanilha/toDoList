import React, { Component } from 'react'
import './App.css'

class ToDoList extends Component {

  state = {
    //guardando as tarefas que serão escritas no input
    //dentro de uma lista
    tarefa: '',
    lista: []
  }

  //função para pegar valores recebidos pelo input *função padrão*
  handleChange = (e) => {    
    this.setState({
      //o estado da tarefa ira se atualizar
      //toda vez que eu escrever algo algo no input, isso sera guardado na tarefa
      tarefa: e.target.value
    })
  }

  //quando eu clicar no botão de add eu quero que o item fique fixo
  //e me permita adicionar outras coisas
  add = (e) => {
    let {lista, tarefa} = this.state
    //condicional para adicionar o que foi escrito, caso nao esteja vazio
    if(tarefa !== 0 || null){
      //lista recebe tudo o que ja esta dentro dela 
      //assim que receber, nossa tarefa sera esvaziada (input)
      //a tarefa que eu escrevi sera concatenada com a minha lista (com os itens ja existentes la)
    this.setState({
      lista: lista.concat({
        tarefa: tarefa,
        id: Date.now()
       }),
       tarefa:""
     })
   }
  }

  remove = (id) => {
    let {lista} = this.state
    this.setState({
      //eu quero que  meu estato da lista seja tudo o que ja tem dentro dela
      //e filtre para cada item que ha la dentro, se o item for diferente do
      //id que foi selecionado, ele sera removido
      lista: lista.filter((item) => (item.id !== id))
    })
  }

  render(){
    let {handleChange, add, remove} = this
    let {tarefa, lista} = this.state
    return(
      <div className='container'>
        <div className='box'>
          <h1>ToDo List</h1>          
          <input value={tarefa} onChange={handleChange}/> {/* pega o valor que será digitado */}
          <button onClick={add}>Add</button>
          {lista.map((item) =>(
            <ul className='list-item'>
              <li>{item.tarefa}</li>            
                <button onClick={() => remove(item.id)}>x</button>   {/* essa função do remove e uma função de callback */}
            </ul>
          ))}            
          </div>
          </div>
    )
  }
}

export default ToDoList;