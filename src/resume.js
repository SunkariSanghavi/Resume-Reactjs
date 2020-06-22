import React from 'react';
import data from './data/data.json';
import profileIcon from './image1.svg';
import profileIcon1 from './image2.svg';

let resume=(prop)=>
{
    let info=data.profiles[prop.location.data.id];
  return(
      <div className="row justify-content-center">
          <div className="col-lg-3 m-2">
              <div className="card shadow">
                  <div className="card-body p-2 text-center">
                      {info.basics.gender==="female1" ? <img src={profileIcon} alt="Profile icon" style={{width:"30%"}}/> : <img src={profileIcon1} alt="Profile icon" style={{width:"30%"}}/>}
                      <h2>{info.basics.name}</h2>
                      <h5 className="text-secondary" style={{fontStyle:"italic"}}> {info.basics.role}</h5> <hr />
                      <a href={"mailto:"+info.basics.mail}> {info.basics.mail}</a> <br>
                      </br>
                      <a href={"tel:"+info.basics.phone}> {info.basics.phone}</a> <br />
                      <p>{info.basics.address}</p>
                  </div>
              </div>
          </div>
          <div className="col-lg-8 m-2">
          <div className="card shadow">
                  <div className="card-body">
                      <h3>Summary</h3>
                      <hr />
                      <ul>
                          {
                          info.summary.map((summaryValue,summaryIndex)=>
                          (
                            <li key={summaryIndex} > {summaryValue} </li>
                          ))
                        }
                      </ul>
                      <h3>Educational Qualifications</h3>
                      <hr />
                      <div className="table-responsive">
                          <table className="table">
                              <thead className="thead-dark">
                                  <th>Degree</th>
                                  <th>Institution</th>
                                  <th>CGPA/Percentage</th>
                              </thead>
                              <tbody>
                                  {info.education.map((educationValue,educationIndex)=>
                                  (
                                      <tr key={educationIndex}>
                                        <td>{educationValue.degree}</td>
                                        <td>{educationValue.institute}</td>
                                        <td>{educationValue["CGPA/Percentage"]}</td>
                                      </tr>
                                  ))
                                 }
                              </tbody>
                          </table>
                      </div>
                      <h3>Hobbies</h3>
                      <hr />
                      <ul>
                          {
                          info.hobbies.map((hobbyValue,hobbyIndex)=>
                          (
                            <li key={hobbyIndex} > {hobbyValue} </li>
                          ))
                        }
                      </ul>
                      
                  </div>
              </div>
          </div>
      </div>
  )
}

export default resume;