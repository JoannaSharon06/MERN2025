const trackingButtonComponent = (Component) => {
    return (props) => {
        console.log("HoC tracking comp");
        const handleClick = () => {
            console.log("Logged in Fetch the Tracking Info",props.trackingInfo);
        }
        return (
            <div onClick={handleClick}>
                <h1>This is the Higher Order Component</h1>
                <Component {...props}/>
            </div>
        )
    }
}

export default trackingButtonComponent;