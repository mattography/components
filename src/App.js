import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TeamProfile from './components/TeamProfile'
import backupUser from './components/backupUser.png'
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'https://randomuser.me/api/'
      );
      setData(result.data.results);
  };
  fetchData();
}, []);
console.log(data)
  return (
    <div className="App">
      {data.map(user => {
        const { uuid } = user.login;
        const { first, last } = user.name;
        // const { large } = user.picture;
        return (
          <TeamProfile 
            key={uuid}
            first={first}
            last={last}
            user="test"
            profile={backupUser}
            background="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
        )
      })}
    </div>
  );
}

export default App;
