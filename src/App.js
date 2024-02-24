import ImportComp from "./importComp";


function App() {

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password2' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', password: 'password3' },
    // Add more objects as needed for additional rows
];

  // const  handleClick = ()=>{
  //   console.log("downloaded")
  // }

  return (
    <div>
      
      <ImportComp/>
    </div>
  );
}

export default App;
