import React from 'react'
import { Icon } from '@iconify/react'
import locationIconWildfire from '@iconify/icons-mdi/fire-alert'
import locationIconVolcano from '@iconify/icons-mdi/mountain'

export default function LocationMarker({ lat, lng, onClick, eventCategory }) {

    return (
        <div className="location-marker" onClick={() => onClick()} >
            {eventCategory === "wildfires" ?
                <Icon icon={locationIconWildfire} className="location-icon" /> :
                <Icon icon={locationIconVolcano} className="location-icon" />}
        </div>
    )
}
