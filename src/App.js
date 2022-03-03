import React, {Component} from 'react'
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`  
//estrutura: const o que vc quer alterar = styled.tag``
const Corpo = styled.body `
  background-color: darkolivegreen;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Box = styled.section `
  border-radius: 20px;
  box-shadow: 1px 6px 5px rgba(245, 245, 220, 0.5);
  width: 50vw;
  height: 90vh;
`
const Title = styled.h1 `
  font-size: 3em;
  border-bottom: 2px solid rgb(41, 38, 38);
  color: azure;
  text-shadow: black 2px 1px;
`
const Botao = styled.button `
  font-size: 1em;
  border: none;
  box-shadow: 1px 2px 2px rgb(41, 38, 38); ;
  background-color: none;
  padding: 0.2em;
  border-radius: 2px;
  font-weight: 900;
  &hover:{pointer};
`
const InputList = styled.input `
  padding: 0.5em;
  border: none;
  border-radius: 2px;
  background-color: beige;
  margin: 1.2em;
  width: 30vw;
`
const UnorderedList = styled.ul`
  text-decoration: none;  
  color:beige;
  font-size: 20px;
  list-style: none;
`

const ItemsList = styled.li `
    margin-top: 2vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 100%;
`
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

  handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      this.add()
    }
  }

  //quando eu clicar no botão de add eu quero que o item fique fixo
  //e me permita adicionar outras coisas
  add = () => {
    let {lista, tarefa} = this.state
    //condicional para adicionar o que foi escrito, caso nao esteja vazio
    if (tarefa.length !== 0 || null) {
      //lista recebe tudo o que ja esta dentro dela 
      //assim que receber, nossa tarefa sera esvaziada (input)
      //a tarefa que eu escrevi sera concatenada com a minha lista (com os itens ja existentes la)
      this.setState({
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }
    // preventDefault()
  }

  remove = (id) => {
    let {lista} = this.state
    this.setState({
      //eu quero que  meu estato da lista seja tudo o que ja tem dentro dela
      //e filtre para cada item que ha la dentro, se o item for diferente do
      //id que foi selecionado, ele sera removido
      lista: lista.filter((item) => (
        item.id !== id
        ))
    })
  }

  render() {
    let {handleChange, add, remove, handleKeyDown} = this
    let {tarefa, lista} = this.state
    return (
        <Corpo>
          <GlobalStyle/>
         <Box>
          <Title>ToDo List</Title>
            <InputList value = {tarefa} onKeyDown={handleKeyDown} onChange ={handleChange}/>  
            <Botao onClick = {add}>Add</Botao>
            {lista.map((item) => (
              <UnorderedList>
                <ItemsList> {item.tarefa} </ItemsList>
                <Botao onClick = {() => remove(item.id)}> x </Botao>   
              </UnorderedList>
            ))
            } 
          </Box>
        </Corpo>
      )
    }
  }

export default ToDoList;
