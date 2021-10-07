import React from 'react'
import UniformItem from './UniformItem'

const uniform = {
    type: 'Jacket',
    id: '61',
    size: 'large'
};
export default function UniformList({ uniforms }) {
    return (
        uniforms.map(uniform => {
            return <UniformItem uniform={ uniform }></UniformItem>
        })
    )
}
