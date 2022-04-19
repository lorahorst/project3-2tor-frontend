import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';
import Embed from '@editorjs/editorjs';


const editor = new EditorJS({
    holderId : 'editorjs',

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

