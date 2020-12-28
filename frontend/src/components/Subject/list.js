import React from "react";

class SubjectList extends React.Component {
    render() {
        const subs = [
            { subject: 'Chemistry', hod: 'John Smith', id: 'AX123' },
            { subject: 'Physics', hod: 'Jane Smith', id: 'AX123' },
            { subject: 'English', hod: 'Olivia Harper', id: 'AX123' },
            { subject: 'Biology', hod: 'Sarah Levy', id: 'AX123' },
            { subject: 'Computer Science', hod: 'Juan Carlos', id: 'AX123' },
            { subject: 'Mathematics', hod: 'Mike Jones', id: 'AX123' },
            { subject: 'Social Studies', hod: 'Evan McHale', id: 'AX123' },
        ];

        let items = [];

        subs.forEach(dept => {
            items.push(<article>
                <a class="link dt w-100 bb b--black-10 pb2 mt2 blue" href="#0">
                    <div class="dtc w3">
                        <img src="http://mrmrs.github.io/images/0010.jpg" class="db w-100" />
                    </div>
                    <div class="dtc v-top pl2">
                        <h1 class="f5 f4-ns fw6 lh-title black mv0">{dept.subject}</h1>
                        <h2 class="f5 fw6 mt2 mb0 black-80">{dept.id}</h2>
                        <dl class="mt2 f6">
                            <dt class="clip">Position</dt>
                            <dd class="ml0">{dept.hod} (Head Of Department)</dd>
                        </dl>
                    </div>
                </a>
            </article>)});

        return(
            <div class="flex justify-between">
                <main class="mw6 pa5 left w-100">
                    {items}
                </main>
                <main class="mw6 pa5 left w-100">
                    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <hr class="mw3 bb bw1 b--black-40" />
                        <p class="lh-copy measure center f6 black">
                            Please visit Faculty Details from the dropdown menu if you wish to contact the respective HOD.
                        </p>
                    </article>
                </main>
            </div>
        );
    }
}

export default SubjectList;