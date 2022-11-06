import { useState } from 'react';


const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  const good = props.goodNum;
  const bad = props.badNum;
  const neutral = props.neutralNum;

  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + "%";

  if (all <= 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}



const Button = ({ click, text }) => (
  <button onClick={click}>{text}</button>
)

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleG = () => setGood(good + 1);
  const handleB = () => setBad(bad + 1);
  const handleN = () => setNeutral(neutral + 1);


  return (
    <>
      <h1>give feedback</h1>
      <Button click={handleG} text="Good" />
      <Button click={handleN} text="Neutral" />
      <Button click={handleB} text="Bad" />

      <h1>Statistics</h1>
      <Statistics goodNum={good} badNum={bad} neutralNum={neutral} />
    </>
  )
}

export default App;
