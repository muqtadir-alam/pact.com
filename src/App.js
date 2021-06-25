import HeaderFirst from './components/headers/HeaderFirst';
import HeaderSecond from './components/headers/HeaderSecond';
import HowItWorks from './components/bodies/HowItWorks';
import Nav from './components/nav-menu/Nav';
// import Footer from './components/footer/Footer';
import './App.css';
function App() {
	return (
		<div className='App'>
		
			<HeaderFirst />

			<HeaderSecond />
			<Nav />
			<HowItWorks />
		
		
		</div>
	);
}

export default App;
