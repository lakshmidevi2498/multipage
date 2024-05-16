import Header from './components/navbar'
import Cimage from './components/cimage'
import Form from './components/form'
import Footer from './components/footer';
import Cbanner from './components/cbanner'
const Contact=()=>{
    const customStyle={
        backgroundColor:'#920515'
    }
    return(
        <>
        <Header color={customStyle.backgroundColor}/>
        <Cimage/>
        <Form/>
        <Cbanner/>
        <Footer/>
        </>
    )
}
export default Contact;