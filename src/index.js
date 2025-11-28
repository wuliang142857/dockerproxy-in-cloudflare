export default {
    async fetch(request) {
        const url = new URL(request.url);
        const path = url.pathname;

        // 定义不同仓库的代理地址
        const registries = {
            'docker': 'https://jghapxhongqm.ap-northeast-1.clawcloudrun.com',
        };

        let targetUrl = registries.docker;
        // 构建完整的目标URL
        const proxyUrl = targetUrl + path + url.search;
        // 创建代理请求
        const proxyRequest = new Request(proxyUrl, {
            method: request.method,
            headers: request.headers,
            body: request.body,
        });

        // 转发请求并返回响应
        return fetch(proxyRequest);
    },
};
