import React, { useState , useEffect} from 'react'
import { connect } from 'react-redux'
import { setData } from '../actions'
import WorldCases from '../components/WorldCases'
import CountryList from '../components/CountryList'
import CountryItem from '../components/CountryItem'
import Loader from '../components/Loader'



const Home = ({Global,Countries, isData, filterData, setData}) =>{

  const [isLoading , setLoading] = useState(false);

  useEffect(() => {
    if(!isData){
      fetch('https://api.covid19api.com/summary')
      .then(res => res.json())
        .then(response => {
          setData(response)
          console.log(response)
        })
        .catch(error => console.log(error));
    }
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
  
  console.log(filterData.length)

  const filterList = (list,filt) =>{
    if(filt.length>0){
      return list.filter(item => item.Country.toLowerCase().includes(filt.toLowerCase()))
    }else{
      return list
    }
  }

  

  return(!isLoading?
    <div className="home">
      <WorldCases Global={Global}></WorldCases>
      <CountryList>
        {filterList(Countries,filterData).map((country, i)=>{
          return(
            <CountryItem key={i} country={country}/>
          )
        })}
      </CountryList>
    </div>:
    <Loader/>

    
  )
}

const mapStateToProps = state =>{
  return {
    Global: state.response.Global,
    Countries: state.response.Countries,
    isData: state.isData,
    filterData:state.filterData
  }
}

const mapDispatchToProps = {
  setData
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)