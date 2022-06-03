import Auth from "./Auth"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Section from "./Section"
import SideBar from "./SideBar"
const Main = () => {
  return (
    <>
    <NavBar>
    <Auth></Auth>
    </NavBar>
    <SideBar></SideBar>
    <Section></Section>
    <Footer></Footer>
    </>
  )
}

export default Main