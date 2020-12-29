import React from "react";
var array = []

class ClassesList extends React.Component {
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

    onAdd = (event) => {
        event.preventDefault();
        console.log(this.state);

        let newdetails = this.state.details;
        newdetails.push({
            subject: this.state.subject,
            standard: this.state.standard,
            section: this.state.section,
            teacher: this.state.teacher,
        });

        fetch("http://localhost:3001/admin/add-teacher",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                section: this.state.section,
                grade: this.state.standard,
                sub: this.state.subject,
                teacher: this.state.teacher,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

         this.setState({ details: newdetails });
        document.getElementById("myform").reset();
    }

    componentDidMount() {
        fetch(`http://localhost:3001/admin/get-teacher`)
            .then(res => res.json())
            .then(items => items.forEach(element => {
        array.push({ subject: element['Subject'], teacher: element['Teacher'], standard: element['Grade'], section: element['Section'] });

        this.setState({
            details: array
        });

     /*   this.setState({
            details: [
                { subject: 'French', standard: 9, section: 'F', teacher: 'Franc'  },
                { subject: 'Hindi', standard: 9, section: 'C', teacher: 'Sita'  },
                { subject: 'Physical Education', standard: 10, section: 'B', teacher: 'Susan'  },
                { subject: 'Physical Education', standard: 11, section: 'F', teacher: 'Karen'  },
                { subject: 'Home Science', standard: 12, section: 'B', teacher: 'Sufi'  },
            ]
        });*/
    }))}

    render() {
        let items = [];

        let filteredDetails = this.state.details.filter((d => {
            return d.standard === (parseInt(this.state.searchfield))
                || d.section.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || d.teacher.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || d.subject.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }));

        filteredDetails.forEach((e, index) => items.push(
            <tr class="stripe-dark">
                <td class="pa3">{e.standard}</td>
                <td class="pa3">{e.section}</td>
                <td class="pa3">{e.subject}</td>
                <td class="pa3">{e.teacher}</td>
                <td class="pa3">
                    <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
                        href="#0"
                        name={index}
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
                                    placeholder="Standard"
                                    type="number"
                                    name="standard"
                                    onChange={this.onChange}
                                />
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Section"
                                    type="text"
                                    name="section"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="flex justify-between">
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    onChange={this.onChange}
                                />
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Teacher ID"
                                    type="number"
                                    name="teacher"
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
                    placeholder="Enter standard, section, subject name or faculty name to search..."
                    onChange={this.onChange}
                />
                <div className="overflow-auto">
                    <table className="mv3 f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Standard</th>
                                <th className="fw6 tl pa3 bg-white">Section</th>
                                <th className="fw6 tl pa3 bg-white">Subject</th>
                                <th className="fw6 tl pa3 bg-white">Teacher</th>
                                <th className="fw6 tl pa3 bg-white">Remove Item</th>
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

export default ClassesList;