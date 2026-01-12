import styled from "styled-components";
import {Header} from "../components/Header/Header.tsx";
import {FilterHeader} from "../components/FilterHeader/FilterHeader.tsx";
import {FinishTable} from "../components/Table/FinishTable.tsx";
import {Footer} from "../components/Footer/Footer.tsx";


const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 5vw;
`

const AppMain = styled.main`
    border-radius: 12px;
    padding: 32px;
    background: #050506;
    width: 100%;
`

function App() {

  return (
    <AppWrapper>
        <AppMain>
            <Header />
            <FilterHeader/>

            <FinishTable/>

            <Footer/>
        </AppMain>
    </AppWrapper>
  )
}

export default App
