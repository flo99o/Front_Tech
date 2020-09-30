import React from 'react'

 const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="about">
                    <img classname="about__image" src="" alt="logo de l'entreprise"/>
                    <p className="about__presentation">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, facere sint. Sunt, quos? Repellat explicabo.</p>
                    <ul className="media-list">
                        <li className="fb"></li>
                        <li className="twitter"></li>
                        <li className="linkedin"></li>
                        <li className="pinterest"></li>
                    </ul>
                </div>
                <div className="quick-links">
                <h6 className="title">Quick links</h6>
                    <a href="">Post New job</a>
                    <a href="">jobs List</a>
                    <a hretf="">Employer List</a>
                    <a href=""></a>
                </div>
                <div className="tranding-jobs">
                <h6 className="title">Tranding Jobs</h6>
                    <a href="">Designer</a>
                    <a href="">UI & UX Expert</a>
                    <a href="">Developer</a>
                    <a href="">IOS developer</a>
                    <a href="">Business Developer</a>
                </div>
                <div className="newsletter">
                    <h6 className="title">Newsletter</h6>
                    <p>Subscribe to Lawson to get all latest Job, Resume, Company Listing & Blog post to stay update.</p>
                    <form action="" className="newsletter__form">
                        <input type="email" placeholder="Entrer votre adresse mail"/>
                        <button className="submit">
                            <img src="" alt="logo d'une enveloppe"/>
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer