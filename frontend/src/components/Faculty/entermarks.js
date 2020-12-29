import React from "react";

class EnterMarks extends React.Component {
    constructor() {
        super();
        this.state = { 
            stage: 0,
            id: 0,
            standard: 0,
            section: '',
            subject: '',
            subjectgrade: '',
            remarks: '',
            year: ''
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onNext = (event) => {
        event.preventDefault();

        this.setState({ stage: this.state.stage + 1 });
    }

    onPrevious = (event) => {
        event.preventDefault();

        this.setState({ stage: this.state.stage - 1 });
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.setState({ stage: 2 });

         fetch("http://localhost:3001/teacher/add-reportcard",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject: this.state.subject,
                grade: this.state.standard,
                section: this.state.section,
                ID: this.state.regnum,
                subject_grade: this.state.subjectgrade,
                academic_year: this.state.year,
                remarks: this.state.remarks,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        document.getElementById("myform").reset();
    }


    render() {
        return (
            <div>
                <div className="pa4-l">
                    <form className="bg-lightest-blue mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        { this.state.stage === 0 && 
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                Enter the details
                            </legend>
                            <div className="cf">
                                <label className="clip" for="library">Subject and Classroom</label>
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Subject ID"
                                    type="text"
                                    maxLength="5"
                                    name="subject"
                                    onChange={this.onChange}
                                />
                                
                                <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Next"
                                    onClick={this.onNext}
                                />
                            </div>
                        </fieldset>
                        }
                        { this.state.stage === 1 &&
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                Enter the details
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
                                <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Academic Year"
                                    type="text"
                                    name="year"
                                    onChange={this.onChange}
                                />
                                <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Previous"
                                    onClick={this.onPrevious}
                                />
                                <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Next"
                                    onClick={this.onNext}
                                />
                            </div>
                        </fieldset>
                        }

                        { this.state.stage === 2 &&
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                Enter the details
                            </legend>
                            <div className="cf">
                                <label className="clip" for="library">Subject Marks</label>
                                <div className="flex justify-between">
                                    <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                        placeholder="Student Registration Number"
                                        type="number"
                                        name="regnum"
                                        onChange={this.onChange}
                                    />
                                    <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                        placeholder="Subject Grade"
                                        type="text"
                                        name="subjectgrade"
                                        onChange={this.onChange}
                                    />
                                </div>
                            <input className="ma2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                placeholder="Teacher's Remarks"
                                type="text"
                                name="remarks"
                                onChange={this.onChange}
                            />
                                <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Previous"
                                    onClick={this.onPrevious}
                                />
                                <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Next"
                                    onClick={this.onNext}
                                />
                            </div>
                        </fieldset>
                        }
                        {this.state.stage === 3 &&
                            <fieldset className="cf bn ma0 pa0">
                                <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                    Please check the details entered
                            </legend>
                            <div class="cf pa3">
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Student ID:</dt>
                                    <dd class="dib ml2 black-80">{this.state.regnum}</dd>
                                </dl>
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Subject:</dt>
                                    <dd class="dib ml2 black-80">{this.state.subject}</dd>
                                </dl>
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Standard:</dt>
                                    <dd class="dib ml2 black-80">{this.state.standard}</dd>
                                </dl>
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Section:</dt>
                                    <dd class="dib ml2 black-80">{this.state.section}</dd>
                                </dl>
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Academic Year:</dt>
                                    <dd class="dib ml2 black-80">{this.state.year}</dd>
                                </dl>
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Subject Grade:</dt>
                                    <dd class="dib ml2 black-80">{this.state.subjectgrade}</dd>
                                </dl>
                                <dl class="f4 lh-title mv2">
                                    <dt class="dib fw5">Teacher's Remarks:</dt>
                                    <dd class="dib ml2 black-80">{this.state.remarks}</dd>
                                </dl>
                            </div>

                                    <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                        type="submit"
                                        value="Previous"
                                        onClick={this.onPrevious}
                                    />
                                    <input className="ma2 f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                        type="submit"
                                        value="Finish"
                                        onClick={this.onSubmit}
                                    />
                            </fieldset>
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default EnterMarks;