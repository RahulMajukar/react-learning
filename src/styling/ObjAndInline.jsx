function ObjAndInline() {
    const myStyle = {
        color: "red",
        backgroundColor: "black"
    }

    return (
        <div>
            <h2 style={{ color: "green" }}>Inline Styling</h2>

            <h2 style={myStyle}>Object variable Styling</h2>

            <div className="container">Hello, CSS stylesheets! </div>
        </div>
    )
}

export default ObjAndInline
