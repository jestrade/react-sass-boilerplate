import React, { Component } from 'react'

class App extends Component {
    
	render() {
    	return (
    	  <main>


					<header>
						<nav>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Profile</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Sign out</a></li>
							</ul>
						</nav>
					</header>
					
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
								<aticle>
									<h2>@username</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
									<p>Feb 7, 2014</p>
									<div></div>
								</aticle>
							</li>
							<li>
								<aticle>
									<h2>@username</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
									<p>Feb 7, 2014</p>
									<div></div>
								</aticle>
							</li>
							<li>
								<aticle>
									<h2>@username</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
									<p>Feb 7, 2014</p>
									<div></div>
								</aticle>
							</li>
							<li>
								<aticle>
									<h2>@username</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
									<p>Feb 7, 2019</p>
									<div></div> 
								</aticle>
							</li>
							<li>
								<aticle>
									<h2>@username</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
									<p>Feb 7, 2014</p>
									<div></div>
								</aticle>
							</li>
						</ul>
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