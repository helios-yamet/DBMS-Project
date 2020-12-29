import React from "react";

class FeeDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        
      

        fetch("http://localhost:3001/student/fees",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.id,
                section: this.state.section,
                grade: this.state.standard,
            })
        })
            .then(res => res.json())
            .then(feeDetails =>{ this.setState({ details: feeDetails });console.log(feeDetails);  this.setState({ show: true });});
            
     //   this.setState({ details: { status: true, fees: 3450.50} })
        document.getElementById("myform").reset();
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="ma4 pa4-l">
                    <form className="bg-lightest-blue mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="pa0 f5 f4-ns mb3 black-80">
                                Enter the details to view your fee details
                            </legend>
                            <div className="cf">
                                <label className="clip" for="library">Classroom Details</label>
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
                                <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Submit"
                                    onClick={this.onSubmit}
                                />
                            </div>
                        </fieldset>
                    </form>
                </div>
                {
                    this.state.show === true &&
                    <div className="tc">
                        <dl class="dib mr5">
                            <dd class="f6 f5-ns b ml0">Fee Amount</dd>
                            <dd class="f3 f2-ns b ml0">{`Rs. ${this.state.details.fees}`}</dd>
                        </dl>
                        <dl class="dib mr5">
                            <dd class="f6 f5-ns b ml0">Due Amount</dd>
                            <dd class="f3 f2-ns b ml0">{this.state.details.status ? 'Rs. 0' : `Rs. ${this.state.details.fees}`}</dd>
                        </dl>
                    </div>
                }
            </div>
        );
    }
}

export default FeeDetail;