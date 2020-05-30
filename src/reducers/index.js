const reducer = (state, action) => {
  console.log("filt")
  switch (action.type){
    case 'SET_DATA':
      return {
        ...state,
        response : action.payload,
        isData : true,
      }

    case 'SET_FILTER':
      console.log("filt")
      return {
        ...state,
        filterData : action.payload,
      }  

    default:
      return state
  }
}

export default reducer;