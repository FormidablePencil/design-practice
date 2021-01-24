import { useState } from 'react'
import template from './template';

export interface Cmd {
  id: number
  command: string
  description: string
}

const defaultCommands: Cmd[] = [
  { id: 0, command: 'c', description: 'write letter c' },
  { id: 1, command: 'v', description: 'write letter v' },
  { id: 2, command: 'b', description: 'write letter b' },
]

function CommandsLearn() {
  const [commands, setCommands] = useState<Cmd[]>(defaultCommands);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const newCommand = () => {
    let emptyCommand: Cmd = { id: 0, command: '', description: '' }
    if (!commands[0]) return emptyCommand
    emptyCommand.id = commands[commands.length - 1].id + 1
    return emptyCommand
  }
  
  const onChange = (cmd, { target: { value } }) => setCommands(prev =>
    prev.map(cmds => cmds.id === selectedId ? { ...cmds, [cmd]: value } : cmds))

  const select = (id) => setSelectedId(id)
  const del = (id) => setCommands(prev => prev.filter(cmd => cmd.id !== id))
  const add = () => setCommands(prev => ([...prev, newCommand()]))


  return template({ selectedId, commands, onChange, select, del, add })
}

export default CommandsLearn
