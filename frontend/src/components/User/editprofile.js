import React from "react";

class EditProfile extends React.Component {
    constructor(props) {
        super();
        this.state = props.user;
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();

        if(this.props.userType === 'Student')
        fetch("http://localhost:3001/edit",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact: this.state.phone,
                ID: this.state.id,
                fname: this.state.fname,
                mname: this.state.mname,
                lname: this.state.lname,
                dob: this.state.dob,
                street: this.state.street,
                area: this.state.area,
                bldgno: this.state.bldg,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        if(this.props.userType === 'Parent')
        fetch("http://localhost:3001/edit",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact: this.state.phone,
                ID: this.state.id,
                fname: this.state.fname,
                mname: this.state.mname,
                lname: this.state.lname,
                job: this.state.company,
                mail: this.state.email,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        if(this.props.userType === 'Faculty' || this.props.userType === 'Admin')
        fetch("http://localhost:3001/edit",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact: this.state.phone,
                id: this.state.id,
                fname: this.state.fname,
                mname: this.state.mname,
                lname: this.state.lname,
                dob: this.state.dob,
                street: this.state.street,
                area: this.state.area,
                bldgno: this.state.bldg,
                marital: this.state.maritalstatus,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        this.props.loadUser(this.state);
        this.props.onRouteChange('/profile');
    }

    render() {
        const { user, userType } = this.props;
        return (
            <main className="pa4 black-80">
                <form className="measure center">
                    {
                (this.props.userType === 'Student' || this.props.userType === 'Faculty' || this.props.userType === 'Admin') &&
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Edit Profile</legend>
                        <div className="mt3 flex justify-between">
                            <div>
                                <label className="db fw6 lh-copy f6" for="id">
                                    {this.props.userType === 'Student' ? 'Registration Number' : 'Employee ID'}
                                </label>
                                <input className="pa2 input-reset ba bg-transparent"
                                    type="number"
                                    name="id"
                                    placeholder={user.id}
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="db fw6 lh-copy f6" for="id">
                                    Date of Joining
                                </label>
                                <input className="pa2 input-reset ba bg-transparent"
                                    type="date"
                                    name="doj"
                                    placeholder={user.doj}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mv3 flex justify-between">
                            <div>
                                <label className="db fw6 lh-copy f6" for="name">First Name</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    type="text"
                                    name="fname"
                                    defaultValue={user.fname}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <label className="db fw6 lh-copy f6" for="name">Last Name</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    type="text"
                                    name="lname"
                                    defaultValue={user.lname}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="mv3 flex justify-between">
                            <div>
                                <label className="db fw6 lh-copy f6" for="name">
                                    Middle Name <span class="normal black-60">(optional)</span>
                                </label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    type="text"
                                    name="mname"
                                    onChange={this.onChange}
                                    defaultValue={user.mname}
                                />
                            </div>
                            <div>
                                <label className="db fw6 lh-copy f6" for="id">
                                    Date of Birth
                                        </label>
                                <input className="pa2 input-reset ba bg-transparent"
                                    type="date"
                                    name="dob"
                                    defaultValue={user.dob}
                                />
                            </div>
                        </div>
                        <div className="mv3 flex justify-between">
                            <div>
                                <label className="db fw6 lh-copy f6" for="phone">Phone Number</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    type="number"
                                    name="phone"
                                    defaultValue={user.phone}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <label className="db fw6 lh-copy f6" for="busnum">Bus Number</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    type="number"
                                    name="busnum"
                                    defaultValue={user.busnum}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="name">Address</label>
                            <small id="name-desc" class="mv2 f6 black-60 db mb2">Building Number</small>
                            <input className="mb2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                type="text"
                                name="bldg"
                                defaultValue={user.bldg}
                                onChange={this.onChange}
                            />
                            <small id="name-desc" class="f6 black-60 db mb2">Street Name</small>
                            <input className="mb2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="street"
                                defaultValue={user.street}
                                onChange={this.onChange}
                            />
                            <small id="name-desc" class="f6 black-60 db mb2">Area</small>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="area"
                                defaultValue={user.area}
                                onChange={this.onChange}
                            />
                        </div>
                        {this.props.userType === 'Student' ?
                            <div className="mv3 flex justify-between">
                                <div>
                                    <label className="db fw6 lh-copy f6" for="standard">Standard</label>
                                    <input className="b pa2 input-reset ba bg-transparent"
                                        type="number"
                                        name="standard"
                                        placeholder={user.standard}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" for="section">Section</label>
                                    <input className="b pa2 input-reset ba bg-transparent"
                                        type="text"
                                        name="section"
                                        placeholder={user.section}
                                        disabled
                                    />
                                </div>
                            </div>
                            : this.props.userType === 'Faculty' ?
                                <div className="mv3 flex justify-between">
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="status">Marital Status</label>
                                        <input className="b pa2 input-reset ba bg-transparent"
                                            type="text"
                                            name="maritalstatus"
                                            defaultValue={user.maritalstatus}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="subjecttaught">Subject Taught</label>
                                        <input className="b pa2 input-reset ba bg-transparent"
                                            type="text"
                                            maxLength="5"
                                            name="subjecttaught"
                                            placeholder={user.subjecttaught}
                                            disabled
                                        />
                                    </div>
                                </div>
                                :
                                <div className="mv3 flex justify-between">
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="status">Marital Status</label>
                                        <input className="b pa2 input-reset ba bg-transparent"
                                            type="text"
                                            name="maritalstatus"
                                            defaultValue={user.maritalstatus}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="role">Role</label>
                                        <input className="b pa2 input-reset ba bg-transparent"
                                            type="text"
                                            name="role"
                                            placeholder={user.role}
                                            disabled
                                        />
                                    </div>
                                </div>}
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="name">Number of days absent</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                type="number"
                                name="absentdays"
                                placeholder={user.absentdays}
                                disabled
                            />
                        </div>
                    </fieldset>
            }
            {
                this.props.userType === 'Parent' &&
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Edit Profile</legend>
                            <div className="mt3 flex justify-between">
                                <div>
                                    <label className="db fw6 lh-copy f6" for="id">
                                        Registration Number of Child
                                    </label>
                                    <input className="pa2 input-reset ba bg-transparent"
                                        type="number"
                                        name="id"
                                        placeholder={user.id}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" for="phone">Phone Number</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="number"
                                        name="phone"
                                        defaultValue={user.phone}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="mv3 flex justify-between">
                                <div>
                                    <label className="db fw6 lh-copy f6" for="name">First Name</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="text"
                                        name="fname"
                                        defaultValue={user.fname}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" for="name">Last Name</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="text"
                                        name="lname"
                                        defaultValue={user.lname}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="mv3 flex justify-between">
                                <div>
                                    <label className="db fw6 lh-copy f6" for="name">
                                        Middle Name <span class="normal black-60">(optional)</span>
                                    </label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="text"
                                        name="mname"
                                        onChange={this.onChange}
                                        defaultValue={user.mname}
                                    />
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" for="email">Email Address</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="email"
                                        name="email"
                                        defaultValue={user.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </fieldset>
            }

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Finish"
                            onClick={this.onSubmit}
                        />
                    </div>

                </form>
            </main>
        );
    }
}

export default EditProfile;