import React, { useState } from 'react'
// import { IState as IProps } from './App'
interface Props {
    people: {
        image: string;
        name: string;
        address: string;
        phone: number;
    }[],
    setPeople: React.Dispatch<React.SetStateAction<{
        image: string;
        name: string;
        address: string;
        phone: number;
    }[]>>

}
const AddToList: React.FC<Props> = ({ people, setPeople }) => {
    const [input, setinput] = useState({
        image: "",
        name: "",
        address: "",
        phone: 3,

    })
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setinput(
            {
                ...input,
                [e.target.name]: e.target.value

            })
    }
    const addUser = () => {
        if (!input.image || !input.name || !input.phone || !input.address) {
            return
        }
        setPeople([
            ...people,
            input
        ])
        setinput({
            image: "",
            name: "",
            address: "",
            phone: 3,

        })
    }
    return (
        <div className='container mt-3'>
            <input type="text" className="form-control w-50 mx-auto my-2 px-2" placeholder='Name' name='name' value={input.name} onChange={changeHandler} />
            <input type="text" className="form-control w-50 mx-auto my-2 px-2" placeholder='Image Url' name='image' value={input.image} onChange={changeHandler} />
            <input type="text" className="form-control w-50 mx-auto my-2 px-2" placeholder='Phone Number' name='phone' value={input.phone} onChange={changeHandler} />
            <textarea className="form-control w-50 mx-auto m-2 px-2" placeholder='Address' name='address' value={input.address} onChange={changeHandler} />
            <div className="mx-auto   w-50">
                <button className="btn btn-outline-dark w-100 button" onClick={addUser}>Add Contact</button>
            </div></div>
    )
}

export default AddToList
