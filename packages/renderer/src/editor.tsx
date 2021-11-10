import React from 'react';
import { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'
import './editor.css'

interface Props {

}

const Editor: React.FC<Props> = (props) => {
	const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
		initialDoc: 'Hello, World!',
		onChange: () => {}
	})

	useEffect(() => {
		if (editorView){
				
		}
	}, [editorView])

	return <div className='editor-wrapper' ref={refContainer}>Editor</div>
}

export default Editor
