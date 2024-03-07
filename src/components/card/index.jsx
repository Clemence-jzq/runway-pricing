import './index.css';

function Card(props) {
    const { level } = props;
    const plans = [{
        title: 'Basic',
        intro: 'For individuals looking to explore Runway’s AI Magic Tools and content creation features.',
        price: 'Free Forever',
        maxuser: '',
        btn: 'Sign up',
    }, {
        title: 'Standard',
        intro: 'For individuals and small teams looking for more access, more AI Magic Tools and more export options.',
        price: '$15',
        maxuser: '5',
        btn: 'Subscribe now',
    }, {
        title: 'Pro',
        intro: 'For individuals and teams looking to add all of Runway’s features into their workflows.',
        price: '$35',
        maxuser: '10',
        btn: 'Subscribe now',
    }, {
        title: 'Unlimited',
        intro: 'All the access of the pro plan with the flexibility of unlimited video generations.',
        price: '$95',
        maxuser: '10',
        btn: 'Subscribe now',
    }, {
        title: 'Enterprise',
        intro: 'For large teams and organizations that need a custom, secure, and robust flexibility at scale.',
        price: 'Contact Us',
        maxuser: '',
        btn: 'Schedule a Demo',
    }]

    const plan = plans.find(item => {
        return item.title == level;
    })

    return (
        <div className="card">
            <h2 className="level">
                {level}
            </h2>
            <p className="intro">
                {plan.intro}
            </p>
            <div style={{ height: '10rem' }}>
                <div className="price mb-3">
                    <div>{plan.price}</div>
                    {plan.price.charAt(0) == '$' && (
                        <div className="price-right">per user<br />per month</div>
                    )}
                </div>
                {plan.maxuser != '' && (
                    <div className="condition mt-1">
                        max. {plan.maxuser} users per workspace billed<br /> monthly
                    </div>
                )}
            </div>
            <a href="" className="link">{plan.btn}</a>
            <hr />
            <div className="detail">
                
            </div>
        </div >
    );
}

export default Card;