import React, { useState } from 'react';
import AddToList from './AddToList';
import List from './List';
import './style.css'


// First way of defining states type

export interface IState {
  person: {
    image: string,
    name: string,
    work: string,
    roll: string,
    phone: string
  }[]
}
function App() {
  const [person, setPerson] = useState<IState["person"]>([
    {
      image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg",
      name: "Ali",
      work: "Student",
      roll: "8",
      phone: "3045232332"
    }
  ])

  // 2nd way of defining states type
  // const [photos, setphotos] = useState<{ file: string, url: string }[]>([])


  return (<>
    <div className="App">
      <h3>Maalic's Phone Book</h3>

      <List person={person} />
      <AddToList person={person} setPerson={setPerson} />
    </div>
  </>
  );

}
export default App;
