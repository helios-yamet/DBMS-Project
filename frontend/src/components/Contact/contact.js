import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center pa5">
            <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 outline">
                <div className="pa4">
                    <h1 className="f4 f2-l fw7 mt0 pv3-l bb-l bb--black">Contact Us</h1>
                    <p className="lh-copy mt2 mt3-m mt5-l f6">
                        <span className="fw3 f6 f2-l db lh-title mb3 mb3-m mb4-l">Please contact us in case of any queries or if you require technical support. We will respond to your request within 12-36 business hours.</span>
                        <span className="db-ns f6 fw7 lh-solid mb3 mb3-m mb4-l">Landline: <span className="db-l fw5 measure-wide">+91 22 4345600</span></span>
                        <span className="db-ns f6 fw7 lh-solid mb3 mb3-m mb4-l">Fax: <span className="db-l fw5 measure-wide">+91 22 4345680</span></span>
                        <span className="db-ns f6 fw7 lh-solid mb3 mb3-m mb4-l">Email: 
                            <span className="db-l fw5 measure-wide">contact@communityschool.com</span>
                            <span className="db-l fw5 measure-wide">it_dept@communityschool.com</span>
                        </span>
                        <span className="db-ns f6 fw7 lh-solid">Location: <span className="db-l fw5 measure-wide">No.1, Community School, Marina, Mumbai</span></span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;