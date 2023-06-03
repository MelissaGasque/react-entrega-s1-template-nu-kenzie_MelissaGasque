import { GlobalReset } from "./styles/reset.js"
import { GlobalStyles } from "./styles/globalStyle.js"
import {StyledContainer} from "./styles/container.js"

import { Header } from "./components/Header/index.jsx"
import { Form } from "../src/components/Form/index.jsx"
import { List } from "./components/List"
import { useState } from "react"

function App() {
  const [noteList, setNoteList] = useState([])
  console.log(noteList)
  return (
    <>
      <GlobalReset/>
      <GlobalStyles/>
      <Header/>
      <main>
      <StyledContainer>
        <Form noteList={noteList} setNoteList={setNoteList}/>
        <List noteList={noteList} setNoteList={setNoteList}/>
      </StyledContainer>
      </main>
    </>  
  )
}

export default App
