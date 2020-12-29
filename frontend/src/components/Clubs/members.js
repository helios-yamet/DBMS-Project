import React from "react";
var array=[]
class ClubMembers extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        array = [];

        fetch("http://localhost:3001/external/club-members", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                club: this.props.club,
            })
        })
            .then(res => res.json())
            .then(items => items.forEach(element => {
                    array.push(
                        `${element["First Name"]} ${element["Middle Name"] !== '' && element["Middle Name"] !== null ? element["Middle Name"] + ' ' : ' '}${element["Last Name"]}`,
                    );

                this.setState({
                    list: array
                });
            }));
    }

    render() {
        let items = [];
        const { list } = this.state;

        for (var i = 0; i < list.length; i++) {
            items.push(<li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{list[i]}</li>);
        }

        return(
            <div>
                <ul class="list pl0 measure center">
                    {items}
                </ul>
            </div>
        );
    }
}

export default ClubMembers;