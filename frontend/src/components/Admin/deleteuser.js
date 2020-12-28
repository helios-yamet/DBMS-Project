import React from "react";

class DeleteUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userType: '',
            stage: 0
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();

        // fetch("http://localhost:3001/getFees",{
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         id: this.state.id,
        //     })
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data));

        this.setState({ stage: this.state.stage + 1 });
    }

    onRepeat = (event) => {
        event.preventDefault();

        this.setState({ stage: 0 });
    }

    render() {
        return (
            <div>
                {
                    this.state.stage === 0 &&
                    <div class="pa4-l">
                        <form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
                            <fieldset class="cf bn ma0 pa0">
                                <legend class="pa0 f5 f4-ns mb3 black-80">Enter Registration Number of Student/ Employee ID</legend>
                                <div class="cf">
                                    <label class="clip" for="email-address">ID</label>
                                    <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                                        placeholder="ID Number" 
                                        type="number" 
                                        name="id" 
                                        value="id" 
                                        id="id"/>
                                        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                                            type="submit" 
                                            value="Delete!"
                                            onClick={this.onSubmit}
                                            />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                }

                {
                    this.state.stage === 1 &&
                    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div class="tc">
                            <img src="https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg"
                                class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                            <h1 class="f3 mb2">User deleted succesfully</h1>

                            <button href="#0" class="mv3 f5 black bg-animate bg-white hover-bg-black hover-white items-center pv2 ph3 ba border-box"
                                onClick={this.onRepeat}>Delete another user</button>
                        </div>
                    </article>
                }
            </div>
        );
    }
}

export default DeleteUser;