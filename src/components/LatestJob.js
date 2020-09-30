import React from 'react'

const LatestJob = () => {
    return (
        <section className="container-latestJob">
            <div className="heading-secondary">
                <h2 className="heading-secondary--main">Latest jobs</h2>
                <p className="heading-secondary--sub"></p>
            </div>
            <div className="job-list">
                <a href="" className="job-list__item">
                    <div className="job-list__photo">
                        <img src="" alt="logo de l'entreprise"/>
                    </div>
                    <div className="job-list__information">
                        <h6 className="name-job">Développeur Web Front-End</h6>
                        <ul className="compagny-info">
                            <li className="compagny-name">Bnp Paribas</li>
                            <li className="compagny-place">75000</li>
                        </ul>
                    </div>
                    <div className="job-list__contract">
                        <span className="salary">20K</span>
                        <span className="contract-type">Full time</span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default LatestJob
