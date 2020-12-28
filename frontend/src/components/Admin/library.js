import React from "react";

class LibraryList extends React.Component {
    constructor() {
        super();
        this.state = {
            details: [],
            searchfield: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onRemove = (event) => {
        event.preventDefault();

        let newdetails = this.state.details;
        console.log(event.target.name);
        newdetails.splice(event.target.name, 1);
        console.log(newdetails);
        this.setState({ details: newdetails });
    }

    componentDidMount() {
        // fetch(`http://localhost:3001/profile`)
        //     .then(res => res.json())
        //     .then(items => console.log(items));
        
        this.setState({
            details: [
                { cardnum: 1010101, regnum: 1004, empid: 8585, dues: 0 },
                { cardnum: 2020202, regnum: 1103, empid: 2025, dues: 20 },
                { cardnum: 3030303, regnum: 12021, empid: 1226, dues: 15 },
                { cardnum: 5050505, regnum: 8033, empid: 2575, dues: 0 },
                { cardnum: 1080808, regnum: 12224, empid: 7815, dues: 5 },
            ]
        });
    }

    render() {
        let items = [], filteredDetails = this.state.details;

        if(this.state.searchfield !== '')
            filteredDetails = this.state.details.filter((d => {
                return (d.cardnum+'').indexOf(this.state.searchfield) > -1
                    || (d.regnum+'').indexOf(this.state.searchfield) > -1
                    || (d.empid+'').indexOf(this.state.searchfield) > -1
            }));

        filteredDetails.forEach((e, index) => items.push(
            <tr class="stripe-dark">
                <td class="pa3">{e.cardnum}</td>
                <td class="pa3">{e.regnum}</td>
                <td class="pa3">{e.empid}</td>
                <td class="pa3">{e.dues}</td>
            </tr>
        ));

        return (
            <div class="pa4">
                <input
                    className="flex center pa3 mv4 ba b--black bg-transparent w-80"
                    type="search"
                    name="searchfield"
                    placeholder="Enter library card number, student registration number or employee ID to search..."
                    onChange={this.onChange}
                />
                <div className="overflow-auto">
                    <table className="mv3 f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Library Card Number</th>
                                <th className="fw6 tl pa3 bg-white">Student Registration Number</th>
                                <th className="fw6 tl pa3 bg-white">Employee ID</th>
                                <th className="fw6 tl pa3 bg-white">Dues</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LibraryList;