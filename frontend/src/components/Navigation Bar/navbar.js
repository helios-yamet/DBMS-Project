import React from "react";
import icon from "../../assets/dropdown_icon.png";
import avatar from "../../assets/avatar.jpg";
import './navbar.css';

class NavBar extends React.Component {
    onLogout = () => {
        this.props.setSignedIn(false);
        this.props.setUserType('');
        this.props.onRouteChange('/');
    }

    render() {
        const {isSignedIn, userType} = this.props;

        if (isSignedIn === false)
            return (
                <header className="bg-black w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 ttu tracked flex justify-between">
                        <div className="dropdown">
                            <a className="link white dib dim flex items-center">
                            <img src={icon} alt="dropdown-icon"
                                    className="dib h2 w2 br-100" />
                            </a>
                            <div className="dropdown-content">
                                <ul>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"></a></li>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"
                                        onClick={() => this.props.onRouteChange('/parent-login')}>Parent Login</a></li>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"
                                        onClick={() => this.props.onRouteChange('/subject-details')}>List of Subjects</a></li>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"
                                        onClick={() => this.props.onRouteChange('/faculty-details')}>Faculty Details</a></li>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"
                                        onClick={() => this.props.onRouteChange('/clubs')}>Clubs and Extracurriculars</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-grow flex items-center">
                            <a className="link dim white dib mr3" href="#0" title="Home"
                                onClick={() => this.props.onRouteChange('/')}>Home</a>
                            <a className="link dim white dib mr3" href="#0" title="Contact"
                                onClick={() => this.props.onRouteChange('/contact')}>Contact</a>
                            <a className="dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0"
                                onClick={() => this.props.onRouteChange('/login')}>Login</a>
                        </div>
                    </nav>
                </header>
            );
        else if(isSignedIn === true)
            return (
                <header className="bg-black w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 ttu tracked flex justify-between">
                        <div className="dropdown">
                            <a className="link white dib dim flex items-center">
                                <img src={avatar} alt="avatar"
                                    className="dib h2 w2 br-100" />
                            </a>
                            <div className="dropdown-content">
                                <ul>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"></a></li>
                                    <li><a className="f6 link dib white dim mr3 mr4-ns"
                                        onClick={() => this.props.onRouteChange('/profile')}>Profile</a></li>
                                    {
                                    userType === 'Student' ?
                                        <div>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/student-details')}>Subjects and Activities</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/report-card')}>Report Card</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/library')}>Library Dues</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/get-fee')}>Fee Detail</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/transport')}>Transport Details</a></li>
                                        </div>
                                        : 
                                    userType === 'Faculty' ? 
                                        <div>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/responsibilities')}>Responsibilities</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/enter-marks')}>Enter marks of a student</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/library')}>Library Dues</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/classroom')}>Classroom Details</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/transport')}>Transport Details</a></li>
                                        </div>
                                        : 
                                    userType === 'Admin' ? 
                                        <div>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/add-user')}>Add User</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/delete-user')}>Delete User</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/classes-list')}>Subjects and Teachers</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/canteen-list')}>Canteen Supplier</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/library-list')}>Library Dues List</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/fee-structure')}>Fee Structure</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/transport-list')}>Transport Details</a></li>
                                        </div>
                                        : 
                                        <div>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/report-card')}>Report Card</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/get-fee')}>Fee Details</a></li>
                                            <li><a className="f6 link dib white dim mr3 mr4-ns"
                                                onClick={() => this.props.onRouteChange('/transport')}>Transport Details</a></li>
                                        </div>
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="flex-grow flex items-center">
                            <a className="link dim white dib mr3" href="#0" title="Home"
                                onClick={() => this.props.onRouteChange('/user-home')}>Home</a>
                            <a className="link dim white dib mr3" href="#0" title="Contact"
                                onClick={() => this.props.onRouteChange('/contact')}>Contact Us</a>
                            <a className="dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0"
                                onClick={this.onLogout}>Logout</a>
                        </div>
                    </nav>
                </header>
            );
    }
}

export default NavBar;