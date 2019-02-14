import React, { Component } from 'react'

class App extends Component {
    
	render() {
    	return (
    	  <main>


					<header className="header">
						<nav>
							<ul className="nav-bar">
								<li className="nav-item"><a className="nav-link" href="#">Home</a></li>
								<li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
								<li className="nav-item"><a className="nav-link" href="#">About</a></li>
								<li className="nav-item"><a className="nav-link" href="#">Sign out</a></li>
							</ul>
						</nav>
					</header>
					<section className="left">
						<h2>Trend topics sentiment analysis</h2>
					</section>	
					<section className="center">
						<h2>Lorem ipsum</h2>
						<section>
							<h2>¿En qué estás pensando?</h2>
							<form>
								<textarea placeholder="¿En qué estás pensando?"></textarea>
								<button>Tweet this!</button>
							</form>
						</section>
						<section>
							<h1>Timeline</h1>
							<ul>
								<li>
									<article>
										<h2>@username</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
										<p>Feb 7, 2014</p>
										<div></div>
									</article>
								</li>
								<li>
									<article>
										<h2>@username</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
										<p>Feb 7, 2014</p>
										<div></div>
									</article>
								</li>
								<li>
									<article>
										<h2>@username</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
										<p>Feb 7, 2014</p>
										<div></div>
									</article>
								</li>
								<li>
									<article>
										<h2>@username</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
										<p>Feb 7, 2019</p>
										<div></div> 
									</article>
								</li>
								<li>
									<article>
										<h2>@username</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
										<p>Feb 7, 2014</p>
										<div></div>
									</article>
								</li>
							</ul>
						</section>
					</section>	
					<aside>
						<section>
							<h2>Latest tweets</h2>							
						</section>
						<section>
							<h2>lorem ipsum</h2>							
						</section>
						<section>
							<h2>lorem ipsum</h2>							
						</section>
					</aside>
					<footer>

					</footer>


    	  </main>
    	)
	}
}
export default App