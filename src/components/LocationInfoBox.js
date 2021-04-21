import React from 'react'
import { motion } from 'framer-motion'

export default function LocationInfoBox({ info, setLocationInfo }) {
    return (
        <motion.div className="location-info" onClick={() => setLocationInfo(null)}
            animate={{ x: -40 }}>
            <motion.div animate={{ opacity: 1 }}>
                <h2>Event Location Info</h2>
                <ul>
                    <li>ID: <strong>{info.id}</strong></li>
                    <li>TITLE: <strong>{info.title}</strong></li>
                    <li>LATITUDE: <strong>{info.lat}</strong></li>
                    <li>LONGTITUDE: <strong>{info.lng}</strong></li>
                </ul>
            </motion.div>
        </motion.div>
    )
}
