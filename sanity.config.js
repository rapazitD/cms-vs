import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nuxt-app-vs',

  projectId: '7ld6v94p',
  dataset: 'cms-nuxt-vs',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
