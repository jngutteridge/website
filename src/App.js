import React from 'react'
import './App.css'
import './Shared/Badge.css'

function App() {
  return (
    <>
      <section className="jng-website">
        <div className="container">
          <img className="profile" src="/images/jack-gutteridge-profile.png" alt="" />
          <div className="intro">
            <h1>Jack Gutteridge</h1>
            <ul className="badge-list">
              <li className="badge twitter">
                <a className="action" href="https://twitter.com/jngutteridge"><span className="description">Twitter</span></a>
              </li>
              <li className="badge github">
                <a className="action" href="https://github.com/jngutteridge"><span className="description">GitHub</span></a>
              </li>
              <li className="badge linkedin">
                <a className="action" href="https://www.linkedin.com/in/jackgutteridge/"><span className="description">LikedIn</span></a>
              </li>
              <li className="badge email">
                <a className="action" href="mailto:jack@kingbrick.co.uk"><span className="description">Email</span></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="jng-holding">
        <div className="container">
          <p>I am a software developer based in Leicester in the UK. I enjoy writing clean and manageable code.</p>
          <p>There isn't a lot to show here at the moment but you can <a href="https://twitter.com/jngutteridge">find me on Twitter</a> or <a href="mailto:jack@kingbrick.co.uk">get in touch on email</a>.</p>
        </div>
      </section>
      <footer className="jng-footer">
        <div className="container">
          &copy; Jack Gutteridge
        </div>
      </footer>
    </>
  )
}

export default App
