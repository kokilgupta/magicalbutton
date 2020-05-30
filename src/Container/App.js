import React,{Component} from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
class App extends Component{
    state={
        persons:[
            {name:'kokil' ,age:18,id:'wxy1'},
            {name:'utkarsh' ,age:24,id:'wxy2'}
        ],
        otherState:'some other value',
        showPersons:false,
        showButton:0
    }
    switchNameHandler=(newName)=>
    {
        this.setState({
            persons: [
                {name: newName, age: 18},
                {name: 'kokil', age: 24}
            ]
        } )
    }

    nameChangedHandler=(event,id)=>{
        const personIndex=this.state.persons.findIndex(p=>{
            return p.id===id;
        })
        const person={
            ...this.state.persons[personIndex]
        };
        //const person=Object.assign({},this.state.persons[personIndex]);
        person.name=event.target.value;
        const persons=[...this.state.persons];
        persons[personIndex]=person;
        this.setState({ persons:persons}  );
    }
    togglePersonHandler=()=>{
        const show=this.state.showPersons;
        this.setState({showPersons:!show});
    }

    deletePersonHandler=(personIndex)=>
    {
        const persons=[...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons});
        this.setState(state => ({
            showButton: this.state.showButton++
        }));
    }

    render(){

        let persons=null;

        if(this.state.showPersons)
        {
            persons= (
                <div>
                    <Persons persons={this.state.persons}
                             clicked={this.deletePersonHandler}
                             changed={this.nameChangedHandler}
                            />
                </div>);
        }

        return (
            <div className={App}>
           <Cockpit
               showPersons={this.state.showPersons}
               persons={this.state. persons}
               clicked={this.togglePersonHandler}
               x={this.state.showButton}
               />
                {persons}
            </div>
        );
    }
}
export default App;