import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFile from "./Component/MainFile";
import ChildOne from "./Component/ChildOne";
import Usememoparent from "./Component/usememo/Usememoparent";
import FirstPage from "./tailwind-css-page/FirstPage";
import Navbar from "./tailwind-css-page/Navbar";
import CardShow from "./tailwind-css-page/CardShow";
import FaqSection from "./Stateconcept/FaqSection";
import PasswordHideShow from "./Stateconcept/PasswordHideShow";
import DashboardLayout from "./tailwind-css-page/dynamiclayout/DashboardLayout";
import DashBoard from "./tailwind-css-page/dynamiclayout/pages/DashBoard";
import Profile from "./tailwind-css-page/dynamiclayout/pages/Profile";
import Setting from "./tailwind-css-page/dynamiclayout/pages/Setting";
import Help from "./tailwind-css-page/dynamiclayout/pages/Help";
import Contact from "./tailwind-css-page/dynamiclayout/contact/Contact";
import DashboardLayoutRoutes from "./tailwind-css-page/dynamiclayout/DashboardLayoutRoutes";
import TodoApp from "./tailwind-css-page/todo/TodoApp";
import DsLandingPage from "./tailwind-css-page/landing-page-by-deepseek/DsLandingPage";
import Otp from "./tailwind-css-page/otp/Otp";
import PaginatedAPI from "./tailwind-css-page/pagination/PaginatedAPI";
import PaginatedList from "./tailwind-css-page/pagination/PaginatedList";
import DashBoardNavSide from "./tailwind-css-page/responsive-layout-claude/DashBoardNavSide";
import CardselectPagination from "./cards/CardselectPagination";
import InfinityScrollingCard from "./cards/InfinityScrollingCard";
import ObjectsArray from "./object-array/ObjectsArray";
import CheckBox from "./object-array/CheckBox";
import RadioButton from "./object-array/RadioButton";
import PaginatedAPI_Checkbox from "./tailwind-css-page/pagination/PaginatedAPI_Checkbox";
import Drag_Drop_Card from "./tailwind-css-page/drag-drop-card/Drag_Drop_Card";
import Kanban_Drag_Drop_Card from "./tailwind-css-page/drag-drop-card/Kanban_Drag_Drop_Card";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<MainFile />} />
    //     <Route path="/child" element={<ChildOne />} /> */}
    //     {/* <Route path="/" element={<Customhookuse />} /> */}
    //   </Routes>
    // </Router>
    // <Usememoparent />
    <>
      {/* <Navbar /> */}

      {/* First page is allrounder page  */}
      {/* <FirstPage /> */}

      {/* <CardShow /> */}

      {/* DynamicLayout  */}
      {/* <DashboardLayoutRoutes /> */}
      {/*Responsive Layout using claude*/}
      {/* <DashBoardNavSide /> */}
      {/*TodoApp*/}
      {/* <TodoApp /> */}
      {/*DeepSeek Landing Page*/}
      {/* <DsLandingPage /> */}

      {/*OTP page*/}
      {/* <Otp /> */}
      {/*Pagination with API*/}
      {/* <PaginatedAPI /> */}
      {/*Pagination with UI List*/}
      {/* <PaginatedList /> */}
      {/*Pagination with check box*/}
      {/* <PaginatedAPI_Checkbox /> */}

      {/*CardselectPagination*/}
      {/* <CardselectPagination /> */}

      {/* Infinity scrolling card with API call */}
      {/* <InfinityScrollingCard /> */}

      {/*Object operation*/}
      {/* <ObjectsArray /> */}
      {/* <CheckBox /> */}
      {/* <RadioButton /> */}

      {/*Drag Drop Card  // Kanban_Drag_drop_Card*/}
      <Drag_Drop_Card />
      {/* <Kanban_Drag_Drop_Card /> */}
    </>
  );
}

export default App;
