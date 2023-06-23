function Course (props) {
    return ( <div>
        <a href={props.course.url}>
        <img src={props.course.image} />
        <h1>{props.course.name}</h1>
        </a>
    </div>
        
     );
}

export default Course;