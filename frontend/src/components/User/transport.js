import React from "react";

class Transport extends React.Component {
    constructor() {
        super();
        this.state = { 
            show: false,
            bus: 0 
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        this.setState({ show: true });
    
          // fetch("http://localhost:3001/getFees",{
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         busno: this.state.busnum,
        //     })
        // })
        //     .then(res => res.json())
        //     .then(busDetails => console.log(busDetails));

        document.getElementById("myform").reset();
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="ma4 pa4-l">
                    <form className="bg-lightest-blue mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="pa0 f5 f4-ns mb3 black-80">
                                    Enter the details to view your school tranport details
                            </legend>
                            <div className="cf">
                                <label className="clip" for="bus">Bus Number</label>
                                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                                    type="text" 
                                    placeholder="Bus Number"
                                    name="busnum"
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
                    <div className="tc">
                        <article data-name="slab-stat">
                            <h1>Details</h1>
                            <dl className="dib mr5">
                                <dd className="f6 f5-ns b ml0">Driver Name</dd>
                                <dd className="f3 f2-ns b ml0">Sandy Slater</dd>
                            </dl>
                            <dl className="dib mr5">
                                <dd className="f6 f5-ns b ml0">Bus Fees</dd>
                                <dd className="f3 f2-ns b ml0">Dhs. 150</dd>
                            </dl>
                            <dl className="dib mr5">
                                <dd className="f6 f5-ns b ml0">Route</dd>
                                <dd className="f3 f2-ns b ml0">TCA</dd>
                            </dl>
                        </article>
                    </div>
                }
            </div>
        );
    }
}

export default Transport;