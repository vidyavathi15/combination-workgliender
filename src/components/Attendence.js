import React, { useState } from 'react'
import Popup from "reactjs-popup"
import { AiOutlineClose } from "react-icons/ai"
import Calendar from "react-calendar"
import MainHeader from './MainHeader'
import Sidebar from './Sidebar'
import './Attendence.css'
function Attendence() {
  const [value, setValue] = useState(new Date())
  const monthsList = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [monthId, setMonthId] = useState(monthsList[0])
  const datesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  const yearsList = [2017, 2018, 2019, 2020, 2021, 2022]


  const onChangeMonth = (e) => {
    setMonthId(e.target.value)

  }

  const onChange = (value) => {
    setValue(value)
  }
  return (
    <div className='profile-container '>
      <MainHeader />
      <div className='profile-header-container'>
        <Sidebar />
        <div className='bg-container'>
          <div className='attendance-bg-container'>
            <div className="attendance-container">
              <h4 className='heading'>Attendence</h4>
              <div className="right-container">
                <div className="attendance-name">
                  <p style={{ fontSize: "10px", color: "white" }}>MONTH</p>
                  <select value={monthId} onChange={onChangeMonth} style={{ backgroundColor: "rgb(49, 49, 51)", fontSize: "10px", color: "white", border: "none" }}>
                    {monthsList.map(each =>
                      <option key={each}>{each}</option>)}
                  </select>

                </div>
                <div className="attendance-name">
                  <p style={{ fontSize: "10px", color: "white" }}>Year</p>
                  <select value={monthId} onChange={onChangeMonth} style={{ backgroundColor: "rgb(49, 49, 51)", fontSize: "10px", color: "white", border: "none" }}>
                    {yearsList.map(each =>
                      <option key={each}>{each}</option>)}
                  </select>

                </div>
                <Popup className="popup-content"
                  model
                  trigger={
                    <button type="button" className="download-btn" >Download</button>
                  }>
                  {close => (
                    <>
                      <div className='close-container'>
                        <p style={{ color: "white" }}>Naveen Challa</p>
                        <button type="button" style={{ backgroundColor: "transparent", border: "none", color: "white" }} onClick={() => close()}><AiOutlineClose /></button>
                      </div>
                      <div >
                        <Calendar onChange={onChange} value={value} />
                      </div>
                    </>
                  )}
                </Popup>
              </div>
            </div>
          </div>

          <div>
            <table>
              <tr>
                <th>Employee Name</th>
                {datesList.map(eachDate => <th>{eachDate}</th>
                )}
              </tr>
              <tr>
                <th>Naveen Challa</th>
                {datesList.map(eachDate => <th>-</th>
                )}
              </tr>
              <tr>
                <th>Shiva Shankar</th>
                {datesList.map(eachDate => <th>-</th>
                )}
              </tr>
              <tr>
                <th>Bharath</th>
                {datesList.map(eachDate => <th>-</th>
                )}
              </tr>
              <tr>
                <th>Santhosh</th>
                {datesList.map(eachDate => <th>-</th>
                )}
              </tr>
              <tr>
                <th>Prasad</th>
                {datesList.map(eachDate => <th>-</th>
                )}
              </tr>
              <tr>
                <th>Shankar</th>
                {datesList.map(eachDate => <th>-</th>
                )}
              </tr>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendence
