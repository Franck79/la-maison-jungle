import '../styles/Banner.css'

function Banner({ children }) {
	console.log(children)
	return <div className='lmj-banner'>{children}</div>
}

export default Banner