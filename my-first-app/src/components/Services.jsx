import cardImg from "../img/image_card_ej.png";

function Services () {
    return (
        <section id="3" className="servicesContainer">
            <div>
                <h2 className="servicesTitle">Services</h2>
            </div>

            <div className="servicesSubContainer">

                <article className="servicesCard">
                    <div className="servicesCardFrame">
                        <img src={cardImg}></img>
                    </div>
                    <div className="servicesCardText">
                        <h4>Web Development</h4>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ut? Sed iure dolorem esse excepturi, reiciendis, aut et libero quis aliquid autem deserunt, numquam illo?
                        </p>
                    </div>
                        <div className="servicesCardIcons">
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/349402/html5.svg" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/373535/css.svg" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/349419/javascript.svg" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/354259/react.svg" width="3em" height="3em"/>    
                            </svg>
                        </div>
                </article>

                <article className="servicesCard">
                    <div className="servicesCardFrame">
                        <img src={cardImg}></img>
                    </div>
                    <div className="servicesCardText">
                        <h4>Digital Art</h4>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ut? Sed iure dolorem esse excepturi, reiciendis, aut et libero quis aliquid autem deserunt, numquam illo?
                        </p>
                    </div>
                        <div className="servicesCardIcons">
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/373968/photoshop.svg" src="yourfallback.png" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Calligrakrita-base.svg/600px-Calligrakrita-base.svg.png?20220209122951" src="yourfallback.png" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/353488/blender.svg" src="yourfallback.png" width="3em" height="3em"/>    
                            </svg>
                        </div>
                </article>

                <article className="servicesCard">
                    <div className="servicesCardFrame">
                        <img src={cardImg}></img>
                    </div>
                    <div className="servicesCardText">
                        <h4>Content Creation</h4>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ut? Sed iure dolorem esse excepturi, reiciendis, aut et libero quis aliquid autem deserunt, numquam illo?
                        </p>
                    </div>
                        <div className="servicesCardIcons">
                            <svg width="3em" height="3em">       
                                <image href="https://www.svgrepo.com/show/306484/notion.svg" src="yourfallback.png" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://seeklogo.com/images/C/canva-logo-B4BE25729A-seeklogo.com.png" src="yourfallback.png" width="3em" height="3em"/>    
                            </svg>
                            <svg width="3em" height="3em">       
                                <image href="https://inceptum-stor.icons8.com/x7phzUUaJsT5/Hitfilm%20express%20icon.png" src="yourfallback.png" width="3em" height="3em"/>    
                            </svg>
                        </div>
                        
                </article>

            </div>
        </section>
    )
}

export default Services;