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
        const thisAttribute = event.target.value;
        this.setState({
            [event.target.name]: thisAttribute
        });
        console.log(this.state.name_first)
    }

    // handle submit events + API call
    handleSubmit = (events) => {
        const alloy_username = ""
        const alloy_password = ""

        let data = `${alloy_username}:${alloy_password}`;
        let encodedString = btoa(data)
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
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
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
                        // pattern="^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$"
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