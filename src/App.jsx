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

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
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

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer>
      {name} - {courseCode} - {section}
    </footer>
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
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total parts={parts} />
      <Footer
        name="Mike Juneil Dolores"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App