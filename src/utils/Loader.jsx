import './Loader.scss'

export function Loaders() {
  return (
	<div className="message-loader-2">
	<div className="loader-bar-2"></div>
	<div className="loader-bar-2"></div>
	<div className="loader-bar-2"></div>
</div>
  )
}


export function InitialLoader() {
	return (
		<div className="spinner">
		<svg viewBox="25 25 50 50">
			<circle cx="50" cy="50" r="20" fill="none" className="path"></circle>
		</svg>
	</div>
	)
  }


