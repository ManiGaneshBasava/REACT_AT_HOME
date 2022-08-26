import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";
import services from '../services/services';
import swal from 'sweetalert';



function Home() {
    const navigate = useNavigate()
    const { logOut } = useUserAuth()
    const [account,setAccount] = useState();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleNewRecord=()=>{
        navigate("/newAccount")
    }

    useEffect(()=>{
        getAccount()
    },[])

    const getAccount = async ()=>{
        const data = await services.getAllAccounts()
        console.log(data);
        setAccount(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

    const deleteHandler=(id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your account has been deleted!", {
                icon: "success",
              });
                // services.deleteAccount(id.id)
                services.deleteAuth(id)
                console.log(id);
                getAccount()

            } else {
              swal("Your account is safe!");
            }
          });
    }

    const tableData =account?.map((each, index)=>{
        return(
                <tr key={each.id}>
                    <td><img src={each.newAccount.url} ></img></td>
                    <td>{each.newAccount.name}</td>
                    <td>{each.newAccount.number}</td>
                    <td>{each.newAccount.email}</td>
                    <td>{each.newAccount.country}</td>
                    <td>{<button >Edit</button>}
                    {<button onClick={(e)=>deleteHandler(each)}>Delete</button>}</td>
                </tr>
        )
    })

    return (
        <div>{console.log(account)}
                <button className="btn btn-success" onClick={handleNewRecord}> + Account</button>
                <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>DP</th>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
        </div>
    )
}

export default Home