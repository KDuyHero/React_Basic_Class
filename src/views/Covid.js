import { useEffect, useState } from "react"
import axios from 'axios'
const Covid = () => {
  
  const [dataCovid, setDataCovid] = useState([]);

  // componentDidMount
  useEffect( () => async function(){
    let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    console.log(res.data)
    let data = res && res.data ? res.data : []
    setDataCovid([1,2,3,4])
  }, []);

  return (

    <table>
      {console.log("check data: ", dataCovid)}
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </tbody>
    </table>
  )  
}

export default Covid