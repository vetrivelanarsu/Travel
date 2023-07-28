
import "../styles/mainbody.css"
import List from "./List"
import Detail from "./Detail"
import { useState } from "react"


export default function MainBody({selectedItem}){

const [Individual,setIndividual]=useState({})


console.log(selectedItem)

console.log(Individual)


  return(
    <div className="mainbody">
      <List selectedItem={selectedItem} setIndividual={setIndividual} />
      <Detail Individual={Individual}/>
    </div>
  )

}