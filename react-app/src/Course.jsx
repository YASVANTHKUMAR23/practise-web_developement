
function Course(props){
    if(props.show == "True"){
        return(
        <div id  = "course_card">
            <h3>{props.course}</h3>
            <p>{props.explanation}</p>
            <h3>{props.prize}</h3>
            <button id = "course_button">Enter</button>
        </div>
    );
        }
    
}

export default Course