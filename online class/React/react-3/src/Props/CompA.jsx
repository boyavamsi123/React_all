import CompB from "./CompB";
let CompA = () => {

    let empName = "Rahul Gandhi";

    return <div>
        <h3>Components A</h3>
        <hr />
        <CompB ename ={empName} msg ={"Good Evening"}/>
    </div>
}

export default CompA;