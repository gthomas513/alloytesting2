import axios from 'axios';
import React from 'react';

// create component
class Form extends React.component {
    constructor(props) {
        super(props);
        
        // declare input fields in state
        this.state = {
            firstName: '',
            lastName: '',
            addressLine1: '',
            addressLine2: '',
            myCity: '',
            myStateCode: '', // state code format. e.g. "NY"
            myZip: '',
            myCountryCode: '', // country code format, e.g. "US"
            mySSN: '',
            emailAddress: '',
            birthDate: '', // must be in ISO 8601 format YYYY-MM-DD
        };

        this.handleChange = this.handleChange.bind(this); //lookup .bind
        this.handleSubmit = this.handleSubmit.bind(this); //lookup .bind
    }

    // handle onchange events
    handleChange = event => {
        const thisAttribute = event.target.thisAttribute;
        this.setState({
            [event.target.name]: thisAttribute
        });
    }

    // handle submission events    
    handleSubmit = event => {
        axios.post('/onboarding', {
            payload: this.state
        }).then((res) => {
            if(res.data.formSubmit === "Approved") {
                alert("Woohoo! You're in, and we've confirmed you're not a spy! (or you beat our systems...). Either way, WELCOME!!")
            } else if (res.data.formSubmit === "Denied") {
                alert("Sorry pal, no dice. This just won't cut it, we can't let you join. Sayonara, Au Revoir, Auf Wiedersehen, you get the picture.")
            } else if (res.data.formSubmit === "Manual Review") {
                alert("Opps, we're gonna have to take this offline, something's fishy here. This might be totally our fault, or you're secret identity isn't as bulletproof as you thought. Either way, sit tight!")
            }
        })
    }

    // form rendered
    render() {
            const { firstName, lastName, addressLine1, addressLine2, myCity, myStateCode, myZip, myCountryCode, mySSN, emailAddress, birthDate} = this.state; //cleanup, declaring everything to remove constant use of "this.state"
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type='text'
                        value={firstName}
                        onChange={this.handleChange}
                        name="firstName"
                    />
                </div>
                <br />
                <div>
                    <label>Last Name:</label>
                    <input
                        type='text'
                        value={lastName}
                        onChange={this.handleChange}
                        name="lastName"
                    />
                </div>
                <br />
                <div>
                    <label>Address Line 1:</label>
                    <input
                        type='text'
                        value={addressLine1}
                        onChange={this.handleChange}
                        name="addressLine1"
                    />
                </div>
                <br />
                <div>
                    <label>Address Line 2:</label>
                    <input
                        type='text'
                        value={addressLine2}
                        onChange={this.handleChange}
                        name="addressLine2"
                    />
                </div>
                <br />
                <div>
                    <label>City:</label>
                    <input
                        type='text'
                        value={myCity}
                        onChange={this.handleChange}
                        name="myCity"
                    />
                </div>
                <div>
                    <label>State Code:</label>
                    <input
                        type='text'
                        value={myStateCode}
                        onChange={this.handleChange}
                        name="myStateCode"
                    />
                </div>
                <br />
                <div>
                    <label>Zip Code:</label>
                    <input
                        type='text'
                        value={myZip}
                        onChange={this.handleChange}
                        name="myZip"
                    />
                </div>
                <br />
                <div>
                    <label>Country Code:</label>
                    <input
                        type='text'
                        value={myCountryCode}
                        onChange={this.handleChange}
                        name="myCountryCode"
                    />
                </div>
                <br />
                <div>
                    <label>SSN:</label>
                    <input
                        type='text'
                        value={mySSN}
                        onChange={this.handleChange}
                        name="mySSN"
                    />
                </div>
                <br />
                <div>
                    <label>Email Address:</label>
                    <input
                        type='text'
                        value={emailAddress}
                        onChange={this.handleChange}
                        name="emailAddress"
                    />
                </div>
                <br />
                <div>
                    <label>Birthday: </label>
                    <input
                        type='text'
                        value={birthDate}
                        onChange={this.handleChange}
                        name="birthDate"
                    />
                </div>
                <br />
                <div>
                    <label>
                        Submit:
                        <input type="submit"/>
                    </label>
                </div>
            </form>
        );
    }
}

export default Form