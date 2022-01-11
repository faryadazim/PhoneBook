import React from 'react'
interface IProps {
    people: {
        image: string;
        name: string;
        address: string;
        phone: number;
    }[]
}


const List = ({ people }: IProps) => {


    const renderPerson = (): JSX.Element[] => {
        return people.map((user) => {
            console.log("user");

            return (
                <div className="row  my-2  resultBox mx-5">
                    <div className="col-md-2"><img src={user.image} alt="user.index" height={12} className='image-logo' /> </div>
                    <div className="col-md-3 text-center"> {user.name} </div>
                    <div className="col-md-3 text-center">{user.address}</div>
                    <div className="col-md-4 text-center">+92 {user.phone}</div>
                </div>
            )
        })
    }

    return (
        <>
            hj


            {renderPerson}
        </>
    )
}

export default List
