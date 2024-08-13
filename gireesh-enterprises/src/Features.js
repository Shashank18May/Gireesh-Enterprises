import React from 'react'
import Feature from './Feature'

function Features() {
    return (
        <section className="features">
            <Feature icon="fa-hammer" title="Construction Staffing" description="We provide skilled and unskilled labor for construction projects" />
            <Feature icon="fa-briefcase" title="Temporary Staffing" description="We offer temporary staffing solutions for construction companies" />
            <Feature icon="fa-users" title="Permanent Placement" description="We help construction companies find the right candidates for permanent positions" />
        </section>
    );
}

export default Features;