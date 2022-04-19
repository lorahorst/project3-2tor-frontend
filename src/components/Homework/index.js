import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';
import Embed from '@editorjs/editorjs';
import {React, useEffect, useRef} from 'react';

const EDITTOR_HOLDER_ID = 'editorjs';

const editor = new EditorJS({

    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },
        list: { 
            class: List, 
            inlineToolbar: true 
        },
        embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true
            }}
        },
        }
})

export function Homework( {
    return (
        <div id={EDITTOR_HOLDER_ID}> </div>
    )
});