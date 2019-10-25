/**
 * Created by lidy on 2019/10/24.
 */
// 导入自己需要的组件
import {
  Button, Select, Option, Row, Col, Input, Avatar, Carousel, CarouselItem,
  Form, FormItem
} from "element-ui";

const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Input);
    Vue.use(Avatar);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Form);
    Vue.use(FormItem);
  }
};
export default element;