import React from 'react'

const Result = () => {
  return (
    <div>
      <div className="result">
        <div className="logo">
            <img src="img/result.jpg" alt="log" className='img'/>
            <div className="board">
                <h3>BIHAR SHOOL EXAMINATION BOARD PATNA</h3>
                <h3>ANNUAL SECONDARY SCHOOL EXAMINATION RESULT,2020</h3>
            </div>
        </div>
        <div className="mainContent">
            <div className="personal">
            <h2>Personal Details</h2>
            <div className="personalContent">
                <div className="roll">
                    <p>Roll Code - Roll No:-</p>
                    <p>92044 - 2000456</p>
                </div>
                <div className="roll">
                    <p>Registration No:-</p>
                    <p>92044 - 000012-19</p>
                </div>
                <div className="roll">
                    <p>Name:-</p>
                    <p>Md Afsar</p>
                </div>
                <div className="roll">
                    <p>Exam category:-</p>
                    <p>Regular</p>
                </div>
            </div>
            <div className="marksDetails">
                <h2>Marks Details</h2>
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>F.Marks</th>
                        <th>P.Marks</th>
                        <th>Theory</th>
                        <th>INT/PRAC</th>
                        <th>Regulation</th>
                        <th>Subject Total</th>
                    </tr>
                    <tr>
                        <td>M.I.L HINDI</td>
                        <td>100</td>
                        <td>030</td>
                        <td>095</td>
                        <td>-</td>
                        <td></td>
                        <td>095</td>
                    </tr>
                    <tr>
                        <td>M.I.L HINDI</td>
                        <td>100</td>
                        <td>030</td>
                        <td>095</td>
                        <td>-</td>
                        <td></td>
                        <td>095</td>
                    </tr>
                    <tr>
                        <td>M.I.L HINDI</td>
                        <td>100</td>
                        <td>030</td>
                        <td>095</td>
                        <td>-</td>
                        <td></td>
                        <td>095</td>
                    </tr>
                    <tr>
                        <td>M.I.L HINDI</td>
                        <td>100</td>
                        <td>030</td>
                        <td>095</td>
                        <td>-</td>
                        <td></td>
                        <td>095</td>
                    </tr>
                    <tr>
                        <td>M.I.L HINDI</td>
                        <td>100</td>
                        <td>030</td>
                        <td>095</td>
                        <td>-</td>
                        <td></td>
                        <td>095</td>
                    </tr>
                </table>
            </div>
            <div className="final">
                <h2>Final Result</h2>
                <div className="mainFinal">
                   <table>
                   <tr>
                        <td><b>Result</b></td>
                        <td><b>Pass</b></td>
                        <td></td>
                        <td></td>
                        <td><b>Total Marks:</b></td>
                        <td></td>
                        <td><b>471</b></td>
                    </tr>
                    <tr>
                        <td><b>Division</b></td>
                        <td><b>1st DIVISION</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ENGLISH</td>
                        <td>100</td>
                        <td>030</td>
                        <td>070</td>
                        <td>-</td>
                        <td></td>
                        <td>070</td>
                    </tr>
                   </table>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Result
