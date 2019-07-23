import React, { Component } from 'react';
import { View } from 'react-native';
import { getMetricMetaInfo } from '../utils/helpers';

class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }
    increment = () => {
        const { max, step } = getMetricMetaInfo(metric)
        this.setState(state => {
            const count = state[metric] + step
            return {
                ...state,
                [metric]: count > max ? max : count,
            }
        })
    }

    decrement = () => {
        this.setState(state => {
            const count = state[metric] - getMetricMetaInfo(metric).step
            return {
                 ...state,
                [metric]: count < 0 ? 0 : count,
            }
        })
    }
    slide = (metric, value) => {
        this.setState(state => ({
            [metric]: value,
        }))
    }

    render() {
        return (
            <View>
                {getMetricMetaInfo('bike').getIcon()}
            </View>
        )
    }
}

export default AddEntry;