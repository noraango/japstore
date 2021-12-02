import React from 'react'
import UserDetail from './UserDetail'
const UserRecord = ({listUser, relist}) => {
    return (
        <>
            {listUser.map((record, key)=>{
                <UserDetail key={key} record={record} relist={relist} />
            })}
        </>
    )
}

export default UserRecord
