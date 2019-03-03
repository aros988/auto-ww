import React, { Component } from 'react';


class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: ('MustangGT'),
            color: ("Black"),
            hp: ("200hp")


        };

        this.handleCarChange = this.handleCarChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleHpChange = this.handleHpChange.bind(this);

    }



    handleCarChange = (e) => {

        this.setState({
            car: e.target.value

        });
        this.props.onChange({ selectedCar: e.target.value })
    }

    handleColorChange = (e) => {
        this.setState({
            color: e.target.value
        });
        this.props.onChange({ selectedColorCar: e.target.value })
    }

    handleHpChange = (e) => {
        this.setState({
            hp: e.target.value
        });
        this.props.onChange({ selectedHpCar: e.target.value })
    }


    render() {


        let colors = Object.values(
            this.props.items.reduce(
                (acc, cur) => Object.assign(acc, { [cur.color]: cur }),
                {}
            )
        );

        let title = Object.values(
            this.props.items.reduce(
                (acc, cur) => Object.assign(acc, { [cur.title]: cur }),
                {}
            )
        );
        return (
            <div>
                <div>
                    <form>
                        <label>
                            <select className="select-box--container"
                                value={this.state.car}
                                onChange={this.handleCarChange}
                            >
                                {title.map(item => <option value={item.id}>{item.title}</option>)}
                            </select>
                        </label>
                    </form>
                </div>
                <div>
                    <form>
                        <label>
                            <select className="select-box--container"
                                value={this.state.color}
                                onChange={this.handleColorChange}
                            >
                                {colors.map(item => <option value={item.color}>{item.color}</option>)}
                            </select>
                        </label>
                    </form>
                </div>
                <div>
                    <form>
                        <label>
                            <select className="select-box--container"
                                value={this.state.hp}
                                onChange={this.handleHpChange}
                            >
                                {this.props.items.map(item => <option value={item.hp}>{item.hp}</option>)}
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Select