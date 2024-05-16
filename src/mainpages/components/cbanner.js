import 'bootstrap/dist/css/bootstrap.css';
const Cbanner=()=>{
    return(
        <>
        <div className="container-fluid d-flex justify-content-between mt-5 banner" style={{background:'#4D1919'}}>
            <div className="  container ">
                <img src="./assets/images/cbanimg.jpg" class="card-img-top mt-5  rounded-top-circle himage " alt="..."  style={{maxWidth:"100% ",height:"auto"}}/>  
            </div>
            <div className="container align-items-center justify-content-center m-auto bannertext text-light">
                <p style={{color:'orange'}}>CALL TO ACTION</p>
                <h1 class="text-border">Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms</h1>
                <button class="btn btn-warning">Shop Now &rarr;</button>
            </div>
        </div>
        </>
    )
}
export default Cbanner;