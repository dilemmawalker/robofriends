import React from  'react';
import Arr from './Arr';


function Robots (){
< div class="abc" alt="combo" >
</div>

  const listItems = Arr.map((user,i) =>{
      return(
  <div>
  
          < div class="yo" alt="combo" >
  <img id="ab" alt ="photo" src="https://robohash.org/ugdhfdsdfu"/>

  {user.name}<br></br>
  {Arr[i].email}
    </div>
  {/* < div class="yo" alt="combo" >
  <img id="abc" alt ="photo" src="https://robohash.org/ugdhfdsdfu"/>
  
  lester freeman
  lester@gmail.com

  </div>
  < div class="yoo" alt="combo" >
  <img id="bcd" alt ="photo" src="https://robohash.org/ugdhfdsdfu"/>
  
  lester freeman
  lester@gmail.com
  </div> */}
 
</div>
      );
  })
  return (
    <ul>{listItems}</ul>
  );
}
    // var n=Arr.length;
   
export default Robots;