import React from 'react'



interface IProps {
    person: {
        image: string,
        name: string,
        work: string,
        roll: string,
        phone: string
    }[]
}
// const List = (props: IProps) => {

const List: React.FC<IProps> = ({ person }) => {
    console.log(person);
    const renderPerson = (): JSX.Element[] => {
        return person.map((user) => {
            return <>
                <div style={{ margin: "auto 300px", display: "flex", justifyContent: "space-around", fontFamily: "ubuntu" }}>
                    <img src={user.image} alt={user.name} height={67} style={{ borderRadius: "45px" }} />
                    <p>{user.name}</p>
                    <p> {user.phone}  </p>
                    <p> Roll No :  {user.roll}</p>
                    <p>  Job :  {user.work}</p>
                </div>
            </>
        })
    }

    return (
        <div>
            {renderPerson()}
        </div>
    )
}

export default List
