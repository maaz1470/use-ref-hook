import {useEffect,useRef} from 'react'
import Input from './Input'
export default function Form(){
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus();
	},[])
	return (
		<>
			<p>
				<Input ref={inputRef} type="text" placeholder="Enter Something" />
			</p>
		</>
	)
}