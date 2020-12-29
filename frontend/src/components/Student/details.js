import React from "react";

class StudentDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            subjects: [],
            clubs: []
        };
    }

    componentDidMount() {
        array = [];

        fetch("http://localhost:3001/student/extracurricular",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.user.id,
            })
        })
            .then(res => res.json())
            .then(data => {
                let subjs = [];
                let clubs = [];
                for (let i = 0; i < data.subjects.length; i++) {
                    subjs.push(data.subjects[i]["Subject"]);
                    
                }
                for (let i = 0; i < data.clubs.length; i++) {
                    clubs.push(data.clubs[i]["Club"]);
                    
                }
                    console.log(data.clubs,data.subjects,subjs,clubs)
                this.setState({
                    subjects: subjs
                });
                this.setState({
                    clubs: clubs
                });
            });

        // this.setState({ subjects: ['Computer Science', 'Chemistry', 'English', 'Physics', 'Mathematics'] });
        // this.setState({ clubs: ['Red Cross', 'Blue Cross'] });
    }

    render() {
        const { user } = this.props;
        return (
            <section class="pa3 pa5-ns">
                <article class="hide-child relative mw5 center">
                    <div class="tc">
                        <h1 class="f3 mb2">
                            {`${user.fname} ${user.mname !== '' ? user.mname + ' ' : ' '}${user.lname}`}
                        </h1>
                        <h2 class="f5 fw5 black-80 mt0">
                            {`Registration Number - ${user.id}`}
                        </h2>
                    </div>
                </article>

                <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <div class="flex justify-between bg-near-white">
                        <h1 class="f4 br3 br--top black-90 mv0 pv2 ph3">Subjects</h1>
                    </div>
                    <div class="pa3 bt b--black-10">
                        <dl class="lh-title ph4 mt0">
                        {
                                this.state.subjects.map(sub => <dt class="f5 b mv1">{sub}</dt>)
                        }
                            
                        </dl>
                    </div>
                </article>

                <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <div class="flex justify-between bg-near-white">
                        <h1 class="f4 br3 br--top black-90 mv0 pv2 ph3">Clubs and Extracurricular</h1>
                    </div>
                    <div class="pa3 bt b--black-10">
                        <dl class="lh-title ph4 mt0">
                            {
                                this.state.clubs.length > 0 ? 
                                    this.state.clubs.map(club => <dt class="f5 b mv1">{club}</dt>) 
                                : 
                                    <dt class="f5 b mv1">-NA-</dt>
                            }

                        </dl>
                    </div>
                </article>
            </section>
        );
    }
}

export default StudentDetails;