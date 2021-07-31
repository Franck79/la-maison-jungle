import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

function PlantItem(props) {
    const { id, cover, name, water, light, title } = props

	return (
		<li key={id} className='lmj-plant-item' onClick={handleClick}>
            <h1>{title}</h1>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem