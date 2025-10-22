function App() {
  return (
    <>
      <header className="hide-when-mobile">
        <h1>Courses 4 Arab</h1>

        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="#">
              HTML
            </a>

            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">Learn in 1h</a>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <a className="main-link" href="#">
              CSS
            </a>

            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>

              <li className="mini-projects">
                <a href="">Mini Projects&nbsp; +</a>

                <ul className="sub-sub-ul">
                  <li>
                    <a href="">Project 1</a>
                  </li>
                  <li>
                    <a href="">Project 2</a>
                  </li>
                  <li>
                    <a href="">Project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <a className="main-link" href="#">
              JavaScript
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">Coming Soon 🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>

        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars"></i>
        </label>

        <input id="burger" type="checkbox" />

        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus"></i>
            </label>
            <input id="html" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">Learn in 1h</a>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus"></i>
            </label>
            <input id="css" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>

              <li>
                <label className="mini-projects" htmlFor="mini">
                  Mini Projects <i className="fas fa-plus"></i>
                </label>
                <input id="mini" type="checkbox" />

                <ul className="sub-sub-div">
                  <li>
                    <a href="">Project 1</a>
                  </li>
                  <li>
                    <a href="">Project 2</a>
                  </li>
                  <li>
                    <a href="">Project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus"></i>
            </label>
            <input id="js" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="">Coming Soon 🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        Responsive Drop-down <br />
        Menu Bar <br />
        HTML & CSS only
      </main>

      <footer>
        Designed and developed by Ahmed Atef
      </footer>
    </>
  );
}

export default App;
