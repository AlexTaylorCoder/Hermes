import {IoMdClose} from "react-icons/io"
import {MdOutlineMail} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import { useState } from "react"

function Profile({setProfileClick,details}) {
    console.log(details)
    const [editContact,setEditContact] = useState(false)
    const [editBio,setEditBio] = useState(false)
    return(
        <div id = "profile">
            <div className="profile-header">
                <h2>Profile</h2><IoMdClose onClick={()=>setProfileClick(false)}/>
            </div>
            <img className="no-stretch-image" width="250px" height="250px" src = {details.prof}/>
            <div className="profile-section-header">
                <h3>{details.username}</h3> <p>Edit</p>
            </div>
            <div className="profile-section-header">
                <h3>{details.first_name}{"  "}{details.last_name}</h3> <p>Edit</p>
            </div>
            <div className="profile-section">
                <div className="profile-section-header">
                    <h3>Contact Information</h3><p onClick={()=>setEditContact(!editContact)}>Edit</p>
                </div>
                <div className="profile-row">
                     <MdOutlineMail/>{editContact ? <><input value="email" type="email"/><button>Submit</button></>  : <h4>{details.email}</h4> }
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
                {editBio ? <><input value="Bio" type="text"/> <button>Submit</button></> : <h3>{details.bio}</h3> }
                </div>
            </div>
        </div>
    )
}


export default Profile