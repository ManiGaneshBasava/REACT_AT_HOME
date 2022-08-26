import React from 'react'
import '../css/projectInformation.css'

function ProjectInformation() {
    return (
        <div className='home'>
            <form >
                <h1>PROJECT INFORMATION</h1>

                <div className='form-left'>
                    <label >Development Name</label>
                    <input type="text" required />

                    <label>Buildings</label>
                    <input type="text" />

                    <label>Start Date / End Date</label>
                    <input type="date" required />

                    <label>Contact Value</label>
                    <input type="text" required />

                </div>
                <div className='form-right'>
                    <label >Project Title</label>
                    <input type="text" required />

                    <label>Project Scope</label>
                    <input type="text" />

                    <label>Base Line</label>
                    <input type="text" required />

                    <label>Location</label>
                    <input type="text" required />
                </div>
                {/* <div>
                    <button className='cancel' type="submit" >CANCEL</button>
                    <button className='create' type="submit" > CREATE PROJECT </button>
                </div> */}
            </form>

        </div>
    )
}

export default ProjectInformation