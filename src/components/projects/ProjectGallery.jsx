import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { data } from '../../data/projectData';
import { useParams } from 'react-router-dom';

const ProjectGallery = () => {
	const { id } = useParams()
	const singleProjectData = data[id]
	return (
		<div className="grid grid-cols-[repeat(auto-fit,_16.666666%)] sm:gap-10 mt-12 justify-center items-center">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
