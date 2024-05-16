
import 'bootstrap/dist/css/bootstrap.css';
const Banner=()=>{
    return(
        <>
        <div className="container-fluid d-flex justify-content-between mt-5 banner" style={{background:'#4D1919'}}>
            <div className="  container ">
                <img src="./assets/images/imgb1.jpg" class="card-img-top mt-5   rounded-top-circle himage " alt="..."  style={{maxWidth:"100% ",height:"auto"}}/>  
            </div>
            <div className="container align-items-center justify-content-center m-auto bannertext text-light">
                <h3 style={{color:'orange'}}>Special Offers</h3>
                <h1 class="text-border">Your Floral Journey Begins Here<br/>: Get 20% Off Your First Order!</h1>
                <button class="btn btn-warning">Shop Now &rarr;</button>
            </div>
        </div>
        </>
    )
}
export default Banner;