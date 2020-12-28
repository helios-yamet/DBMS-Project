import React from "react";

class FacultyDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            searchfield: '',
            subs: []
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        const subs = [
            { subject: 'Chemistry', name: 'John Smith', email: 'john@email.com', phone: '+1 (999) 555-5555' },
            { subject: 'Physics', name: 'Jane Smith', email: 'jane@email.com', phone: '+1 (999) 555-5555' },
            { subject: 'English', name: 'Olivia Harper', email: 'olive@email.com', phone: '+1 (999) 555-5555' },
            { subject: 'Biology', name: 'Sarah Levy', email: 'sarah@email.com', phone: '+1 (999) 555-5555' },
            { subject: 'Computer Science', name: 'Juan Carlos', email: 'juan@email.com', phone: '+1 (999) 555-5555' },
            { subject: 'Mathematics', name: 'Mike Jones', email: 'mike@email.com', phone: '+1 (999) 555-5555' },
            { subject: 'Social Studies', name: 'Evan McHale', email: 'evan@email.com', phone: '+1 (999) 555-5555' },
        ];

        this.setState({ subs: subs });
    }

    render() {
        let items = [];
        const {subs, searchfield} = this.state;

        let filteredSubs = subs.filter((teacher => {
            return teacher.name.toLowerCase().includes(searchfield.toLowerCase()) 
            || teacher.subject.toLowerCase().includes(searchfield.toLowerCase());
        }));

        filteredSubs.forEach(teacher =>
            items.push(
            <li
                className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                <img className="w2 h2 w3-ns h3-ns br-100" src="https://cdn3.iconfinder.com/data/icons/women-avatars/314/2-01-512.png" />
                <div className="pl3 flex-auto">
                    <span className="f6 db black-70">{teacher.name}</span>
                    <span className="f6 db black-70">{teacher.subject}</span>
                    <span className="f6 db black-70">{teacher.email}</span>
                </div>
                <div>
                    <a href="tel:" className="f6 link blue hover-dark-gray">{teacher.phone}</a>
                </div>
            </li>
        ));

        return (
            <ul className="list pa4 mt0 measure center">
                <input
                    className="pa3 mv3 ba b--black bg-transparent w-100"
                    type="search"
                    placeholder="Enter subject name or faculty name..."
                    onChange={this.onSearchChange}
                />
                {items}
            </ul>
        );
    }
}

export default FacultyDetails;