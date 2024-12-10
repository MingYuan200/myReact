import $ from 'jquery'


export default function App() {
  return (
    <div>
      <h2>jQuery</h2>
      <button onClick={() => {
        console.log($('h2').text())
      }}>click</button>
    </div>
  )
}