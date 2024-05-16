const Team=()=>{
    const data=[
        {src:"./assets/images/imgac1.jpg",h5:"Amelia M."},
        {src:"./assets/images/imgac2.jpg",h5:"Elizabeth B."},
        {src:"./assets/images/imgac3.jpg",h5:"Victoria D."},
        {src:"./assets/images/imgac4.jpg",h5:"Audrey S."}
    ]
    return(
        <>
        <div className="container-fluid bg-light mt-5"style={{color:' FAF3F2'}}>
        <p className="text-center  " style={{color:'orange'}}>OUR TEAM</p>
        <h3  className="text-center  ">Our Dedicated Team of Enthusiasts​</h3>
        <p  className="text-center  ">Share some details here. This is Flexible section where you can share anything you want.</p>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                    {data.map((item,index)=>(

                         <div className="col  text-center mb-3" key={index}>
                            <div className="">   
                                <img src={item.src}class="card-img-top p-4 " alt="..."style={{maxWidth:'100%', height:'auto'}} />
                                <div className="card-body">
                                <h5 className="card-title text-center">{item.h5}</h5>
                                </div>
                            </div>
                        </div>
                        
                    ))}
              </div>          
          </div>
    </div>
        </>
    )
}
export default Team;
                        {/* <div class="col  text-center mb-3">
                            <div class="">   
                                <img src="./assets/images/imgac2.jpg" class="card-img-top p-4 " alt="..." max-width='100%' height='auto'/>
                                <div class="card-body">
                                <h5 class="card-title text-center">Elizabeth B.</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col  text-center mb-3">
                            <div class="">   
                                <img src="./assets/images/imgac3.jpg" class="card-img-top p-4 " alt="..." max-width='100%' height='auto'/>
                                <div class="card-body">
                                <h5 class="card-title text-center">Victoria D.</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col  text-center mb-3">
                            <div class="">   
                                <img src="./assets/images/imgac4.jpg" class="card-img-top p-4 " alt="..." max-width='100%' height='auto'/>
                                <div class="card-body">
                                <h5 class="card-title text-center">Audrey S.</h5>
                                </div>
                            </div>
                        </div> */}
