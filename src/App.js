import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CalloutCard from './components/CalloutCard'
import CaseStudyCard from './components/CaseStudyCard'
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
  return (
    <div className="App">
      <CalloutCard 
          cardSize="large"
          cardDirection="rtl"
          title="Product Title"
          location="New York"
          link="http://www.google.com"
          text="This is the details of the product that will wrap to the next line because this is a long sentence."
          productImage="https://images.unsplash.com/photo-1547043736-b2247cb34b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <CalloutCard 
          cardSize="large"
          cardDirection="ltr"
          title="Product Title"
          location="New York"
          link="http://www.google.com"
          text="This is the details of the product that will wrap to the next line because this is a long sentence."
          productImage="https://images.unsplash.com/photo-1547043736-b2247cb34b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <CaseStudyCard 
        image="https://images.unsplash.com/photo-1547043736-b2247cb34b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title='This is a title'
        date='04/01/2021'
        location='New York'
        industry='Healthcare'
        link='http://www.google.com'
        text='Content of the card goes here'
      />
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
