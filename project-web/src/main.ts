import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* Global Style */
import "~/styles/index.scss";

/* Import Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core' // import the fontawesome core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  // import font awesome icon component
import { faBars, faArrowUpRightFromSquare, faTag, faEnvelope, faUser, faLink, faPeopleGroup, faBook, faQuoteLeft } from '@fortawesome/free-solid-svg-icons' // import specific icons
import { faGoogle, faGithub, faTwitter, faLinkedin, faFacebook, faZhihu, faWeixin, faQq } from '@fortawesome/free-brands-svg-icons' // import specific icons
library.add(faBars, faArrowUpRightFromSquare, faTag, faEnvelope, faUser, faGoogle, faGithub, faTwitter, faLinkedin, faFacebook, faZhihu, faWeixin, faQq, faLink, faPeopleGroup, faBook, faQuoteLeft)    // add icons to the library

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");