import React from "react";

class Classroom extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            section: '',
            standard: '',
            students: []
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
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
        //         grade: this.state.standard,
        //         section: this.state.section,
        //     })
        // })
        //     .then(res => res.json())
        //     .then(classroom => console.log(classroom));

        this.setState({ students: [
            "Mackenzie Archer",
            "Leilani Delgado",
            "Idris Stanton",
            "Sinead Cullen",
            "Jorden Millar",
            "Hallam Humphries",
            "Meredith O'Doherty",
            "Jaye Wilde",
            "Aiden Steele",
            "Jaimee Dunn",
            "Zayaan Hibbert",
            "Hoorain Bostock",
            "Kiyan Larson",
            "Rita Oliver",
            "Carrie - Ann Knox",
        ] });
        
        document.getElementById("myform").reset();
    }

    render() {
        return (
            <div>
                <div className="pa4-l">
                    <form className="bg-lightest-blue mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                Enter the details given below
                            </legend>
                            <div className="cf">
                                <label className="clip" for="library">Classroom Details</label>
                                <div className="flex justify-between">
                                    <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                        placeholder="Standard"
                                        type="text"
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
                                    value="Get List"
                                    onClick={this.onSubmit}
                                />
                            </div>
                        </fieldset>
                    </form>
                </div>
                {
                    this.state.show === true &&
                    <div className="tl pa4">
                        <div className="tc">
                            <dl class="dib mr5">
                                <dd class="f6 f5-ns b ml0">Strength</dd>
                                <dd class="f3 f2-ns b ml0">15</dd>
                            </dl>
                            <dl class="dib mr5">
                                <dd class="f6 f5-ns b ml0">Class Teacher</dd>
                                <dd class="f3 f2-ns b ml0">Mary Poppins</dd>
                            </dl>
                        </div>
                        <div class="overflow-auto">
                            <table class="f6 mt3 w-50 mw8 center" cellspacing="0">
                                <thead>
                                    <tr class="striped--light-gray">
                                        <th class="fw6 tl pa3 bg-white">Student Name</th>
                                    </tr>
                                </thead>
                                <tbody class="lh-copy">
                                {
                                        this.state.students.map(name => <tr class="striped--light-gray">
                                            <td class="pa3">{name}</td>
                                        </tr>)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Classroom;