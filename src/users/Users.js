import React, {Component} from 'react';
import User from './User';

class Users extends Component{
    state = {
        users: [
            {name:"John", age: 20},
            {name:"Jill", age: 30},
            {name:"Peter", age: 40},
            {name:"Jeff", age: 50},
            {name:"Louise", age: 60},
        ],
        title: "Users List"
    }

    makeMeYounger = () => {
        const newState = this.state.users.map((user) =>{
            let newAge = user.age - 1;
            if (newAge >= 16){
                user.age = newAge;
            }
            return user;
        });
        this.setState(newState);
    }

    changeTitle = () =>{
        let newTitle = "New ".concat(this.state.title);
        this.setState({title: newTitle});
    }

    render(){
        return (
        <div>
            <button onClick = {this.makeMeYounger}>Make us 10 years younger </button>
            <br/> <br/>
            <button onClick = {this.changeTitle}>Change Title</button>
            <br/>
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((user) => {
                    return <User age = {user.age}>{user.name}</User>
                })
            }
        </div>
        )
    }
}

export default Users;