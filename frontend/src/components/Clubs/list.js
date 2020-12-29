import React from "react";
import ClubMembers from "./members";

var array = []

class ClubsList extends React.Component {
    constructor() {
        super();
        this.state = {
            clubs: [],
            searchfield: ''
        };
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        array = [];

        fetch(`http://localhost:3001/external/Extra Curricular`)
            .then(res => res.json())
            .then(items => items.forEach((element,index) => {
                    array.push({
                        name: element['Club'],
                        incharge: element['In charge'],
                    });
                this.setState({ [`members${index}`]: false });
                this.setState({
                    clubs: array
                });
            }));        
    }

    toggle = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: !(this.state[event.target.name]) });
        console.log(this.state[event.target.name]);
        console.log(this.state);
    }
    
    render() {
        let items = [];
        const { clubs, searchfield } = this.state;

        let filteredClubs = clubs.filter((club => {
            return club.name.toLowerCase().includes(searchfield.toLowerCase());
        }));

        filteredClubs.forEach((club, index) => {
            items.push(
            <div>
                <article class="dt w-100 bb b--black-05 pb2 mt2">
                    <div class="dtc w2 w3-ns v-mid">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqNQ5seyFMyecyMHJA39PbSc8Z6WOm-ILAQ&usqp=CAU" class="ba b--black-10 db br2 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div class="dtc v-mid pl3">
                        <h1 class="f6 f5-ns fw6 lh-title black mv0">{club.name}</h1>
                        <h2 class="f6 fw4 mt0 mb0 black-60">Teacher Incharge: {club.incharge}</h2>
                    </div>
                    <div class="dtc v-mid">
                        <form class="w-100 tr">
                            <input class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" 
                                type="submit"
                                name={`members${index}`}
                                value="+ Members"
                                onClick={this.toggle}
                            />
                        </form>
                    </div>
                </article>
                {
                    this.state[`members${index}`] &&
                        <ClubMembers club={club.name} />
                }
            </div>)
        });

        return (
            <ul className="list pa4 mt0 measure center">
                <input
                    className="pa3 mv3 ba b--black bg-transparent w-100"
                    type="search"
                    placeholder="Enter club name to search..."
                    onChange={this.onSearchChange}
                />
                {items}
            </ul>
        );
    }
}

export default ClubsList;