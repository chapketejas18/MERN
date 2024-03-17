import React from "react";
import MobileList from "./MobileList";
import mobileDetails from "./MobileList.json"

export default function Mobile() {
  return (
    <div>
        {mobileDetails.map((ele)=>{
            return <MobileList
            image={ele.image}
            mobileName={ele.mobileName}
            price={ele.price}
          />
        })}
    </div>
  );
}
