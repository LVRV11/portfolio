import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from './../helpers/ProjectList';
// import img from './../img/projects/02-big.jpg';


const ProjectAdd  = () => {
    const {id} = useParams();
    const projectAdd = projects[id];
    

    return (
        
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{projectAdd.title}</h1>
                

                <img src={projectAdd.imgBig} alt={projectAdd.title} className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: {projectAdd.skills}</p>
                </div>

                {projectAdd.gitHubLink && (
                    <BtnGitHub link='https://github.com/LVRV11' />
                )}
            </div>
        </div>
        </main>
        
    );
}

export default ProjectAdd;