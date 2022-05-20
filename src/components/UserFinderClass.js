import { Component, Fragment } from "react";
import styles from './UserFinder.module.css'
import Users from "./Users";

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinderClass extends Component{
    constructor(){
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }
    // Браузерге UserFinderClass компонентабыз жуктолгонго чейин иштеп кетет render 
    //болгондо иштеп кетет(бир жолу гана иштейт) б.а. простой useEffect
    componentDidMount(){
        // send http request..
        this.setState({filteredUsers: DUMMY_USERS})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
            filteredUsers: DUMMY_USERS.filter((user) => 
            user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event){
        this.setState({
            searchTerm: event.target.value
        })
    }


    render(){
        return (
            <Fragment>
            <div className={styles.finder} >
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
            </div>
            <Users users={this.state.filteredUsers} />
            </Fragment>
        )
    }
}

export default UserFinderClass