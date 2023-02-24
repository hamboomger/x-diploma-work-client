import { scalesReadingsService } from '../lib/scales-readings/ScalesReadingsService'

export async function load () {
  const allLatestScalesReadings = await scalesReadingsService.getAllLatestScalesReadings()

  console.log({ allLatestScalesReadings })

  return {
    allLatestScalesReadings
  }
}