import axios from 'axios';
import React from 'react';

// create component
class Form extends React.Component {
    constructor(props) {
        super(props);
        
        // declare input fields in state
        this.state = {
            name_first: '',
            name_last: '',
            address_line_1: '',
            address_line_2: '',
            address_city: '',
            address_state: '', // state code format. e.g. "NY"
            address_postal_code: '',
            address_country_code: '', // country code format, e.g. "US"
            document_ssn: '',
            email_address: '',
            birth_date: '' // must be in ISO 8601 format YYYY-MM-DD
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change events
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
        event.preventDefault();
    }


    // // call alloy API
    // componentDidMount() {
    //     const alloy_username = "Cqp2b7feDFCsJycGqjX0UI1B7aMg9c3U"
    //     const alloy_password = "F3y5uu0jNaSjvKCjcFR0Vo1GoCisB3nu"

    //     let data = `${alloy_username}:${alloy_password}`;
    //     let buff = new Buffer(data);
    //     let base64data = buff.toString('base64');

    //     axios.post('/onboarding', {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': 'Basic ${base64data'
    //         }
    //     }

    // form rendered
    render() {
            const { name_first, name_last, address_line_1, address_line_2, address_city, address_state, address_postal_code, address_country_code, document_ssn, email_address, birth_date} = this.state; //cleanup, declaring everything to remove constant use of "this.state"
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input
                        type='text'
                        value={name_first}
                        onChange={this.handleChange}
                        name="name_first"
                    />
                </div>
                <br />
                <div>
                    <label>Last Name: </label>
                    <input
                        type='text'
                        value={name_last}
                        onChange={this.handleChange}
                        name="name_last"
                    />
                </div>
                <br />
                <div>
                    <label>Address Line 1: </label>
                    <input
                        type='text'
                        value={address_line_1}
                        onChange={this.handleChange}
                        name="address_line_1"
                    />
                </div>
                <br />
                <div>
                    <label>Address Line 2: </label>
                    <input
                        type='text'
                        value={address_line_2}
                        onChange={this.handleChange}
                        name="address_line_2"
                    />
                </div>
                <br />
                <div>
                    <label>City: </label>
                    <input
                        type='text'
                        value={address_city}
                        onChange={this.handleChange}
                        name="address_city"
                    />
                </div>
                <br />
                <div>
                    <label>State Code: </label>
                    <input
                        type='text'
                        value={address_state}
                        onChange={this.handleChange}
                        name="address_state"
                    />
                </div>
                <br />
                <div>
                    <label>Zip Code: </label>
                    <input
                        type='text'
                        value={address_postal_code}
                        onChange={this.handleChange}
                        name="address_postal_code"
                    />
                </div>
                <br />
                <div>
                    <label>Country Code: </label>
                    <input
                        type='text'
                        value={address_country_code}
                        onChange={this.handleChange}
                        name="address_country_code"
                    />
                </div>
                <br />
                <div>
                    <label>SSN: </label>
                    <input
                        type='text'
                        value={document_ssn}
                        onChange={this.handleChange}
                        name="document_ssn"
                        pattern="^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$"
                    />
                </div>
                <br />
                <div>
                    <label>Email Address: </label>
                    <input
                        type='text'
                        value={email_address}
                        onChange={this.handleChange}
                        name="email_address"
                    />
                </div>
                <br />
                <div>
                    <label>Birthday: </label>
                    <input
                        type='text'
                        value={birth_date}
                        onChange={this.handleChange}
                        name="birth_date"
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
        )
    }
}

export default Form