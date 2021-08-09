import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import './App.css';
import { SearchBox } from './components/search/search-box.components';



class App extends Component {
  constructor(){
    super();
    this.state={
      monsters : [] ,
      searchField:''
  }
}
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
 
     .then(users=>this.setState({monsters:users}));
   }
   handleChange=e=>{
    this.setState({searchField:e.target.value});
   }
   render(){

    const {monsters , searchField}=this.state;
    const FilteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="tp">Monsters Meet!</h1>
        <SearchBox placeholder="Search monsters "
          handleChange={this.handleChange}
        />
       
        <CardList monsters={FilteredMonsters}/>
      </div>
    );
   }

}

export default App;
