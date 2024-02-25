// @ts-check
import { test, expect } from '@playwright/test'


const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

/*Test End to End*/

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph') //recupera de la pagina el parrafo <p>
  const image = await page.getByRole('img')      //recupera la imagen de la pagina

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({textContent, imageSrc})

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
});
 
