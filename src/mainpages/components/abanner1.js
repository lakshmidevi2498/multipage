const Abanner1=()=>{
    const data=[
        {h4:"Our Vision",p:"At Florist, our vision is to be the guiding light for floral elegance and creativity.We aspire to inspire, by reimagining the way flowers connect people, bring joy, and create lasting memories. We envision a world where every gesture, whether grand or subtle, is accompanied by the enchantment of flowers."},
        {h4:"Our Mission",p:"Our mission is to craft floral artistry that elevates moments into memories. With dedication and expertise,  we strive to provide our customers with the freshest, most enchanting blooms and personalized service that reflects the beauty and emotions of every occasion."}
    ]
    return(
        <>
          
            <div className="  container ">
                    <img src="./assets/images/imga1.jpg" class="card-img-top mt-4   " alt="..." />  
            </div>
            <div className="container mt-5 mb-3 d-flex justify-content-between">
                <div className=" row row-cols-1 row-cols-md-2">
                    {data.map((data)=>(
                        <div className="  text-center col ">
                        <h4 >{data.h4}</h4>
                        <p className="justext">{data.p} </p>
                    </div>
                    ))}
                   
              </div>
           </div>
        </>

    )
}
export default Abanner1;