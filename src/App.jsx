const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{' '}
      {parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  )
}

const App = () => {
  const course = 'Data Analytics'

  const part1 = {
    name: 'Data Analytics',
    exercises: 3
  }

  const part2 = {
    name: 'Project Management',
    exercises: 3
  }

  const part3 = {
    name: 'Networking 2',
    exercises: 3
  }

  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App