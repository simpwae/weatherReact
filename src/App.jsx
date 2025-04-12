import React from "react";

const App = () => {
<<<<<<< HEAD
  let key ='837452185e3c4c64874c17d6aea6bba5'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=${key}`
  let weatherCall =()=>{
    axios.get('/user?ID=12345')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  return (
    <div><button onClick={weatherCall}>Click me</button></div>
  )
}
=======
  return <div>App</div>;
};
>>>>>>> c29ee7e98c111201e0c397adf25bd88594ef181b

export default App;
