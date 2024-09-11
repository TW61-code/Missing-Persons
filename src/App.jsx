import { useState, useEffect } from 'react'

const NUMBER_OF_CHARACTERS = 9;

async function fetchData() {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const results = await data.results[0];

    //Set this functions value to 'results'
    return results;
}

function App() {

  const [dataArr, setDataArr] = useState([]);

  //When the page mounts, fetch 9 api responses ad pass them to the dataArr state.
    useEffect(() => {
      for (let i = 0; i < NUMBER_OF_CHARACTERS; i++) {
        if (dataArr.length < NUMBER_OF_CHARACTERS) {
          //'result' = the last declared variable within the fetchData function.
          fetchData().then(result => {
            setDataArr(prev => [...prev, result])
          });
        }
      }
    }, []);
    console.log('data = ', dataArr) 

  return (
    <div className='container'>
      <header>
        <h1>9 Most Wanted Criminals</h1>
      </header>
      <main>
        <ul>
          {dataArr.map((data, index) => {

            //Declare paths to relative information stored in recieved objects from the api.
            const name = data.name.first;
            const img = data.picture.large;

            return (
              <li key={index}>
                <img src={img}></img>
                {name}
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
