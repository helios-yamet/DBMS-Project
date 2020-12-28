import React from "react";

class FacultyResponsibilities extends React.Component {
    constructor() {
        super();
        this.state = {
            class: undefined,
            clubs: []
        };
    }

    componentDidMount() {
        this.setState({ class: {standard: 12, section: 'B'} });
        this.setState({ clubs: ['Audio Visual Club'] });
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
                            {`Employee ID - ${user.id}`}
                        </h2>
                    </div>
                </article>

                <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <div class="flex justify-between bg-near-white">
                        <h1 class="f4 br3 br--top black-90 mv0 pv2 ph3">Classroom Assigned</h1>
                    </div>
                    <div class="pa3 bt b--black-10">
                        <dl class="lh-title ph4 mt0">

                            { this.state.class === undefined ?
                            <dt class="f5 b mv1">-NA-</dt>
                        :
                            <div>
                                <dt class="f5 b mv1">Standard</dt>
                                <dd class="ml0">{this.state.class.standard}</dd>
                                <dt class="f5 b mv1">Section</dt>
                                <dd class="ml0">{this.state.class.section}</dd>
                                </div>
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

export default FacultyResponsibilities;