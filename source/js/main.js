import { initSomething } from "./utils/initSomething.js";
import { initSlider } from "./utils/initSlider.js";
import { initTabList } from "./utils/initTabList.js";
import { navInit } from "./utils/navInit.js";

navInit();

initSomething(".slider", initSlider)
initSomething(".tablist", initTabList)


