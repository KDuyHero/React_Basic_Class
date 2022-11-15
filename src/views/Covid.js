import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
  // let today = new Date(new Date().setHours(0, 0, 0, 0));
  const today = moment().startOf("day");
  const priorDate = today.subtract(30, "days");

  let url = `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`;

  const { data: dataCovid, isLoading, isError } = useFetch(url);

  return (
    <div style={{ backgroundColor: "#282c34", color: "white" }}>
      <h3 style={{ margin: 0, padding: 0 }}>Covid 19 tracking in VietNam:</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td>getSomething Wrong..</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
