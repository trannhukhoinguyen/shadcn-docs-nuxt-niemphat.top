export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Một Niệm Vãng Sanh',
      description: 'Tín - Nguyện - Hành',
      ogImage: '/tin-nguyen-hanh.png',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Một Niệm Vãng Sanh',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      darkModeToggle: true,
      nav: [
        {
          title: 'Hòa thượng',
          links: [
            {
              title: 'HÒA THƯỢNG HƯ VÂN',
              to: '/hu-van-nien-pho',
              target: '_self',
            },
            {
              title: 'LIÊN TÔNG THẬP TAM TỔ',
              to: '/lien-tong-thap-tam-to',
              target: '_self',
            },
            {
              title: 'HÒA THƯỢNG TỊNH KHÔNG',
              to: '/hoa-thuong-tinh-khong',
              target: '_self',
            },
            {
              title: 'THIỀN SƯ CHÍ CÔNG',
              to: '/thien-su-chi-cong',
              target: '_self',
            },
          ],
        },
        {
          title: 'Sách',
          links: [
            {
              title: 'TỦ SÁCH TỊNH ĐỘ',
              to: '/tu-sach-tinh-do',
              target: '_self',
            },
            {
              title: 'NIỆM PHẬT TÔNG YẾU',
              to: '/niem-phat-tong-yeu',
              description: '',
              target: '_self',
            },
            {
              title: 'THỌ KHANG BẢO GIÁM',
              to: '/tho-khang-bao-giam',
              description: '',
              target: '_self',
            },
            {
              title: 'LƯƠNG HOÀNG SÁM',
              to: '/luong-hoang-sam',
              description: '',
              target: '_self',
            },
            {
              title: 'SƠN AM TẠP LỤC',
              to: '/son-am-tap-luc',
              description: '',
              target: '_self',
            },
          ],
        },
        {
          title: 'Video',
          links: [
            {
              title: 'NHẬN THỨC PHẬT GIÁO',
              to: '/nhan-thuc-phat-giao',
              target: '_blank',
            },
            {
              title: 'TRĂM NĂM HƯ VÂN LÃO HÒA THƯỢNG',
              to: 'https://ph.tinhtong.vn/Home/Video/phim-tram-nam-hu-van-lao-hoa-thuong_00000f',
              description: '',
              target: '_blank',
            },
            {
              title: 'NIỆM PHẬT THÀNH PHẬT',
              to: '/niem-phat-thanh-phat',
              description: '',
              target: '_blank',
            },
          ],
        },
        {
          title: '48 NGUYỆN',
          to: '/48-nguyen-cua-duc-phat-a-di-da',
          target: '_blank',
        },
        {
          title: 'THAM TỔ SƯ THIỀN',
          to: 'https://patriarchalzen.quest/',
          target: '_blank',
        },
      ],
      links: [
        {
          icon: 'lucide:download',
          to: '/download-mp3',
          target: '_blank',
        },
        {
          icon: 'lucide:headphones',
          to: 'https://ph.tinhtong.vn/Home/MP3?p=MP3*-+PS+Tinh+Khong',
          target: '_blank',
        },
        {
          icon: 'lucide:film',
          to: 'https://ph.tinhtong.vn/Home/Videos',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {},
    toc: {
      enable: true,
      title: 'On This Page',
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
