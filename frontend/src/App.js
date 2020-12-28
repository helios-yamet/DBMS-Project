import './App.css';
import React from "react";
import NavBar from './components/Navigation Bar/navbar';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import ParentLogin from './components/Login/parentLogin';
import SubjectList from './components/Subject/list';
import FacultyDetails from './components/Faculty/details';
import UserHome from './components/User/home';
import Profile from './components/User/profile';
import EditProfile from './components/User/editprofile';
import Library from './components/User/library';
import Transport from './components/User/transport';
import ReportCard from './components/Student/reportcard';
import EnterMarks from './components/Faculty/entermarks';
import FeeDetail from './components/Student/fees';
import Classroom from './components/Faculty/classroom';
import StudentDetails from './components/Student/details';
import FacultyResponsibilities from './components/Faculty/responsibilities';
import ClubsList from './components/Clubs/list';
import CanteenList from './components/Admin/canteen';
import TransportList from './components/Admin/transport';
import LibraryList from './components/Admin/library';
import AddUser from './components/Admin/adduser';
import FeeStructure from './components/Admin/feestructure';
import ClassesList from './components/Admin/classes';
import DeleteUser from './components/Admin/deleteuser';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      userType: '',
      route: '/',
      user: {}
    }
  }

  setSignedIn = (status) => {
    console.log(`Request to make 'isSignedIn' to ${status}`);
    this.setState({ isSignedIn: status });
  }

  setUserType = (type) => {
    console.log(`Request to make 'userType' to ${type}`);
    this.setState({ userType: type });
  }

  onRouteChange = (route) => {
    console.log('ROUTE', route);
    this.setState({ route: route });
  }

  loadUser = (user) => {
    this.setState({ user: user });
  }

  renderSwitch(param) {
    switch (param) {
      case '/':
        return <Home />;
      case '/login': 
        return <Login setSignedIn={this.setSignedIn} setUserType={this.setUserType} onRouteChange={this.onRouteChange} loadUser={this.loadUser} />;
      case '/parent-login':
        return <ParentLogin setSignedIn={this.setSignedIn} setUserType={this.setUserType} onRouteChange={this.onRouteChange} loadUser={this.loadUser} />;
      case '/contact':
        return <Contact />;
      case '/subject-details':
        return <SubjectList />;
      case '/faculty-details':
        return <FacultyDetails />;
      case '/user-home':
        return <UserHome />;
      case '/profile':
        return <Profile user={this.state.user} userType={this.state.userType} onRouteChange={this.onRouteChange}/>;
      case '/edit-profile':
        return <EditProfile user={this.state.user} userType={this.state.userType} onRouteChange={this.onRouteChange} loadUser={this.loadUser} />;
      case '/library':
        return <Library userType={this.state.userType} />;
      case '/transport':
        return <Transport />;
      case '/report-card':
        return <ReportCard id={this.state.user.id} />;
      case '/enter-marks':
        return <EnterMarks />;
      case '/get-fee':
        return <FeeDetail id={this.state.user.id} />;
      case '/classroom':
        return <Classroom />;
      case '/student-details':
        return <StudentDetails user={this.state.user} />;
      case '/responsibilities':
        return <FacultyResponsibilities user={this.state.user} />;
      case '/clubs':
        return <ClubsList />;
      case '/canteen-list':
        return <CanteenList />;
      case '/transport-list':
        return <TransportList />;
      case '/library-list':
        return <LibraryList />;
      case '/add-user':
        return <AddUser />;
      case '/delete-user':
        return <DeleteUser />;
      case '/fee-structure':
        return <FeeStructure />;
      case '/classes-list':
        return <ClassesList />;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <NavBar isSignedIn={this.state.isSignedIn} userType={this.state.userType} setSignedIn={this.setSignedIn} setUserType={this.setUserType} onRouteChange={this.onRouteChange} />
        { this.renderSwitch(this.state.route) }
      </div>
    );
  }
}

export default App;