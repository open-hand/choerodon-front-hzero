`hzero-front-demo`

---

## Online Demo

[在线 Demo](http://hzero-front.jd1.jajabjbj.top/workplace)

## 使用

### 安装
```bash
lerna bootstrap 
yarn run transpile
```
> 注意:  
> 1. 执行完 lerna bootstrap 会在 node_modules 下面生成一个 sample2-common 的软链接，链接指向 packages/sample2-common  
> 2. 所以在其他子模块里面可以直接引用 sample2-common 模块的文件， 可以把 sample2-common 看成一个公共依赖  
> 3. 执行完 lerna run transpile 之后会生成 packages/sample2-common/lib 文件夹, 模块之间的相互依赖都是通过 lib 目录暴露出去的，如果 lib 文件的代码更新了 ,改动的代码才会生效  
> 4. 注意 dll 不存在时， hzero-cli 会自动帮你执行 `yarn run build:dll` ,但是如果你的 npm 依赖更新了 想刷新 dll ，需要手动运行一次 `yarn run build:dll`  
> 5. 修改了 PUBLIC_URL 环境变量之后, 由于 `src/config/theme.js` 中的数据会直接编译到 dll，影响 dll 内容, 所以如果想更新 dll 中的 PUBLIC_URL, 需要重新运行 `yarn build:dll`
> 6. 如果你想开发调试时能调试 dva、redux, dll 文件 能显示 sourcemap , 需要手动执行一次 `yarn run build:dll-dev`  

### 多环境环境变量配置文件

环境变量配置文件: 

- `src/config/.env.yml`: 默认环境变量配置文件
- `src/config/.env.${NODE_PROFILE}.yml`: 根据环境变量 NODE_PROFILE 的值切换配置文件, 比如当 NODE_PROFILE=development 时, .env.development.yml 会生效, 该文件的优先级比 .env.yml 高。
- `src/config/.env.${NODE_PROFILE}.local.yml`: 本地环境变量, 优先级最高的配置文件, 该配置文件不会进入 git 的版本管理。
- `packages/xxx/src/config/.env.yml`: 子模块独立默认环境变量配置文件，优先级比父模块高，但是只会影响当前子模块

环境变量说明:

- `API_HOST`: 后端接口地址。
- `SKIP_TS_CHECK_IN_START`: [true|false] yarn start 时, 是否跳过 ts 语法检查。
- `SKIP_ESLINT_CHECK_IN_START`: [true|false] yarn start 时, 是否跳过 eslint 语法检查。
- `DISABLE_BUILD_DLL`: [true|false] 是否不使用 dll
- `NO_PROXY`: 是否开启 mock 接口
- `GENERATE_SOURCEMAP`: 是否生成 sourcemap

### hzero-boot 运行环境配置文件

- 配置文件位置可以通过 alias `hzero-boot-customize-init-config` 指定。示例：
  ```js
  const paths = require('hzero-webpack-scripts/config/paths');
  const path = require('path');

  module.exports = {
    'hzero-boot-customize-init-config': `${path.resolve(paths.appRootPath, './src')}/config/customize`
  };
  ```

- `packages/xxx-common/src/config/customize`: hzero 全局配置文件示例：

  ```typescript
  import { overWriteConfig } from 'hzero-boot';
  import { getConfig } from 'choerodon-ui';
  import { AxiosStatic } from 'axios';
  // import commonConfig from '../commonConfig';

  overWriteConfig({
    // 全局错误处理配置
    dealGlobalError: (error) => {
      window.location.href = `${commonConfig.BASE_PATH || '/'}error.html?errorMessage=${encodeURIComponent(
        error && error.message
      )}&errorLocation=${encodeURIComponent(window.location.href)}`;
    },
    // 在这个文件内可以重新 c7nUi 配置
    initC7nUiConfig: () => {
        return require('hzero-front/lib/utils/c7nUiConfig');
    },
    // 在 dva 对象实例化之后调用，可以在这里添加 dva 插件
    dvaAppInit: (dvaApp) => {
      const axios: AxiosStatic = getConfig('axios');
      axios.interceptors.response.use(
          config => config,
          (error) => {
              return Promise.reject(error);
          }
      )
    },
    // 可以设置 dvaApp.router 的根路由
    dvaRootRouter: () => require('hzero-front/lib/router').default,
    // 可以替换 global 配置
    globalModal: () => require('./models/global').default,
  });
  ```

### `.hzerorc.js` 模块配置文件

[`.hzerorc.js` 模块配置文件说明](https://code.choerodon.com.cn/hft/hzero-cli#hzero-%E5%AD%90%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)


### 开发

开发两种方案

1. 单模块启动: 本地编译调试速度快
2. 全模块启动: 适合做集成测试

#### 1. 单模块启动

```bash
cd packages/sample2-demo1
yarn run start
```

#### 2. 全模块启动

```bash
yarn run build:ms # 编译子模块
yarn run start
```
> 如果在父项目运行的话 ，第一次 `yarn start`,  是不会有页面的
> 需要运行一遍 `yarn run build:ms`， 再运行 `yarn start` 可以有页面
> 子模块代码变更之后需要重新编译到父模块（运行 `yarn run build:ms [子模块名]`）， 父模块启动时才会看到最新的子模块内容

### 打包

```bash
#!/usr/bin/env bash

# jenkins 脚本文件

set -e # 报错不继续执行

export BASE_PATH=BUILD_BASE_PATH
export API_HOST=BUILD_API_HOST
export CLIENT_ID=BUILD_CLIENT_ID
export WEBSOCKET_HOST=BUILD_WEBSOCKET_HOST
export PLATFORM_VERSION=BUILD_PLATFORM_VERSION
export BPM_HOST=BUILD_BPM_HOST
export IM_ENABLE=BUILD_IM_ENABLE

# $UPDATE_MICRO_MODULES UPDATE_MICRO_MODULES 变量如果存在值的话就 增量更新微前端子模块。

if  [[ $UPDATE_MICRO_MODULES =~ "ALL" ]] || [[ ! -n "$UPDATE_MICRO_MODULES" ]] ;then
    rm -rf yarn.lock
    yarn install
    yarn run build:dll
    yarn run transpile # 编译子模块
    yarn build
else
    echo 增量编译子模块 $UPDATE_MICRO_MODULES
    yarn run build:ms $UPDATE_MICRO_MODULES
fi

rm -rf ./html
cp -r ./dist ./html

export BUILD_BASE_PATH=/
export BUILD_API_HOST=http://backend.jd1.jajabjbj.top
export BUILD_CLIENT_ID=localhost
export BUILD_WFP_EDITOR=""
export BUILD_WEBSOCKET_HOST=ws://ws.jd1.jajabjbj.top
export BUILD_PLATFORM_VERSION=SAAS
export BUILD_BPM_HOST=http://bpm.jd1.jajabjbj.top
export BUILD_IM_ENABLE=false
export BUILD_IM_WEBSOCKET_HOST=ws://im.ws.jd1.jajabjbj.top

find ./html -name '*.js' | xargs sed -i "s BUILD_BASE_PATH $BUILD_BASE_PATH g"
find ./html -name '*.js' | xargs sed -i "s BUILD_API_HOST $BUILD_API_HOST g"
find ./html -name '*.js' | xargs sed -i "s BUILD_CLIENT_ID $BUILD_CLIENT_ID g"
find ./html -name '*.js' | xargs sed -i "s BUILD_BPM_HOST $BUILD_BPM_HOST g"
find ./html -name '*.js' | xargs sed -i "s BUILD_WFP_EDITOR $BUILD_WFP_EDITOR g"
find ./html -name '*.js' | xargs sed -i "s BUILD_WEBSOCKET_HOST $BUILD_WEBSOCKET_HOST g"
find ./html -name '*.js' | xargs sed -i "s BUILD_PLATFORM_VERSION $BUILD_PLATFORM_VERSION g"

# 这里实现你的部署逻辑 deploy ./html

# export CICD_EXECUTION_SEQUENCE=${BUILD_NUMBER:-1}
# docker build . -t  hzero-front-sample:${CICD_EXECUTION_SEQUENCE}
# docker rm -f hzero-front-sample 2>/dev/null
# docker run --rm -it --name hzero-front-sample hzero-front-sample:${CICD_EXECUTION_SEQUENCE}

npx serve html -s # 或者 npx http-server html -P 测试本地打包的文件

```

### 发布

运行完打包之后 html 就是需要发布的文件，放到 nginx 的 html 目录下，然后配置 nginx 即可运行

#### NGINX 配置

```
   user  nginx;
    worker_processes  1;

    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;


    events {
        worker_connections  1024;
    }

    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;

        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

        access_log  /var/log/nginx/access.log  main;

        sendfile        on;

        keepalive_timeout  65;

        gzip on;
        gzip_buffers 32 4k;
        gzip_comp_level 6;
        gzip_min_length 200;
        gzip_types text/css text/xml application/javascript;

        server {
            listen       80;
            server_name  localhost;

            location \/[a-z.0-9]\.(js|css|gif|png|jpg)$ {
              expires    7d; # 开启 eTag 缓存
            }

            location / {
                root   /usr/share/nginx/html;
                index  index.html index.htm;
                try_files $uri /index.html; # 启动 Bowser 路由 配置
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   /usr/share/nginx/html;
            }

        }
    }
```

### 启动 css modules

当样式文件名为 `xxx.module.less`（样式文件名以 `.module.less` 为后缀） 时， less 文件中的类名 会自动开启 `css module` 规则:

样式定义文件: `style.module.less`
```less
// ./style.module.less

.test-cls {
  color: red;
}

```
引用样式：
```tsx
// ./HelloDemo1Page.tsx

import React from 'react';
import styles from './style.module.less';

const HelloWorldPage: React.FC = () => {
  return (
    <p>
      css modules 测试: <span className={styles['test-cls']}>{styles['test-cls']}</span>
    </p>
  );
};

export default HelloWorldPage;

```


预览效果：
```html

<style>
.style_test-cls__1GGqN {
  color: red;
}
</style>

<p>
  css modules 测试: 
  <span class="style_test-cls__1GGqN">style_test-cls__1GGqN</span>
</p>
```

在 less 样式文件内加 `global:` 可以取消该样式文件的某一个样式的 `css module` 规则。

定义样式：
```less
// ./style2.module.less

.test-cls1 {
  color: #ff1;
}

:global(.test-cls2) { // test-cls3 不会开启 css module 规则
  color: #ff2;
}

.test-cls3 { // test-cls3 会开启 css module 规则
  color: #ff3;

  :global{

    .test-cls4 { // test-cls4 不开启 css module 规则
      color: #ff3;
    }

  }
}

```
引用样式
```tsx
// ./HelloDemo1Page.tsx

import React from 'react';
import s from './style2.module.less';

const HelloWorldPage: React.FC = () => {
  return (
    <p>
      css modules 测试: 
      <span className={s['test-cls1']}>{s['test-cls1']}</span>
      <span className={s['test-cls2']}>{s['test-cls2']}</span>
    </p>
  );
};

export default HelloWorldPage;

```
输出结果：
```html
<style>
.style2_test-cls1__6dzAN {
    color: #ff1;
}
.test-cls2 {
  color: #ff2;
}

.style2_test-cls3__0H3Aq {
  color: #ff3;
}

.style2_test-cls3__0H3Aq .test-cls4 {
  color: #ff4;
}

</style>
<p>
  css modules 测试: 
  <span class="style2_test-cls1__6dzAN">style_test-cls1__6dzAN</span>
  <span class="test-cls2">test-cls2</span>
</p>
``` 
