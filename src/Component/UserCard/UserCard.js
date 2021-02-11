import React from 'react';
import "./UserCard.css";
import {Link} from "react-router-dom"


const UserCard = ({user}) => {
    console.log("uuuuuuuuser ==+> ",user.id)
    return (
<div className="col-4 mt-5 justify-content-center" >
{/* <div className="row"> */}
    {/* <div className=" row justify-content-center "> */}
        <div>
            <div className="card">
                <div className="card-header bg-white text-center border-0 " >
                    <div className="row justify-content-center " >
                        <div className="col"> <img className="align-self-center text-center rounded-circle outside img-fluid" src="https://img.icons8.com/bubbles/100/000000/user.png" width="110" height="110"/> </div>
                    </div>
                    <div className="row text-center name">
                        <div className="col">

                            <Link to = {`/user/${user.id}`}>
                            <h5 className="mb-0 profile-pic"> {user.name} </h5> {user.company.name} <small className="mt-0"></small>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0 text-center pb-3 ">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col">
                            <p className="bold" style={{color:"black"}}> Address:<span style={{color:"blue"}}> {user.address.street} {user.address.city} </span></p> <br/>
                            <p className="bold" style={{color:"black"}}> Phone:  <span style={{color:"blue"}}>{user.phone}</span></p>
                        </div>
                    </div>
                </div>
                {/* <div className="card-footer text-center bg-white border-0 mt-0 pt-0">
                    <div className="row">
                        <div className="col"><span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span><span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span><span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="mx-2"><i className="fa fa-pinterest-p" aria-hidden="true"></i></span><span className="mx-2"><i className="fa fa-google-plus" aria-hidden="true"></i></span></div>
                    </div>
                </div> */}
            </div>
        </div>
    {/* </div> */}
</div>
// </div>


    )
}

export default UserCard

