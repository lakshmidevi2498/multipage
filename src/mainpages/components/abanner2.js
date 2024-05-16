const Abanner2=()=>{
    return(
        <>
        <div className="container-fluid border border-light d-flex justify-content-between mt-5 p-3 " style={{background:'#4D1919'}}>
            <div className=" row row-cols-1 row-cols-md-1 row-cols-lg-2">
                <div className="container d-flex justify-content-between col">
                    <div className="mt-4"><img src='./assets/images/imga3.jpg' className="rounded-top-circle  px-3 mt-5 aimg  "/></div>
                    <div><img src='./assets/images/imga2.jpg' className="rounded-top-circle mt-1 aimg"/></div>    
                </div>
                <div className="container col align-items-center justify-content-center m-auto text-light banrtxt">
                <p className="txtt" style={{color:'orange'}}>ABOUT FLORIST</p>
                <h5 class="text-border">Blossoming Your Special Moments with Nature's Finest</h5>
                    <p >Welcome to the heart of Florist, where our love for flowers blooms
                        into exquisite arrangements that celebrate life's most cherished moments.
                        In this corner of the internet, we invite you to discover our passion, our team, 
                        and the essence of what makes Florist a blooming success. It is a long established fact that a
                        reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Abanner2;