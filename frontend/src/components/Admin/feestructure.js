
import React from "react";
var array = []

class FeeStructure extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            allow: '',
            details: [],
            searchfield1: '',
            searchfield2: '',
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onEdit = (event) => {
        event.preventDefault();
        if(this.state.edit === true)
            return alert("Edit fee amount one at a time");

        this.setState({ edit: true });
        this.setState({ allow: event.target.name });
    }

    onRemove = (event) => {
        event.preventDefault();

        let newdetails = this.state.details;
        console.log(event.target.name);

        const pos = newdetails.findIndex(d => `${d.standard} ${d.section}` === event.target.name);

        fetch("http://localhost:3001/admin/delete-item", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'Fees',
                key1: newdetails[pos].standard,
                key2: newdetails[pos].section,
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
            if(`${newdetails[i].standard} ${newdetails[i].section}` === event.target.name)
                if (!isNaN(parseFloat(newamount)))
                {
                    newdetails[i].fees = parseFloat(newamount);
                    fetch("http://localhost:3001/admin/modify-item", {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            table: 'Fees',
                            key1: newdetails[i].standard,
                            key2: newdetails[i].section,
                            value: newdetails[i].fees,
                        })
                    })
                        .then(res => res.json())
                        .then(data => console.log(data));
                    break;
                }
        }

        this.setState({ details: newdetails });
        this.setState({ fees: undefined });
        console.log(newdetails);
    }

    onAdd = (event) => {
        event.preventDefault();

        let newdetails = this.state.details;

        newdetails.push({
            fees: parseFloat(this.state.fees),
            standard: parseFloat(this.state.standard),
            section: this.state.section,
        });
        console.log(this.state);

        fetch("http://localhost:3001/admin/add-fees",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                section: this.state.section,
                grade: this.state.standard,
                fees: this.state.fees,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        this.setState({ details: newdetails });
        document.getElementById("myform").reset();
    }

    componentDidMount() {
        fetch(`http://localhost:3001/admin/view-fees`)
            .then(res => res.json())
            .then(items => items.forEach(element => {
        array.push({ fees: element['Fees'], standard: element['Grade'], section: element['Section'] });

        this.setState({
            details: array
        });

        // this.setState({
        //     details: [
        //         { fees: 2700, standard: 9, section: 'A' },
        //         { fees: 2750, standard: 9, section: 'B' },
        //         { fees: 3000, standard: 10, section: 'C' },
        //         { fees: 3500, standard: 11, section: 'F' },
        //         { fees: 3800, standard: 12, section: 'B' },
        //     ]
        // });
            }))
    }

    render() {
        let items = [];

        let filteredDetails = this.state.details.filter((d => {
            return this.state.searchfield2 === '' ? d.standard === (parseInt(this.state.searchfield1))
                : this.state.searchfield1 === '' ? d.section.toLowerCase().includes(this.state.searchfield2.toLowerCase())
                    : d.standard === (parseInt(this.state.searchfield1)) && d.section.toLowerCase().includes(this.state.searchfield2.toLowerCase());
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
                </tr>
            );

        filteredDetails.forEach((e, index) => items.push(
            <tr class="stripe-dark">
                <td class="pa3">{e.standard}</td>
                <td class="pa3">{e.section}</td>
                {
                    this.state.edit === false || this.state.allow !== `${e.standard} ${e.section}` ? 
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
                    this.state.edit === false || this.state.allow !== `${e.standard} ${e.section}` ? 
                        <td class="pa3">
                            <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                                href="#0"
                                name={`${e.standard} ${e.section}`}
                                onClick={this.onEdit}>
                                Edit
                            </a>
                        </td>
                    :
                        <td class="pa3">
                            <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                                href="#0"
                                name={`${e.standard} ${e.section}`}
                                onClick={this.onSave}>
                                Save
                            </a>
                        </td>
                }
                <td class="pa3">
                    <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                        href="#0"
                        name={`${e.standard} ${e.section}`}
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
                            Enter the details to add
                        </legend>
                        <div className="cf">
                            <label className="clip" for="library">Details</label>
                            <div className="flex justify-between">
                                <input className="f6 mr2 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Standard"
                                    type="number"
                                    name="standard"
                                    onChange={this.onChange}
                                />
                                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Section"
                                    type="text"
                                    name="section"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mv2"></div>
                            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                placeholder="Fee Amount"
                                type="number"
                                min="0"
                                step="0.01"
                                name="fees"
                                onChange={this.onChange}
                            />
                            <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                type="submit"
                                value="Add"
                                onClick={this.onAdd}
                            />
                        </div>
                    </fieldset>
                </form>

                <div className="dt-ns dt--fixed-ns w-100">
                    <div class="pa3 pa4-ns dtc-ns v-mid">
                        <p class="black-70 measure lh-copy mv0">
                            Enter the standard and or section to get the fee amount for this term:
                        </p>
                    </div>
                    <div class="pa3 pa4-ns dtc-ns v-mid">
                        <input
                            className="pa3 ba b--black bg-transparent"
                            type="search"
                            name="searchfield1"
                            placeholder="Standard"
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="pa3 pa4-ns dtc-ns v-mid">
                        <input
                            className="pa3 ba b--black bg-transparent"
                            type="search"
                            name="searchfield2"
                            placeholder="Section"
                            onChange={this.onChange}
                        />    
                    </div>
                </div>
                
                <div className="overflow-auto">
                    <table className="mv3 f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Standard</th>
                                <th className="fw6 tl pa3 bg-white">Section</th>
                                <th className="fw6 tl pa3 bg-white">Fees</th>
                                <th className="fw6 tl pa3 bg-white">Edit Amount</th>
                                <th className="fw6 tl pa3 bg-white">Remove Class</th>
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

export default FeeStructure;