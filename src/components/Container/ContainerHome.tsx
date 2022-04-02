import React from 'react'
import Collection from './Collection/Collection'
import Hoodie from './Hoodie/Hoodie'
import SeasonHome from './Season/Season'

type Props = {}

const ContainerHome = (props: Props) => {
    return (
        <>
            <Collection />
            <SeasonHome />
            <Hoodie />
        </>
    )
}

export default ContainerHome