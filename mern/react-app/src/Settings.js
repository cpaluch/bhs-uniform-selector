import React, { Component } from 'react'
import AddUniforms from './components/Settings/AddUniforms'

export class Settings extends Component {
    render() {
        return (
            <div className={styles.float_container}>
                <Header className={styles.headerWrapper}/>
                    <div className={styles.reportsPageComponentWrapper}>
                        <AddUniforms/>
                    </div>
                <Footer className={styles.footerWrapper}/>
            </div>
        )
    }
}

export default Settings
