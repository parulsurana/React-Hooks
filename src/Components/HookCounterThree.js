import React, {useState} from 'react'

function HookCounterThree() {
const [name, setName] = useState({firstName : '' , lastName : ''});

    return (
        <div>
            <input
             type = "text" 
             value = {name.firstName}
             onChange = {e => setName({...name, firstName : e.target.value})}
             />
            <input 
             type = "text" 
             value = {name.lastName}
             onChange = {e => setName({...name, lastName : e.target.value})}
            />
            <h2>Your First name - {name.firstName}</h2>
            <h2>Your Last name - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
