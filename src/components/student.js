import React, { Component } from 'react';
import '../App.css';
import ListItems from './list-items'

class Student extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      trash:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    const avail = this.state.items.map(item=>{
      return item.text
    })

    if(newItem.text !=="" && !avail.includes(newItem.text) ){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    const deletedItems= this.state.items.filter(item =>
        item.key===key);
    this.setState({
      items: filteredItems,
      trash: deletedItems
    })
  }

  unDo(){
    const avail = this.state.items.map(item=>{
      return item.text
    })
    const deleted = this.state.trash.map(item=>{
      return item.text
    })
    if(!avail.includes(deleted[0])){
    this.setState({
      items: [...this.state.items ,...this.state.trash]
    })
  }
  }

  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  }
  
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h3>Add Student</h3>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Add Student" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit" className="btn btn-primary fadeIn fourth">Add</button>
        </form>

        <p>{this.state.items.text}</p>

          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} unDo={this.unDo}/>
          <button onClick={()=> this.unDo()}>undo</button>
      </div>
      </div>
    </div>
    )
  }
}

export default Student;
