import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	const categories2 = []
	plantList.forEach((plant)=> {
		if(!categories2.includes(plant.category)) {
			categories2.push(plant.category)
		}
	  }) 
	console.log(categories, categories2)


	// Arrow function
	// (arg1, arg2) => {
	//	 ligne 1
	// ligne 2
	//}
	// () => true === () => { return true }
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						key={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						title="toto"
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList