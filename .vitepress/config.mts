import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "水煮鱼资源站",
  description: "抖音：水煮鱼写前端，分享前端技术、资源、工具、经验。",
  head: [['link', { rel: 'icon', href: './logo.jpg' }]],
  srcDir:'src',
  outDir:'dist',
  sitemap: {
    hostname: 'https://webszy.net'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'./logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '代码分享', link: '/shared-code/' }
    ],

    sidebar: [
      {
        text: '水煮鱼资源站',
        items: [
          { text: '代码分享', link: '/shared-code/',
            // items:[
            //   { text: 'CSS相关', link: '/shared-code/css' },
            //   { text: 'JS相关', link: '/shared-code/js' },
            //   { text: 'Vue相关', link: '/shared-code/vue' },
            // ]
          },
          { text: '免费资源', link: '/free-for-dev/',
            items: [
              { text: '静态托管', link: '/free-for-dev/host'},
              { text: '图床', link: '/free-for-dev/image'},
              { text: '服务器', link: '/free-for-dev/'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webszy' },
      { icon:{
        svg:'<svg t="1709297702058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4602" width="48" height="48"><path d="M199.111 0H824.89C934.684 0 1024 89.316 1024 199.111V824.89C1024 934.684 934.684 1024 824.889 1024H199.11C89.316 1024 0 934.684 0 824.889V199.11C0 89.316 89.316 0 199.111 0z" fill="#170B1A" p-id="4603"></path><path d="M511.431 302.08c0.569-64.284 0-128.569 0.569-192.853h131.413c-0.569 11.377 1.138 22.755 2.845 33.564h-96.711v522.24c0.569 22.187-5.12 44.373-15.93 63.716a107.861 107.861 0 0 1-83.057 52.906c-21.618 1.707-43.804-2.275-63.147-13.084-14.79-7.965-27.306-19.342-36.977-32.996 33.564 18.774 77.368 17.067 109.795-3.982C491.52 712.25 512 675.84 512 638.293c-0.569-112.07-0.569-224.142-0.569-336.213z m216.747-36.978c18.204 11.378 38.684 20.48 59.733 25.031 12.516 2.845 25.031 3.983 38.116 3.983v29.582a187.335 187.335 0 0 1-97.85-58.596z" fill="#25F4EE" p-id="4604"></path><path d="M274.773 428.942a238.023 238.023 0 0 1 159.29-33.564v31.289c-14.792 0.569-29.014 2.275-43.805 5.12a249.458 249.458 0 0 0-97.85 43.804c-31.288 23.325-55.181 55.182-71.68 90.453a243.428 243.428 0 0 0-23.324 108.09c0 40.96 11.378 80.782 30.72 116.622 9.103 16.497 19.343 32.426 32.996 45.51-27.876-19.342-51.2-45.51-68.267-75.093-23.324-39.253-34.702-85.333-33.564-131.413 1.707-42.098 13.653-83.627 35.84-120.036a240.356 240.356 0 0 1 79.644-80.782z" fill="#25F4EE" p-id="4605"></path><path d="M549.547 142.791h97.28c3.413 18.773 10.24 36.409 18.773 53.476 13.653 26.169 32.996 49.493 58.027 64.853 1.706 1.138 2.844 2.276 3.982 3.982 25.6 29.014 60.302 50.062 98.418 58.596 0.569 34.133 0 68.835 0 102.969-64.285 0.569-128.57-19.911-180.907-57.458 0 81.92 0 163.84 0.569 245.76 0 10.809 0.569 21.618 0 32.995a268.8 268.8 0 0 1-35.271 113.778c-17.067 30.151-40.391 56.89-68.267 77.37a219.307 219.307 0 0 1-124.587 42.666c-22.755 0.569-45.51-0.57-67.697-5.69-31.29-6.826-60.871-19.91-87.04-38.115l-1.707-1.706c-13.084-13.085-23.893-29.014-32.996-45.511-19.342-35.272-30.72-75.663-30.72-116.623-0.568-36.977 7.396-74.524 23.325-108.089 16.498-35.27 40.96-67.128 71.68-90.453a249.458 249.458 0 0 1 97.849-43.804c14.222-2.845 29.013-4.551 43.804-5.12 0.57 13.084 0 26.169 0.57 38.684v66.56c-16.499-5.689-34.703-5.689-51.77-1.707-20.48 4.552-39.822 13.654-55.75 27.307-9.672 8.533-18.205 18.773-23.894 30.151-10.24 19.342-13.654 42.098-11.378 63.716 2.276 21.049 11.378 41.529 25.031 57.458 9.102 11.377 21.049 19.91 32.996 27.875 9.67 13.653 22.186 25.031 36.977 32.996 19.343 10.24 41.53 14.79 63.147 13.084 34.133-2.275 65.991-23.324 83.058-52.907 10.809-19.342 16.498-41.528 15.929-63.715 1.138-175.218 0.569-349.298 0.569-523.378z" fill="#FFFFFF" p-id="4606"></path><path d="M646.827 142.791c11.377 0.569 22.755 0 34.702 0 0 38.116 11.947 76.231 34.133 107.52 2.845 3.982 5.69 7.396 8.534 10.809-25.032-15.36-44.943-38.684-58.027-64.853-8.533-16.498-15.36-34.703-19.342-53.476z m179.2 180.907c12.515 2.844 25.03 3.982 38.115 3.982v132.551c-64.853 0.569-129.706-21.049-182.613-59.164v262.826c0.569 19.911-1.138 39.823-5.689 59.165A244.31 244.31 0 0 1 579.129 870.4c-26.169 18.773-55.751 31.858-86.471 38.684-37.547 8.534-76.8 7.965-113.778-1.706a239.787 239.787 0 0 1-115.484-69.405c26.168 18.774 55.75 31.29 87.04 38.116 22.186 5.12 44.942 6.258 67.697 5.689A219.307 219.307 0 0 0 542.72 839.11c27.876-20.48 50.631-47.218 68.267-77.369a268.8 268.8 0 0 0 35.27-113.778c0.57-10.808 0.57-21.617 0-32.995-0.568-81.92-0.568-163.84-0.568-245.76 52.338 37.547 116.622 58.027 180.907 57.458-0.57-34.134 0-68.836-0.57-102.97z" fill="#FE2C55" p-id="4607"></path><path d="M434.631 426.098c12.516 0 25.6 0.569 38.116 2.275v135.965c-18.205-6.258-38.685-6.827-57.458-2.276-35.84 7.965-65.991 35.271-78.507 69.974-12.515 34.133-7.395 73.955 14.222 102.968-12.515-7.395-23.893-16.497-32.995-27.875-13.653-15.929-22.756-36.409-25.031-57.458-2.276-21.618 1.138-44.373 11.378-63.715 5.688-11.378 14.222-21.618 23.893-30.152 15.929-13.653 35.84-22.186 55.751-27.306 17.067-3.982 35.271-3.982 51.769 1.706v-66.56c-1.138-11.377-0.569-24.462-1.138-37.546z" fill="#FE2C55" p-id="4608"></path></svg>'
        },
        link: 'https://www.douyin.com/user/MS4wLjABAAAA8E6Fk1H5NZ4j09r3bkzzNYWMCgM-6Wnpn0anVPuV9oc'
      },
      {
        icon:{
          svg:'<svg class="icon-juejin" viewBox="0 0 2640 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4280" width="48" height="48"><path d="M600.737684 204.341895L512.458105 134.736842l-92.213894 72.730947-4.796632 3.853474 97.010526 77.338948 97.333895-77.338948-9.054316-6.979368z m334.551579 269.958737l-423.073684 333.608421-422.804211-333.41979L26.947368 524.665263l485.268211 382.625684 485.537684-382.841263-62.464-50.149052z m-423.073684 27.055157l-230.238316-181.517473-62.437052 50.149052 292.648421 230.777264 292.944842-230.992843-62.437053-50.149052-230.480842 181.733052zM2421.544421 884.951579h89.519158v46.511158H2043.688421V884.951579h75.075368l-48.855578-285.399579-1.212632-7.033263 7.06021-1.158737 32.606316-5.335579 6.925474-1.131789 1.185684 6.925473 50.202948 293.133474h77.069473V531.402105h-225.064421V484.837053h225.091369v-153.519158h-150.069895V284.779789h353.28v46.538106H2290.957474v153.519158h251.850105v46.538105h-251.850105v353.549474h82.674526l50.176-293.133474 1.185684-6.925474 6.952421 1.13179 32.606316 5.335579 7.033263 1.158736-1.212631 7.006316-48.828632 285.426527z m-661.827368-15.171368v-227.84H1875.348211v-246.137264H1828.109474v199.599158h-68.392421V381.305263H1712.478316v214.096842H1645.136842v-199.599158H1597.898105v246.137264h114.607158v227.84h-67.368421V673.226105H1597.898105V916.318316h277.450106V673.226105H1828.109474v196.554106h-68.392421z m-394.34779-227.813053l-33.414737 32.794947-4.931368 4.850527-4.958316-4.850527-23.417263-22.851368-5.173895-5.066105 5.173895-5.066106 66.721684-65.482105v-271.629474h-58.287158V258.155789h58.287158V134.736842H1412.608v123.418947h68.176842v46.538106h-68.176842v225.253052l39.585684-38.831158 4.958316-4.850526 4.958316 4.850526 23.390316 22.851369 5.173894 5.039158-5.173894 5.093052-72.892632 71.518316v100.540632a517.658947 517.658947 0 0 1-21.288421 145.893052c-8.218947 27.863579-16.384 48.154947-22.797474 61.224421l-7.221894 14.551579-3.125895 6.224843-6.278737-2.991158-29.696-14.120421-6.467368-3.098948 3.152842-6.467368 7.194947-14.551579c1.024-2.074947 3.395368-7.383579 6.197895-14.362948 4.581053-11.533474 9.216-24.737684 13.527579-39.343157 12.234105-41.714526 19.563789-86.608842 19.563789-132.958316v-54.164211z m151.14779 278.474105l1.401263-6.871579 3.287579-15.898947c19.725474-95.312842 27.109053-302.349474 26.246737-554.415158h341.126736V134.736842H1497.680842l0.161684 7.248842 0.377263 16.518737a11088.896 11088.896 0 0 1 1.509053 303.831579c-1.832421 200.218947-9.539368 352.202105-24.818526 426.037895l-3.260632 15.898947-1.42821 6.979369 7.006315 1.374315 32.390737 6.467369 6.898527 1.347368z m30.800842-623.723789l-1.536-115.442527H1841.313684v115.442527H1547.317895z m980.506947 48.559158l4.769684-5.066106 22.447158-23.767579 4.958316-5.254736-5.389474-4.850527-187.553684-169.768421L2362.341053 134.736842h-195.988211l-4.769684 1.832421-187.553684 169.768421-5.362527 4.850527 4.985264 5.254736 22.393263 23.767579 4.769684 5.066106 5.146947-4.661895 178.068211-159.33979h160.633263l178.041263 159.33979 5.146947 4.661895z" fill="#006CFF" p-id="4281"></path></svg>'
        },
        link:'https://juejin.cn/user/3350967172726846'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 水煮鱼(webszy)'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },
  }
})
