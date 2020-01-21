export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e278e76f9239fa9f15e4a78',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-styleguide-studio',
                  apiId: '69101a7f-6d64-4fa2-afbd-13b8e4b3fe68'
                },
                {
                  buildHookId: '5e278e768869dd86cea8e906',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-styleguide',
                  apiId: '1b6e3886-7f55-475f-b52c-a7680858e7e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joelisabeast/sanity-gatsby-styleguide',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-styleguide.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
