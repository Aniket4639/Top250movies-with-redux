import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchusers} from '../redux'
import {Box} from '@material-ui/core'
function UserContainer({userData,fetchusers}) {
    useEffect(()=>{
        fetchusers()
    },[])
    console.log(userData);
    return userData.loading?(
        <h2>Loading</h2>
    ) :userData.error?(
        <h2>{userData.error}</h2>
    ) :(
        <div>
            <h2>Top 250 Movies by IMDB</h2>
            <div>
                {
                    userData && userData.users.items && userData.users.items.map(user=>
                    <Box boxShadow={10}  height={450} p={2} bgcolor="#D9EE8E">
                    <div>
                    <h4>{user.rank}. {user.fullTitle}</h4>
                    <img src={user.image} height={300} width={300}/>
                    <h4>IMDB: {user.imDbRating}</h4>
                    Cast: {user.crew}          
                    </div>
                    </Box>
                    )
                }
            </div>
        </div>
    )
}
const mapStateToprops =state =>{
    return{
      userData:state.user
    }
}
const mapdispatchprops =dispatch =>{
    return{
      fetchusers:()=>dispatch(fetchusers())  
    }
} 
export default connect(mapStateToprops,mapdispatchprops)(UserContainer)
