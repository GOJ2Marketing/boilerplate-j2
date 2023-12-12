/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { sanityDeskStructure } from './sanityDeskStructure'
import { locate } from './sanityLocate'

const SANITY_STUDIO_PREVIEW_URL = (
	process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
)

export default defineConfig({
    basePath: '/admin',
    projectId,
    dataset,
    schema, // Add and edit the content schema in the './sanity/schema' folder
    plugins: [
        deskTool({ structure: sanityDeskStructure }),
        visionTool({ defaultApiVersion: apiVersion }),
        presentationTool({ previewUrl: SANITY_STUDIO_PREVIEW_URL, locate }),
    ],
})
