import CompB from "./CompB"
let CompA=()=>{
    let ename="Rahul";
    let eid=101;
    let loc=["wayanad","New Delhi","Bangalore"]
    return <div>
        <h3>Component A</h3>
        <hr/>
        <CompB name={ename} id={eid} loc={loc}/>
    </div>
}
export default CompA