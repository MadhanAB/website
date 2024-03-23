

import img2 from './Images/2 (6).jpg';
import img3 from './Images/3 (2).jpg';
import img4 from './Images/3 (3).jpg';
import img5 from './Images/1(1).png';
import img6 from './Images/1(2).png';
import img7 from './Images/1 (6).jpg';

export default function Master(){
    return(
        <div class="Master">
            <div class="Master_content">
                <div class="box5">
                 <img src={img2}alt="" />
                 <div class="box8">
                 <img src={img5} alt="" />
                </div>
                 <h2>We have Militiary team</h2>
                 <br />
                 <h3>June 30,2026<span>Admin</span></h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              
               <div class="btnn">
                <div class="btnn_content">
                    <a href="">Readmore</a>
                </div>
               </div>
                </div>
                <div class="box6">
                    <img src={img3} alt="" />
                    <div class="box9">
                    <img src={img6} alt="" />
                   </div>
                    <h2>We have Para Comando</h2>
                    <br />
                    <h3>JUne 30,2023<span>Admin</span></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                   
                  <div class="btnn">
                    <div class="btnn_content">
                        <a href="">Read more</a>
                    </div>
                  </div>
               
               
                </div>
                <div class="box7">
                 <img src={img4} alt="" /> 
                 <div class="box10">
                   <img src={img7} alt="" />
                     </div>
                 <h2>We have Army forces</h2>  
                 <br />
                 <h3>JUne 30,2023<span>Admin</span></h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               
                <div class="btnn">
                    <div class="btnn_content">
                        <a href="">Readmore</a>
                    </div>
                </div>
               
                </div>
            </div>
        </div>
    )
}