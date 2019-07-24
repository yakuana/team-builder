import React, { useState } from 'react';

const Form = () => {

    const [member, setMember] = useState({ name: "", email: "", role: "" });
    
    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value};
        console.log(
        "handleChange function:",
        event.target.name,
        event.target.value,
        updatedMember
        );
        setMember(updatedMember);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("member:", member);
    }


    return (
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
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={member.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="role">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter your role"
                onChange={handleChange}
                value={member.role}
              />
            </div>
            <button type="submit" onClick={() => console.log(member)}>
              Submit
            </button>
          </fieldset>
        </form>
    ); 
}

export default Form 