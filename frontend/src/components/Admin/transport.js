import React from "react";
var array = []

class TransportList extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            allow: 0,
            details: [],
            searchfield: '',
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onEdit = (event) => {
        event.preventDefault();
        if (this.state.edit === true)
            return alert("Edit fee amount one class at a time");

        this.setState({ edit: true });
        this.setState({ allow: parseInt(event.target.name) });
    }

    onRemove = (event) => {
        event.preventDefault();

        let newdetails = this.state.details;
        console.log(event.target.name);

        const pos = newdetails.findIndex(d => `${d.busnum}` === event.target.name);

        fetch("http://localhost:3001/admin/delete-item", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'Transport',
                pk: 'Bus Number',
                key1: newdetails[pos].busnum,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        newdetails.splice(pos, 1);
        console.log(pos, newdetails);
        this.setState({ details: newdetails });
    }

    onSave = (event) => {
        event.preventDefault();
        this.setState({ edit: false });

        let newdetails = this.state.details;
        let newamount = this.state.fees;

        for (let i = 0; i < newdetails.length; i++) {
            if (newdetails[i].busnum === parseInt(event.target.name))
                if (!isNaN(parseInt(newamount)))
                {
                    newdetails[i].fees = parseInt(newamount);
                    fetch("http://localhost:3001/admin/modify-item", {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            table: 'Transport',
                            key1: newdetails[i].busnum,
                            value: newdetails[i].fees,
                        })
                    })
                        .then(res => res.json())
                        .then(data => console.log(data));
                    break;
                }
        }

        this.setState({ details: newdetails });
        console.log(newdetails);
    }

    onAdd = (event) => {
        event.preventDefault();

        let newdetails = this.state.details;

        newdetails.push({
            fees: parseInt(this.state.fees),
            busnum: parseInt(this.state.busnum),
            route: this.state.route,
            driverid: this.state.driverid,
        });
        console.log(this.state);

        fetch("http://localhost:3001/admin/add-transport",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                busno: this.state.busnum,
                route: this.state.route,
                fees: this.state.fees,
                empID: this.state.driverid,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        this.setState({ details: newdetails });
        document.getElementById("myform").reset();
    }

    componentDidMount() {
        array = [];

        fetch(`http://localhost:3001/admin/view-transport`)
            .then(res => res.json())
            .then(items => items.forEach(element => {
        array.push({ fees: element['Fees'], busnum: element['Bus Number'], route: element['Route'], driverid: element['Employee ID'] });

        this.setState({
            details: array
        });

        // this.setState({
        //     details: [
        //         { fees: 2700, busnum: 9, route: 'A', driverid: 1234 },
        //         { fees: 2750, busnum: 19, route: 'B', driverid: 1234 },
        //         { fees: 3000, busnum: 10, route: 'C', driverid: 1234 },
        //         { fees: 3500, busnum: 11, route: 'F', driverid: 1234 },
        //         { fees: 3800, busnum: 12, route: 'B', driverid: 1234 },
        //     ]
        // });
    }))}

    render() {
        let items = [];

        let filteredDetails = this.state.details.filter((d => {
            return d.busnum === (parseInt(this.state.searchfield))
                || d.route.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || d.driverid === (parseInt(this.state.searchfield));
        }));
        console.log(filteredDetails.length);

        if (filteredDetails.length === 0)
            items.push(
                <tr class="stripe-dark">
                    <td class="pa3">-NA-</td>
                    <td class="pa3">-NA-</td>
                    <td class="pa3">-NA-</td>
                    <td class="pa3">-NA-</td>
                    <td class="pa3">-NA-</td>
                    <td class="pa3">-NA-</td>
                </tr>
            );

        filteredDetails.forEach(e => items.push(
            <tr class="stripe-dark">
                <td class="pa3">{e.busnum}</td>
                <td class="pa3">{e.route}</td>
                <td class="pa3">{e.driverid}</td>
                {
                    this.state.edit === false || this.state.allow !== e.busnum ?
                        <td class="pa3">{e.fees}</td>
                        :
                        <td class="pa3">
                            <input className="f6 mr2 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-50 w-25-m w-50-l br2-ns br--left-ns"
                                placeholder="Fee"
                                defaultValue={e.fees}
                                type="number"
                                min="0"
                                step="0.01"
                                name="fees"
                                onChange={this.onChange}
                            />
                        </td>
                }
                {
                    this.state.edit === false || this.state.allow !== e.busnum ?
                        <td class="pa3">
                            <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                                href="#0"
                                name={e.busnum}
                                onClick={this.onEdit}>
                                Edit
                            </a>
                        </td>
                        :
                        <td class="pa3">
                            <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                                href="#0"
                                name={e.busnum}
                                onClick={this.onSave}>
                                Save
                            </a>
                        </td>
                }
                <td class="pa3">
                    <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                        href="#0"
                        name={e.busnum}
                        onClick={this.onRemove}>
                        Remove
                    </a>
                </td>
            </tr>
        ));

        return (
            <div class="pa4">
                <form className="mv3 bg-light-gray mw7 center pa4 br2-ns ba b--black-10" id="myform">
                    <fieldset className="cf bn ma0 pa0">
                        <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                            Enter the details to add a new item
                                </legend>
                        <div className="cf">
                            <label className="clip" for="library">Details</label>
                            <div className="flex justify-between">
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Bus Number"
                                    type="number"
                                    min="0"
                                    name="busnum"
                                    onChange={this.onChange}
                                />
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Fee Amount"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    name="fees"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="flex justify-between">
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Route"
                                    type="text"
                                    name="route"
                                    onChange={this.onChange}
                                />
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Driver ID"
                                    type="text"
                                    name="driverid"
                                    onChange={this.onChange}
                                />
                            </div>
                            <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                type="submit"
                                value="Add"
                                onClick={this.onAdd}
                            />
                        </div>
                    </fieldset>
                </form>

                <input
                    className="flex center pa3 mv4 ba b--black bg-transparent w-80"
                    type="search"
                    name="searchfield"
                    placeholder="Enter bus number, route or driver ID to search..."
                    onChange={this.onChange}
                />

                <div className="overflow-auto">
                    <table className="mv3 f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Bus Number</th>
                                <th className="fw6 tl pa3 bg-white">Route</th>
                                <th className="fw6 tl pa3 bg-white">Driver</th>
                                <th className="fw6 tl pa3 bg-white">Fees</th>
                                <th className="fw6 tl pa3 bg-white">Edit Amount</th>
                                <th className="fw6 tl pa3 bg-white">Remove Bus</th>
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

export default TransportList;