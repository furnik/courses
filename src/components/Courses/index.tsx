import React from "react";
import {
  Container,
  Grid, Pagination, Stack,
  Typography,
} from "@mui/material";
import {CardComponent} from "../Card";
import {CourseType} from "../../types/courses";

interface Props {
  courses: Array<CourseType>;
  changePageHandler: (event: React.ChangeEvent<unknown>, page: number) => void;
  pagesCount: number;
}

export const Courses: React.FC<Props> = ({courses, changePageHandler, pagesCount}) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Courses
      </Typography>
      <Grid mt={2} container spacing={{xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {courses.map((item) => (
          <Grid item xs={4} sm={8} md={6} key={item.id}>
              <CardComponent {...item} />
          </Grid>
        ))}
      </Grid>
      {pagesCount > 0 && (
        <Stack
          mt={4}
          mb={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Pagination onChange={changePageHandler} count={pagesCount} variant="outlined" shape="rounded" />
        </Stack>
      )}
    </Container>
  )
}
