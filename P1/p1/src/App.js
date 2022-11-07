import { useState } from 'react';

const Anecdotes = ({ text, voteCount }) => {
  return (
    <div>
      <h4>{text}</h4>
      <p>has {voteCount} votes</p>
    </div>
  )
}

const Button = ({ click, text }) => (
  <button onClick={click} >{text}</button>
)

const HighestText = ({ texts, voteCount }) => {
  const high = Math.max(...voteCount);
  //console.log(voteCount); //print an array
  //console.log(...voteCount); //print strings
  const index = voteCount.indexOf(high);
  console.log(high)

  if (high === 0) {
    return (
      <div>
        <p>Not vote yet</p>
      </div>
    )
  }

  return (
    <div>
      <h4>{texts[index]}</h4>
      <p>has {high} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [allVotes, setAll] = useState(Array(7).fill(0));

  const voteClick = () => {
    const voteArray = [...allVotes];
    voteArray[selected] += 1
    setAll(voteArray);
  }

  const aneClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }




  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdotes text={anecdotes[selected]} voteCount={allVotes[selected]} />
      <Button click={aneClick} text="anecdotes" />
      <Button click={voteClick} text="vote" />

      <h1>Anecdote with most votes</h1>
      <HighestText texts={anecdotes} voteCount={allVotes} />
    </>
  )
}

export default App;
