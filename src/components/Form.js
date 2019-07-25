import React, { useState } from 'react';
import DisplayTeam from "./DisplayTeam"; 
 

const Form = ({team}) => {

    // 
    const [member, setMember] = useState({ name: "", email: "", role: "" });
    const [newTeam, setTeam] = useState(team); 
    
    function handleChange(event) {
        const updatedMember = {...member, [event.target.name]: event.target.value};
        console.log(
        "handleChange function:",
        event.target.name,
        event.target.value,
        );
        setMember(updatedMember);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTeam([...newTeam, member]);
    }

    return (
      <div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Signup</legend>
            <div>
              <label for="name">
                Name
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={member.name}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div>
              <label for="email">Email
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={member.email}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div>
              <label for="role">Role
                <div>
                  <input
                    type="text"
                    name="role"
                    placeholder="Enter your role"
                    onChange={handleChange}
                    value={member.role}
                  />
                </div>
              </label>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>

        {newTeam.map((member) => {console.log(member); return <DisplayTeam props ={member}/>})}

       </div> 
    ); 
}

export default Form 