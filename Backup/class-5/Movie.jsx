let Movie = ()=>{
    let Movie_Name="pushpa2";
    let actor = "Allu Arjun";
    let actress = "Rashmika Mandhan"
    let image_details='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6JXOkvLD0ttLTKTpq5_uWM_L_lWrH-O8_Q&s'
    
    return <div>
        <h1>Movie Details</h1>
        <h2>Movie Name:{Movie_Name}</h2>
        <h2>Hero Name:{actor}</h2>
        <h2>Actress:{actress}</h2>
        <img src={image_details}alt=""/>
    </div>
}
export default Movie