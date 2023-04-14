import { useState, createContext, useEffect } from 'react';
import { data as singleProjectDataJson } from '../data/projectData';


const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [id, setId] = useState("")

	const [singleProjectData, setSingleProjectData] = useState(
		[]
	);

	useEffect(() => {
		if (id) setSingleProjectData(singleProjectDataJson[id])

	})

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, setId}}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
