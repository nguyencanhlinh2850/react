import {test, expect} from '@playwright/test'
import componentsConfig from '../../docs/public/storybook/index.json'
import {visit} from '../test-helpers/storybook'
import {themes} from '../test-helpers/themes'

type Component = {
  name: string
}

const {entries} = componentsConfig

test.describe('@aat', () => {
  for (const [id, entry] of Object.entries(entries as Record<string, Component>)) {
    const {name} = entry
    test.describe(id, () => {
      for (const theme of themes) {
        test.describe(theme, () => {
          test(name, async ({page}) => {
            await visit(page, {
              id: id,
              globals: {
                colorScheme: themes[0],
              },
            })
            await expect(page).toHaveNoViolations()
          })
        })
      }
    })
  }
})
