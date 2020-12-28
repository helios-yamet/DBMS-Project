import React from "react";

const user = {
    fname: 'a',
    mname: 'b',
    lname: 'c',
    phone: 768454,
    email: 'test@email.com',
    company: 'Being awesome',
    id: 1234
};

class ParentLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            userType: 'Parent'
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = () => {
        this.props.setSignedIn(true);
        this.props.setUserType(this.state.userType);
        this.props.loadUser(user);
        this.props.onRouteChange('/user-home');
    }

    render() {
        return (
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Parent Login</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="rollnum">Registration Number of Your Child</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="username" 
                                id="rollnum" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="dob">Date of Birth</label>
                            <input className="b pa2 input-reset ba bg-transparent w-60" 
                                type="date" 
                                name="password" 
                                id="dob" />
                        </div>
                    </fieldset>

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Submit" 
                            onClick={this.onSubmit}  
                        />
                    </div>

                </form>
            </main>
        );
    }
}

export default ParentLogin;