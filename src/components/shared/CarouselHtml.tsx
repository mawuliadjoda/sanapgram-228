import useExternalScripts from "@/lib/useJsFile"
import { useEffect } from "react";

type CarouselHtmlProps = {
    slides: string[]
}
const CarouselHtml = ({ slides }: CarouselHtmlProps) => {
    useExternalScripts();

    useEffect(() => {
      
      
    }, []);


    const computeImageUrls = (slides: string[]) => {
        // debugger;
        // const imgUrls = [post?.imageUrl, post?.imageUrl2, post?.imageUrl3].filter(e => e != null);
    
        const maxItems = 8;
       
        const computeSlides = [];
        for (let index = 0; index < maxItems; index++) {
          if(slides.length > index) {
            const element = slides[index];
            computeSlides.push(element);
          } else {
            computeSlides.push(slides[index-slides.length]);
          } 
        }
    
        console.log(computeSlides);
        return computeSlides;
      }
      const computeSlides = computeImageUrls(slides);

    return (
        <div>


            <div className="carousel">
                <figure>

                    {computeSlides.map((img, i) => (
                        <img 
                                className="post_details-img" 
                                key={i} 
                                src={img} 
                        />
                        ))
                    }

                    {/* <img className="post_details-img" src="https://source.unsplash.com/EbuaKnSm8Zw/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/2lYHiNtjSwg/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/CjS3QsRuxnE/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/xxeAftHHq6E/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/bjhrzvzZeq4/800x533" alt="" />
                    <img className="post_details-img" src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt="" /> */}
                </figure>
                <nav>
                    <button className="nav prev">Prev</button>
                    <button className="nav next">Next</button>
                </nav>
            </div>

        </div>
    )
}

export default CarouselHtml
