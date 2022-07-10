import "./Benefits.css"
// Imagenes
import benefit1 from "../assets/img/Benefit1.jpg"
import benefit2 from "../assets/img/Benefit2.jpg"
import benefit3 from "../assets/img/Benefit3.jpg"

const Benefits =()=>{
    return(
        <>
        <section className="Benefits container mb-5 mt-5">
        <h2 className="bg-dark text-light p-3">BENEFICIOS</h2>
            <section className="Benefits_Cards row mt-4 text-center">
                <div className="col-12 col-sm-6 col-md-4">
                    <article>
                            <img className="img-fluid benefits_card_img mt-3" src={benefit1} alt="Benefit1"/>
                    </article>
                </div>   
                <div className="col-12 col-sm-6 col-md-4">
                    <article>
                            <img className="img-fluid benefits_card_img mt-3" src={benefit2} alt="Benefit2"/>
                    </article>
                </div>    
                <div className="col-12 col-sm-6 col-md-4">
                    <article>
                            <img className="img-fluid benefits_card_img mt-3" src={benefit3} alt="Benefit3"/>
                    </article> 
                </div>
            </section>
    </section>
		
        </>
    )
}

export default Benefits;