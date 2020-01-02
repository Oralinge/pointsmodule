import Vue from "vue";
import "view-design/dist/styles/iview.css";
import {
  Button,
  Table,
  Input,
  Select,
  Option,
  Form,
  Spin,
  Icon,
  Row,
  Col,
  FormItem,
  Modal,
  Message,
  Tag,
  Switch
} from "view-design";

Vue.component("SW", Switch);
Vue.component("Tag", Tag);
Vue.component("Button", Button);
Vue.component("Table", Table);
Vue.component("Input", Input);
Vue.component("Select", Select);
Vue.component("Option", Option);
Vue.component("Form", Form);
Vue.component("Spin", Spin);
Vue.component("Icon", Icon);
Vue.component("Row", Row);
Vue.component("Col", Col);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.config.productionTip = false;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Message = Message;
