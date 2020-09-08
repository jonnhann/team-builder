
import React from 'react';
import TeamMember from './TeamMember';

function Form(props){
    const start = {name: "", email: "", role: ""}
    const [newMember, setNewMember] = React.useState(start)
    const changeHandler = event => {setNewMember({...newMember, [event.target.name]: event.target.value})};
    const submission = e => {
        e.preventDefault();
        props.setMembers([...props.members, newMember]);
        // <TeamMember name={members.name} email={members.email} role={members.role}/>
    };
    return (
        <div>
            <form onSubmit={submission}>
                <label>Name: </label>
                <input type="text" name="name" placeholder="Name" onChange={changeHandler}></input>
                <label>Email: <input type="email" name="email" placeholder="Email" onChange={changeHandler}></input></label>
                <label>Role:<select placeholder="Role" name="role" onChange={changeHandler}>
                    <option value=""></option>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="UI Designer">UI Designer</option>
                    </select></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Form;