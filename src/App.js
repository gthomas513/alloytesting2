import React from 'react';
import './App.css';

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
        const thisAttribute = event.target.value;
        this.setState({
            [event.target.name]: thisAttribute
        });
        console.log(this.state.name_first)
    }

    // handle submit events + API call
    handleSubmit = (events) => {
        
        const alloy_Token = ""
        const alloy_Secret = ""

        let basicAuth = `${alloy_Token}:${alloy_Secret}`;
        let encodedString = btoa(basicAuth)
        let proxyLink = 'https://cors-anywhere.herokuapp.com/'
        let URL = 'https://sandbox.alloy.co/v1/evaluations/'
        let proxyURL = proxyLink + URL


        const options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              accept: 'application/json',
              authorization: `Basic ${encodedString}`
            }
          };
          
            fetch(proxyURL, options)
                .then((response) => response.json())
                .then((data) => {
                    const { summary } = data;
                    const { outcome } = summary;
                    console.log(data);
                    if (outcome === "Manual Review") {
                        alert("Thanks for submitting your application, we'll be in touch shortly")
                    } else if (outcome === "Denied") {
                        alert("Sorry, your application was not successful")
                    } else {
                        alert("Congratulations, you have been approved!")
                    }
                });
                events.preventDefault();
    }

    // form rendered
    render() {
            const { name_first, name_last, address_line_1, address_line_2, address_city, address_state, address_postal_code, address_country_code, document_ssn, email_address, birth_date} = this.state; //cleanup, declaring everything to remove constant use of "this.state"
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input
                        type='text'
                        placeholder='John'
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
                        placeholder='Smith'
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
                        placeholder='123 Sunny Street'
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
                        placeholder='Apt 1A'
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
                        placeholder='Brooklyn'
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
                        placeholder='NY'
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
                        placeholder='11217'
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
                        placeholder='US'
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
                        placeholder='123456789'
                        value={document_ssn}
                        onChange={this.handleChange}
                        name="document_ssn"
                        // pattern="^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$"
                    />
                </div>
                <br />
                <div>
                    <label>Email Address: </label>
                    <input
                        type='text'
                        placeholder='john.smith@email.com'
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
                        placeholder='YYYY-MM-DD'
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