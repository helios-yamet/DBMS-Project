import React from "react";

class AddUser extends React.Component {
    constructor(){
        super();
        this.state = {
            userType: '',
            stage: 0
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onNext = (event) => {
        event.preventDefault();

        this.setState({ stage: this.state.stage + 1 });
    }

    onPrevious = (event) => {
        event.preventDefault();

        this.setState({ stage: this.state.stage - 1 });
    }

    onSubmit = (event) => {
        event.preventDefault();

        // if(userType === 'Student')
            // fetch("http://localhost:3001/getFees",{
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         contact: this.state.phone,
            //         ID: this.state.id,
            //         fname: this.state.fname,
            //         mname: this.state.mname,
            //         lname: this.state.lname,
            //         admission: this.state.doj,
            //         dob: this.state.dob,
            //         street: this.state.street,
            //         area: this.state.area,
            //         bldgno: this.state.bldg,
            //         absent: this.state.absentdays,
            //         paid: this.state.feepaid,
            //         busno: this.state.busnum,
            //         grade: this.state.standard,
            //         section: this.state.section,
            //     })
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data));

        // if(userType === 'Parent')
            // fetch("http://localhost:3001/getFees",{
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         contact: this.state.phone,
            //         ID: this.state.id,
            //         fname: this.state.fname,
            //         mname: this.state.mname,
            //         lname: this.state.lname,
            //         job: this.state.company,
            //         mail: this.state.email,
            //     })
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data));

        // if(userType === 'Faculty')
            // fetch("http://localhost:3001/getFees",{
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         number: this.state.phone,
            //         empID: this.state.id,
            //         f: this.state.fname,
            //         mname: this.state.mname,
            //         lname: this.state.lname,
            //         doj: this.state.doj,
            //         dob: this.state.dob,
            //         street: this.state.street,
            //         area: this.state.area,
            //         bldgno: this.state.bldg,
            //         absent: this.state.absentdays,
            //         busno: this.state.busnum,
            //         salary: this.state.salary,
            //         sub: this.state.subjecttaught,
            //         marital: this.state.maritalstatus,
            //         supervisor: this.state.supervisor,
            //     })
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data));

        // if(userType === 'Admin')
            // fetch("http://localhost:3001/getFees",{
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         number: this.state.phone,
            //         empID: this.state.id,
            //         f: this.state.fname,
            //         mname: this.state.mname,
            //         lname: this.state.lname,
            //         doj: this.state.doj,
            //         dob: this.state.dob,
            //         street: this.state.street,
            //         area: this.state.area,
            //         bldgno: this.state.bldg,
            //         absent: this.state.absentdays,
            //         busno: this.state.busnum,
            //         salary: this.state.salary,
            //         role: this.state.role,
            //         supervisor: this.state.supervisor,
            //         marital: this.state.maritalstatus,
            //     })
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data));

        this.setState({ stage: 2 });
    }

    onRepeat = (event) => {
        event.preventDefault();

        this.setState({ stage: 0 });
    }

    render() {
        return (
            <div>
            {
                this.state.stage === 0 && 
                    <article class="br2 ba dark-gray b--black-30 shadow-1 mv4 w-100 w-50-m w-25-l mw5 center">
                        <div class="pa2 ph3-ns">
                            <form class="pa3">
                                <fieldset id="user-type" class="bn">
                                    <legend class="fw7 mb2">User Type</legend>
                                    <div class="flex items-center mb2">
                                        <input class="mr2" type="radio" name="userType" id="Student" value="Student" onChange={this.onChange} />
                                        <label for="Student" class="lh-copy">Student</label>
                                    </div>
                                    <div class="flex items-center mb2">
                                        <input class="mr2" type="radio" name="userType" id="Parent" value="Parent" onChange={this.onChange} />
                                        <label for="Parent" class="lh-copy">Parent</label>
                                    </div>
                                    <div class="flex items-center mb2">
                                        <input class="mr2" type="radio" name="userType" id="Faculty" value="Faculty" onChange={this.onChange} />
                                        <label for="Faculty" class="lh-copy">Faculty</label>
                                    </div>
                                    <div class="flex items-center mb2">
                                        <input class="mr2" type="radio" name="userType" id="Admin" value="Admin" onChange={this.onChange} />
                                        <label for="Admin" class="lh-copy">Admin</label>
                                    </div>
                                    <button href="#0" class=" mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph3 ba border-box"
                                        onClick={this.onNext}>Next</button>
                                </fieldset>
                            </form>
                        </div>
                    </article>
            }
            
            {
                this.state.stage === 1 && this.state.userType === 'Parent' &&
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Add New User</legend>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" for="id">Registration Number of Child</label>
                                    <input className="b pa2 input-reset ba bg-transparent w-100"
                                        type="number"
                                        name="id"
                                    />
                                </div>
                            <div className="mv3 flex justify-between">
                                <div>
                                    <label className="db fw6 lh-copy f6" for="name">First Name</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="text"
                                        name="fname"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" for="name">Last Name</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="text"
                                        name="lname"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="name">
                                    Middle Name <span class="normal black-60">(optional)</span>
                                </label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="mname"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="company">Company</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="company"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mv3 flex justify-between">
                                <div>
                                    <label className="db fw6 lh-copy f6" for="phone">Phone Number</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="number"
                                        name="phone"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" for="busnum">Email Address</label>
                                    <input className="b pa2 input-reset ba bg-transparent"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                            </div>
                            </fieldset>

                            <div className="flex justify-between">
                                <button href="#0" class=" mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph3 ba border-box"
                                    onClick={this.onPrevious}>Previous</button>
                                <button href="#0" class=" mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph4 ba border-box"
                                    onClick={this.onSubmit}>Finish</button>
                            </div>

                        </form>
                    </main>
            }

            {
                    this.state.stage === 1 && 
                    (this.state.userType === 'Student' || this.state.userType === 'Faculty' || this.state.userType === 'Admin') &&
                    <main className="pa4 black-80">
                        <form className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Add New User</legend>
                                <div className="mt3 flex justify-between">
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="id">
                                            {this.state.userType === 'Student' ? 'Registration Number' : 'Employee ID'}
                                        </label>
                                        <input className="pa2 input-reset ba bg-transparent"
                                            type="number"
                                            name="id"
                                        />
                                    </div>
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="id">
                                            Date of Joining
                                        </label>
                                        <input className="pa2 input-reset ba bg-transparent"
                                            type="date"
                                            name="doj"
                                        />
                                    </div>
                                </div>
                                <div className="mv3 flex justify-between">
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="name">First Name</label>
                                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                            type="text"
                                            name="fname"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="name">Last Name</label>
                                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                            type="text"
                                            name="lname"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="mv3 flex justify-between">
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="name">
                                            Middle Name <span class="normal black-60">(optional)</span>
                                        </label>
                                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90"
                                            type="text"
                                            name="mname"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="id">
                                            Date of Birth
                                        </label>
                                        <input className="pa2 input-reset ba bg-transparent"
                                            type="date"
                                            name="dob"
                                        />
                                    </div>
                                </div>
                                <div className="mv3 flex justify-between">
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="phone">Phone Number</label>
                                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                            type="number"
                                            name="phone"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="db fw6 lh-copy f6" for="busnum">
                                            Bus Number <span class="normal black-60">(optional)</span>
                                        </label>
                                        <input className="b pa2 input-reset ba bg-transparent"
                                            type="number"
                                            name="busnum"
                                        />
                                    </div>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" for="name">Address</label>
                                    <small id="name-desc" class="mv2 f6 black-60 db mb2">Building Number</small>
                                    <input className="mb2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                        type="text"
                                        name="bldg"
                                        onChange={this.onChange}
                                    />
                                    <small id="name-desc" class="f6 black-60 db mb2">Street Name</small>
                                    <input className="mb2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="street"
                                        onChange={this.onChange}
                                    />
                                    <small id="name-desc" class="f6 black-60 db mb2">Area</small>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="area"
                                        onChange={this.onChange}
                                    />
                                </div>
                                {this.state.userType === 'Student' ?
                                <div>
                                    <div className="mv3 flex justify-between">
                                        <div>
                                            <label className="db fw6 lh-copy f6" for="standard">Standard</label>
                                            <input className="b pa2 input-reset ba bg-transparent"
                                                type="number"
                                                name="standard"
                                            />
                                        </div>
                                        <div>
                                            <label className="db fw6 lh-copy f6" for="section">Section</label>
                                            <input className="b pa2 input-reset ba bg-transparent"
                                                type="text"
                                                name="section"
                                            />
                                        </div>
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f6" for="feepaid">Fee Paid</label>
                                            <div class="flex items-center mb2">
                                                <input class="mr2" type="radio" name="feepaid" id="Yes" value="Yes" onChange={this.onChange} />
                                                <label for="feepaid" class="lh-copy">Yes</label>
                                            </div>
                                            <div class="flex items-center mb2">
                                                <input class="mr2" type="radio" name="feepaid" id="No" value="No" onChange={this.onChange} />
                                                <label for="feepaid" class="lh-copy">No</label>
                                            </div>
                                    </div>
                                </div>
                                    : this.state.userType === 'Faculty' ?
                                    <div>
                                        <div className="mv3 flex justify-between">
                                            <div>
                                                <label className="db fw6 lh-copy f6" for="status">Marital Status</label>
                                                <input className="b pa2 input-reset ba bg-transparent"
                                                    type="text"
                                                    name="maritalstatus"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="db fw6 lh-copy f6" for="subjecttaught">Subject Taught</label>
                                                <input className="b pa2 input-reset ba bg-transparent"
                                                    type="text"
                                                    maxLength="5"
                                                    name="subjecttaught"
                                                />
                                            </div>
                                            </div>
                                            <div className="mv3">
                                                <label className="db fw6 lh-copy f6" for="salary">Salary</label>
                                                <input className="b pa2 input-reset ba bg-transparent w-100"
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    name="salary"
                                                />
                                            </div>
                                            <div className="mv3">
                                                <label className="db fw6 lh-copy f6" for="supervisor">HOD's Employee ID</label>
                                                <input className="b pa2 input-reset ba bg-transparent w-100"
                                                    type="number"
                                                    name="supervisor"
                                                />
                                            </div>
                                        </div>
                                        :
                                    <div>
                                        <div className="mv3 flex justify-between">
                                            <div>
                                                <label className="db fw6 lh-copy f6" for="status">Marital Status</label>
                                                <input className="b pa2 input-reset ba bg-transparent"
                                                    type="text"
                                                    name="maritalstatus"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="db fw6 lh-copy f6" for="role">Role</label>
                                                <input className="b pa2 input-reset ba bg-transparent"
                                                    type="text"
                                                    name="role"
                                                />
                                            </div>
                                        </div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" for="salary">Salary</label>
                                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                name="salary"
                                            />
                                        </div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" for="supervisor">Supervisor's Employee ID</label>
                                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                                type="number"
                                                name="supervisor"
                                            />
                                        </div>
                                    </div>
                                        }
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" for="name">Number of leave days availed</label>
                                    <input className="b pa2 input-reset ba bg-transparent w-100"
                                        type="number"
                                        name="absentdays"
                                        min="0"
                                        defaultValue="0"
                                    />
                                </div>
                            </fieldset>

                            <div className="flex justify-between">
                                <button href="#0" class=" mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph3 ba border-box"
                                    onClick={this.onPrevious}>Previous</button>
                                <button href="#0" class=" mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph4 ba border-box"
                                    onClick={this.onSubmit}>Finish</button>
                            </div>

                        </form>
                    </main>
            }

            {
                this.state.stage === 2 &&
                    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div class="tc">
                            <img src="https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg" 
                            class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                                <h1 class="f3 mb2">User added succesfully</h1>

                            <button href="#0" class="mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph3 ba border-box"
                                onClick={this.onRepeat}>Add another user</button>
                        </div>
                    </article>
            }
            </div>
        );
    }
}

export default AddUser;