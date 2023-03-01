import { useState } from 'react';
import classes from './RadioButton.module.css';

function updateValue(currValue: boolean): boolean {
	return !currValue; // true -> false, false -> true
}

/*
	Condition To be checked ? (value or expression if condition is true): (value or expression if condition is false)
*/
const RadioButton = () => {
	const [isOn, setIsOn] = useState<boolean>(false);
	return (
		<div className={classes.OuterEnclosure}>
			<section
				className={[
					classes.ToggleButton,
					isOn ? classes.ToggleButtonLeft : classes.ToggleButtonRight,
				].join(' ')}
				onClick={() => setIsOn(updateValue)}
			/>
		</div>
	);
};
export default RadioButton;
