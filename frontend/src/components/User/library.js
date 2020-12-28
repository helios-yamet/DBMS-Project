import React from "react";

class Library extends React.Component {
    constructor() {
        super();
        this.state = { 
            show: false,
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
        //         id: this.state.id,
        //     })
        // })
        //     .then(res => res.json())
        //     .then(dues => console.log(dues));

        document.getElementById("myform").reset();
    }

    onChange = (event) => {
        this.setState({ id: event.target.value });
    }

    render() {
        return(
            <div>
                <div className="ma4 pa4-l">
                    <form className="bg-lightest-blue mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="pa0 f5 f4-ns mb3 black-80">
                                {this.props.userType === 'Student' ?
                                    'Enter your registration number/library card number to view your library dues'
                                    :
                                    'Enter your employee ID/library card number to view your library dues'
                                }
                            </legend>
                            <div className="cf">
                                <label className="clip" for="library">Library Subscription Number</label>
                                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                                    placeholder="Your Library Card Number" 
                                    type="text" 
                                    onChange={this.onChange}
                                />
                                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit" 
                                    value="Get Dues" 
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
                            <dd class="f6 f5-ns b ml0">Due Amount</dd>
                            <dd class="f3 f2-ns b ml0">Dhs. 38</dd>
                        </dl>
                    </div>
                }
            </div>
        );
    }
}

export default Library;