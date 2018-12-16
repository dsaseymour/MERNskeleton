import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
/*
Included for configuration of enzyme-adapter-react-16 
*/
configure({ adapter: new Adapter() });
//Test Globals
global.shallow = shallow;
global.render = render;
global.mount = mount;
