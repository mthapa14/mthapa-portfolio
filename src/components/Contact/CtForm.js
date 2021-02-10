import React, { Component } from 'react';
import axios from 'axios';
import './CtForm.css'


export default class CtForm extends Component {


state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false,
    buttonText: 'Send Message',

}


// handle inputs 

handleName = (e)=>{
this.setState({
  name:e.target.value
})
}

handleLastname = (e)=>{
  this.setState({
    lastname:e.target.value
  })
  }

handleEmail = (e)=>{
  this.setState({
    email:e.target.value
  })
  }

handleMessage = (e)=>{
  this.setState({
    message:e.target.value
  })
  }

// end of handle inputs





// for reseting the form data
resetForm=()=>{
  this.setState({
    name:'',
    lastname:'',
    message:'',
    email:'',
  
  })

  setTimeout(()=>{
    this.setState({
      sent:false,
    
    

    })
  },3000)
}

    render() {
        return (
        <div>
            <form className="modal-form">
                <div>
                    <label htmlFor="firstname">Name</label>
                    <input type="text" required name="name" className="form-input" value={this.state.name} onChange={this.handleName} placeholder="your firstname..." />
                </div>
        
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" required name="lastname" className="form-input" value={this.state.lastname} onChange={this.handleLastname} placeholder="your lastname..." />
                </div>
        
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-input" value={this.state.email} onChange={this.handleEmail} placeholder="your email..." required />
                </div>
        
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required className="form-input" value={this.state.message} id="" cols="30" rows="5" placeholder="your message..." onChange={this.handleMessage}></textarea>
                </div>
        
                
                <div className={this.state.sent?'msg msgAppear':'msg'}>Message has been sent</div>
                <button type="submit" onSubmit={this.resetForm}>Submit</button>
           </form>
        </div>
        )
    }
}