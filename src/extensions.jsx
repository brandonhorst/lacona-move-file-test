
/** @jsx createElement */
import { createElement, compile } from 'elliptical'
import { Command, File } from 'lacona-phrases'
import { runApplescript } from 'lacona-api'
 
export const Move = {
  extends: [Command],
 
  execute (result) {
    console.log('executing MyNewCommand')
    runApplescript({script: `display alert "${result}"`})
  },
 
  describe () {
    return (
            <sequence>
                <literal text='move ' category='action' id='verb' value='move' />
                <File id='sourcefile' />
                <literal text=' to ' category='conjunction' id='moveto' value />
                <File id='dest' />
            </sequence>
        )
    }
}
 
export default [Move]