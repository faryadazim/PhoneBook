import React, { useState } from 'react'
import AddToList from './AddToList';
import List from './List';
import './style.css'

export interface IState {
  people: {
    image: string;
    name: string;
    address: string;
    phone: number;
  }[]

}



const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg",
      name: "Ali Abubak",
      address: "Toba Take Singh",
      phone: 3152456768
    }
  ])

  return (
    <div className='App'>
      <div className="container" >
        <div className="row mb-2 mt-5">
          <div className="col-12 header text-primary">
            <h5 className='text-center'> Frie's Phone Book</h5>
          </div>
        </div>
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} />
      </div>
    </div>
  )
}

export default App
