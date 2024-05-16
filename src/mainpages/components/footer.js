import React from 'react';

const Footer = () => {
  const data1=[
    {id:"1",li:"Contact us"},
    {id:"1",li:"About us"},
    {id:"1",li:"Resources"},
    {id:"1",li:"Showcase"},
  ]
  const data2=[
    {id:"1",li:"Myntra"},
    {id:"1",li:"Cleartrip"},
    {id:"1",li:"Shopsy"},
    {id:"1",li:"Sitemap"},
  ]
  return (
    <footer className="container-fluid footer mt-5 py-5 bg-dark text-white">
    
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4  d-flex" >
        <div className="col align-items-center text-center d-block ">
          <img src="./assets/images/logo.svg" alt="Logo" className="bg-white p-2" />
        </div>
       
           <div className=" col text-center ">
           <h5><span style={{ color: '#D12564' }}>Customer</span></h5>
           {data1.map((data)=>(
           <ul className="list-unstyled">
             <li key={data.id}>{data.li}</li>
           </ul>       
        ))}
         </div>      
           <div className=" col text-center ">
           <h5><span style={{ color: '#D12564' }}>Group Company</span></h5>
           {data2.map((data)=>(
           <ul className="list-unstyled">
             <li key={data.id}>{data.li}</li>
           </ul>        
        ))}
        </div>
        <div className=" col text-center  container mt-4">
              <h5 style={{ color: '#D12564' }}>Address:</h5>
              <p>City: Mumbai,
                State/province/area: Maharashtra,
                Country: India,
                Street: 49, 2nd Main, Vyalikaval,
                Zip code: 400004.</p>
              
        </div> 
        <div className="col text-center  ">
              <h5 style={{ color: '#D12564' }}>Let's be friends</h5>
              <div>
                <i className="fab fa-facebook-square m-2 fs-3"></i>
                <i className="fab fa-twitter-square m-2 fs-3"></i>
                <i className="fab fa-instagram-square m-2 fs-3"></i>
                <i className="fab fa-linkedin m-2 fs-3"></i>
              </div>
              <div className=" col text-center mt-3 container">  
                    <div className="input-group mb-3 container">
                      <input type="text" className="form-control bg-light" placeholder="Enter email" aria-label="Recipient's email" aria-describedby="button-addon2" />
                      <button className="btn btn-warning" type="button" id="button-addon2">
                        <i className="fas fa-paper-plane"></i> Send
                      </button>
                    </div>
                    <div className="container text-center ">
                  <p className="small mb-0 text-white">&copy; Copyrights. All rights reserved.</p>
                  </div>       
            </div>        
        </div>
            
    </div>     
    </footer>
  );
}

export default Footer;
