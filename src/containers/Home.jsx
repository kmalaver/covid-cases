import React, { useState , useEffect} from 'react'
import { connect } from 'react-redux'
import WorldCases from '../components/WorldCases'
import CountryList from '../components/CountryList'
import CountryItem from '../components/CountryItem'

const Home = () =>{

  const [global,setGlobal] = useState({})
  const [countries,setCountries] = useState([])

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
      .then(response => {
        setGlobal(response.Global);
        setCountries(response.Countries.sort(compare))
        console.log(response)
      })
      .catch(error => console.log(error));
  }, []);

  function compare( a, b ) {
    if ( a.TotalDeaths < b.TotalDeaths ){
      return 1;
    }
    if ( a.TotalDeaths > b.TotalDeaths){
      return -1;
    }
    return 0;
  }
  
  return(
    <div className="home">
      <WorldCases Global={global}></WorldCases>
      <CountryList>
        {countries.map((country, i)=>{
          return(
            <CountryItem key={i} country={country}/>
          )
        })}
      </CountryList>
    </div>

    
  )
}

// const mapStateToProps = state =>{
//   return {
//     Global: state.Global,
//   }
// }

export default (Home)