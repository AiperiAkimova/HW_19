import React from 'react'
import classes from './User.module.css';



// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
class User extends React.Component {
  // useEffect(() => {
  // return () => {
  // consoloe.log(‘unmount’)
  // }
  // }, [])
  componentWillUnmount() {
    console.log('unmount') //компоненталар браузерден жоголуп кеткенин билдирет
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
}
export default User;