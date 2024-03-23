
import img1 from './Images/about (1).jpg';

export default function Banner(){
    return(
        <div class="banner1">
            <div class="banner_content">
               
                <div class="box1">
                    <div class="box1_content">
                    <h2>We are the militiary</h2>
                    <br />
                    <h1>The country is safe with Militiary</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions</p>
                   <div class="btnn">
                    <div class="btnn_content">
                        <a href="">Read more</a>
                    </div>
                    </div>
                   
                </div>
                </div>
                <div class="box2">
                    <img src={img1} alt="" />
                    </div>
            </div>
        </div>
    )
}