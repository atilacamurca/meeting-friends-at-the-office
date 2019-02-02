module.exports = {
    title: 'Metting Friends at The Office',
    description: 'Friends references found in The Office',
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true]
    ]
}
