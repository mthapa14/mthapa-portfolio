import React, { Component } from 'react'
import { Button } from 'react-scroll'
import './ContactForm.css'
import Axios from 'axios';
import { SiGmail } from 'react-icons/si';


export class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             message: '',
             disabled: false,
             emailSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://127.0.0.1:4000/api-email')
            .then(res => {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    })
                })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render() {
        return (
            <div>
                <form className="modal-form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input name='name' type="text" id="name" placeholder="Enter Name" className="form-input" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" id="email" placeholder="Enter Email" className="form-input" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea as='textarea' rows='3' name='message' id="message" placeholder="Enter message" className="form-input" value={this.state.message} onChange={this.handleChange}/>
                </div>
                <button type='submit' disabled={this.state.disabled}>Send</button>

                {this.state.emailSent === true && <p className='d-inline success-msg'> Email Sent</p>}
                {this.state.emailSent === false && <p className='d-inline error-msg'> Email Not Sent</p>}
                </form>
            </div>
        )
    }
}

export default ContactForm
