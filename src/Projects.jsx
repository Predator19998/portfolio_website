import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Projects = ({project}) => {
    return(
        <div className="Projects">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 400 }}
        component="img"
        src={project.hasOwnProperty("img") ? project.img : 'https://placehold.co/300x400'}
        alt={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {project.desc}
        </Typography>
      </CardContent>
    </Card>
    
    </div>
    );
}

export default Projects;