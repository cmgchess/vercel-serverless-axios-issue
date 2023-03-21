# Vercel Serverless Axios Issue

| **Endpoint**                                                     | **Dev**     | **Deploy**  |
|------------------------------------------------------------------|-------------|-------------|
| https://vercel-serverless-axios-issue.vercel.app/api/axios-break | Working     | Not working |
| https://vercel-serverless-axios-issue.vercel.app/api/axios-work  | Not working | Working     |


For [`axios-work`](https://github.com/cmgchess/vercel-serverless-axios-issue/blob/master/api/axios-work.js#L1) I import axios like `import axios from 'axios/dist/node/axios.cjs';`  
It works after deploying but breaks in dev giving below error
```bash
Error: Function `api/axios-work.js` failed with exit code 1
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './dist/node/axios.cjs' is not defined by "exports" in E:\vercel-serverless-axios-issue\node_modules\axios\package.json
    at throwExportsNotFound (internal/modules/esm/resolve.js:290:9)
    at packageExportsResolve (internal/modules/esm/resolve.js:513:3)
    at resolveExports (internal/modules/cjs/loader.js:432:36)
    at Function.Module._findPath (internal/modules/cjs/loader.js:472:31)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:867:27)
    at Function.Module._resolveFilename.sharedData.moduleResolveFilenameHook.installedValue [as _resolveFilename] (C:\Users\ASUS\AppData\Roaming\npm\node_modules\vercel\node_modules\@cspotcode\source-map-support\source-map-support.js:811:30)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (E:\vercel-serverless-axios-issue\api\axios-work.js:1:1) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
Error: Function `api/axios-work.js` failed with exit code 1
```

For [`axios-break`](https://github.com/cmgchess/vercel-serverless-axios-issue/blob/master/api/axios-break.js#L1) I import axios like `import axios from 'axios';`  
It works in dev but breaks after deploying giving below error
```bash
Cannot find module '/var/task/node_modules/axios/dist/node/axios.cjs'
Did you forget to add it to "dependencies" in `package.json`?
RequestId: c1845ce2-d588-4f0a-a478-95bfafacf92b Error: Runtime exited with error: exit status 1
Runtime.ExitError
```