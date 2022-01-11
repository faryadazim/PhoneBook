import React, { useState } from 'react'
import { IState as Props } from "./App";

interface Eprops {
    person: Props["person"],
    setPerson: React.Dispatch<React.SetStateAction<{
        image: string;
        name: string;
        work: string;
        roll: string;
        phone: string;
    }[]>>

}


const AddToList: React.FC<Eprops> = ({ person, setPerson }) => {

    const submitHandler = () => {
        console.log("pressed");
        setPerson([
            ...person, input

        ]

        )

    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )

    }
    const [input, setInput] = useState({
        image: "",
        name: "",
        phone: "",
        roll: "",
        work: ""
    })
    return (
        <>
            <div >
                <div> <input
                    type="text"
                    placeholder='image'
                    value={input.image}
                    onChange={changeHandler}
                    name='image'
                /></div> <br />
                <div> <input
                    type="text"
                    placeholder='name'
                    value={input.name}
                    onChange={changeHandler}
                    name='name'
                /></div> <br />
                <div>  <input
                    type="text"
                    placeholder='Phone Number'
                    value={input.phone}
                    onChange={changeHandler}
                    name='phone'
                /></div> <br />
                <div>   <input
                    type="text"
                    placeholder='Roll Number'
                    value={input.roll}
                    onChange={changeHandler}
                    name='roll'
                /></div> <br />
                <div>   <textarea
                    placeholder='Job' cols={26} value={input.work} name='work'
                    onChange={changeHandler}
                /></div>
                <button type="submit" onClick={submitHandler}> Add Person</button>
            </div>
        </>
    )
}

export default AddToList
