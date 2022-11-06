const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  const Header = (name) => {
    return (
      <p> the name of course is : {name.course}</p>
    )
  }

  const Part = (name) => {
    return (
      <p>There is {name.partName} and the number of exercises is {name.num}</p>
    )
  }

  const Content = () => {
    return (
      <>
        <Part partName={part1} num={exercise1} />
        <Part partName={part2} num={exercise2} />
        <Part partName={part3} num={exercise3} />
      </>
    )
  }

  const Total = () => {
    return (
      <p>The total number of exercise is {exercise1 + exercise2 + exercise3};</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App;
