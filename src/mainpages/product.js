import Header from './components/navbar';
import Cards2 from './components/cards2';
import Banner2 from './components/banner2';
import MySwiper from './components/swiper';
import Footer from './components/footer';
import Banner3 from './components/banner3';

const Product=()=>{
    const customStyle={
        backgroundColor:'#920515'
    }
    return(
        
        <>
         <Header color={customStyle.backgroundColor}/>
         <Banner2/>
         <Cards2/>
         <Banner3/>
         <MySwiper/>
         <Footer/>
         </>
       
        
    )
}
export default Product;
