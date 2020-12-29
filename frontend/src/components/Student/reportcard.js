import React from "react";
var array=[]
class ReportCard extends React.Component {
    constructor() {
        super();
        this.state = { 
            show: false, 
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        

         fetch("http://localhost:3001/student/reportcard",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.id,
                year: this.state.year,
            })
        })
            .then(res => res.json())
            .then(report => {report.forEach(element => {
                array.push(element)
            });;
                
                
                this.setState({ show: true });
            });

        document.getElementById("myform").reset();
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        let items = [];

        for (let i = 0; i < array.length; i++) {
            items.push(
                <tr class="striped--light-gray">
                    <td class="pa3">{array[i]['Subject']}</td>
                    <td class="pa3">{array[i]['Subject_Grade']}</td>
                    <td class="pa3">{array[i]['Teacher comments']}</td>
                </tr>
            );
        }

        return (
            <div>
                <div className="pa4-l">
                    <form className="bg-lightest-blue mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                Enter the details given below
                            </legend>
                            <div className="cf">
                                <label className="clip" for="library">Class Details</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                                        placeholder="Academic Year" 
                                        type="text" 
                                        name="year"
                                        onChange={this.onChange}
                                    />
                                    <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                        type="submit"
                                        value="Proceed"
                                        onClick={this.onSubmit}
                                    />
                            </div>
                        </fieldset>
                    </form>
                </div>
                {
                    this.state.show === true &&
                    <div className="tl pa4">
                        <div class="overflow-auto">
                            <table class="f6 w-100 mw8 center" cellspacing="0">
                                <thead>
                                    <tr class="striped--light-gray">
                                        <th class="fw6 tl pa3 bg-white">Subject</th>
                                        <th class="fw6 tl pa3 bg-white">Grade</th>
                                        <th class="fw6 tl pa3 bg-white">Teacher's Comments</th>
                                    </tr>
                                </thead>
                                <tbody class="lh-copy">
                                    { items }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ReportCard;