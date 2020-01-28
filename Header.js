const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
    return (
        <header>
            <h2>Order: {number}</h2>
            <h2>To pay: {number ? `${number * 10} euro` : "you don't buy, you don't pay"}</h2>
        </header>
    )
} 