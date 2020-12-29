import React from "react";
var array = []

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
        fetch(`http://localhost:3001/external/Employees`)
            .then(res => res.json())
            .then(items => items.forEach(element => {
                console.log(element)
                if(element['Subject Taught'] !== null)
                    array.push({ 
                        subject: element['Subject Taught'], 
                        name: `${element["First_Name"]} ${element["Middle_Name"] !== '' && element["Middle_Name"] !== null ? element["Middle_Name"] + ' ' : ' '}${element["Last_Name"]}`, 
                        id: element['Employee ID'],
                        phone: element['Contact Number'],
                    });

                this.setState({
                    details: array
                });
            }));

        this.setState({ subs: array });
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
                    <span className="f6 db black-70">{teacher.id}</span>
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