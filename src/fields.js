import React from 'react'

const Fields = () => {
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password2' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', password: 'password3' },
        // Add more objects as needed for additional rows
    ];
    
      const  handleClick = ()=>{
        console.log("downloaded")
      }
  return (
    <div>
        <h3>sheets Table</h3>
      <table border={5}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((ele,i)=>{
              return (
                <tr key={i}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button onClick={handleClick}>Download</button>
    </div>
  )
}

export default Fields