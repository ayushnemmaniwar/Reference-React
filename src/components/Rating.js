import React, { useState,useEffect } from "react";
import ReactStars from "react-rating-stars-component";
// const secondExample = {
//   size: 50,
//   count: 10,
//   color: "black",
//   activeColor: "red",
//   value: 7.5,
//   a11y: true,
//   isHalf: true,
//   emptyIcon: <i className="far fa-star" />,
//   halfIcon: <i className="fa fa-star-half-alt" />,
//   filledIcon: <i className="fa fa-star" />,
//   onChange: (newValue) => {
//     console.log(`Example 2: new value is ${newValue}`);
//   },
// };

// const thirdExample = {
//   size: 40,
//   count: 7,
//   isHalf: false,
//   value: 4,
//   color: "blue",
//   activeColor: "red",
//   onChange: (newValue) => {
//     console.log(`Example 3: new value is ${newValue}`);
//   },
// };

// const fourthExample = {
//   size: 60,
//   isHalf: true,
//   char: "",
//   value: 3.5,
//   onChange: (newValue) => {
//     console.log(`Example 4: new value is ${newValue}`);
//   },
// };

 function Rating(props) {
    const [rating,setRating]=useState(0);
    const firstExample = {
        size: 30,
        isHalf:true,
        value:0,
        edit: true,
        onChange: (newValue) => {
                setRating(newValue)
              }
    
      };
      function fun()
      {
         props.rate(rating);
      }
  return (
    <div className="container">
      
      <ReactStars {...firstExample} />
      {/* <h4>Your own icons with half rating and a11y</h4>
      <ReactStars {...secondExample} />
      <h4>Full stars rating only, a11y and other colors</h4>
      <ReactStars {...thirdExample} />
      <h4>Char with half rating and a11y</h4>
      <ReactStars {...fourthExample} /> */}
      <button type="button" className="btn btn-primary" onClick={fun}>Submit Rating</button>
    </div>
  );
}

export default Rating;
