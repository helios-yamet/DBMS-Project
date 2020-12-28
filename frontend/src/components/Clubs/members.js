import React from "react";

class ClubMembers extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        this.setState({
            list: [
                { name: 'AV Club', members: [ "Mackenzie Archer", "Leilani Delgado", "Idris Stanton" ]},
                { name: 'Green Club', members: [ "Sinead Cullen", "Jorden Millar", "Hallam Humphries", "Jaimee Dnn" ]},
                { name: 'Art Club', members: [ "Jaye Wilde", "Zayaan Hibbert" ]},
                { name: 'Red Cross', members: [ "Rita Oliver", "Carrie - Ann Knox" ]},
                { name: 'Blue Cross', members: [ "Meredith O'Doherty", "Jaimee Dunn" ]},
                { name: 'Music Club', members: [ "Jorden Millar", "Meredith O'Doherty", "Aiden Steele", "Zayaan Hibbert" ]}
            ]
        });
    }

    render() {
        let items = [];
        const club = this.props.club;
        const { list } = this.state;

        for (var i = 0; i < list.length; i++) {
            if (list[i].name === club) {
                list[i].members.forEach(e => items.push(<li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{e}</li>));
            }
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