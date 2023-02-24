import * as dotenv from 'dotenv'
import { initializeApp } from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'

dotenv.config()

initializeApp({})

export const db = getFirestore()
export const scalesReadingsCollection = db.collection('scales-readings')
