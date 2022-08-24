import {IoMdClose} from "react-icons/io"
import {MdOutlineMail} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import { useState } from "react"

const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC"

function Profile({setProfileClick}) {

    const [editContact,setEditContact] = useState(false)
    const [editBio,setEditBio] = useState(false)
    return(
        <div id = "profile">
            <div className="profile-header">
                <h2>Profile</h2><IoMdClose onClick={()=>setProfileClick(false)}/>
            </div>
            <img width="250px" height="250px" src = {src}/>
            <div className="profile-section-header">
                <h3>Username</h3> <p>Edit</p>
            </div>
            <div className="profile-section">
                <div className="profile-section-header">
                    <h3>Contact Information</h3><p onClick={()=>setEditContact(!editContact)}>Edit</p>
                </div>
                <div className="profile-row">
                     <MdOutlineMail/>{editContact ? <><input value="Email" type="email"/><button>Submit</button></>  : <h4>Email</h4> }
                </div>
                <div className="profile-row">
                    <BsTelephone/>{editContact ? <><input value="Phone Nunber" type="tel"/><button>Submit</button></>  : <h4>Phone Number</h4>}
                </div>
            </div>
            <div className="profile-section">
                <div onClick={()=>setEditBio(!editBio)} className="profile-section-header">
                    <h3>About</h3><p>Edit</p>
                </div>
                <div className="profile-row">
                {editBio ? <><input value="Bio" type="text"/> <button>Submit</button></> : <h3>Bio</h3> }
                </div>
            </div>
        </div>
    )
}


export default Profile