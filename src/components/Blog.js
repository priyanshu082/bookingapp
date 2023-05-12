import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import Community from './Community'

export const Blog = () => {

  const [faltu, setfaltu] = useState("")

  const f = () => {
     setfaltu("priyanshu")
  }

 
  const Name="Priyanshu singh"

  return (
    <div>
      <Community 
       faltu={faltu} />
    </div>
  )
}

export default Blog