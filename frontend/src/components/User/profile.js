import React from "react";

class Profile extends React.Component {
    render() {
        const {user, userType} = this.props;
        console.log(user);
        return(
            <section class="pa3 pa5-ns">
                <article class="hide-child relative mw5 center">
                    <div class="tc">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEs54VfKttWWHlHNZ0sHxufrHDhFUOwHOrBg&usqp=CAU" 
                            class="br-100 h4 w4 dib ba b--black-05 pa2" title="avatar" />
                            <h1 class="f3 mb2">
                                {`${user.fname} ${user.mname !== '' ? user.mname + ' ' : ' '}${user.lname}`}
                            </h1>
                        </div>
                </article>

                <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <div class = "flex justify-between bg-near-white">
                        <h1 class="f4 br3 br--top black-90 mv0 pv2 ph3">Personal Details</h1>
                        <a class="f6 flex items-center pv2 ph3 fw5 no-underline bg-animate hover-bg-light-blue black" 
                            href="#0"
                            onClick={() => this.props.onRouteChange('/edit-profile')}
                        >
                            Edit
                        </a>
                    </div>
                    {
                        (userType === 'Student' || userType === 'Faculty' || userType === 'Admin') &&
                        <div class="pa3 bt b--black-10">
                            <dl class="lh-title ph4 mt0">
                                <dt class="f6 b">
                                    {userType === 'Student' ? 'Registration Number' : 'Employee ID'}
                                </dt>
                                <dd class="ml0">{user.id}</dd>
                                <dt class="f6 b mt2">Phone Number</dt>
                                <dd class="ml0">{user.phone}</dd>
                                <dt class="f6 b mt2">Email Address</dt>
                                <dd class="ml0">{user.email}</dd>
                                <dt class="f6 b mt2">Date of Birth</dt>
                                <dd class="ml0">{user.dob}</dd>
                                <dt class="f6 b mt2">Address</dt>
                                <dd class="ml0">{`${user.bldg}, ${user.street}, ${user.area}`}</dd>
                                <dt class="f6 b mt2">Date of Joining</dt>
                                <dd class="ml0">{user.doj}</dd>
                                <dt class="f6 b mt2">
                                    {userType === 'Student' ? 'Standard' : 'Marital Status'}
                                </dt>
                                <dd class="ml0">
                                    {userType === 'Student' ? user.standard : user.maritalstatus}
                                </dd>
                                <dt class="f6 b mt2">
                                    {userType === 'Student' ? 'Section' : ''}
                                </dt>
                                <dd class="ml0">
                                    {userType === 'Student' ? user.section : ''}
                                </dd>
                                <dt class="f6 b mt2">
                                    {userType === 'Faculty' ? 'Subject Taught' : ''}
                                </dt>
                                <dd class="ml0">
                                    {userType === 'Faculty' ? user.subjecttaught : ''}
                                </dd>
                                <dt class="f6 b mt2">
                                    {userType === 'Admin' ? 'Role' : ''}
                                </dt>
                                <dd class="ml0">
                                    {userType === 'Admin' ? user.role : ''}
                                </dd>
                                <dt class="f6 b mt2">Number of days absent</dt>
                                <dd class="ml0">{user.absentdays}</dd>
                            </dl>
                        </div>
                    }

                    {
                        userType === 'Parent' &&
                        <div class="pa3 bt b--black-10">
                            <dl class="lh-title ph4 mt0">
                                <dt class="f6 b">
                                    Registration Number of Child
                                </dt>
                                <dd class="ml0">{user.id}</dd>
                                <dt class="f6 b mt2">Phone Number</dt>
                                <dd class="ml0">{user.phone}</dd>
                                <dt class="f6 b mt2">Email Address</dt>
                                <dd class="ml0">{user.email}</dd>
                                <dt class="f6 b mt2">Company</dt>
                                <dd class="ml0">{user.company}</dd>
                            </dl>
                        </div>
                    }
                </article>
            </section>
        );
    }
}

export default Profile;