import { scalesReadingsCollection } from '../firebase'
import { ascend, groupBy, map, prop, sort, values } from 'ramda'

export interface ScalesReadings {
  id: string
  scaleId: string
  timestampMs: number
  weightGrams: number
}

const sortAscByTimestampMs = sort(ascend<ScalesReadings>(prop('timestampMs')))
const getListsByScaleId = (readings: ScalesReadings[]) => values(groupBy(prop('scaleId'), readings))

const getOnlyLatest = map((list: ScalesReadings[]) => sortAscByTimestampMs(list).at(-1)!)


class ScalesReadingsService {
  async getAllScalesReadings (): Promise<ScalesReadings[]> {
    const { docs } = await scalesReadingsCollection.get()
    return docs.map(doc => doc.data() as ScalesReadings)
  }

  async getAllLatestScalesReadings (): Promise<ScalesReadings[]> {
    const readings: ScalesReadings[] = await this.getAllScalesReadings()

    const grouped = getListsByScaleId(readings)

    return getOnlyLatest(grouped)
  }
}

export const scalesReadingsService = new ScalesReadingsService()