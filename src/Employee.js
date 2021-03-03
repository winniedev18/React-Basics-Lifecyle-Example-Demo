import React from 'react'

const Employee = ({ firstName, lastName, age }) => {
    // Destructuring
    // const { firstName, lastName } = props
    return (
        <div>
            {/* <h6>{`Employee Name: ${props.firstName} ${props.lastName}`}</h6> */}
            <h6>Employee Name: {firstName} {lastName} whose age is: {age}</h6>
        </div>
    )
}

export default Employee