import comp from "D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/云原生/k8s.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BA%91%E5%8E%9F%E7%94%9F/k8s.html\",\"title\":\"k8s知识点\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-07-03T00:00:00.000Z\",\"title\":\"k8s知识点\",\"category\":[\"k8s\"],\"tag\":[\"笔记\"],\"description\":\"k8s 笔记总结 pv 访问模式（Access Modes） Kubernetes支持的访问模式如下。 ReadWriteOnce（RWO）：读写权限，并且只能被单个Node挂 载。 ReadOnlyMany（ROX）：只读权限，允许被多个Node挂载。 S ReadWriteMany（RWX）：读写权限，允许被多个Node挂载。 某些PV可能支持多种...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/%E4%BA%91%E5%8E%9F%E7%94%9F/k8s.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"知识笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"k8s知识点\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"k8s 笔记总结 pv 访问模式（Access Modes） Kubernetes支持的访问模式如下。 ReadWriteOnce（RWO）：读写权限，并且只能被单个Node挂 载。 ReadOnlyMany（ROX）：只读权限，允许被多个Node挂载。 S ReadWriteMany（RWX）：读写权限，允许被多个Node挂载。 某些PV可能支持多种...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"MouseSun\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"笔记\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-07-03T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"k8s知识点\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-07-03T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"MouseSun\\\",\\\"url\\\":\\\"https://github.com/MouseSun846\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"访问模式（Access Modes）\",\"slug\":\"访问模式-access-modes\",\"link\":\"#访问模式-access-modes\",\"children\":[]},{\"level\":2,\"title\":\"回收策略（Reclaim Policy）\",\"slug\":\"回收策略-reclaim-policy\",\"link\":\"#回收策略-reclaim-policy\",\"children\":[]},{\"level\":2,\"title\":\"pv (STATUS)\",\"slug\":\"pv-status\",\"link\":\"#pv-status\",\"children\":[{\"level\":3,\"title\":\"1. Available\",\"slug\":\"_1-available\",\"link\":\"#_1-available\",\"children\":[]},{\"level\":3,\"title\":\"2. Bound\",\"slug\":\"_2-bound\",\"link\":\"#_2-bound\",\"children\":[]},{\"level\":3,\"title\":\"3. Released\",\"slug\":\"_3-released\",\"link\":\"#_3-released\",\"children\":[]},{\"level\":3,\"title\":\"4. Failed\",\"slug\":\"_4-failed\",\"link\":\"#_4-failed\",\"children\":[]}]},{\"level\":2,\"title\":\"状态转换\",\"slug\":\"状态转换\",\"link\":\"#状态转换\",\"children\":[{\"level\":3,\"title\":\"状态图示\",\"slug\":\"状态图示\",\"link\":\"#状态图示\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":2.48,\"words\":744},\"filePathRelative\":\"云原生/k8s.md\",\"localizedDate\":\"2024年7月3日\",\"excerpt\":\"<p>k8s 笔记总结</p>\\n<h1>pv</h1>\\n<h2>访问模式（Access Modes）</h2>\\n<p>Kubernetes支持的访问模式如下。</p>\\n<ul>\\n<li>\\n<p>ReadWriteOnce（RWO）：读写权限，并且只能被单个Node挂\\n载。</p>\\n</li>\\n<li>\\n<p>ReadOnlyMany（ROX）：只读权限，允许被多个Node挂载。\\nS</p>\\n</li>\\n<li>\\n<p>ReadWriteMany（RWX）：读写权限，允许被多个Node挂载。</p>\\n</li>\\n</ul>\\n<p>某些PV可能支持多种访问模式，但PV在挂载时只能使用一种访问模式，多种访问模式不能同时生效。</p>\",\"autoDesc\":true}")
export { comp, data }
