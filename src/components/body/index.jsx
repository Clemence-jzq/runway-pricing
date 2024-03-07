import { Component } from "react";
import Title from '../title';
import Switchbtn from "../switchbtn";
import './index.css';
import Card from "../card";

class Body extends Component {
    render() {
        const plans = ['Basic', 'Standard', 'Pro', 'Unlimited', 'Enterprise'];

        return (
            <div className="container-fluid mybody">
                <Title />
                <Switchbtn />
                <div className="row">
                    {plans.map(plan => {
                        return (
                            <div className="col-md-6 col-lg-3 col-xl px-1">
                                <Card level={plan} />
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default Body;