import React from 'react'
import { Cmd } from './index'
import './index.scoped.sass'

function template({ selectedId, commands, onChange, select, del, add }) {

  return (
    <div className="container">
      {typeof selectedId === 'number' &&
        <div className="input-container">
          <input
            placeholder='command'
            type="text"
            value={commands[selectedId]?.command}
            onChange={(e) => onChange('command', e)} />
          <input
            placeholder='description'
            type="text"
            value={commands[selectedId]?.description}
            onChange={(e) => onChange('description', e)} />
        </div>
      }

      <ul>
        {commands.map((cmd: Cmd) =>
          <li
            className={selectedId === cmd.id ? 'active' : ''}
            key={cmd.id}
            onClick={() => select(cmd.id)}>
            <span> {cmd.command} </span>
            <span> {cmd.description} </span>
            <button className="btn-delete" onClick={() => del(cmd.id)}>del</button>
          </li>
        )}
      </ul>

      <button onClick={add}>add</button>

    </div>
  )
}

export default template
