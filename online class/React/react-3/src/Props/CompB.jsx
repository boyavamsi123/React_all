let CompB = (props)=>{

    return <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(props)}</pre>
                <h4>Employee Name:{props.ename}</h4>
                <h4>Message:{props.msg}</h4>
            </div>
}

export default CompB;