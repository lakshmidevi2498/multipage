import Header from './components/navbar'
import Abanner1 from './components/abanner1';
import Abanner2 from './components/abanner2';
import Team from './components/team';
import Footer from './components/footer';
import Aimage from './components/aimage';
const About=()=>{
    const customStyle={
        backgroundColor:'#920515'
    }
return(
    <>
    <Header color={customStyle.backgroundColor}/>
    <Aimage/>
    <Abanner1/>
    <Abanner2/>
    <Team/>
    <Footer/>
    </>
)
}
export default About;