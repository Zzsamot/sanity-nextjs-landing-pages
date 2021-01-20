export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6007c6193434cf5d67aacee8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8cc2pwzb',
                  apiId: '28cf2543-6c5c-4b30-a6ea-c09d393fdae8'
                },
                {
                  buildHookId: '6007c619aedad96e475686c1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5nqb4ty4',
                  apiId: '8f32d47f-85b2-4a44-a1bb-0aa958386cec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Zzsamot/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5nqb4ty4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
