
import './App.css';
import { useEffect, useState } from 'react';
var axios = require("axios").default;
function App() {
  const [citydata,setCitydata] = useState([])
  const [sdata,setSdata] = useState("")
  const [curlim,setCurlim] = useState(5)
  var options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {countryIds: 'IN', namePrefix: 'del', limit: curlim},
    headers: {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
    }
  };
  useEffect(()=>{
    gafunc()
  },[])
  const gafunc =() =>{
    axios.request(options).then(function (response) {
      // console.log(response.data.data);
      const mydata =response.data.data;
      setCitydata(mydata);
      console.log(citydata)
     
     
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  return (
    <div className="App">
      <div className="sc">
      <input className='sb'
      onChange={(e)=>{
        setSdata(e.target.value);
        console.log(sdata)
      }}
       type="text" placeholder='Search places...'/>
      <div className='ks'>ctrl+I</div>
      </div>
      <div className="tc">
      <table>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
        {citydata.filter((val)=>{
          if(sdata===""){
            return val;
          }
          else if(val.city.toLowerCase().includes(sdata.toLowerCase())){
            return val
          }
        
          
        }).map((val, key=0) => {
        
          return (
            <tr >
              <td>{key+1}</td>
              <td>{val.city}</td>
              <td>{val.country}</td>
            </tr>
           )
        })}  
      </table>
      </div>
      <div className="btsec">
        <div className='btns'>
        <button onClick={()=>{
          setCurlim(1);
          gafunc();
        }}>1</button>
        <button
        onClick={()=>{
          setCurlim(2);
          gafunc();
        }}
        >2</button>
        <button
        onClick={()=>{
          setCurlim(3);
          gafunc();
        }}
        >3</button>
        <button
        onClick={()=>{
          setCurlim(4);
          gafunc();
        }}
        >4</button>
        <button
        onClick={()=>{
          setCurlim(5);
          gafunc();
        }}
        >5</button>
        <button
        onClick={()=>{
          setCurlim(6);
          gafunc();
        }}
        >6</button>
        <button
        onClick={()=>{
          setCurlim(7);
          gafunc();
        }}
        >7</button>
        <button
        onClick={()=>{
          setCurlim(8);
          gafunc();
        }}
        >8</button>
        <button
        onClick={()=>{
          setCurlim(9);
          gafunc();
        }}
        >9</button>
        <button
        onClick={()=>{
          setCurlim(10);
          gafunc();
        }}
        >10</button>
        </div>
        
      <input type="number" onChange={(e)=>{setCurlim(e.target.value)}} onKeyDown={()=>{gafunc()}}/>  
      </div>
     
    </div>
  );
}

export default App;
