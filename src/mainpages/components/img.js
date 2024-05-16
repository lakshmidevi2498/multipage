import Header from './navbar'
const Image=()=>{
    const customStyle={
        backgroundColor:'black'
     
    }
    return(
    <>

        <div class="container-fluid image fullscreen-bg">
            <img src="./assets/images/ban1.jpg" alt="Flower Bouquet" className="fullscreen-bg__image"style={{width: "100%"}}/>
            <div class="centered text-light">
            <p class="text-border ">WELCOME TO FLORIST</p> 
            <h3 class="text-border ">Let's Make Beautiful Flowers a Part of Your Life.</h3>
      <p className=''>Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion</p>
            </div>
            <div class="top navbarr">
                
                <Header color={customStyle.backgroundColor}/>
            </div>
      </div>
       
    </>
    )
    
}
export default Image;




// import React from 'react';
// import Header from './navbar';

// const Image = () => {
//   const customStyle = {
//     backgroundColor: 'black'  // Example background color
//   };

//   return (
//     <>
//       <div className="container-fluid image fullscreen-bg">
//         <img
//           src="https://floranext.com/wp-content/uploads/2023/08/ravenbirch_a_group_of_florists_having_fun_in_a_flowershop_Cinem_677b3e82-975f-44e1-9bb0-fde588aa53bc.png"
//           alt="Flower Bouquet"
//           className="fullscreen-bg__image"
//           style={{ width: "100%" }}
//         />
//         <div className="centered">
//           <p>WELCOME TO FLORIST</p>
//           <h3>Let's Make Beautiful Flowers a Part of Your Life.</h3>
//           {/* Additional content */}
//         </div>
//         <div className="top navbarr">
//           {/* Pass the customStyle object as color prop to Header */}
//           <Header color={customStyle.backgroundColor} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Image;
