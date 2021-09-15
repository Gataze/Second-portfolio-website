import styled from "styled-components";
import iris from "./iris.jpg"
import snieguliczka from "./snieguliczka.jpg"
import delphinuim from "./delphinium.jpg"

const MyWork = () => {
    return ( 
        <AppWrapper>
            <Header>projekty</Header>
            <AppGalleryNav>
                <p>Ilustracje</p>
                <p>Modele 3D</p>
                <p>Projekty</p>
            </AppGalleryNav>
            <AppGallery>
                <AppImage>
                    <img src={iris} alt="" />
                    <p>Kwiaty</p>
                    <h3>Irysy</h3>
                </AppImage>
                <AppImage>
                    <img src={snieguliczka} alt="" />
                    <p>Przyroda niestandardowa</p>
                    <h3>Śnieguliczka</h3>
                </AppImage>
                <AppImage>
                    <img src={delphinuim} alt="" />
                    <p>Łąka</p>
                    <h3>Delphinium</h3>
                </AppImage>
            </AppGallery>
        </AppWrapper>
     );
}

const AppWrapper = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #98787D;
`

const Header = styled.h1`
    color: #dddddd;
    font-size: 46px;
`

const AppGalleryNav = styled.nav`
    display: flex;
    margin-bottom: 32px;
    color: #dddddd;
    font-size: 24px;
    gap: 32px;
`

const AppGallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    justify-items: center;
    
`


const AppImage = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    max-width: 70%;
    padding: 10px;
    color: #dddddd;

    p {
        margin: 20px 0 0;
        color: #dddddd;
        font-size: 16px;
    }

    h3 {
        margin: 10px;
        font-size: 24px;
        text-transform: uppercase;
    }
    

    img {
        max-width: 100%;
        box-shadow: 1px 1px 4px #555555;
    }
`
 
export default MyWork;