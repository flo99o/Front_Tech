import React from 'react'
import JobList from './JobList'




const LatestJob = () => {

    // Store latestJob from BDD

    return (
        <section className="latestJob">
            <div className="heading-secondary">
                <h2 className="heading-secondary--main">Derniers Jobs</h2>
                <p className="heading-secondary--sub">Retrouver les jobs les plus récents listés sur notre site.</p>
            </div>
            <JobList />
            
            
        </section>
    )
}

export default LatestJob
