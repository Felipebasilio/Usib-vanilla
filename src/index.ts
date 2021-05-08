import "bootstrap";
import "./styles/indexStyles";
import "./assets/index";
import "./pages/index";

import "./API_Connection/API_Connection";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { createFooter } from "./components/index";
import { createNavBar } from "./components/navbar/navbar";

createNavBar("appMainContainer");
createFooter("appMainContainer");
