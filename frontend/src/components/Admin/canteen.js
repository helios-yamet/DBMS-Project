import React from "react";
var array = []

class CanteenList extends React.Component {
    constructor() {
        super();
        this.state = {
            details: []
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onRemove = (event) => {
        event.preventDefault();

        let newCanteen = this.state.details;
        console.log(newCanteen[event.target.name]);

        fetch("http://localhost:3001/admin/delete-item", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'Canteen',
                pk: 'Supplier',
                key1: newCanteen[event.target.name].supplier,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));

        newCanteen.splice(event.target.name, 1);
        console.log(newCanteen);
        this.setState({ canteen: newCanteen });        
    }

    onAdd = (event) => {
        event.preventDefault();
        console.log(this.state);

        let newCanteen = this.state.details;
        newCanteen.push({
            supplier: this.state.supplier,
            mealname: this.state.mealname,
            price: this.state.price,
        });

        fetch("http://localhost:3001/admin/add-canteen",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                supplier: this.state.supplier,
                meal: this.state.mealname,
                price: this.state.price,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));
    
        
        this.setState({ canteen: newCanteen });
        document.getElementById("myform").reset();
    }

    componentDidMount() {
        array = [];

        fetch(`http://localhost:3001/admin/view-canteen`)
            .then(res => res.json())
            .then(items => items.forEach(element => {
        array.push({ supplier: element['Supplier'], mealname: element['Meal Name'], price: element['Price'] });

                this.setState({
                    details: array
                });
    }))}

    render() {
        let items = [];
        
        this.state.details.forEach((e, index) => items.push(
            <tr class="stripe-dark">
                <td class="pa3">{e.supplier}</td>
                <td class="pa3">{e.mealname}</td>
                <td class="pa3">{e.price}</td>
                <td class="pa3">
                    <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray" 
                        href="#0" 
                        name={index} 
                        onClick={this.onRemove}>
                        Remove
                    </a>
                </td>
            </tr>
        ));

        return(
            <div class="pa4">
                <div class="overflow-auto">
                    <form className="ma3 bg-light-gray mw7 center pa4 br2-ns ba b--black-10" id="myform">
                        <fieldset className="cf bn ma0 pa0">
                            <legend className="ma2 pa0 f5 f4-ns mb3 black-80">
                                Enter the details to add a new item
                                </legend>
                            <div className="cf">
                                <label className="clip" for="library">Meal Details</label>
                                <div className="flex justify-between">
                                    <input className="mr2 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                        placeholder="Cuisine"
                                        type="text"
                                        name="mealname"
                                        onChange={this.onChange}
                                    />
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                        placeholder="Price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        name="price"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="mv2"></div>
                                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                    placeholder="Supplier Name"
                                    type="text"
                                    name="supplier"
                                    onChange={this.onChange}
                                />
                                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    type="submit"
                                    value="Add"
                                    onClick={this.onAdd}
                                />
                            </div>
                        </fieldset>
                    </form>
                    
                    <table class="f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr class="stripe-dark">
                                <th class="fw6 tl pa3 bg-white">Supplier</th>
                                <th class="fw6 tl pa3 bg-white">Cuisine</th>
                                <th class="fw6 tl pa3 bg-white">Price</th>
                                <th class="fw6 tl pa3 bg-white">Remove Item</th>
                            </tr>
                        </thead>
                        <tbody class="lh-copy">
                            { items }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CanteenList;