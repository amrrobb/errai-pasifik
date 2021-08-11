import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import {fetchSearch} from '../store/actions'

function SubCategory({category, listInternational, listIndonesia}) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <a
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open} 
        >
          {category}
        </a>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <ul>
                <div>
                    <People subcategory="International" list={listInternational} key={"International"} i='1' />
                </div>
                <div>
                    <People subcategory="Indonesia" list={listIndonesia} key={"Indonesia"} i='2'/>
                </div>
            </ul>
          </div>
        </Collapse>
      </>
    );
  }

  function People({subcategory, list, i}) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const searchByUser = (input) => {
        dispatch(fetchSearch(input))
    }

    return (
      <>
        <a
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open} 
        >
          {subcategory}
        </a>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <ul>
                {
                    list.map((el, i) => (
                        <li className="" onClick={() => searchByUser(el)} key={el} >{el}</li>
                    ))
                }
            </ul>
          </div>
        </Collapse>
      </>
    );
  }

export default function PersonList(props) {
    const category = ['ACTOR', 'SCIENTIST', 'POLITICIAN']
    const actorInternational = [
        'Tom Cruise', 'Angelina Jolie', 'Will Smith', 'Jessica Alba', 'Chris Rock', 'Marissa Tomei', 'Lindsay Lohan', 'Billie Ellish', 'Elizabeth Olsen', 'Jeremny Renner']
    const actorIndonesia = [
        "Titi Kamal",
        "Rano Karno",
        "Sophia Latjuba",
        "Bunga Citra Lestari",
        "Tora Sudiro",
        "Suzzanna",
        "Joe Taslim",
        "Imelda Therinne",
        "Iko Uwais",
        "Nirina Zubir"
    ]
    const scientistIndonesia = [
        "Suharyo Sumowidagdo",
        "Meine Van Noordwijk",
        "Johannes V D Wirjawan",
        "Gerard Pals",
        "Emiliana Tjitra",
        "Azyumardi Azra",
        "Shahbaz Khan",
        "Suryadi Ismadji",
        "L P Ligthart",
        "Hairiah Kurniatun"
    ]
    const scientistInternational = [
        "Alain Aspect",
        "David Baltimore",
        "Allen Bard",
        "Timothy Berners- Lee",
        "John Tyler Bonner",
        "Dennis Bray",
        "Sydney Brenner",
        "Pierre Chambon",
        "Simon Conway Morris",
        "Mildred Dresselhaus"
    ]
    const politicianInternational = [
        "Xi Jinping	",
        "Li Keqiang",
        "Elizabeth II",
        "Boris Johnson",
        "Joe Biden",
        "Luis Lacalle Pou",
        "Shavkat Mirziyoyev",
        "Abdulla Aripov",
        "Recep Tayyip Erdoğan",
        "Vladimir Putin"
    ]
    const politicianIndonesia = [
        "Soetrisno Bachir",
        "Basyir Bachtiar",
        "Chaidir Syam",
        "Chusnunia Chalim",
        "Achmad Chalwani",
        "Darwin Siagian",
        "Daryatmo Mardiyanto",
        "Marwan Dasopang",
        "Giring Ganesha",
        "Jeffrie Geovanie"
    ]

    return (
        <>
        <div className="border m-2 p-2" 
            style={{
                "width": "15vw",
                "height": "100vh",
                "borderRadius": "10px"
            }} >
            <div className="ms-3 h5"> 
                Person List
            </div>
            <div className="overflow-scroll" 
                style={{
                "height": "93%",
            }} >
                <ul className="">
                    <div>
                        <SubCategory category="ACTOR" listInternational={actorInternational} listIndonesia={actorIndonesia} />

                    </div>
                    <div>
                        <SubCategory category="SCIENTIST" listInternational={scientistInternational} listIndonesia={scientistIndonesia} />
                    </div>
                    <div>
                        <SubCategory category="POLITICIAN" listIndonesia={politicianIndonesia} listInternational={politicianInternational}/>
                    </div>
                    
                </ul>
            </div>
        </div>
        </>
    )
}