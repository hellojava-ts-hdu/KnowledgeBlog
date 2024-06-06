export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/%E4%BA%91%E5%8E%9F%E7%94%9F/kubeflow.html", { loader: () => import(/* webpackChunkName: "云原生_kubeflow.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/云原生/kubeflow.html.js"), meta: {"d":1717632000000,"l":"2024年6月6日","c":["云原生"],"g":["Kubeflow"],"e":"\n<p><a href=\"https://www.kubeflow.org/docs/started/introduction/\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.kubeflow.org/docs/started/introduction/</a></p>\n<h1>介绍</h1>\n<p>Kubeflow 简介\nKubeflow 项目致力于让机器学习 (ML) 工作流在 Kubernetes 上的部署变得简单、可移植且可扩展。我们的目标不是重新创建其他服务，而是提供一种简单的方法，将最佳的 ML 开源系统部署到各种基础设施中。只要您运行 Kubernetes，就可以运行 Kubeflow。\n下图展示了主要的 Kubeflow 组件，涵盖 Kubernetes 之上 ML 生命周期的每个步骤。\n<img src=\"https://cdn.nlark.com/yuque/0/2024/svg/26064275/1716531360679-f5663517-1324-4989-9050-ce9383565580.svg#clientId=ucc6b50f7-0490-4&amp;from=paste&amp;id=u411ff0ab&amp;originHeight=982&amp;originWidth=631&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uc54ae6c4-9c8c-462a-989f-a62d05472e3&amp;title=\" alt=\"\" loading=\"lazy\"></p>","r":{"minutes":19.18,"words":5755},"t":"Kubeflow 简介","i":"pen-to-square","y":"a"} }],
  ["/%E4%BB%8B%E7%BB%8D/%E4%BB%8B%E7%BB%8D.html", { loader: () => import(/* webpackChunkName: "介绍_介绍.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/介绍/介绍.html.js"), meta: {"d":1717632000000,"l":"2024年6月6日","c":["个人介绍"],"g":["个人"],"e":"<p>大家好，我是一名全栈开发工程师，拥有广泛的编程语言知识和丰富的技术经验。以下是我的专业技能和经验介绍：</p>\n<h4>编程语言</h4>\n<ul>\n<li><strong>Java</strong>: 熟练使用Java进行企业级应用开发，精通Spring Boot框架，擅长构建高性能和可扩展的后端服务。</li>\n<li><strong>C++</strong>: 具备扎实的C++基础，能够开发高效的系统级应用程序。</li>\n<li><strong>C</strong>: 精通C语言，擅长底层编程和系统开发。</li>\n<li><strong>Python</strong>: 精通Python，尤其在数据分析、机器学习以及自动化脚本编写方面有丰富经验。</li>\n<li><strong>Go</strong>: 熟悉Go语言，能够利用其高并发和高性能特点开发后端服务。</li>\n</ul>","r":{"minutes":1.64,"words":491},"t":"个人介绍","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/%E4%BA%91%E5%8E%9F%E7%94%9F/", { loader: () => import(/* webpackChunkName: "云原生_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/云原生/index.html.js"), meta: {"t":"云原生"} }],
  ["/%E4%BB%8B%E7%BB%8D/", { loader: () => import(/* webpackChunkName: "介绍_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/介绍/index.html.js"), meta: {"t":"介绍"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E4%BA%91%E5%8E%9F%E7%94%9F/", { loader: () => import(/* webpackChunkName: "category_云原生_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/category/云原生/index.html.js"), meta: {"t":"云原生 分类","I":false} }],
  ["/category/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D/", { loader: () => import(/* webpackChunkName: "category_个人介绍_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/category/个人介绍/index.html.js"), meta: {"t":"个人介绍 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/kubeflow/", { loader: () => import(/* webpackChunkName: "tag_kubeflow_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/tag/kubeflow/index.html.js"), meta: {"t":"标签: Kubeflow","I":false} }],
  ["/tag/%E4%B8%AA%E4%BA%BA/", { loader: () => import(/* webpackChunkName: "tag_个人_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/tag/个人/index.html.js"), meta: {"t":"标签: 个人","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
