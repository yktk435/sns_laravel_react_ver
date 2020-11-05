import React from 'react'
import RightAreaSetting from '../../containers/rightarea_setting'
import RightAreaDm from './dm'
import MessageArea from '../../containers/message'
import { Switch, Route } from 'react-router-dom';
import SearchArea from '../../containers/searcharea'
class RightArea extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/setting/:menu" component={RightAreaSetting} />
                <Route path="/dm/:id" component={MessageArea} />
                <Route path="/dm" component={RightAreaDm} />
                <SearchArea display={this.props.display} />
            </Switch>
        )
    }
}

export default RightArea