const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      }, {
        name: 'Using props to pass data',
        exercise: 7
      }, {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }




  const Header = (prop) => {
    console.log(prop);
    return (
      <p> the name of course is : {prop.course}</p>
    )
  }


  const Content = (prop) => {
    //  console.log(prop)
    const display = prop.parts.map(part => <p>the name is  {part.name} and the number of exercise is {part.exercise} </p>);
    //  console.log(display)
    return (
      <>
        {display}
      </>
    )
  }

  const Total = prop => {
    const exercises = prop.parts.map(value => value.exercise);

    console.log(exercises);
    return (
      <p>The total number of exercise is {exercises[0] + exercises[1] + exercises[2]};</p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
