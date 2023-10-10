import IncomingFrame from './frames/IncomingFrame';
import PlannedFrame from './frames/PlannedFrame';
import ProjectsFrame from './frames/ProjectsFrame';

const ProjectsHomePage = () => {
    return (
        <>
            <ProjectsFrame />
            <IncomingFrame />
            <PlannedFrame />
        </>
    );
};

export default ProjectsHomePage;
