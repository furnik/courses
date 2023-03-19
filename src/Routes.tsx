import {Route, Routes} from "react-router-dom";
import {routes} from "./constants/routes";
import {CoursesContainer} from "./containers/Courses";
import {CourseContainer} from "./containers/Course";

export const RoutesContainer = () => {
  return (
    <Routes>
      <Route key={routes.courses} path={routes.courses} element={<CoursesContainer />} />
      <Route key={routes.course} path={routes.course} element={<CourseContainer />} />
      <Route key={routes.all} path={routes.all} element={<CoursesContainer />} />
    </Routes>
  )
}
