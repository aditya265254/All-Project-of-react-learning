import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const Context = (props) => {
    const [user, setUser] = useState([
        {id: 0, userName: "Aditya singh", city:"Deoria"},
        {id: 1, userName: "Ghansayam", city:"Patna"},
        {id: 2, userName: "Amit", city:"Varanasi"},
    ])
    console.log(props)
  return <UserContext.Provider value={{user, setUser}} >
    {props.children}
  </UserContext.Provider>
}

export default Context