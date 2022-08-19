import { useEffect, useState } from "react";


function App() {
  const [data,setData] = useState("")
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setData);
  }, []);
  console.log(data)
  return (
    <div className="App">
    </div>
  );
}

export default App;
