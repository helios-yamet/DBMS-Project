import React from "react";

const user = {
    id: 0,
    fname: 'a',
    mname: 'b',
    lname: 'c',
    phone: 768454,
    email: 'test@email.com',
    bldg: '9635',
    street: 'Rock Maple',
    area: 'Hoboken',
    dob: '2006-06-26',
    standard: 0,
    maritalstatus: 'Single',
    section: 'B',
    subjecttaught: 'Fun',
    doj: '1999-09-10',
    absentdays: 0,
    role: 'Being awesome'
};

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            userType: 'Student'
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = () => {
        fetch("http://localhost:3001/signin",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userType: this.props.userType,
                id: this.state.username,
                password: this.state.password,
            })
        })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                 this.props.setSignedIn(true);
                 this.props.setUserType(this.state.userType);
                 this.props.loadUser(user);
                 this.props.onRouteChange(`/user-home`);
             });

        // this.props.setSignedIn(true);
        // this.props.setUserType(this.state.userType);
        // this.props.loadUser(user);
        // this.props.onRouteChange(`/user-home`);
    }

    render() {
        return(
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="username">Username</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="username" 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password" 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="type">User Type</label>
                            <select className="b pa2 input-reset ba bg-transparent w-100" 
                                name="userType"
                                onChange={this.onChange}
                            >
                                <option value="Student" >Student</option>
                                <option value="Admin">Admin</option>
                                <option value="Faculty">Faculty</option>
                            </select>
                        </div>
                    </fieldset>
                                
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                            onClick={this.onSubmit}
                        />
                    </div>
                                  
                </form>
            </main>
        );
    }
}

export default Login;