class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "Tee", active: true },
            { id: 2, name: "Potatoes", active: false },
            { id: 3, name: "Groats", active: false },
            { id: 4, name: "Soup", active: true },
            { id: 5, name: "Boiling water", active: false },
            { id: 6, name: "Bread", active: false },
        ],

    }

    handleChangeStatus = (id) => {
        // console.log("działa");
        console.log(id);
        const items = this.state.items.map(item => {
            if (id === item.id) {
                item.active = !item.active
            }
            return item
        })

        this.setState({
            items
        })

    }

    render() {
        return (
            <React.Fragment>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
            </React.Fragment>
        );
    }
}
