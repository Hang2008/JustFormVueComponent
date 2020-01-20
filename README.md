# Plugin

### Build

```
npm run lib
```

### publish

```
npm login
```

#### enter your username and password

```
npm publish
```

#使用

```
npm install just-wy-components
```

```javascript
//main.js

import justwy from 'just-wy-components';
import '../node_modules/just-wy-components/dist/just-wy-components.css';
Vue.use(justwy);
```

# TODO

当前只支持全局引用
当前打包出来 css 文件虽然在库中，但是使用者还需要自己引用
当前组件都打包到了一个文件中，例如 button，message，将来需要分开打包
