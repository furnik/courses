import React from "react";
import {
  Container, Rating, Stack, Typography, CardMedia, Button
} from "@mui/material";
import {ButtonWrapper, LockedContainer, StackWrapper} from './styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {VideoComponent} from "../Video";
import {CurrentCourseType, Lesson, StatusType} from "../../types/courses";

interface Props {
  course: CurrentCourseType;
  lesson: Lesson;
  duration: number;
  goBackHandler: () => void;
  changeLessonHandler: (lesson: Lesson) => () => void;
}

interface LessonsProps {
  lesson: Lesson;
  lessons: Array<Lesson>;
  changeLessonHandler: (lesson: Lesson) => () => void;
}

export const LessonsList: React.FC<LessonsProps> = ({lesson, lessons, changeLessonHandler}) => {
  return (
    <StackWrapper
      direction="row"
      alignItems="center"
      spacing={2}
      mt={2}
    >
      {lessons.map((item) => (
        <ButtonWrapper key={item.id} disabled={item.order === lesson.order || item.status === StatusType.LOCKED} onClick={changeLessonHandler(item)}>
          {item.status === StatusType.LOCKED ? (
            <LockedContainer>
              <Typography gutterBottom variant="h6" component="span">
                {item.status}
              </Typography>
            </LockedContainer>
          ) : (
            <CardMedia
              component="img"
              height="100"
              width="100"
              image={`${item.previewImageLink}/lesson-${item.order}.webp`}
            />
          )}
        </ButtonWrapper>
      ))}
    </StackWrapper>
  )
}

export const Course: React.FC<Props> = ({course, lesson, duration, changeLessonHandler, goBackHandler}) => {
  return (
    <Container>
      <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={goBackHandler}>Back</Button>
      <Stack mt={2} mb={2} direction={{ sm: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ sm: 'flex-start', md: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {course.title}
        </Typography>
        <Rating size="large" name="read-only" value={course.rating} readOnly precision={0.5} />
      </Stack>
      <VideoComponent id={lesson.id} duration={duration} controls size="lg" src={lesson.link} />
      {!!course.lessons.length && (
        <LessonsList lesson={lesson} lessons={course.lessons} changeLessonHandler={changeLessonHandler} />
      )}
      <Typography mt={4} gutterBottom variant="h5" component="div">
        {lesson.title}
      </Typography>
    </Container>
  )
}
