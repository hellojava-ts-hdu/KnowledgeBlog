import comp from "D:/Code/knowledgeblob/project/src/.vuepress/.temp/pages/云原生/kubeflow.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BA%91%E5%8E%9F%E7%94%9F/kubeflow.html\",\"title\":\"Kubeflow 简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-06-06T00:00:00.000Z\",\"title\":\"Kubeflow 简介\",\"category\":[\"云原生\"],\"tag\":[\"Kubeflow\"],\"description\":\"k8s 云原生之Kubeflow 简介 官网 https://www.kubeflow.org/docs/started/introduction/ 介绍 Kubeflow 简介 Kubeflow 项目致力于让机器学习 (ML) 工作流在 Kubernetes 上的部署变得简单、可移植且可扩展。我们的目标不是重新创建其他服务，而是提供一种简单的方法，将...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/%E4%BA%91%E5%8E%9F%E7%94%9F/kubeflow.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"知识笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Kubeflow 简介\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"k8s 云原生之Kubeflow 简介 官网 https://www.kubeflow.org/docs/started/introduction/ 介绍 Kubeflow 简介 Kubeflow 项目致力于让机器学习 (ML) 工作流在 Kubernetes 上的部署变得简单、可移植且可扩展。我们的目标不是重新创建其他服务，而是提供一种简单的方法，将...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/kubeflow-intro-diagram.drawio.svg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-07-08T03:35:52.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"MouseSun\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Kubeflow\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-06-06T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-07-08T03:35:52.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Kubeflow 简介\\\",\\\"image\\\":[\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/kubeflow-intro-diagram.drawio.svg\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/kubeflow-architecture.drawio.svg\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/pipelines-architecture.png\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/pipelines-xgboost-graph.png\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/katib-overview.drawio.png\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/ml-lifecycle-katib.drawio.svg\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/1717032510724-7313197a-794c-4ee1-8b87-0b404927dd36.jpeg\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/fa7f455b9be948e4266cf6b00558b7eb.svg\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/1717048698337-ac40c262-c37a-40d4-b6e0-cab8c5c72759.jpeg\\\",\\\"https://mousesun846.github.io/KnowledgeBlog/KnowledgeBlog/assets/images/1717049876177-87ea2ccb-4bea-4d86-aa40-fd9ef64b2a06.jpeg\\\"],\\\"datePublished\\\":\\\"2024-06-06T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-07-08T03:35:52.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"MouseSun\\\",\\\"url\\\":\\\"https://github.com/MouseSun846\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"概念概述\",\"slug\":\"概念概述\",\"link\":\"#概念概述\",\"children\":[]},{\"level\":2,\"title\":\"Pipeline\",\"slug\":\"pipeline\",\"link\":\"#pipeline\",\"children\":[{\"level\":3,\"title\":\"Python SDK：\",\"slug\":\"python-sdk\",\"link\":\"#python-sdk\",\"children\":[]},{\"level\":3,\"title\":\"DSL compiler：\",\"slug\":\"dsl-compiler\",\"link\":\"#dsl-compiler\",\"children\":[]},{\"level\":3,\"title\":\"Pipeline Service：\",\"slug\":\"pipeline-service\",\"link\":\"#pipeline-service\",\"children\":[]},{\"level\":3,\"title\":\"Kubernetes resources：\",\"slug\":\"kubernetes-resources\",\"link\":\"#kubernetes-resources\",\"children\":[]},{\"level\":3,\"title\":\"Orchestration controllers：\",\"slug\":\"orchestration-controllers\",\"link\":\"#orchestration-controllers\",\"children\":[]},{\"level\":3,\"title\":\"Artifact storage：\",\"slug\":\"artifact-storage\",\"link\":\"#artifact-storage\",\"children\":[]},{\"level\":3,\"title\":\"Persistence agent and ML metadata：\",\"slug\":\"persistence-agent-and-ml-metadata\",\"link\":\"#persistence-agent-and-ml-metadata\",\"children\":[]},{\"level\":3,\"title\":\"Pipeline web server：\",\"slug\":\"pipeline-web-server\",\"link\":\"#pipeline-web-server\",\"children\":[]}]},{\"level\":2,\"title\":\"Pipeline\",\"slug\":\"pipeline-1\",\"link\":\"#pipeline-1\",\"children\":[]},{\"level\":2,\"title\":\"Component\",\"slug\":\"component\",\"link\":\"#component\",\"children\":[{\"level\":3,\"title\":\"组件代码\",\"slug\":\"组件代码\",\"link\":\"#组件代码\",\"children\":[]},{\"level\":3,\"title\":\"组件定义\",\"slug\":\"组件定义\",\"link\":\"#组件定义\",\"children\":[]},{\"level\":3,\"title\":\"容器化组件\",\"slug\":\"容器化组件\",\"link\":\"#容器化组件\",\"children\":[]}]},{\"level\":2,\"title\":\"Graph\",\"slug\":\"graph\",\"link\":\"#graph\",\"children\":[]},{\"level\":2,\"title\":\"Experiment\",\"slug\":\"experiment\",\"link\":\"#experiment\",\"children\":[]},{\"level\":2,\"title\":\"主要的 Argo 工作流执行器类型包括：\",\"slug\":\"主要的-argo-工作流执行器类型包括\",\"link\":\"#主要的-argo-工作流执行器类型包括\",\"children\":[]},{\"level\":2,\"title\":\"如何选择适合的执行器：\",\"slug\":\"如何选择适合的执行器\",\"link\":\"#如何选择适合的执行器\",\"children\":[]},{\"level\":2,\"title\":\"controller-manager\",\"slug\":\"controller-manager\",\"link\":\"#controller-manager\",\"children\":[{\"level\":3,\"title\":\"官网地址\",\"slug\":\"官网地址\",\"link\":\"#官网地址\",\"children\":[]},{\"level\":3,\"title\":\"Kubernetes 应用程序\",\"slug\":\"kubernetes-应用程序\",\"link\":\"#kubernetes-应用程序\",\"children\":[]},{\"level\":3,\"title\":\"它提供了：\",\"slug\":\"它提供了\",\"link\":\"#它提供了\",\"children\":[]},{\"level\":3,\"title\":\"这可以被以下用户使用：\",\"slug\":\"这可以被以下用户使用\",\"link\":\"#这可以被以下用户使用\",\"children\":[]},{\"level\":3,\"title\":\"目标\",\"slug\":\"目标\",\"link\":\"#目标\",\"children\":[]},{\"level\":3,\"title\":\"非目标\",\"slug\":\"非目标\",\"link\":\"#非目标\",\"children\":[]}]},{\"level\":2,\"title\":\"什么是 Katib？\",\"slug\":\"什么是-katib\",\"link\":\"#什么是-katib\",\"children\":[]},{\"level\":2,\"title\":\"为什么选择 Katib？\",\"slug\":\"为什么选择-katib\",\"link\":\"#为什么选择-katib\",\"children\":[]},{\"level\":2,\"title\":\"pipeline服务注册流程\",\"slug\":\"pipeline服务注册流程\",\"link\":\"#pipeline服务注册流程\",\"children\":[{\"level\":3,\"title\":\"API v1beta1 注册的服务\",\"slug\":\"api-v1beta1-注册的服务\",\"link\":\"#api-v1beta1-注册的服务\",\"children\":[]},{\"level\":3,\"title\":\"API v2beta1 注册的服务\",\"slug\":\"api-v2beta1-注册的服务\",\"link\":\"#api-v2beta1-注册的服务\",\"children\":[]},{\"level\":3,\"title\":\"其他\",\"slug\":\"其他\",\"link\":\"#其他\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]},{\"level\":2,\"title\":\"pipeline创建流程\",\"slug\":\"pipeline创建流程\",\"link\":\"#pipeline创建流程\",\"children\":[]},{\"level\":2,\"title\":\"创建Runs\",\"slug\":\"创建runs\",\"link\":\"#创建runs\",\"children\":[]}],\"git\":{\"createdTime\":1717647564000,\"updatedTime\":1720409752000,\"contributors\":[{\"name\":\"mousesun\",\"email\":\"3026098675@qq.com\",\"commits\":6},{\"name\":\"3026098675@qq.com\",\"email\":\"3026098675@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":18.44,\"words\":5533},\"filePathRelative\":\"云原生/kubeflow.md\",\"localizedDate\":\"2024年6月6日\",\"excerpt\":\"<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">k8s 云原生之Kubeflow 简介</p>\\n</div>\\n<h1>官网</h1>\\n<p><a href=\\\"https://www.kubeflow.org/docs/started/introduction/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://www.kubeflow.org/docs/started/introduction/</a></p>\\n<h1>介绍</h1>\\n<p>Kubeflow 简介\\nKubeflow 项目致力于让机器学习 (ML) 工作流在 Kubernetes 上的部署变得简单、可移植且可扩展。我们的目标不是重新创建其他服务，而是提供一种简单的方法，将最佳的 ML 开源系统部署到各种基础设施中。只要您运行 Kubernetes，就可以运行 Kubeflow。\\n下图展示了主要的 Kubeflow 组件，涵盖 Kubernetes 之上 ML 生命周期的每个步骤。\\n<img src=\\\"/assets/images/kubeflow-intro-diagram.drawio.svg\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></p>\",\"autoDesc\":true}")
export { comp, data }
