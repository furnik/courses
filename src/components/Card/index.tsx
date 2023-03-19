import React from "react";
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButtonProps,
  styled,
  IconButton,
  Rating,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CourseType } from "../../types/courses";
import { ButtonWrapper, CardWrapper } from "./styles";
import { VideoComponent } from "../Video";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardComponent: React.FC<CourseType> = (item) => {
  const [expanded, setExpanded] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleHoverEffect = (value?: boolean) => () => {
    if (typeof value !== "undefined") {
      setHovered(value);
    } else {
      setHovered(!expanded);
    }
  };
  return (
    <CardWrapper>
      <ButtonWrapper to={`courses/${item.id}`}>
        <CardActionArea
          onMouseEnter={handleHoverEffect(true)}
          onMouseLeave={handleHoverEffect(false)}
        >
          {hovered && item.meta.courseVideoPreview?.link ? (
            <VideoComponent
              size="sm"
              src={item.meta.courseVideoPreview?.link}
              autoPlay
              muted
              loop
            />
          ) : (
            <CardMedia
              component="img"
              height="300"
              image={item.previewImageLink + "/cover.webp"}
              alt={item.title}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h6" component="div">
                Lessons count:
              </Typography>
              <Typography variant="h6" component="div">
                {item.lessonsCount}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </ButtonWrapper>
      <CardActions disableSpacing>
        <Rating name="read-only" value={item.rating} readOnly precision={0.5} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography mb={2} variant="h6">
            Skills:
          </Typography>
          <List>
            {item.meta.skills &&
              item.meta.skills.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
          </List>
        </CardContent>
      </Collapse>
    </CardWrapper>
  );
};
