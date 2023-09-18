"use client"

interface Props {
    user : {
    id : string,
    objectId : string,
    username : string ,
    name : string ,
    bio : string ,
    image : string ,
    },
    btnTitle : string,
}


const AccountProfile = ({ user }: Props) =>  {
    return (
        <section>
            Account Profile
        </section>
    )
}


export default AccountProfile;