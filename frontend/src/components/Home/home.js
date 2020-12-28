import React from "react";

class HomePage extends React.Component {
    render() {
        return (
            <div className="baskerville mv4 pa3">
                <div className="pa4 tc">
                    <img s
                        src="https://image.shutterstock.com/z/stock-vector-school-logo-design-template-education-logo-618538145.jpg"
                        className="br-100 h4 w4 dib" alt="avatar" />
                </div>
                <h1 className="mt2 mb0 fw1 f1 tc">COMMUNITY SCHOOL</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked tc">ONLINE MANAGEMENT SYSTEM</h2>
                <blockquote className="ph0 f2 f2-ns measure-narrow center">
                    <p className="fw3 lh-copy lh-title-ns tc">"Educating our children in the richness of their past, the diversity of their present and the possibilities for their future."
                </p>
                </blockquote>
                <article className="center mw5 mw6-ns hidden ba mv7">
                    <h1 className="f3 bg-near-black white mv0 pv2 ph3">Please Note</h1>
                    <div className="pa3 bt">
                        <p className="f5 f5-ns lh-copy measure mv0">
                            > Student and Faculty are requested to login using the credentials sent to your email ID, you can collect your username and password from the IT department during working hours.
                        </p>
                        <p className="f5 f5-ns lh-copy measure mv0">
                            > For help/feedback, please reach us through the details provided under Contact.
                        </p>
                        <p className="f5 f5-ns lh-copy measure mv0">
                            > Please refer to the dorpdown menu (top left corner) to view the department details.
                        </p>
                        <p className="f5 f5-ns lh-copy measure mv0">
                            > Parents are requested to use an alternate login link provided in the dropdown menu. You can login by providing the student's registration number and date of birth.
                        </p>
                    </div>
                </article>
            </div>
        );
    }
}

export default HomePage;